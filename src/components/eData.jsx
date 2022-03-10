
import { EmpForm } from "./eDataForm";
import { useState, useEffect} from "react";
import { EmpTable } from "./eDataTable";

export const 
EmpData = () => {
const [data, setdata] = useState([]);

const getData = () => {
    fetch("http://localhost:3002/employees").then(res => res.json()).then(value => {setdata(value)});
}

useEffect(() => {
  getData();
}, [])


    return (
        <>
         <EmpForm getData = {getData}/>
         <EmpTable data = {data}/>
        </>
    )
}