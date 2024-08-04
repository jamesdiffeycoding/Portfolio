import { useEffect, useState } from "react";

const useFetchData = (url: string) => {
    const [data, setData] = useState("loading");

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setData(data.message);
            })
            .catch(err => {
                setData(err.message);
            });
    }, [url]);

    return data;
};

export default useFetchData;
