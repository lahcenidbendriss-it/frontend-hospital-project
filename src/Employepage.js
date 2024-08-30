import React, { useState } from 'react';
import { handleDownload } from './Info';
import Footer from './Footer';

function Employepage() {
  const [ppr, setPpr] = useState('');
  const [employeeInfo, setEmployeeInfo] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3030/getrecord/${ppr}`);
      if (!response.ok) {
        throw new Error('Employee not found');
      }
      const data = await response.json();
      console.log("Data from server:", data); 
      setEmployeeInfo(data);
      setError('');
    } catch (error) {
      setError(error.message);
      setEmployeeInfo([]);
    }
  };

  return (
    <div>
      <section>
        <div className='container mt-5 pt-5'>
          <div className='row'>
            <div className='col-12 col-sm-8 col-md-6 m-auto'>
              <div className='card border-0 shadow'>
                <div className='card-body'>
                  <div className='d-flex align-items-center justify-content-center my-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                  </div>
                  <form action='' onSubmit={handleSubmit}>
                    <label>Enter PPR:</label>
                    <input 
                      type='number' 
                      name='' 
                      id='' 
                      className='form-control my-3 py-2' 
                      placeholder='Type your PPR' 
                      value={ppr} 
                      onChange={(e) => setPpr(e.target.value)} 
                      required 
                    />
                    <div className='text-center mt-3'>
                      <button type='submit' className='btn btn-primary mt-4'>Recherche</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {error && <p>{error}</p>}
      {employeeInfo.length > 0 && (
        <div className='container mt-5'>
          <table className='table'>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Grade</th>
                <th>Type de conge</th>
                <th>Date de conge</th>
                <th>Statu</th>
                <th>Service</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeeInfo.map(employee => (
                <tr key={employee.PPR}>
                  <td>{employee.Nom}</td>
                  <td>{employee.Prenom}</td>
                  <td>{employee.Grade}</td>
                  <td>{employee.Type_conge}</td>
                  <td>{employee.Date_de_conge}</td>
                  <td>{employee.Statu}</td>
                  <td>{employee.service}</td>
                  <td>
                    <button onClick={() => handleDownload(employee)} className='btn btn-primary'>
                      <i className="fa fa-download"></i> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Employepage;

