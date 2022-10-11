
const handleLoginValueInput = (e,setUserDetils) => {
    const {name,value} = e.target;
    setUserDetils((prevUserDetails) => {
        return {
            ...prevUserDetails,
            [name]: value,
        };
    });
}


const appContextValues = {
    handleLoginValueInput,
}


export default appContextValues;