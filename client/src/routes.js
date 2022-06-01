import React from 'react'
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import ArtPage from "./pages/ArtPage"
import Main from "./pages/Main"
import Mark from "./pages/Mark"
import { MAIN_ROUTE, MARK_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, ART_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />,
    },
    {
        path: MARK_ROUTE,
        element: <Mark />
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: <Main />,
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: ART_ROUTE + '/:id',
        element: <ArtPage />
    }
]