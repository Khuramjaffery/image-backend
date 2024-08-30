import React, { useState } from 'react';

function Imageform() {
  const [userform, setUserform] = useState({
    image: null, // Changed from an empty string to null
  });

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    setUserform({
      ...userform,
      image: file, // Set the selected file
    });
  };

  // Form submission
  const submitform = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create FormData object to handle file upload
    const formData = new FormData();
    formData.append('image', userform.image); // Append the image file

    // Send the form data to the server
    let result = await fetch('http://localhost:4000', {
      method: 'POST',
      body: formData, // Send the FormData object
      // Content-Type header is not needed; it will be set automatically for FormData
    });

    result = await result.json();
    console.log(result); // Handle the response as needed
  };

  return (
    <div className="form-body">
      <div className="form">
        <h2 className="form-title">Product Details</h2>
        <form onSubmit={submitform} encType="multipart/form-data">
          <div className="input-group">
            <label>Image</label>
            <input type="file" name="image" onChange={handleFileChange} /> {/* Use handleFileChange */}
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Imageform;
