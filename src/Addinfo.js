import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';



function AddInfo() {
  const [values, setValues] = useState({
    ppr: "",
    nom: "",
    prenom: "",
    grade: "",
    type_conge: "",
    date_de_conge: "",
    statu: "",
    service: ""
  });
;


    const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3030/create', values)
    .then(res =>navigate('/info'))
    .catch(err =>console.log(err))

  }

  return (
    <div>
    <div className='container'>
      <form class="row g-3 pt-4" onSubmit={handleSubmit}>
  <div className='row g-2'>
  <div className="col-md-3">
    <label htmlFor="ppr" class="form-label">PPR</label>
    <input className="form-control"
                type="number" 
                id="ppr" 
                name="ppr" 
                value={values.ppr} 
                onChange={handleChange} 
                required
                  />
  </div>
  <div className="col-md-3">
    <label htmlFor="inputPassword4" class="form-label">Nom</label>
    <input  className="form-control" 
                type="text" 
                id="nom" 
                name="nom" 
                value={values.nom} 
                onChange={handleChange} 
                required />
  </div>
  </div>
  <div className='row g-2'>
  <div className="col-3">
    <label htmlFor="inputAddress" class="form-label">Prenom</label>
    <input  className="form-control" 
                type="text" 
                id="prenom" 
                name="prenom" 
                value={values.prenom} 
                onChange={handleChange} 
                required />
  </div>
  <div className="col-3">
    <label htmlFor="inputAddress2" class="form-label"> Grade</label>
    <input  className="form-control" 
                type="text" 
                id="grade" 
                name="grade" 
                value={values.grade} 
                onChange={handleChange} 
                required />
  </div>
  </div>

  <div className='row g-2'>
  <div className="col-md-3">
    <label htmlFor="inputCity" class="form-label">Type Conge:</label>
    <select className="form-select" 
                type="text" 
                id="type_conge" 
                name="type_conge" 
                value={values.type_conge} 
                onChange={handleChange} 
                required >
         <option selected>Choose...</option>
         <option>conge de benification</option>
         <option>conge de mariage</option>
         <option>conge de maternite</option>
         <option>conge de paternite</option>         

    </select>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputState" class="form-label">Service</label>
    <select className="form-select" 
            type="text" 
            id="service" 
            name="service" 
            value={values.service} 
            onChange={handleChange} 
            required >
         <option selected>Choose...</option>
         <option>Service RH</option>
         <option>Service </option>
         <option>Service </option>
         <option>Service </option>         

    </select>
  </div>
  </div>
  <div className='row g-2'>
  <div className="col-md-3">
    <label htmlFor="inputDate" className="form-label">Date de début:</label>
    <input  className='form-control date ' 

                type='date'
                id="date_de_conge" 
                name="date_de_conge" 
                value={values.date_de_conge} 
                onChange={handleChange} 
                required/>
                
  </div>
  <div className="col-md-3">
    <label htmlFor="inputDate" className="form-label">Date de fin:</label>
    <input  className='form-control date ' 

                type='date'
                id="date_de_conge" 
                name="date_de_conge" 
                
                onChange={handleChange} 
                required/>
                
  </div>

  </div>
  <div className='row g-2'>
  <div className="col-3">
  <label htmlFor="statu" className='details'>Statu:</label>
  <input  className='form-control'
            type="text" 
            id="statu" 
            name="statu" 
            value={values.statu} 
            onChange={handleChange} 
            required 
          />


  </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>

      
  
  
    </div>
    <Footer/>
    </div>
    
  );
}

export default AddInfo;
