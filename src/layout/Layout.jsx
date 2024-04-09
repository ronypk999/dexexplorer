import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
