import React from 'react'
import {PropTypes} from "prop-types"

const styleB = {color : "red",  width :100, Height: 700}
const styleH1 = {color : "green", fontSize : "medium", textAlign: "center"}

const Profile = ({name, my_bio, my_profession,children,handlName})  => {
  return (
    <div>
      <button onClick ={()=>handlName(name)} style={styleB}>Click here</button>
        <h1 style={styleH1}>  My name is {name}, my bio {my_bio} and my profession is {my_profession} </h1>
        
   {children}
    </div>
  
  )
}

Profile.defaultProps = {
    name: "defaul_",
    my_bio: "defaul_my_bio",
    my_profession: "defaul_Student"
  }
Profile.propTypes = {
    name: PropTypes.string,
    my_bio: PropTypes.string,
    my_profession: PropTypes.string,
    handlName: PropTypes.func,
  }
export default Profile