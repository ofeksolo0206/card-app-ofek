
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function useText(initialText){

    
    const navigate = useNavigate();
    const [text,setText] = useState(initialText);
    const update = (e) => setText(e.target.value);
    const reset = () => {
        setText(initialText);
    }
    const cancel = () => navigate(ROUTES.ROOT);
    const onSubmit = () => console.log(text)
    

    return {text,update,reset,cancel,onSubmit};
}