import React from 'react'

function Article({title, 
    minutes,
    preview, 
    date= "January 1, 1970"}) {
  return (
    <div>
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <small>Minutes: {minutes}</small>
        </article>
    </div>
  )
}

export default Article