import React, { useState, useEffect } from 'react';
import { insertCategory, getCategories } from '../services/categoryService'

const DashboardPage = () => {
    const [category, setCategory] = useState({
        name: '',
        describe: '',
        image: null,
    });
    const [data, setData] = useState([]);
    useEffect(() => {
        getCategories()
            .then((res) => {
                const fixedPath = res.map(item => {
                    return {
                        ...item,
                        Image: item.Image.replace(/\\/g, '/'), // Fix the path
                    };
                })
                setData(fixedPath);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setCategory({ ...category, image: files[0] });
        } else {
            setCategory({ ...category, [name]: value });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!category.name || !category.describe || !category.image) {
            alert('Please fill in all fields !');
            return;
        }
        const formData = new FormData();
        formData.append("name", category.name);
        formData.append("describe", category.describe);
        formData.append("file", category.image);
        insertCategory(formData);
        window.location.reload();
    };
    return (
        <div className="container mx-auto" style={{ width: "60%" }}>
            <div className="h2 text-center my-4">Create New Category</div>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter name category..."
                        onChange={handleChange}
                        value={category.name} />
                </div>
                <div className="my-3">
                    <label htmlFor="description">Description: </label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        name="describe"
                        placeholder="Enter description..."
                        value={category.describe}
                        onChange={handleChange} />
                </div>
                <div className="my-3">
                    <label htmlFor="image">Image: </label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        value={category.image}
                        placeholder="Enter image..."
                        onChange={handleChange} />
                </div>
                <div className="d-grid mt-5">
                    <button type="submit" className="btn btn-outline-primary">Create</button>
                </div>
            </form>
            <ul className="mt-5">
                {data.map((item) => (
                    <li key={item.Id} className="list-group-item d-flex justify-content-between align-items-center p-2">
                        <div className="d-flex flex-column">
                            <span className="fw-bold">{item.Name}</span>
                            <span>{item.Describe}</span>
                        </div>
                        <img
                            src={`http://localhost:5000/${item.Image}`}
                            alt={item.Name}
                            style={{ width: '200px' }} />
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default DashboardPage;