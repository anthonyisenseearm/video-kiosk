import type { ReactElement } from "react"

type VimeoEmbed = {
  element: ReactElement,
  title: string,
  description: ReactElement,
  thumbnailHref: string
}

export const newVimeoEmbeds: Array<VimeoEmbed> = [
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/950060620?h=e40cf979c5" width="1280" height="720"></iframe>,
    title: "Aligning Your Assets with The Current Market",
    description: <p>The assets owned by the many ministries of the Seventh-day Adventist Church are vital to ministry. That is why thorough properties evaluation are crucial to determining the outcome of a property claim. And in a hard insurance market, it’s necessary to get it right. If you have questions or are looking for clarification, join Adventist Risk Management’s Joni Dreher-Smith, Claims Manager and Hunter Pettis, Risk Control Manager as they go over the tools you need most to help you align your assets with the current market.</p>,
    thumbnailHref: ""
  },
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/936429453?h=6782698888" width="1280" height="720"></iframe>,
    title: "The Human Factor of Cybersecurity",
    description: <p>Cybercriminals exploit and prey on their targets' emotions to gain access to carry out an attack. Thus, it’s critical to look at cybersecurity measures from the standpoint of human responsibility. The members of your organization are your best line of defense to protecting your ministry and its assets or your worst culprits. Join Darla Avendano, Senior Account Producer and Tony Vargas Vice President, CIO and CISO as they breakdown what every day cybersecurity looks like and how you can prevent and be prepared for an attack."</p>,
    thumbnailHref: ""
  },
  {
    element: <iframe title="vimeo-player" src="https://player.vimeo.com/video/895947404?h=29b1c7259d" width="1280" height="720"></iframe>,
    title: "Understanding the Insurability Project Checking Process",
    description: <p>Join Adventist Risk Management, Inc. President James Winegardner and Vice President for Client Care, David Fournier as they walk you through the ins and outs of ARM’s new Insurability checking process.<br/><br/>What does the project do exactly? How can it be accessed? Does it really work? Have these and many other questions answered during this important webinar.</p>,
    thumbnailHref: ""
  }
]
