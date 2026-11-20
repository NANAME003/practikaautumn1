import {Outlet} from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer.jsx";


function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
     <main className="flex-1"> <Outlet /> </main>
      <Footer />
    </div>
  );
}

export default Layout;
