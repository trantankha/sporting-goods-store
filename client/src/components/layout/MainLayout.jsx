import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children, hideHeaderFooter = false }) {

    return (
        <>
            {!hideHeaderFooter && <Header />}
            <main>
                {children}
            </main>
            {!hideHeaderFooter && <Footer />}
        </>
    );
}