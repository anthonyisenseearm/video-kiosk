import { useSignal, useSignals } from '@preact/signals-react/runtime'
import { Signal } from '@preact/signals-react'
import './App.css'
import type { ReactElement } from 'react'

const vimeoEmbeds = [
  <iframe title="vimeo-player" src="https://player.vimeo.com/video/950060620?h=e40cf979c5" width="640" height="360"></iframe>,
  <iframe title="vimeo-player" src="https://player.vimeo.com/video/936429453?h=6782698888" width="640" height="360"></iframe>,
  <iframe title="vimeo-player" src="https://player.vimeo.com/video/895947404?h=29b1c7259d" width="640" height="360"></iframe>
]

function App() {

  useSignals()

  console.log(vimeoEmbeds)

  const mediaModalIsActive: Signal<boolean> = useSignal(false)
  const mediaModalVimeoEmbed: Signal<ReactElement> = useSignal(<></>)

  function openMediaModal(embed: ReactElement): void {
    mediaModalVimeoEmbed.value = embed
    mediaModalIsActive.value = true
  }

  function closeMediaModal(): void {
    mediaModalVimeoEmbed.value = <></>
    mediaModalIsActive.value = false
  }

  return (
    <>
      <section className="section">
        <div className="content">
          <h1>Video Kiosk</h1>
        </div>
      </section>
      <section className="section">
        <div className="grid">
          {vimeoEmbeds.map((embed, index) => <>
            <div className='cell'>
              <div className="box">
                <div className="content">
                  <h3>Video {index}</h3>
                  <button className="button" onClick={() => openMediaModal(embed)}>View</button>
                </div>
              </div>
            </div>
          </>)}
          <div className="cell"></div>
        </div>
      </section>
      <div className={`modal ${mediaModalIsActive.value && 'is-active'}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          {mediaModalVimeoEmbed.value}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={closeMediaModal}></button>
      </div>
    </>

  )

}

export default App
