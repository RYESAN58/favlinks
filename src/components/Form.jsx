import React, { useState } from 'react';


function Form(props){
  const [link, setLink] = useState({ linkName: '', linkURL: '' });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLink({ ...link, [name]: value });
};

const submitForm = () => {
  props.handleSubmit(link); // Pass the form data to the handleSubmit function from LinkContainer
  setLink({ linkName: '', linkURL: '' }); // Reset the form fields
};

  return(
    <form onSubmit={(event) => {
      event.preventDefault(); // Prevent default form submission behavior
      submitForm();
  }}>
      <label htmlFor="linkName">Link Name:</label>
      <input 
          type="text" 
          id="linkName" 
          name="linkName" 
          value={link.linkName} 
          onChange={handleChange} 
      />
      <br />
      <br />
      <label htmlFor="linkURL">Link URL:</label>
      <input 
          type="text" 
          id="linkURL" 
          name="linkURL" 
          value={link.linkURL} 
          onChange={handleChange} 
      />
      <br/>
      <br />
      <input type="submit" value="Submit" />
  </form>
);
}


export default Form
