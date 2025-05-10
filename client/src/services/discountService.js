import axios from "axios";

export const getDiscounts = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/discount");
        return response.data;
    } catch (error) {
        console.log("Error fetching discount:".error);
        throw error;
    }
};
export const insertDiscount = async (discount) => {
    try {
        const response = await axios.post("http://localhost:5000/api/discount/create", discount, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        alert("Insert discount successfully !");
        return response.data;
    } catch (error) {
        console.error("Error inserting discount:", error);
        throw error;
    }
}