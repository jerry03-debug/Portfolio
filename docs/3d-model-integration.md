# Modèle 3D fluide : implémentation de référence à répliquer

À passer tel quel à l'assistant qui travaille sur **jaypic**, où un modèle
d'appareil photo crashe par moments sur mobile, met longtemps à charger et
s'affiche mal.

Ce document décrit une intégration React Three Fiber qui, elle, ne pose aucun de
ces problèmes : le modèle 3D du portfolio de Diéry Dia (une scène de bureau avec
écran), fluide sur tous les appareils testés depuis sa mise en ligne. Le code
donné ici est celui qui tourne en production, pas un exemple théorique.

---

## 1. Le fait contre-intuitif à lire en premier

Le premier réflexe face à un modèle qui crashe est d'accuser son poids. **Ce
n'est presque jamais la bonne piste**, et ce projet le démontre. Voici ce que le
modèle de référence embarque, mesuré sur les fichiers réels :

| Mesure | Modèle de référence (fluide) |
|---|---|
| Poids total | **15 Mo** |
| Triangles | 86 272 |
| Vertices | 88 539 |
| Meshes (= appels de rendu) | **685** |
| Nœuds dans le graphe | 1 514 |
| Matériaux | 86 |
| Textures | **51** |
| Plus grosse texture | **3840 × 2160** JPEG (2,9 Mo) |
| Compression géométrie | **aucune** (pas de Draco) |
| Compression texture GPU | **aucune** (pas de KTX2/Basis) |

Ce modèle viole à peu près toutes les recommandations d'optimisation web
existantes. Une texture 4K seule occupe environ 44 Mo de VRAM une fois
décompressée avec ses mipmaps. Et pourtant : aucun crash, aucun glitch.

**Conclusion à retenir pour jaypic** : si l'appareil photo est plus léger que ça
et qu'il crashe quand même, le problème n'est pas dans le fichier `.gltf`. Il est
dans la configuration du canvas, dans le cycle de montage du composant, ou dans
la version de `three`. Commencer par optimiser le modèle serait perdre du temps
sur le mauvais suspect.

Mesurer d'abord l'équivalent côté jaypic, pour comparer sur les mêmes bases :

```bash
du -sh public/<dossier-du-modele>
node -e "
const g=require('./public/<dossier>/scene.gltf');
let t=0; for(const m of g.meshes||[]) for(const p of m.primitives||[])
  t+=g.accessors[p.indices].count/3;
console.log('triangles', Math.round(t), '| meshes', g.meshes.length,
            '| images', (g.images||[]).length, '| nodes', g.nodes.length);
"
```

---

## 2. Les versions

```
react                  18.2.0
three                  0.152.2
@react-three/fiber     8.12.1
@react-three/drei      9.65.3
```

**C'est le premier point à vérifier sur jaypic, avant tout le reste.** R3F 8.x est
apparié à `three` 0.15x. La version 0.152 de `three` est précisément celle où la
gestion des espaces colorimétriques a changé (`outputEncoding` → `outputColorSpace`,
`sRGBEncoding` → `SRGBColorSpace`). Un projet qui installe un `three` récent
(0.16x, 0.17x) en gardant R3F 8 se retrouve avec des matériaux délavés, trop
sombres, ou carrément noirs — exactement le « rendu bizarre » décrit. C'est une
incompatibilité silencieuse : rien ne plante, l'image est simplement fausse.

```bash
npm ls three @react-three/fiber @react-three/drei
```

Si les versions ne sont pas appariées, corriger ça **et re-tester avant de
chercher plus loin**. C'est l'hypothèse la plus probable pour un rendu incorrect.

---

## 3. Le code de référence, tel qu'il tourne

### 3.1. Le composant du modèle et son canvas

```jsx
// src/components/canvas/Computers.jsx
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3.4, -2.2] : [0, -2.75, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => setIsMobile(event.matches)
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }, [])

  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas
```

Deux réserves d'honnêteté sur ce code, pour que l'assistant qui le reprend ne
recopie pas les défauts :

- `<mesh>` sert ici de conteneur alors que `<group>` est le nœud prévu pour ça.
  Un `mesh` sans géométrie ni matériau fonctionne, mais c'est un abus. Utiliser
  `<group>` sur jaypic.
- `preserveDrawingBuffer: true` n'est utile que pour faire un
  `canvas.toDataURL()`. Il immobilise le tampon de dessin en mémoire GPU sans
  contrepartie ici. **Ne pas le recopier sur jaypic**, sauf capture d'écran
  réelle.

### 3.2. Le fallback de chargement

