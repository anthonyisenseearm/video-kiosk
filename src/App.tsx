import { useSignal, useSignals } from '@preact/signals-react/runtime'
import { Signal } from '@preact/signals-react'
import './App.css'
import type { ReactElement } from 'react'
import { newVimeoEmbeds } from './vimeoEmbeds'
import { ARMLogo } from './ARMLogo'
import Player from '@vimeo/player'

type ModalOptions = {
  content: ReactElement,
  isActive: boolean,
  onClickClose: Function
}

function Modal({ content, isActive, onClickClose }: ModalOptions) {

  return (
    <>
      <div className={`modal ${isActive ? 'is-active' : ""}`}>
        <div className="modal-background" onClick={() => onClickClose()}></div>
        <div className="modal-content" style={{ width: "80rem" }}>
          {content}
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={() => onClickClose()}></button>
      </div>
    </>
  )

}

function App() {

  useSignals()

  const mediaModalActiveIndex: Signal<number | undefined> = useSignal()
  const vimeoPlayer: Signal<any> = useSignal()

  function openMediaModal(embedIndex: number): void {
    mediaModalActiveIndex.value = embedIndex
    const vimeoIFrame: HTMLIFrameElement | null = document.querySelector(`.modal-${embedIndex} iframe`)
    console.log(vimeoIFrame)
    if (vimeoIFrame !== null) {
      vimeoPlayer.value = new Player(vimeoIFrame)
      vimeoPlayer.value.setCurrentTime(0)
      vimeoPlayer.value.play()
      vimeoPlayer.value.on('ended', () => {
        closeMediaModal()
      })
    }
  }

  function closeMediaModal(): void {
    mediaModalActiveIndex.value = undefined
    vimeoPlayer.value.pause()
    vimeoPlayer.value = undefined
  }

  return (
    <>
      <div className="p-6 is-flex is-flex-direction-column is-justify-content-space-around" style={{ minHeight: "100vh" }}>
        <div className="is-flex is-justify-content-center" style={{ minHeight: "15vh" }}>
          <ARMLogo />
          <div className="is-flex is-flex-direction-column is-justify-content-center">
            <div className="content ml-5">
              <h1>Adventist Risk Management<sup>®</sup>, Inc.</h1>
              <p className='subtitle'>Tap any of the cards below to watch a video!</p>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center	">
              {newVimeoEmbeds.map((vimeoEmbed, index) =>
                <div className='m-4' onClick={() => openMediaModal(index)} style={{ cursor: "pointer" }} key={index}>
                  <div className="box is-flex is-flex-direction-column is-justify-content-space-between" style={{ minHeight: "100%", maxWidth: "19rem" }}>
                    <div className="content">
                      <figure className="is-16by9">
                        <img src='https://bulma.io/assets/images/placeholders/640x360.png'></img>
                      </figure>
                      <h3>{vimeoEmbed.title}</h3>
                      {vimeoEmbed.description}
                    </div>
                    <div className="buttons is-centered">
                      <button className="button is-success">Watch Video</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='is-flex is-flex-direction-column is-justify-content-center' style={{ minHeight: "15vh" }}>
          <div className="content has-text-centered has-text-grey">
            <p>&copy; {new Date().getFullYear()} Adventist Risk Management<sup>®</sup>, Inc.</p>
          </div>
        </div>
      </div>
      {newVimeoEmbeds.map((vimeoEmbed, index) => <div className={`modal-${index}`} key={index}>
        <Modal
          isActive={index === mediaModalActiveIndex.value}
          onClickClose={closeMediaModal}
          content={vimeoEmbed.element}
        />
      </div>)}
    </>
  )

}

export default App
