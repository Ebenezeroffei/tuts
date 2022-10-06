const handleLoginValueInput = (e,setUserDetils) => {
    const {name,value} = e.target;
    setUserDetils((prevUserDetails) => {
        return {
            ...prevUserDetails,
            [name]: value,
        };
    });
}

const signIn = (username,password) => {
    console.log(username);
    console.log(password);
}

const appContextValues = {
    handleLoginValueInput,
    signIn,
}


export default appContextValues;