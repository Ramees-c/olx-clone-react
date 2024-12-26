import React, { useContext, useState } from 'react'
import './Create.css'
import {
 
} from "firebase/";


function Create() {

  const [value, setValue] = useState({
    name:"",
    category:"",
    price:"",
  })

  const [image, setImage] = useState()

  const handleOnchange = (e) => {
    const {name,value} = e.target;
    setValue((preValue) => ({...preValue, [name]: value}))
  }

  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const storage = getStorage();
    const imageRef = storageRef(storage, `images/${image.name}`);
    // storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
    //   ref.getDownloadURL().then((url) => {
    //     console.log(url)
    //   })
    // })

    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url)
      })
    })

    

  }
  
  return (
    <>
     <card>
        <div className="centerDiv">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="name"
              onChange={handleOnchange}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={handleOnchange}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" onChange={handleOnchange} />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
          
            <br />
            <input type="file" onChange={handleImage} style={{marginTop:"20px"}} />
            <br />
            <button type='submit' className="uploadBtn">upload and Submit</button>
            </form>
        </div>
      </card>
    </>
  )
}

export default Create