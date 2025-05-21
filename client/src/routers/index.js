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
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';

const myRoutes = [
    { path: '/', component: HomePage, isHidden: false },
    { path: '/product', component: ProductPage, isHidden: false },
    { path: '/category', component: CategoryPage, isHidden: false },
    { path: '*', component: NotFoundPage, isHidden: false },
    { path: '/type-product', component: TypeproductPage, isHidden: false },
    { path: '/new-goods', component: CategoriesPage, isHiddenr: false },
    { path: '/information/:id', component: InformationPage, isHidden: false },
    { path: '/cart', component: CartPage, isHidden: false },
    { path: '/order-tracking', component: OrdertrackingPage, isHidden: false },
    { path: '/payment', component: PaymentPage, isHidden: true },
    { path: '/login', component: LoginPage, isHidden: true },
    { path: '/register', component: RegisterPage, isHidden: true }
];
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {myRoutes.map(({ path, component: Component, isHidden }, index) => (
                    <Route
                        key={index}
                        path={path}
                        element={
                            <MainLayout hideHeaderFooter={isHidden}>
                                <Component />
                            </MainLayout>
                        }
                    />
                ))}
            </Routes>
        </Router >
    )
};

export default AppRouter;