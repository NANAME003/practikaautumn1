import Layout from "./layouts/layouts.jsx";
import HomePage from "./pages/HomePage";
import {Routes,Route} from "react-router";
import ProductsPage from "./pages/ProductsPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        </Routes>
    </Layout>
  );
}

export default App;
