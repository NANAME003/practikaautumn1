import Layout from "./layouts/layouts.jsx";
import HomePage from "./pages/HomePage";
import {Routes,Route} from "react-router";
import ServicesPage from "./pages/ServicesPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import StubPage from "./pages/StubPage.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminDeviceTypes from "./pages/AdminDeviceTypes.jsx";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/request" element={<StubPage title="Заявка на ремонт" stage={3} />} />
        <Route path="/status" element={<StubPage title="Статус ремонта" stage={4} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
         <Route path="requests" element={<StubPage title="Заявки" stage={5} />} />
         <Route path="services" element={<StubPage title="Услуги" stage={5} />} />
         <Route path="devices" element={<AdminDeviceTypes />} />
      </Route>
      </Routes>
  );
}

export default App;
