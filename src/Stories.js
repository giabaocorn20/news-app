import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()
  console.log(hits)
  if (isLoading) { 
    return <div className='loading'> 
    </div>
  }
  return <section className='stories'> 
    {hits.map(story => {
      const { objectID, title, num_comments, url, points, author } = story
      return <article className='story' key={objectID}> 
        <h4 className='title'>{title}</h4>
        <p className='info'>
          {points} points by <span>{author} | {num_comments}{' '} comments</span>
        </p>
        <a className='read-link' href={url} target = "_blank" rel = "noopener noreferrer"> Read More </a>
        <button className='remove-btn' onClick={() => removeStory(objectID)}> Remove </button>
      </article>
    })}
  </section>
}

export default Stories
