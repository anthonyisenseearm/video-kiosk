import type { ReactElement } from "react"

type VimeoEmbed = {
  element: ReactElement,
  title: string,
  description: ReactElement,
  thumbnailHref: string
}

export const newVimeoEmbeds: Array<VimeoEmbed> = [
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/664815526" allow="autoplay"></iframe>,
    title: "Cyber Liability Insurance",
    description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis, amet consectetur temporibus, earum aperiam suscipit voluptatum natus quo in possimus.</p>,
    thumbnailHref: ""
  },
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/950060620?h=e40cf979c5" allow="autoplay"></iframe>,
    title: "Aligning Your Assets with The Current Market",
    description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis, amet consectetur temporibus, earum aperiam suscipit voluptatum natus quo in possimus.</p>,
    thumbnailHref: ""
  },
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/936429453?h=6782698888" allow="autoplay"></iframe>,
    title: "The Human Factor of Cybersecurity",
    description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis, amet consectetur temporibus, earum aperiam suscipit voluptatum natus quo in possimus.</p>,
    thumbnailHref: ""
  },
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/895947404?h=29b1c7259d" allow="autoplay"></iframe>,
    title: "Understanding the Insurability Check",
    description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis, amet consectetur temporibus, earum aperiam suscipit voluptatum natus quo in possimus.</p>,
    thumbnailHref: ""
  }
]
