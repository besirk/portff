import React from 'react'
import { Feature } from '../../components';
import './features.css';

    const featuresData = [
    {
      title: 'Improvising',
      text: 'loermLorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, enim voluptas iste totam,'
    },
    {
      title: 'Become the tend active',
      text: 'loermLorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, enim voluptas iste totam,'
    },
    {
      title: 'Message or nothing',
      text: 'loermLorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, enim voluptas iste totam,'
    },
    {
      title: 'Message or nothing',
      text: 'loermLorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, enim voluptas iste totam,'
    }]
const Features = ({title,text}) => {
  return (
    <div className="modern__features section__padding" id='features'>
        <div className='modern__features-heading'>
          <h1 className='gradient__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, enim voluptas iste totam, doloribus sit id necessitatibus numquam .</h1>
          <p>Request Early Access To Get Started</p>
        </div>
        <div className='modern__features-container'>
          {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
    </div>
  )
}

export default Features