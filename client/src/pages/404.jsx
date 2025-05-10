import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="text-center mt-5">
            <h1 className="text-danger">404 Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="text-blue-500 underline">Go back to Home</Link>
        </div>
    );
}