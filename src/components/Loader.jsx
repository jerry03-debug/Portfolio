import { Html } from '@react-three/drei'

// Skeleton affiché pendant le chargement des modèles 3D.
// `shape` cale la silhouette sur le modèle attendu : un écran pour la scène
// du hero, un disque pour le globe du contact et les balls de la section Tech.
const Loader = ({ shape = 'screen' }) => {
  return (
    <Html center>
      <div
        role='status'
        aria-label='Chargement en cours'
        className={`canvas-skeleton canvas-skeleton--${shape}`}
      >
        {shape === 'screen' ? (
          <>
            <div className='canvas-skeleton__screen' />
            <div className='canvas-skeleton__stand' />
            <div className='canvas-skeleton__base' />
          </>
        ) : (
          <div className='canvas-skeleton__disc' />
        )}
      </div>
    </Html>
  )
}

export default Loader
