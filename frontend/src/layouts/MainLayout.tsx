import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed z-0 w-full">
        <Header />
      </div>

      <div className="flex-1 w-full bg-gradient-to-tr from-yellow-100 to-gray-200 pt-[60px]">
        <Outlet />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
