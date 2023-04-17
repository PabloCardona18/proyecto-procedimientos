import { useState } from "react";


export const Form = () => {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",  
    address: "",
    reference: "",
  });
  
 
  const handleInputChange = (event) =>{
    const {name, value} = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (event) =>{
    event.preventDefault();
    console.log(values);
  };




  return(
        
   <form className="conteiner" onSubmit={handleForm }>
   
 <div className="nombre">
    <input type="text"
    name="name"
    value={values.name}
    placeholder="Ingrese su nombre"
    onChange={handleInputChange} 
    />
</div>

<div className="apellido">
    <input type="text"
    name="lastName"
    value={values.lastName}
    placeholder="imgrese su apellido"
    onChange={handleInputChange} 
    />
</div>

<div className="email">
    <input type="email"
    name="email"
    value={values.email}
    placeholder="ingrese su email"
    onChange={handleInputChange} 
    />
</div>

<div className="contraseña">
    <input type="password"
    name="password"
    value={values.password}
    placeholder="ingrese su contraseña"
    onChange={handleInputChange} 
    />
</div>

<div className="celular">
    <input type="text"
    name="phone"
    value={values.phone}
    placeholder="ingrse su telefono"
    onChange={handleInputChange} />
</div>

<div className="dirrecion">
    <input type="text"
    name="address"
    value={values.address}
    placeholder="ingrese su dirrecion"
    onChange={handleInputChange} 
    />
</div>

<div className="referencia">
    <input type="text"
    name="reference"
    value={values.referenceñ}
    placeholder="ingrese una referencia"
    onChange={handleInputChange}
    />
</div>

   <div className="button">
    <button type="submit">send data</button>
    </div>

   </form>

    
    
  )
}