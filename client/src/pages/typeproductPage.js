import React, { useState, useEffect } from "react";
import { getTypeProducts, insertTypeProduct } from "../services/typeproductService";

const GetDataPage = () => {
    const [state, setState] = useState({
        name: '',
        quantity: 0,
    });
    const [data, setData] = useState([]);
    useEffect(() => {
        getTypeProducts()
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!state.name || state.quantity === 0) {
            alert('Please fill in all fields !');
            return;
        }
        const formData = new FormData();
        formData.append("name", state.name);
        formData.append("quantity", state.quantity.toString());
        insertTypeProduct(formData);
        window.location.reload();
    }
    return (
        <>
            <div className="container mx-auto" style={{ width: "30%" }}>
                <div className="h2 text-center my-4">Create New TypeProduct</div>
                <form onSubmit={handleSubmit}>
                    <div className="my-3">
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter type name..."
                            onChange={handleChange}
                            value={state.name} />
                    </div>
                    <div className="my-3">
                        <label htmlFor="quantity">Quantity: </label>
                        <input
                            type="number"
                            className="form-control"
                            id="quantity"
                            name="quantity"
                            placeholder="Enter quantity..."
                            onChange={handleChange}
                            value={state.quantity} />
                    </div>
                    <div className="d-grid mt-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                <ul className="mt-4 text-center">
                    {
                        data.map((item) => {
                            return (
                                <li key={item.Id} className="list-group-item list-group-item-action">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="fw-bold">{item.Name}</div>
                                        <span className="badge bg-primary rounded-pill">{item.Quantity}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default GetDataPage;