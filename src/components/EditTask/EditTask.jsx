import { useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import EditOne from "./EditOne";
import EditTwo from "./EditTwo";
import EditThree from "./EditThree";
import EditFour from "./EditFour";
import EditFive from "./EditFive";
import EditSix from "./EditSix";
import EditSeven from "./EditSeven";

const EditTask = () => {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state);

  return (
    <div>
      <h1>All Edit Components</h1>
      <EditOne />
      <EditTwo />
      <EditThree />
      <EditFour />
      <EditFive />
      <EditSix />
      <EditSeven />
    </div>
  );
};

export default EditTask;
