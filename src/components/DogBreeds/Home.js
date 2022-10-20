import { useGetData } from './control';
import dogPreloader from '../../assets/dog_preloader.gif';


const Breed = ({breed}) => {

    const [isLoading,data] = useGetData("https://dog.ceo/api/breeds/image/random")

    return (
        <section data-aos='fade-bottom' className='p-3 shadow-md border rounded-md cursor-pointer hover:shadow-xl'>
            <div className='text-center mb-5 border rounded'>
                {
                    isLoading
                    ? <img src={dogPreloader} alt="Breed Image" className='m-auto max-w-max' />
                    : <img src={data.message} alt="{breed} Image" className='m-auto max-w-full max-h-28'/>
                }
            </div>
            <p data-aos='zoom-in' className='m-0 text-lg text-gray-700 font-semibold'>{breed.toUpperCase()}</p>
        </section>
    );
}

const Home = () => {
    const [isLoading,data] = useGetData("https://dog.ceo/api/breeds/list/all");
    return (
        <>
            <section>
                {
                    isLoading 
                    ? <div className='text-center'>
                        <img className='mx-auto my-24' src={dogPreloader} alt="Preloader"/>
                    </div>
                    : <div>
                        <h1 className='text-center font-semibold text-3xl'>Dog Breeds</h1>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-5 gap-8 mb-6'>
                            {
                                Object.keys(data.message).map((breed,index) => <Breed key={index} breed={breed}/>)
                            }
                        </div>
                    </div>
                }
            </section>
        </>
    );
}

export default Home;