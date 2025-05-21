import axios from './axiosInstance';

export const getCustomers = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/customer");
        return response.data;
    } catch (error) {
        console.error("Error fetching customers:", error);
        throw error;
    }
};
export const insertCustomer = async (customer) => {
    try {
        const response = await axios.post("/customer/create", customer);
        return response.data;
    } catch (error) {
        console.error("Error inserting customer:", error);
        throw error;
    }
};
export const userLogin = async (username, password) => {
    try {
        const response = await axios.post(`/customer/login`, { username, password });
        return response.data;
    } catch (error) {
        console.error("Error fetching customers:", error);
        throw error;
    }
};