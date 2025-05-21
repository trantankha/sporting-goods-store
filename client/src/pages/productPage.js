import React, { useState, useEffect } from "react";
import { getProducts, insertProduct } from "../services/productService";
import { getTypeProducts } from "../services/typeproductService";
import { getCategories } from "../services/categoryService";

const ProductPage = () => {
    const [products, setProducts] = useState({
        name: "",
        describe: "",
        image: "",
        typeId: "",
        categoryId: "",
        trademark: "",
        color: "",
        size: "",
        quantity: 0,
        price: 0,
        parameter: "",
        decrease: 0,
        percent: 0,
        viewer: 0,
    });
    const [type, setType] = useState([]);
    const [category, setCategory] = useState([]);
    const [Checked, setChecked] = useState(false);
    useEffect(() => {
        getTypeProducts()
            .then((res) => {
                setType(res);
            })
            .catch((error) => {
                console.error("Error fetching type products:", error);
            });
        getCategories()
            .then((res) => {
                setCategory(res);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, [])
    // .map((file) => `uploads/${file.name}`)
    const eventChange = (event) => {
        const { name, value, files, checked } = event.target;
        if (name === "image") {
            const arrFile = Array.from(files);
            setProducts({ ...products, [name]: arrFile });
        } else if (name === 'size') {
            setProducts({ ...products, [name]: value });
        } else if (name === 'parameter') {
            setProducts({ ...products, [name]: value });
        } else if (name === 'decrease') {
            const isChecked = checked;
            setChecked(isChecked);
            if (isChecked) {
                setProducts({ ...products, [name]: 1 })
            }
        }
        else {
            setProducts({ ...products, [name]: value });
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!products.name || !products.describe || !products.image || !products.categoryId || !products.typeId || !products.size) {
            alert('Please fill in all fields !');
            return;
        }
        const formData = new FormData();
        formData.append("name", products.name);
        formData.append("describe", products.describe);
        formData.append("typeId", products.typeId);
        formData.append("categoryId", products.categoryId);
        formData.append("trademark", products.trademark);
        formData.append("color", products.color);
        formData.append("size", JSON.stringify(products.size.split(' ').filter((item) => item.trim() !== '')));
        formData.append("quantity", products.quantity);
        formData.append("price", products.price);
        formData.append("parameter", JSON.stringify(products.parameter.split('\n').filter((item) => item.trim() !== '')));
        formData.append("file", JSON.stringify(products.image.map((file) => `uploads/${file.name}`)));
        formData.append("decrease", products.decrease);
        formData.append("percent", products.percent);
        formData.append("viewer", products.viewer);
        insertProduct(formData);
        window.location.reload();
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-4" style={{ width: '100%' }}>
            <div className="card">
                <div className="card-title">
                    <h1 className="text-center">Create Product</h1>
                </div>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <select
                                className="form-select"
                                onChange={eventChange}
                                name="typeId"
                                value={products.typeId}
                            >
                                <option value="">--Select TypeProduct--</option>
                                {type.map((item) => (
                                    <option key={item.Id} value={item.Id}>
                                        {item.Name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col">
                            <select
                                className="form-select"
                                onChange={eventChange}
                                value={products.categoryId}
                                name="categoryId"
                            >
                                <option value="">--Select Category--</option>
                                {category.map((item) => (
                                    <option key={item.Id} value={item.Id}>
                                        {item.Name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Name Product.."
                            name="name"
                            onChange={eventChange}
                            value={products.name}

                        />
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label htmlFor="trademark" className="form-label">Trademark:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="trademark"
                                placeholder="Enter Trademark.."
                                name="trademark"
                                onChange={eventChange}
                                value={products.trademark}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="color" className="form-label">Color:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="color"
                                placeholder="Enter Color.."
                                name="color"
                                onChange={eventChange}
                                value={products.color}
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="size" className="form-label">Size:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="size"
                            placeholder="Enter Size.."
                            name="size"
                            onChange={eventChange}
                            value={products.size}
                        />
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label htmlFor="quantity" className="form-label">Quantity:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="quantity"
                                placeholder="Enter Quantity.."
                                name="quantity"
                                onChange={eventChange}
                                value={products.quantity}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="price" className="form-label">Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                placeholder="Enter Price.."
                                name="price"
                                onChange={eventChange}
                                value={products.price}
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="desc">Description:</label>
                        <textarea
                            className="form-control"
                            rows="5"
                            id="desc"
                            name="describe"
                            onChange={eventChange}
                            value={products.describe}
                        ></textarea>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="parameter">Parameter:</label>
                        <textarea
                            className="form-control"
                            rows="5"
                            id="parameter"
                            name="parameter"
                            onChange={eventChange}
                            value={products.parameter}
                        ></textarea>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="image">Image:</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            name="image"
                            multiple
                            onChange={eventChange}
                        // value={products.image}
                        />
                    </div>
                    <div className="mt-3 form-check">
                        <label htmlFor="decrease" className="form-check-label">
                            <input id="decrease"
                                className="form-check-input"
                                type="checkbox"
                                name="decrease"
                                onChange={eventChange}
                                value={products.decrease}
                            />Giảm giá ?
                        </label>
                    </div>
                    {Checked && <div className="row mt-3">
                        <div className="col">
                            <label htmlFor="percent" className="form-label">Percent:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="percent"
                                placeholder="Enter Percent Sale"
                                name="percent"
                                value={products.percent}
                                onChange={eventChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="viewer" className="form-label">Viewers:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="viewer"
                                placeholder="Enter Viewer.."
                                name="viewer"
                                value={products.viewer}
                                onChange={eventChange}
                            />
                        </div>
                    </div>}
                    <div className="d-grid mt-4">
                        <button className="btn btn-outline-primary mt-3" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductPage;