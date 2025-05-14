import React from 'react'

import ScrollVelocity from '../Components/ScrollVelocity'
import Aurora from '../Components/Aurora'
import FeedbackForm from '../Components/FeedbackForm'



const Contact = () => {
    return (
        <div id='contact' className='py-20'>
            <div className='py-5'>
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={10.0}
                    amplitude={2.0}
                    speed={1.0}
                />
            </div>

            <ScrollVelocity
  texts={['Contact Me -']}
  velocity={80}
  stiffness={120}
  damping={20}
  className="custom-scroll-text"
/>


            <div>
                <FeedbackForm />
            </div>
        </div>
    )
}

export default Contact
