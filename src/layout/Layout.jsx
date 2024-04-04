import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
const Layout = () => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <Header></Header>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
