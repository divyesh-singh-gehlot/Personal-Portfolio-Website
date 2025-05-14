import React from 'react'

import InfiniteMenu from '../Components/InfiniteMenu'
import ScrollFloat from '../Components/ScrollFloat';



const Projects = () => {

    const items = [
  {
    image: 'https://www.shutterstock.com/image-vector/support-icon-can-be-used-600nw-1887496465.jpg',
    link: 'https://connectify-zn4n.vercel.app/',
    title: 'Project 1',
    description: 'Connectify - Chatroom Webapp'
  },
  {
    image: 'https://images.wondershare.com/virbo/article/2024/06/text-to-speech-app-android-1.jpg',
    link: 'https://github.com/divyesh-singh-gehlot/Text-To-Speech-App',
    title: 'Project 2',
    description: 'Text-To-Speech App'
  },
  {
    image: 'https://images.pexels.com/photos/9212878/pexels-photo-9212878.jpeg?cs=srgb&dl=pexels-dbaler-9212878.jpg&fm=jpg',
    link: 'https://supranation.vercel.app/',
    title: 'Project 3',
    description: 'Supra Landing Page'
  },
  {
    image: 'https://help.apple.com/assets/66EB2D93D8C3BD635E04A0A9/66EB2D97D8C3BD635E04A0AF/en_US/5250122ee560cee90b3d7cfa2d91695e.png',
    link: 'https://calculator-pi-hazel-21.vercel.app/',
    title: 'Project 4',
    description: 'Calculator'
  },
  {
    image: 'https://wp.flatirons.com/wp-content/uploads/2024/03/150.-best-code-editor-scaled.jpg',
    link: 'https://code-editor-iota-teal.vercel.app/',
    title: 'Project 5',
    description: 'Live Code Editor'
  },
  {
    image: 'https://hulry.com/content/images/2024/07/apple-notes.png',
    link: 'https://github.com/divyesh-singh-gehlot/Notes-App-Backend',
    title: 'Project 6',
    description: 'Notes App Backend'
  },
];

  return (
    <div id='projects' className="w-full">
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=100%'
                scrollEnd='bottom bottom-=80%'
                stagger={0.03}
                textClassName="text-5xl sm:text-6xl md:text-7xl font-bold text-center mx-auto"
            >
                Projects
            </ScrollFloat>
            <div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
        </div>
  )
}

export default Projects
