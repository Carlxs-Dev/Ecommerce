import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/shared/Navbar";
import { Footer } from "../components/shared/Footer";
import { Banner } from "../components/home/Banner";
import { Newsletter } from "../components/home/Newsletter";


export const RootLayout = () => {

    const { pathname } = useLocation();

    // console.log( pathname );
    

    return (
        <div className="h-screen flex flex-col font-montserrat">
            <Navbar />

            {
                pathname === "/" && <Banner />
            }

            <main className="container my-8 flex-1">
                <Outlet />
            </main>

            {
                pathname === "/" && <Newsletter />
            }

            <Footer />
        </div>
    )
};