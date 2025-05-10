import axios from "axios";

export const getProducts = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/product");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
export const insertProduct = async (product) => {
    try {
        const response = await axios.post("http://localhost:5000/api/product/create", product, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        alert('Insert product successfully !');
        return response.data;
    } catch (error) {
        console.error("Error inserting product:", error);
        throw error;
    }
};