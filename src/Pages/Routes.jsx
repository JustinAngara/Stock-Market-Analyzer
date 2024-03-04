
import {Routes, Route, HashRouter} from "react-router-dom";



//global styles
import '@/Common/css/normalize.css';
import '@/Common/css/global.scss';

// layout
import PagesLayout from "@/Common/PagesLayout/PagesLayout.jsx";
import {MediaQueryProvider} from "@/Common/useMediaQuery.jsx";


//components
import Home from "./Home/Home"
import Staff from "./Staff/Staff.jsx"
import Contact from "./Contact"

// page componenents course work
import CourseWorkLayout from "./CourseWork/CourseWorkLayout.jsx"
import SunAndMoon from "./CourseWork/SunAndMoon/SunAndMoon.jsx"
import Essays from "./CourseWork/Essays/Essays.jsx"
import ResponsiveDesign from "./CourseWork/ResponsiveDesign.jsx"
const MyRoutes = () => {
    return (
    <HashRouter>
        <MediaQueryProvider>
            <Routes>
                <Route element={<PagesLayout />}>
                    <Route element={<Home />} path=""/>
                    <Route element={<Staff />} path="staff"/>
                    <Route element={<Contact />} path="contact"/>

                    <Route element={<CourseWorkLayout />} path="course-work">
                        <Route element={<Essays />} path=""/>
                        <Route element={<SunAndMoon />} path="sun-and-moon"/>
                        <Route
                            element={<ResponsiveDesign />}
                            path="responsive"
                        />
                    </Route>
                </Route>
            </Routes>
        </MediaQueryProvider>
    </HashRouter>
    );
}

export default MyRoutes;
