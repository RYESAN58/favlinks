import Table from './Table'
import Form from './Form'
import React, { useState } from 'react';


function LinkContainer(){

  const [favLinks, setFavLinks] = useState([]);

    const removeLink = (index) => {
      const updatedLinks = favLinks.filter((link, i) => i !== index);
      setFavLinks(updatedLinks);
      }
    const handleSubmit = (favLink) => {
      setFavLinks([...favLinks, favLink]);
    }

    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table! </p>
            <Table linkData={favLinks} removeLink ={removeLink} />
            <h1>Add New</h1>
            <Form handleSubmit={handleSubmit} />
        </div>
    )

}
export default LinkContainer