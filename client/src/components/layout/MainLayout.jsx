import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}