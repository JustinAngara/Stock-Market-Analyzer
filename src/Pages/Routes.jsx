
import {Routes, Route, HashRouter} from "react-router-dom";

//global styles
import '@/Common/css/normalize.css';
import '@/Common/css/global.scss';

// layout
import PagesLayout from "@/Common/PagesLayout/PagesLayout.jsx";

//components
import Home from "./Home"
import Staff from "./Staff"
import Contact from "./Contact"

const MyRoutes = () => {
    return (
    <HashRouter>
        <Routes>
            <Route element={<PagesLayout />}>
                <Route element={<Home />} path=""/>
                <Route element={<Staff />} path="staff"/>
                <Route element={<Contact />} path="contact"/>
            </Route>
        </Routes>
    </HashRouter>
    );
}

export default MyRoutes;
