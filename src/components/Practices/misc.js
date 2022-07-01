import {useState,useEffect} from 'react'

const UseFetch = (initialUrl) => {
    const [url,setUrl] = useState(initialUrl);
    const [loading,setLoading] = useState(true);
    const [responseData,setResponseData] = useState(null);
    
    useEffect(() => {
        // Get data
        const fetchData =  async () => {
            await fetch(url)
            .then(res => res.json())
            .then(data => {
                setResponseData({
                    status: "SUCCESS",
                    data,
                });
            })
            .catch(() => {
                setResponseData({
                    status: "ERROR"
                });
            })
            setLoading(false);
        }

        fetchData();
    },[url]);

    return {loading,responseData};
}

export {UseFetch};