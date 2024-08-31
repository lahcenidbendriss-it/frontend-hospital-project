import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer';
export function handleDownload (userInfo){
    const content = `
    PPR: ${userInfo.PPR}
    Nom: ${userInfo.Nom}
    Prenom: ${userInfo.Prenom}
    Grade: ${userInfo.Grade}
    Type de conge: ${userInfo.Type_conge}
    Date de conge: ${userInfo.Date_de_conge}
    Statu: ${userInfo.Statu}
    Service: ${userInfo.service}
`;
const blob = new Blob([content], { type: 'text/plain' });
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.setAttribute('download', `${userInfo.PPR}_info.txt`);
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
URL.revokeObjectURL(url);

}

function Info() {
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        axios.get('https://backend-hospital-project.onrender.com')
            .then(res => setEmployees(res.data))
            .catch(err => console.log(err));
    }, []);


    const handleDelete = (ppr) => {
        const confirmation = window.confirm('Are you sure you want to delete this employee?');
        if (confirmation) { 
            axios.delete(`https://backend-hospital-project.onrender.com/delete/${ppr}`)
                .then(res => {
                    console.log(res.data);
                    setEmployees(employees.filter(employee => employee.PPR !== ppr));
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div>
        <div className='container mt-5'>
            <Link to="/" className='btn btn-success'>Ajoute employe</Link>
            <table className="table">
                <thead>
                    <tr>
                    <th>ppr</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Grade</th>
                        <th>Type de conge</th>
                        <th>Date de conge</th>
                        <th>Statu</th>
                        <th>Service</th>
                        <th>Actions</th>
                        <th>Action 2</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee =>
                        <tr key={employee.PPR}>
                        <td>{employee.PPR}</td>
                            <td>{employee.Nom}</td>
                            <td>{employee.Prenom}</td>
                            <td>{employee.Grade}</td>
                            <td>{employee.Type_conge}</td>
                            <td>{employee.Date_de_conge}</td>
                            <td>{employee.Statu}</td>
                            <td>{employee.service}</td>
                            <td>
                                <button onClick={() => handleDelete(employee.PPR)} className='btn btn-danger m-1'><i className="fa fa-trash"></i> Delete</button>
                                <Link to={`/update/${employee.PPR}`} className='btn btn-info '><i className="fa fa-edit"></i> Update</Link>
                            </td>
                            <td>
                            <button onClick={() => handleDownload(employee)} className='btn btn-primary'><i className="fa fa-download"></i> Download</button>


                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            

        </div>
        <Footer/>
        </div>
    );
}

export default Info;

