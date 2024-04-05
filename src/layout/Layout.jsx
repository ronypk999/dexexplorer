import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const Layout = () => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
