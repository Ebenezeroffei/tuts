import { useState, useEffect } from "react";

const useGetData = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(true);

    useEffect(() => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        }
        
        fetch(url, { 
            method: "GET",
            headers: headersList
        })
        .then(res => res.json())
        .then(data => {
            setData(data);
            setIsLoading(false);
        })
    },[url])

    return [isLoading,data];
}

const handleLoginValueInput = (e,setUserDetils) => {
    const {name,value} = e.target;
    setUserDetils((prevUserDetails) => {
        return {
            ...prevUserDetails,
            [name]: value,
        };
    });
}

export {useGetData,handleLoginValueInput};