import React, {createRef} from "react";
import ReactDOM from 'react-dom/client';
import { BrowserView, MobileView } from 'react-device-detect';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './App';
import AppMobile from "./AppMobile";

import Home from "./components/pages/Home";
import HomeMobile from "./components/pages/mobile/HomeMobile";

import About from "./components/pages/About";
import AboutMobile from "./components/pages/mobile/AboutMobile";

import { Error } from "./Error";
import './styles/_main.scss';

const routes = [
    { path: '/', name: 'Home', element: <Home pagetitle="Start" />, nodeRef: createRef(), index: true },
    { path: '/about', name: 'Home', element: <About pagetitle="About" />, nodeRef: createRef() },
]

const routesMobile = [
    { path: '/', name: 'Home', element: <HomeMobile pagetitle="Start" />, nodeRef: createRef(), index: true },
    { path: '/about', name: 'Home', element: <AboutMobile pagetitle="About" />, nodeRef: createRef() },
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: routes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element
        })),
    }
]);

const routerMobile = createBrowserRouter([
    {
        path: "/",
        element: <AppMobile routelist={routesMobile} />,
        errorElement: <Error />,
        children: routesMobile.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element
        })),
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <>
        <BrowserView>
            <RouterProvider router={router} />
        </BrowserView>
        <MobileView>
            <RouterProvider router={routerMobile} />
        </MobileView>
    </>
);
