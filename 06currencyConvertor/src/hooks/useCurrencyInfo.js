import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const res = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
                const json = await res.json();
                setData(json.usd);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencyData();
    }, []);

    return data;
}
