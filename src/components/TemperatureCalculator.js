import React, {useState,useEffect} from 'react';

const TemperatureConversion = ({scale,value}) => {
    return (
        <>
            <div className='shadow-md border p-2'>
                <h2 className='text-xl font-semibold text-gray-500'>{scale}</h2>
                <p className='text-4xl font-normal text-gray-700'>{value}</p>
            </div>
        </>
    );
}

const TemperatureCalculator = () => {

    const [temperatureConversion,setTemperatureConversion] = useState([
        {
            'scale': "Celsius",
            'value': 0.00,
        },
        {
            'scale': "Kelvin",
            'value': 0.00,
        },
        {
            'scale': "Fahrenheit",
            'value': 0.00,
        },
    ]);
    
    const [temperature,setTemperature] = useState({
        'value': 0.00,
        'unit': 'Celsius'
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTemperature((prevTemperature) => {
            return {
                ...prevTemperature,
                [name]: value
            }
        });
    }

    const convertToCelsius = (unit,value) => {
        if(unit === 'c'){
            return (value).toFixed(2);
        }
        else if(unit === 'k'){
            return (value - 273.15).toFixed(2);
        }
        return ((value - 32) * 5/9).toFixed(2);
    }

    const convertToKelvin = (unit,value) => {
        if(unit === 'k'){
            return (value).toFixed(2);
        }
        else if(unit === 'c'){
            return (value + 273.15).toFixed(2);
        }
        return ((value - 32) * 5/9 + 273.15).toFixed(2);
    }

    const convertToFahrenheit = (unit,value) => {
        if(unit === 'f'){
            return (value).toFixed(2);
        }
        else if(unit === 'k'){
            return ((value - 273.15) * 9/5 + 32).toFixed(2);
        }
        return ((value * 9/5) + 32).toFixed(2);
    }

    useEffect(() => {
        let unitFull = temperature.unit;
        let unit = unitFull[0].toLowerCase();
        let value = Number(temperature.value);
        console.log("Celsius",convertToCelsius(unit,value));
        console.log("Kelvin",convertToKelvin(unit,value));
        console.log("Fahrenheit",convertToFahrenheit(unit,value));
        let newTemperatureConversion = [
            {
                'scale': "Celsius",
                'value': convertToCelsius(unit,value),
            },
            {
                'scale': "Kelvin",
                'value': convertToKelvin(unit,value),
            },
            {
                'scale': "Fahrenheit",
                'value': convertToFahrenheit(unit,value),
            },
        ]
        setTemperatureConversion(newTemperatureConversion);
    },[temperature])

    return (
        <>
            <section className='m-6'>
                <div className='grid grid-cols-4 grid-cols-1 gap-4'>
                    <input type="number" onChange={handleChange} step="0.1" className='p-2 rounded border-2 sm:col-span-3 col-span-4 outline-none text-gray-800 text-lg focus:border-gray-500' placeholder='Enter a temperature' value={temperature.value} name="value" />
                    <select onChange={handleChange} name='unit' value={temperature.unit} className='border-2 sm:col-start-4 sm:co l-end-5 col-start-1 col-end-5 p-2 outline-none'>
                        <option value="Celsius">Celsius</option>
                        <option value="Kelvin">Kelvin</option>
                        <option value="Farenheit">Farenheit</option>
                    </select>
                </div>
                <div className='mt-6'>
                    <h4 className='sm:text-4xl text-2xl text-gray-800 font-normal text-center'>Temperature Conversions</h4>
                    <div className='mt-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                        {temperatureConversion.map((temp,index) => <TemperatureConversion scale={temp.scale} value={temp.value} key={index} />)}
                    </div>
                </div>
            </section>
        </>
    );
}

export default TemperatureCalculator;