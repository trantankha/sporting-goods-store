import axios from "axios";

export const getTypeProducts = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/typeproduct");
        return response.data;
    } catch (error) {
        console.error("Error fetching type products:", error);
        throw error;
    }
};
export const insertTypeProduct = async (typeproduct) => {
    try {
        const response = await axios.post("http://localhost:5000/api/typeproduct/create", typeproduct, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        alert("Insert typeproduct successfully !");
        return response.data;
    } catch (error) {
        console.error("Error inserting type product:", error);
        throw error;
    }
}