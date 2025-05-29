import type { ReactElement } from "react"

type VimeoEmbed = {
  element: ReactElement,
  title: string,
  description: ReactElement,
  thumbnailHref: string
}

export const newVimeoEmbeds: Array<VimeoEmbed> = [
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/664815526" width="1280" height="720"></iframe>,
    title: "Cyber Liability Insurance",
    description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis, amet consectetur temporibus, earum aperiam suscipit voluptatum natus quo in possimus.</p>,
    thumbnailHref: ""
  },
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/950060620?h=e40cf979c5" width="1280" height="720"></iframe>,
    title: "Aligning Your Assets with The Current Market",
    description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis, amet consectetur temporibus, earum aperiam suscipit voluptatum natus quo in possimus.</p>,
    thumbnailHref: ""
  },
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/936429453?h=6782698888" width="1280" height="720"></iframe>,
    title: "The Human Factor of Cybersecurity",
    description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis, amet consectetur temporibus, earum aperiam suscipit voluptatum natus quo in possimus.</p>,
    thumbnailHref: ""
  },
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/895947404?h=29b1c7259d" width="1280" height="720"></iframe>,
    title: "Understanding the Insurability Process",
    description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis, amet consectetur temporibus, earum aperiam suscipit voluptatum natus quo in possimus.</p>,
    thumbnailHref: ""
  }
]