Le contenu d'un `<Canvas>` est de la 3D, pas du DOM : y mettre un `<div>` est
invalide. Le composant `<Html>` de drei projette un nœud DOM au-dessus du canvas :

```jsx
// src/components/Loader.jsx
import { Html } from '@react-three/drei'

const Loader = ({ shape = 'screen' }) => (
  <Html center>
    <div role="status" aria-label="Chargement en cours"
         className={`canvas-skeleton canvas-skeleton--${shape}`}>
      <div className="canvas-skeleton__screen" />
      <div className="canvas-skeleton__stand" />
      <div className="canvas-skeleton__base" />
    </div>
  </Html>
)

export default Loader
```

Un skeleton plutôt qu'un pourcentage : `useProgress()` de drei existe, mais il
est **global à l'application**, pas par canvas. Avec plusieurs canvas sur la page,
le pourcentage affiché mélange tous les chargements en cours et donne un compteur
qui saute, ce qui fait paraître le chargement plus long qu'il ne l'est.

### 3.3. Le montage dans la page

```jsx
// src/components/Hero.jsx
<section className="relative w-full h-screen mx-auto">
  <div className="...absolute inset-0 top-[100px]">{/* titre */}</div>
  <ComputersCanvas />
</section>
```

Le canvas remplit un conteneur `h-screen`, une hauteur fixe connue avant le
chargement. Voir le point 4.5 : c'est plus important qu'il n'y paraît.

---

## 4. Les neuf choix qui rendent ça fluide

C'est la liste à comparer, ligne à ligne, avec ce que fait jaypic.

**4.1. `dpr` n'est jamais passé à la main.** R3F 8 applique `[1, 2]` par défaut.
Le framebuffer est dimensionné en `taille CSS × dpr` : un téléphone à
`devicePixelRatio = 3` rend 9 fois plus de pixels qu'à dpr 1, à 4 c'est 16 fois.
Passer `dpr={window.devicePixelRatio}` en croyant bien faire est une des façons
les plus rapides de faire crasher un mobile. **Ne rien passer est plus sûr que de
passer mal.**

**4.2. Le modèle n'est monté qu'une seule fois, et jamais démonté.** Le hero est
rendu inconditionnellement, il n'est ni dans une route, ni dans un onglet, ni
derrière un `&&`. Aucun cycle montage/démontage, donc aucune accumulation de
buffers GPU. Sur jaypic, vérifier si le canvas de l'appareil photo est monté et
démonté au scroll, au changement de route, ou dans un carrousel : c'est un
générateur de fuites mémoire et de contextes perdus.

**4.3. `<Preload all />` est présent.** Il compile les shaders et téléverse les
textures au GPU avant le premier affichage. Sans lui, la compilation se fait à la
première frame visible : le modèle apparaît, puis l'onglet se fige une à
plusieurs secondes. Ça ressemble à un crash sans en être un. Avec 86 matériaux
comme ici, c'est la différence entre fluide et injouable.

**4.4. Le `<Suspense>` enveloppe tout ce qui charge.** Rien de la scène n'est
rendu tant que le glTF n'est pas complètement chargé et parsé. Il n'existe pas
d'état intermédiaire où une moitié du modèle s'affiche sans ses textures — donc
pas de « rendu bizarre » transitoire.

**4.5. Le canvas a une taille définie avant le chargement.** `h-screen` sur le
conteneur. Si le canvas est dans un conteneur dont la hauteur dépend de son
contenu, il démarre à 0 px de haut, WebGL s'initialise sur un framebuffer nul, et
le redimensionnement post-chargement provoque une réallocation complète. Sur
Safari iOS c'est un déclencheur de perte de contexte connu. **Toujours une
hauteur explicite ou un `aspect-ratio` sur le conteneur du canvas.**

**4.6. La caméra est bridée sur un seul axe.**

```jsx
maxPolarAngle={Math.PI / 2}
minPolarAngle={Math.PI / 2}
```

Angle polaire verrouillé à l'horizontale : l'utilisateur ne peut tourner
qu'autour du modèle, jamais passer dessus ou dessous. Ça évite d'exposer les
faces arrière non texturées, les normales inversées et les trous de géométrie que
tout modèle téléchargé possède quelque part. Beaucoup de « rendus bizarres »
signalés par des utilisateurs sont simplement un modèle vu sous un angle que son
auteur n'a jamais prévu. `enableZoom={false}` complète : impossible d'entrer dans
la géométrie ni de partir à l'infini.

**4.7. Aucun `useFrame` sur le modèle.** Pas de code JavaScript exécuté à chaque
frame sur cette scène. La seule animation est celle qu'OrbitControls produit sous
le doigt de l'utilisateur.

