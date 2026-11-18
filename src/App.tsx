import Layout from "./layouts/layouts.jsx";
import HomePage from "./pages/HomePage";
import {Routes,Route} from "react-router";
import ProductsPage from "./pages/ProductsPage.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import StubPage from "./pages/StubPage.jsx";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Разделы сервисного центра: пока заглушки, будут сделаны на этапах 2–4 */}
        <Route path="/services" element={<StubPage title="Услуги" stage={2} />} />
        <Route path="/request" element={<StubPage title="Заявка на ремонт" stage={3} />} />
        <Route path="/status" element={<StubPage title="Статус ремонта" stage={4} />} />
        {/* Старые страницы магазина: переделаем на следующих этапах */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
