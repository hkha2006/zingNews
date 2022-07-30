import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "../../index_import"
import { useNavigate } from 'react-router-dom'
import routers from "../../routers";
import { getCookie } from '../../utils/request'
const DefaultLayout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = getCookie("token");
        // console.log(token);
        if (!token || token === "") {
            navigate("/login");
        }
    }, [])

    const showMenu = (routers) => {
        let result = '';
        if (routers) {
            result = routers.map((item, index) => { return <Route key={index} path={item.path} element={item.component()}></Route> })
        }
        return result;
    }
    return (<div>
        <Header />
        <Routes>
            {showMenu(routers)}
        </Routes>
        <Footer />
    </div>)
}
export default DefaultLayout