**4.8. L'éclairage est minimal et une seule lumière projette des ombres.** Un
`hemisphereLight`, un `pointLight`, un `spotLight`. Seul le spot a `castShadow`,
avec une shadow map de 1024². Chaque lumière projetante ajoute un rendu complet
de la scène par frame : à trois lumières à ombres, on rend la scène quatre fois.

**4.9. Le glTF est servi en statique depuis `public/`, pas importé par le
bundler.** `useGLTF('./desktop_pc/scene.gltf')` déclenche des requêtes HTTP
normales, mises en cache par le navigateur et parallélisées entre les 51 textures.
Passer un modèle de 15 Mo dans le bundler le ferait transiter par la chaîne de
build et gonflerait le JS.

⚠️ **Piège associé** : le `./` est relatif à l'URL de la page, pas à la racine du
site. Ça marche sur `/`, mais sur `/projets/mon-projet` le navigateur ira chercher
`/projets/desktop_pc/scene.gltf`, recevra le HTML de la page 404, et le parser
glTF échouera avec un message incompréhensible. **jaypic étant un portfolio
multi-pages, c'est un candidat sérieux si le modèle ne charge pas sur certaines
routes** : écrire `/mon-modele/scene.gltf` avec un slash initial.

---

## 5. Les trois symptômes de jaypic, par cause probable

### « Ça crashe parfois sur mobile »

Le mot important est *parfois* : ça désigne une limite de ressources qu'on frôle,
pas un bug déterministe. Dans l'ordre :

1. **`dpr` passé explicitement** → voir 4.1. Vérifier en premier, correction d'une
   ligne.
2. **Le canvas est monté/démonté** au scroll ou au changement de route → voir 4.2.
   La mémoire GPU monte à chaque cycle jusqu'au crash, ce qui explique le
   « parfois » : ça dépend du temps passé sur la page.
3. **Plusieurs `<Canvas>` sur la même page.** Chaque canvas = un contexte WebGL,
   et Safari iOS en tolère peu (~8). À noter honnêtement : **le portfolio de
   référence en monte 13** — dix pour les icônes de technos, plus le hero, le
   globe et les étoiles — et reste fluide. Donc ce n'est pas fatal en soi, et
   c'est une piste à ouvrir seulement après les deux premières. Compter avec
   `document.querySelectorAll('canvas').length`.
4. **VRAM des textures.** Une texture est décompressée en mémoire à sa taille
   brute : 4096² en RGBA = 64 Mo, mipmaps compris ~85 Mo. Deux ou trois textures
   4K suffisent à faire tomber un téléphone d'entrée de gamme. Réduire à 2048²
   avant d'envisager quoi que ce soit de plus sophistiqué.
5. **`shadows` actif sur mobile** → `<Canvas shadows={!isMobile}>`.

### « Ça met longtemps à charger »

1. **Poids réel et nombre de requêtes.** Onglet Réseau des devtools, filtre sur le
   dossier du modèle. La référence charge 15 Mo en 53 fichiers sans que ce soit un
   problème sur une connexion correcte — si jaypic est plus lent avec moins, c'est
   la latence ou le nombre de requêtes, pas le poids.
2. **Pas de `<Preload all />`** → voir 4.3. Le temps perçu comme « chargement » est
   souvent en fait la compilation des shaders, après le téléchargement.
3. **Aucun retour visuel.** Un chargement de 4 secondes avec un skeleton est
   acceptable ; les mêmes 4 secondes sur un écran vide sont perçues comme un bug.
   Voir 3.2 — c'est souvent le correctif au meilleur rapport effort/effet.
4. **Alors seulement, optimiser le fichier :**
   ```bash
   npx gltf-transform optimize entree.glb sortie.glb \
     --compress draco --texture-compress webp
   ```
   Draco divise typiquement la géométrie par 5 à 10. Attention : il faut alors
   `useGLTF(url, true)` pour activer le décodeur Draco côté client.

### « Ça s'affiche bizarrement »

C'est le symptôme le plus diagnostique, parce que ses causes sont peu nombreuses
et très typées. Décrire précisément *comment* c'est bizarre oriente directement :

