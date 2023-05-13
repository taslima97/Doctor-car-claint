import { Outlet } from "react-router-dom";
import Header from "../Sheard/NavBer/NavBer";
import Footer from "../Sheard/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default MainLayout;