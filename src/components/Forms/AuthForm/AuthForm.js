import React, { useState } from 'react'
import app from '../../../firebase/Firebase';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthForm = ({value}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = e => {
    e.preventDefault();
    const auth = getAuth(app);

    if(value === true){
      signInWithEmailAndPassword(auth,email,password)
      .then(() => {
        navigate('/');
      }).catch((err) => {
        let mensaje = err.message.split(' ',3)[2].split('/',2)[1].split(')')[0];
        if (mensaje === 'user-not-found') 
          Swal.fire('No existe el usuario en la base de datos','','error');
        
        if(mensaje === 'wrong-password')
          Swal.fire('Contraseña incorrecta','','error');
       
      });
    } else {
      createUserWithEmailAndPassword(auth,email,password)
      .then(userCreditials => {
        userCreditials.user.displayName = username;
        navigate('/');
      })
      .catch(err => {
        let mensaje = err.code
        if (mensaje === 'auth/email-already-in-use') {
          Swal.fire('El email existe en la base de datos','','error');
        }
        if (mensaje === 'auth/weak-password') {
          Swal.fire('La contraseña debe tener 6 carateres como minimo','','error');
        }
      });
    }

  }
  return (
    <form onSubmit={handleSubmit}>
      {
        !value && (
          <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
           type="text"
           id='username' 
           className='form-input' 
           placeholder='Ingresar usuario'
           required
           value={username}
           onChange={e => setUsername(e.target.value)}
           />
        </div>
        )
      }
    <div className="form-group">
      <label htmlFor="email">Correo electronico:</label>
      <input
       type="email"
       id='email' 
       className='form-input' 
       placeholder='Ingresar correo'
       required
       value={email}
       onChange={e => setEmail(e.target.value)}
       />
    </div>
    <div className="form-group">
      <label htmlFor="password">Contraseña:</label>
      <input 
       type="password" 
       id='password' 
       className='form-input' 
       placeholder='Ingresar contraseña'
       required
       value={password}
       onChange={e => setPassword(e.target.value)}
       />
    </div>
    <div className="form-group">
      <input type="submit" className='button-primary' value={value ? 'Ingresar' : 'Registrar'} />
    </div>
  </form>
  )
}

export default AuthForm
