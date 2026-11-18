import { useEffect, useState } from "react";

// Свой хук: загружает список услуг из public/services.json.
// Возвращает три значения: сами услуги, флаг загрузки и текст ошибки.
function useServices() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/services.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Ошибка сервера: " + response.status);
            }
            return response.json();
        })
        .then((data) => {
            setServices(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    return { services, loading, error };
}

export default useServices;
