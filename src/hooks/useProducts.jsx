import { useEffect,useState } from "react";

function useProducts() {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(() => {
        fetch("/products.json")
        .then((response) => {
            if (!response.ok){
                throw new Error("Ошибка сервера:" + response.status);
            }
            return response.json();
        })
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    return{products, loading,error};
}

export default useProducts;