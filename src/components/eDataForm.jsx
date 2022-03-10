import { useState } from "react";

export const EmpForm = ({ getData }) => {
  const [empData, setempData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    maritalStatus: "Unmarried",
  });
 

  const handleEmpData = (e) => {
    const { id, value } = e.target;
    setempData({
      ...empData,
      [id]: value,
    });
  };

  const handleMaritalStatus = (e) => {
    const { id, value, checked } = e.target;
   if (e.target.checked === true){
      setempData({
        ...empData,
        [id]: "Married",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(empData);
    if (
      empData.name === "" ||
      empData.age === "" ||
      empData.address === "" ||
      empData.salary === "" ||
      empData.department === ""
    ) {
      alert("Please fill all the credential give below");
    } else {
      fetch("http://localhost:3002/employees", {
        method: "POST",
        body: JSON.stringify(empData),
        headers: {
          "content-type": "application/json",
        },
      })
        .then(() => {
          getData();
        })
        .then(alert("Employee Details saved successfully"))
        .then(
          setempData({
            name: "",
            age: "",
            address: "",
            department: "",
            salary: "",
            maritalStatus: "",
          })
        );
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          onChange={handleEmpData}
          placeholder="Enter your name"
        />
        <input
          type="number"
          id="age"
          onChange={handleEmpData}
          placeholder="Enter your age"
        />
        <input
          type="text"
          id="address"
          onChange={handleEmpData}
          placeholder="Enter your address"
        />
        <select onChange={handleEmpData} id="department">
          <option value="---">--Department</option>
          <option value="Operatons">Operatons</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
          <option value="Testing">Testing</option>
        </select>
        <input
          type="number"
          onChange={handleEmpData}
          id="salary"
          placeholder="Enter your salary"
        />
        <label htmlFor="maritalStatus">Married</label>
        <input
          onChange={handleMaritalStatus}
          type="checkbox"
          id="maritalStatus"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
