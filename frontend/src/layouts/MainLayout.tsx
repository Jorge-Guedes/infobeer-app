import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-amber-50 via-yellow-100 to-yellow-200">
      <header className="w-full bg-amber-600 text-amber-50 shadow-md">
        <Header />
      </header>

      <main className="flex-1 w-full bg-gradient-to-tr">
        <Outlet />
      </main>

      <footer className="w-full bg-amber-600 text-amber-50 mt-auto shadow-inner">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