| Ce qu'on voit | Cause quasi certaine |
|---|---|
| Couleurs délavées, ou tout trop sombre | Versions `three` / R3F non appariées, gestion `colorSpace` cassée → section 2 |
| Modèle entièrement noir | Aucune lumière dans la scène, ou matériau `MeshStandardMaterial` sans lumière |
| Surfaces qui clignotent, se chevauchent | Z-fighting : rapport `near`/`far` de la caméra trop large. `near: 0.1, far: 200` est bon ; `near: 0.001, far: 10000` est fatal sur mobile, dont le buffer de profondeur est souvent 16 bits contre 24 sur desktop |
| Faces manquantes, on voit à travers | Normales inversées à l'export, ou caméra passant derrière la géométrie → brider les angles, voir 4.6 |
| Bandes / artefacts sur les surfaces | Précision des shaders en `mediump` sur mobile, aggravée par de grandes valeurs de coordonnées. Recentrer le modèle sur l'origine dans Blender |
| Transparences dans le mauvais ordre | Tri des faces transparentes ; définir `depthWrite: false` sur les matériaux concernés |

Le z-fighting mérite une mention spéciale : c'est **le** glitch qui se manifeste
sur mobile en épargnant le desktop, parce que la précision du buffer de profondeur
y est deux fois moindre. Si le rendu bizarre de jaypic ne se voit que sur
téléphone, regarder `near` et `far` de la caméra avant tout le reste.

---

## 6. Ordre d'exécution recommandé pour jaypic

1. `npm ls three @react-three/fiber @react-three/drei` — apparier les versions.
2. Relever les chiffres du modèle avec le script de la section 1, et les comparer
   au tableau de référence.
3. Retirer tout `dpr` passé explicitement au `<Canvas>`.
4. Vérifier que le conteneur du canvas a une hauteur explicite.
5. Ajouter `<Preload all />` et un fallback `<Html>` dans le `<Suspense>`.
6. Vérifier `near` / `far` de la caméra si le rendu est bizarre uniquement sur
   mobile.
7. Brider `minPolarAngle` / `maxPolarAngle` et `enableZoom={false}`.
8. Vérifier que le canvas n'est pas monté/démonté au fil de la navigation.
9. `shadows={!isMobile}`.
10. **En dernier seulement** : optimiser le fichier `.gltf`.

Les points 1 à 7 se font en moins d'une heure et couvrent la grande majorité des
cas. Le point 10 est celui par lequel on commence instinctivement et c'est
presque toujours une erreur de priorisation.

---

## 7. Comment obtenir une vraie console sur mobile

Sans console distante, on cherche à l'aveugle : les messages « Too many active
WebGL contexts » et « Context Lost » ne remontent nulle part ailleurs.

- **iPhone** : brancher en USB, Safari sur Mac › Développement › [appareil]. Il
  faut avoir activé Réglages › Safari › Avancé › Inspecteur Web sur le téléphone.
- **Android** : `chrome://inspect` sur le desktop, débogage USB activé.
- **Vérifier l'accélération matérielle** : `chrome://gpu`. Si le rendu bascule sur
  SwiftShader (rendu logiciel), c'est lent au point de ressembler à un crash.
- **Simuler une perte de contexte** pour tester la robustesse :
  ```js
  const ext = document.querySelector('canvas')
    .getContext('webgl').getExtension('WEBGL_lose_context')
  ext.loseContext()   // puis ext.restoreContext()
  ```
- **Gérer la perte de contexte**, qui arrive même sur une page bien dimensionnée
  (onglet en arrière-plan, veille, bascule de GPU) :
  ```jsx
  <Canvas onCreated={({ gl }) => {
    gl.domElement.addEventListener('webglcontextlost', (e) => {
      e.preventDefault()  // sans ça, la restauration est impossible
      console.warn('Contexte WebGL perdu')
    })
  }}>
  ```

---

## 8. Checklist de revue

- [ ] `three`, `@react-three/fiber`, `@react-three/drei` sur des versions appariées
- [ ] `dpr` absent du `<Canvas>` (défaut `[1, 2]`), jamais `window.devicePixelRatio`
- [ ] Conteneur du canvas avec une hauteur explicite
- [ ] `<Preload all />` présent
- [ ] `<Suspense>` autour de tout ce qui charge, fallback en `<Html>` de drei
- [ ] Canvas monté une seule fois, pas de cycle montage/démontage
- [ ] `near` / `far` de la caméra resserrés (ordre de grandeur `0.1` / `200`)
- [ ] `minPolarAngle` / `maxPolarAngle` bridés, `enableZoom={false}`
- [ ] `shadows` désactivé sur mobile, une seule lumière avec `castShadow`
- [ ] `preserveDrawingBuffer` absent, sauf capture d'écran réelle
- [ ] `<group>` et non `<mesh>` comme conteneur de scène
- [ ] Chemin du modèle avec slash initial si l'app a plusieurs routes
- [ ] Tableau de dépendances sur le `useEffect` du `matchMedia`
- [ ] `webglcontextlost` écouté
