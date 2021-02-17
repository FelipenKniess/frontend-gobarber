import React, {useState, ChangeEvent} from 'react';

const Home = () => {

    const [formData, setFormData] =  useState({
        provider: '',
        date: ''
    });

    function onChangeInput(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        console.log(formData);
    }

    return(
        <form>
            <label htmlFor="provider">Provider:</label>
            <input id="provider" type="text" onChange={onChangeInput} />

            <label htmlFor="date">Date:</label>
            <input id="date" type="date" onChange={onChangeInput} />
        </form>
    )
}

export default Home;