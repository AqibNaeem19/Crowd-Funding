import React, { useState } from 'react';
import '../styles/AddProject.css'

const AddProject = () => {

  const [formData, setFormData] = useState({
    title : '',
    description : '',
    imageUrl : '',
    cost : '',
    validDate : '',
  })

  // Handle Chnage on htmlForm and update state
  const handleChange = (event) => {
    setFormData( prevState => ({
      ...prevState, 
      [event.target.name]: event.target.value 
    }))
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted')
    console.log(formData);
  }

  return (
  <div className="fullscreen-container">

    <div className="container">
        <div className="heading">
          <h1>Time to 
            <span> Fund </span> 
            your next 
            <span> Project </span> 
            and convert it into 
            <span> Reality </span>
          </h1>
        </div>

        <div className="form-container">

          <form onSubmit={onFormSubmit}>

            <div className="input-group">
              <label htmlFor="Title">Title</label>
              <input type="text" 
                id="Title" 
                name="title" 
                value={formData.Title}
                placeholder="Playstation 5" 
                required
                onChange={handleChange} />
            </div>

            <div className="input-group">
              <label htmlFor="Description">Description</label>
              <textarea type="text" 
                rows="6"
                id="Description" 
                name="description" 
                value={formData.Description}
                placeholder="Its the description" 
                required
                onChange={handleChange} />
            </div>

            <div className="input-group">
              <label htmlFor="imageUrl">Image Url</label>
              <input type="url" 
                id="imageUrl" 
                name="imageUrl" 
                value={formData.imageUrl}
                placeholder="https://myImage.png" 
                required
                onChange={handleChange} />
            </div>

            <div className="input-group">
              <label htmlFor="cost">Cost</label>
              <input type="number" 
                step="0.01" 
                min="0.001" 
                id="cost" 
                name="cost" 
                value={formData.cost}
                placeholder="0.01 eth" 
                required
                onChange={handleChange} />
            </div>

            <div className="input-group">
              <label htmlFor="Date">Date</label>
              <input type="date" 
                id="Date" 
                name="validDate" 
                value={formData.validDate}
                required
                onChange={handleChange} />
            </div>

            <button className="form-submit-button" type="submit">Create Project</button>

          </form>

        </div>
    </div>     
  </div>
  )
}

export default AddProject;
