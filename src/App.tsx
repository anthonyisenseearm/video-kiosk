import { useSignal, useSignals } from '@preact/signals-react/runtime'
import './App.css'

const vimeoEmbeds = [
  <iframe title="vimeo-player" src="https://player.vimeo.com/video/950060620?h=e40cf979c5" width="640" height="360" frameborder="0"    allowfullscreen></iframe>,
  <iframe title="vimeo-player" src="https://player.vimeo.com/video/936429453?h=6782698888" width="640" height="360" frameborder="0"    allowfullscreen></iframe>,
  <iframe title="vimeo-player" src="https://player.vimeo.com/video/895947404?h=29b1c7259d" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
]

function App() {

  useSignals()

  const modalPlayerIsVisible = useSignal(true)

  return (
    <>
      <section className="section">
        <div className="content">
          <h1>Video Kiosk</h1>
        </div>
      </section>
      <section className="section">
        <div className="grid">
          
        </div>
      </section>
      <div className={`modal ${modalPlayerIsVisible.value && 'is-active'}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          {vimeoEmbeds[0]}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={() => modalPlayerIsVisible.value = false}></button>
      </div>
    </>

  )

}

export default App
