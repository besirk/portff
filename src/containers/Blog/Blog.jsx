import React from 'react';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css';
const Blog = () => {
  return (
    <div className="modern__blog section__padding" id='blog'>
      <div className="modern__blog-heading">
        <h1 className='gradient__text'>A lot is happening We Are Blogging about it.</h1> 
      </div>
      <div className="modern__blog-container">
        <div className="modern__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" title="Open Ai new Blog post "/>
        </div>
        <div className="modern__blog-container_groupB">

        <Article imgUrl={blog02} date="Sep 26, 2021" title="Open Ai new Blog post "/>
        <Article imgUrl={blog03} date="Sep 26, 2021" title="Open Ai new Blog post "/>
        <Article imgUrl={blog04} date="Sep 26, 2021" title="Open Ai new Blog post "/>
        <Article imgUrl={blog05} date="Sep 26, 2021" title="Open Ai new Blog post "/>

        </div>
      </div>
    </div>
  )
}

export default Blog