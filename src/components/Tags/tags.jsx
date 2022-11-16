import React from 'react'
import './tags.css'

const Tags = ({ tags }) => {
  return (
    <div className="tags_container">
      {tags.map((tag, index) => (
        <div key={`${tag.name}-${index}`} className="tags">
          {tag}
        </div>
      ))}
    </div>
  )
}
Tags.defaultProps = {
  tags: ['advantages', 'key points', 'highlights'],
}
export default Tags
