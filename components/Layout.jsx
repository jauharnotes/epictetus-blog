import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <div className="bg-gradient-to-b from-[#374151] to-[#111827] min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}