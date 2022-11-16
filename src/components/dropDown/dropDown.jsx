import React, { useState, useEffect } from 'react'
import DropDownTitle from '../dropDownTitle/dropDownTitle'
import DropDownContent from '../dropDownContent/dropDownContent'
import './dropDown.css'
import '../dropDownTitle/dropDownTitle.css'
import '../dropDownContent/dropDownContent.css'

function DropDown({ title, content }) {
  // TOGGLE
  const [isOpen, setIsOpen] = useState('hidden')
  const [topArrow, setTopArrow] = useState('arrow_content')
  const toggleContent = () => {
    setIsOpen(isOpen === 'hidden' ? '' : 'hidden')
    setTopArrow(
      topArrow === 'arrow_content' ? 'arrow_content rotate' : 'arrow_content'
    )
  }
  // SET CLASSES
  const [currentClassContent, setClassContent] = useState('p_content')
  const [currentClassTitle, setClassTitle] = useState('h3_DD')
  useEffect(() => {
    if (window.location.href === 'http://localhost:3000/apropos')
      return setClassContent('p_content_about') || setClassTitle('h3_DD_about')
    else return setClassContent(currentClassContent) || setClassTitle('h3_DD')
  }, [currentClassContent, currentClassTitle])
  //  DROPDOWN
  return (
    <div className="dropDown_content">
      <DropDownTitle
        title={title} classTitle={`${currentClassTitle}`}
        toggle={toggleContent} arrow={topArrow}
      />
      <DropDownContent
        display={`${isOpen}`}
        content={content}
        classContent={`${currentClassContent}`}
      />
    </div>
  )
}
DropDown.defaultProps = {
  content: 'Content is not available',
}
export default DropDown