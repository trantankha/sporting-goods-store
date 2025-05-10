import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/category");
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};
export const insertCategory = async (category) => {
    try {
        const response = await axios.post("http://localhost:5000/api/category/create", category, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        alert("Insert category successfully !");
        return response.data;
    } catch (error) {
        console.error("Error inserting category:", error);
        throw error;
    }
}