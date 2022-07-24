import React from 'react'
import { Feature } from '../../components';
import './gpt3.css';
const Gpt3 = () => {
  return (
    <div className='modern__gpt3 section__margin' id='whpt3'>
      <div className='modern__gpt3-feature'>
        <Feature title='Hello World' text='lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, commodi'/>
      </div>
      <div className='modern__gpt3-heading'>
        <h1 className='gradient__text'>
          Modern AI
        </h1>
        <p>Explore The Library</p>

      </div>
      <div className='modern__gpt3-container'>
        <Feature title="Chatbots" text="asdas dasd asd aww awdwdawd awd asd w dasd asd asd asd "/>
        <Feature title="Knowledge" text=" hellow orld wadkjs kahs dlkashd asd khasd bkashdb lkjba sdklb"/>
        <Feature title="Education" text="Hello worsofk lns asdkj absdlkajsdb alksjdb alskj"/>
      </div>
    </div>
  )
}

export default Gpt3