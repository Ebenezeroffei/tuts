import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useGetData } from "./control";
import dogPreloader from '../../assets/dog_preloader.gif';


const BreedImage = ({image}) => {
    return (
        <div className="group relative cursor-pointer transform hover:scale-90 transition-all duration-200">
            <img className="rounded shadow w-full h-full" src={image} alt="" />
            <span className="absolute bg-black opacity-30 z-10 w-full top-0 left-0 h-full transition-all duration-200 group-hover:opacity-0"></span>
        </div>
    );
}

const BreedDetail = () => {
    const {breed} = useParams();
    const [isLoading,data] = useGetData(`https://dog.ceo/api/breed/${breed}/images`);
    console.log(data)
    return (
        <>
            <section className="p-4">
                <p className="text-2xl font-semibold text-gray-600 pb-4">{breed.toUpperCase()}</p>
                {
                    isLoading
                    ? <img src={dogPreloader} alt="Breed Image" className='m-auto max-w-max pb-20' />
                    : data.status === 'success' 
                        ? <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                            {
                                data.message.map(
                                    (breedImage,index) => <BreedImage key={index} image={breedImage}/>
                                )
                            }
                        </div>
                        : <p className="text-gray-600 text-3xl font-semibold text-center">
                            Breed Not Found...
                            <Link to={'/dog-breeds/'}>
                                <p className="group block text-sm my-5 font-medium bg-red-500 rounded-md py-3 text-white max-w-xs mx-auto transition duration-200 ease-in-out relative hover:bg-red-400">
                                    <span className="group-hover:-translate-x-2 text-3xl absolute transition-all duration-200 transform bottom-2 ml-1 right-48 ">&larr;</span>
                                    Go Back
                                </p>
                            </Link>
                        </p>
                }
            </section>
        </>
    );
}

export default BreedDetail;