import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Context } from "../index"
import { authRoutes, publicRoutes } from '../routes'
import { MAIN_ROUTE } from '../utils/consts'

function AppRouter() {
    const {user} = useContext(Context)

  return (

        <Routes>

         { user.isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} end />
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}  end />
            )}
            <Route path="*" element={<Navigate to ={MAIN_ROUTE} />}/>
        </Routes>
  )
}


export default AppRouter