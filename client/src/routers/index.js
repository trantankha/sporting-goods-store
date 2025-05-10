import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import ProductPage from '../pages/productPage';
import MainLayout from '../components/layout/MainLayout';
import NotFoundPage from '../pages/404';
import CategoryPage from '../pages/categoryPage';
import TypeproductPage from '../pages/typeproductPage';
import CategoriesPage from '../pages/categoriesPage';
import InformationPage from '../pages/informationPage';
import CartPage from '../pages/cartPage';
import PaymentPage from '../pages/paymentPage';
import OrdertrackingPage from '../pages/ordertrackingPage';

const myRoutes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/product',
        component: ProductPage
    },
    {
        path: '/category',
        component: CategoryPage
    },
    {
        path: '*',
        component: NotFoundPage
    },
    {
        path: '/type-product',
        component: TypeproductPage
    },
    {
        path: '/new-goods',
        component: CategoriesPage
    },
    {
        path: '/information/:id',
        component: InformationPage
    },
    {
        path: '/cart',
        component: CartPage
    },
    {
        path: '/order-tracking',
        component: OrdertrackingPage
    }
]
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {myRoutes.map((route, index) => {
                    const Component = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <MainLayout>
                                    <Component />
                                </MainLayout>
                            }
                        />
                    )
                })}
                <Route path="/payment" element={<PaymentPage />} />
            </Routes>
        </Router >
    )
};

export default AppRouter;