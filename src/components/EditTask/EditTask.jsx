import { useState } from "react";
import { useLocation } from "react-router-dom";

const EditTask = () =>{
    const location = useLocation();
    const [formData, setFormData] = useState(location.state);


    return (<div>edit task</div>)
}

export default EditTask;