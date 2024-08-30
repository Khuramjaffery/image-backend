import React, { useState } from 'react';

function ProductForm() {
    const [userform, setUserform] = useState({
        email: "",
        sku:"",
        collection: "",
        type: "",
        fabric: "",
        category: "",
        campaign: "",
        title: "",
        description: ""  // Corrected the spelling
    });

    const handlefrom = (event) => {
        const { name, value } = event.target;
        setUserform({
            ...userform,
            [name]: value,
        });
    };

    const submitform = async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        const { sku, collection, type, fabric, category, campaign, title, description } = userform;

        let result = await fetch("http://localhost:5000/register", {
            method: "POST",
            body: JSON.stringify(userform),
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
      
        console.log(result);  // Handle the response as needed
    };

    return (
        <div className="form-body">
            <div className='form'>
                <h2 className="form-title">Product Details</h2>
                <form onSubmit={submitform}>
                    <div className="input-group">
                        <label>email</label>
                        <input type="email" placeholder="Enter SKU" name="email" value={userform.email} onChange={handlefrom} />
                    </div>
                    <div className="input-group">
                        <label>sku</label>
                        <input type="text" placeholder="Enter SKU" name="sku" value={userform.sku} onChange={handlefrom} />
                    </div>
                    <div className="input-group">
                        <label>Collection</label>
                        <input type="text" placeholder="Enter Collection" name="collection" value={userform.collection} onChange={handlefrom} />
                    </div>
                    <div className="input-group">
                        <label>Type</label>
                        <input type="text" placeholder="Enter Type" name="type" value={userform.type} onChange={handlefrom} />
                    </div>
                    <div className="input-group">
                        <label>Fabric</label>
                        <input type="text" placeholder="Enter Fabric" name="fabric" value={userform.fabric} onChange={handlefrom} />
                    </div>
                    <div className="input-group">
                        <label>Category</label>
                        <input type="text" placeholder="Enter Category" name="category" value={userform.category} onChange={handlefrom} />
                    </div>
                    <div className="input-group">
                        <label>Campaign</label>
                        <input type="text" placeholder="Enter Campaign" name="campaign" value={userform.campaign} onChange={handlefrom} />
                    </div>
                    <div className="input-group">
                        <label>Title</label>
                        <input type="text" placeholder="Enter Title" name="title" value={userform.title} onChange={handlefrom} />
                    </div>
                    <div className="input-group">
                        <label>Description</label>
                        <input type="text" placeholder="Enter Description" name="description" value={userform.description} onChange={handlefrom} />
                    </div>
                    <div className="submit-btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;
