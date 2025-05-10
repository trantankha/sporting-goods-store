import axios from "axios";

export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/information/${productId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
}