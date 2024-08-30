import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateInfo() {
    const [updatedInfo, setUpdatedInfo] = useState({});
    const [employeeInfo, setEmployeeInfo] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const { ppr } = useParams(); 

    useEffect(() => {
      const fetchEmployeeInfo = async () => {
          try {
              const response = await fetch(`http://localhost:3030/getrecord/${ppr}`);
              if (!response.ok) {
                  throw new Error('Failed employee information');
              }
              const data = await response.json();
              console.log('Employee Info:', data); 
              setEmployeeInfo(data);
              setError('');
          } catch (error) {
              setError(error.message);
              setEmployeeInfo(null);
          }
      };
  
      fetchEmployeeInfo(); 
  
  }, [ppr]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo({ ...updatedInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3030/update/${ppr}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedInfo),
      });
      if (!response.ok) {
        throw new Error('Failed to update employee information');
      }
      // Navigate to Info page after successful update
      navigate('/info');
    } catch (error) {
      setError(error.message);
    }
  };

    return (
        <div className='container'>
            {error && <p>{error}</p>}
            {employeeInfo && (
                <div>
                    <form onSubmit={handleSubmit} className="row g-3 pt-4">
                        <div className='row g-2'>
                        <div className="col-md-3">
                        <label>Nom:</label> 
                        <input type="text" name="Nom" value={updatedInfo.Nom || employeeInfo[0].Nom} onChange={handleInputChange} className='form-control' /> 
                        </div>
                        <div className="col-md-3">
                        <label>Prenom:</label>
                        <input type="text" name="Prenom" value={updatedInfo.Prenom || employeeInfo[0].Prenom} onChange={handleInputChange} className='form-control' />
                        </div>
                        </div>
                        
                        <div className='row g-2'>
    <div className="col-md-3">
        <label>Grade:</label>
        <input 
            type="text" 
            name="Grade" 
            value={updatedInfo.Grade || employeeInfo[0].Grade} 
            onChange={handleInputChange} 
            className='form-control' 
        />
    </div>
    <div className="col-md-3">
        <label>Type Conge:</label>
        <input 
            type="text" 
            name="Type_conge" 
            value={updatedInfo.Type_conge || employeeInfo[0].Type_conge} 
            onChange={handleInputChange} 
            className='form-control' 
        />
    </div>
</div>
<div className='row g-2'>
    <div className="col-md-3">
        <label>Date de Conge:</label>
        <input 
            type="text" 
            name="Date_de_conge" 
            value={updatedInfo.Date_de_conge || employeeInfo[0].Date_de_conge} 
            onChange={handleInputChange} 
            className='form-control' 
        />
    </div>
    <div className="col-md-3">
        <label>Statu:</label>
        <input 
            type="text" 
            name="Statu" 
            value={updatedInfo.Statu || employeeInfo[0].Statu} 
            onChange={handleInputChange} 
            className='form-control' 
        />
    </div>
</div>
<div className="col-md-3">
    <label>Service:</label>
    <input 
        type="text" 
        name="service" 
        value={updatedInfo.service || employeeInfo[0].service} 
        onChange={handleInputChange} 
        className='form-control' 
    />
</div>
                        <div className='col-12'>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default UpdateInfo;
