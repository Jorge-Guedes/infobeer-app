import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <header className="w-full bg-gradient-to-r from-amber-800 to-amber-900 text-amber-50">
        <Header />
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <footer className="w-full bg-amber-950 text-amber-100 mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
