import React, { useEffect, useState } from 'react';
import dogPreloader from '../../assets/dog_preloader.gif';

const useGetDogBreeds = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(true);

    useEffect(() => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        }
        
        fetch("https://dog.ceo/api/breeds/list/all", { 
            method: "GET",
            headers: headersList
        })
        .then(res => res.json())
        .then(data => {
            setIsLoading(false);
            setData(data);
        })
    },[])

    return [isLoading,data];
}

const Home = () => {
    const [isLoading,data] = useGetDogBreeds();
    return (
        <>
            <section>
                {
                    isLoading &&
                    <div className='text-center'>
                        <img className='mx-auto my-24' src={dogPreloader} alt="Preloader"/>
                    </div>
                }
            </section>
        </>
    );
}

export default Home;