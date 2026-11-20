import {useEffect, useState } from "react";

const API_URL = "http://localhost:3001/deviceTypes";

function useDeviceTypes() {
    const [deviceTypes, setDeviceTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Ошибка сервера: " + response.status);
            }
            return response.json();
        })
        .then((data) => {
            setDeviceTypes(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    },[]);

    return {deviceTypes, loading, error};
}

export default useDeviceTypes;