// import React from 'react'
// import { useState} from 'react'
// import './dropDown.css'
// import DropDownTitle from '../dropDownTitle/dropDownTitle'
// import DropDownContent from '../dropDownContent/dropDownContent'

// function DropDown({title, content, classTitle, classContent}) {
//     const [isOpen, setIsOpen] = useState(false) 
//     const [topArrow, setTopArrow ] = useState("arrow_content")

//     const toggle = () =>{
//         setIsOpen( isOpen === false ? true : false )
//         setTopArrow(topArrow === "arrow_content" ? "arrow_content rotate" : "arrow_content")
//     }
//     return isOpen ? (
//         <div className='dropDown_content'>
//             <DropDownTitle title={title} classTitle={classTitle} toggle={toggle} arrow={topArrow}  />  
//             <DropDownContent content= {content} classContent={classContent} />
//         </div>
//     ) : (
//         <div className='dropDown_content'>
//             <DropDownTitle title={title} classTitle={classTitle} toggle={toggle} arrow={topArrow}  /> 
//         </div>
//     )
// }
            
// export default DropDown