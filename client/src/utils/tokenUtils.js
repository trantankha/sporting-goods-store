import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token) => {
    if (!token) return true;
    try {
        const { exp } = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return exp < currentTime;
    } catch (error) {
        console.error("Invalid token:", error);
        return true;
    }
};
export default isTokenExpired;