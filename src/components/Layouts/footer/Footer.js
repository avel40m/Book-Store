import React, { useRef } from 'react'
import './footer.style.css';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();
    const serviceId = 'service_o3evoo9';
    const templateId = 'template_9mto6ce';
    const publicKey = 'qjKqcD6SkDCJUk4rE';

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        emailjs.sendForm(serviceId,templateId,form.current,publicKey)
            .then(response => console.log(response.text))
            .catch(err => console.log(err.text));
        e.target.reset();
    };
  return (
    <section className='footer-container'>
        <div className="container">
            <h2>Si tiene alguna duda, no dude en preguntar aquí.</h2>
            <form onSubmit={handleSubmit} ref={form} className='footer-form'>
                <div className="form-group">
                    <label htmlFor="name" className='form-label'>Nombre:</label>
                    <input type="text" id='name' name='user_name' className='form-input' placeholder='Ingresar Nombre' />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className='form-label'>Correo electronico:</label>
                    <input type="email" id='email' name='user_email' className='form-input' placeholder='Ingresar Correo' />
                </div>
                <div className="form-group">
                    <label htmlFor="query" className='form-label'>Consultas:</label>
                    <textarea className='form-input' name='message' id='query' placeholder='Ingresar consultas'></textarea>
                </div>
                <div className="form-group">
                    <input type='submit' className='form-submit' value='Enviar'/>
                </div>
            </form>
            <p>&copy; 2023 Bookworm. All right Reserved</p>
        </div>
    </section>
  )
}

export default Footer
