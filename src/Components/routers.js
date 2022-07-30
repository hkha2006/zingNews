import React from "react"
import { Home, News, Admin, Book, Error, Logout} from "./index_import"

const routers = [
    {
        path: "/",
        component: () => <Home />,
    },
    {
        path: "/news/:type/:id",
        component: () => <News />,
    },
    {
        path: "/admin",
        component: () => <Admin />,
    },
    {
        path: "/books",
        component: () => <Book />,
    },
    {
        path: "/logout",
        component: () => <Logout />
    },
    {
        path: "/error",
        component: () => <Error />,
    },
]
export default routers