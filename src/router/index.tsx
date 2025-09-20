import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage, HomePage, ProductsPage } from "../pages";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: "Productos",
                    element: <ProductsPage />
                },
                                {
                    path: "Nosotros",
                    element: <AboutPage />
                }
            ]
        },
    ]
);