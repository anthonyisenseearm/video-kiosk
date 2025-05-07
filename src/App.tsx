import { useSignal, useSignals } from '@preact/signals-react/runtime'
import { Signal } from '@preact/signals-react'
import './App.css'
import type { ReactElement } from 'react'
import { newVimeoEmbeds } from './vimeoEmbeds'
// import armLogo from './assets/arm-logo.svg'

type ModalOptions = {
  content: ReactElement,
  isActive: boolean,
  onClickClose: Function
}

function Modal({ content, isActive, onClickClose }: ModalOptions) {

  return (
    <>
      <div className={`modal ${isActive && 'is-active'}`}>
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

  function openMediaModal(embedIndex: number): void {
    mediaModalActiveIndex.value = embedIndex
  }

  function closeMediaModal(): void {
    mediaModalActiveIndex.value = undefined
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="content">
            {/* <img src={armLogo} alt="Adventist Risk Management, Inc. Logo" /> */}
            <h1>Adventist Risk Management, Inc.</h1>
            <p className='subtitle'>Tap any of the cards below to watch a video!</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="fixed-grid has-3-cols">
            <div className="grid">
              {newVimeoEmbeds.map((vimeoEmbed, index) => 
                <div className='cell' onClick={() => openMediaModal(index)} style={{ cursor: "pointer" }} key={index}>
                  <div className="box is-flex is-flex-direction-column is-justify-content-space-between" style={{ minHeight: "100%" }}>
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
            <div className="cell"></div>
          </div>
        </div>
      </section>
      {newVimeoEmbeds.map((vimeoEmbed, index) => <div key={index}>
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
