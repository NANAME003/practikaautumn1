import Layout from "./layouts/layouts.jsx";
import HomePage from "./pages/HomePage";
import {Routes,Route} from "react-router";
import ServicesPage from "./pages/ServicesPage.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import StubPage from "./pages/StubPage.jsx";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* Разделы, которые будут сделаны на этапах 3–4 */}
        <Route path="/request" element={<StubPage title="Заявка на ремонт" stage={3} />} />
        <Route path="/status" element={<StubPage title="Статус ремонта" stage={4} />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
