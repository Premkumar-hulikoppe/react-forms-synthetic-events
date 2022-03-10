import { v4 as uuid } from "uuid";
export const EmpTable = ({ data }) => {
  return (
    <div className="table">
      <table border = "1px solid black">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={uuid()}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>{e.department}</td>
              <td>{e.salary}</td>
              <td>{e.maritalStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
