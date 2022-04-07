import React,{useState} from 'react'


const passwordToggle=()=>{
    const[visible, setVisiblity]=useState(false);

    const icons= <FontAwesomeIcon icons={visible? 'eyelash':'eye'}/>
    

    const InputType =visible? 'text':'password';

    return [InputType,icons];
};

export default passwordToggle;
