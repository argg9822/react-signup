import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Signup.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const Signup = (props) => {
  return (
    <div className='pt-2'>
        <div className='flex-center-items pb-md-2'>
            <h1>{props.tituloForm}</h1>
        </div>
        <div className='border container-fluid pb-3'>
            <form id='form-signup'>
                <div className='row pt-3 px-md-5'>
                    <div className='col-md-6'>
                        <div>
                            <label for= "nombres">Nombres</label>
                        </div>
                        <div className='input-group'>
                            <span className='input-group-text'><i className='fa fa-user'></i></span>
                            <input type = "text" placeholder='Nombres' className='form-control' id='nombres' name='nombres'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <label for= "apellidos">Apellidos</label>
                        </div>
                        <div className='input-group'>
                            <span className='input-group-text'><i className='fa fa-user'></i></span>
                            <input type = "text" placeholder='Apellidos' className='form-control' id='apellidos' name='apellidos'/>
                        </div>
                    </div>
                </div>

                <div className='row pt-3 px-md-5'>
                    <div className='col-md-6'>
                        <div>
                            <label for= "email">{props.campo3}</label>
                        </div>
                        <div className='input-group'>
                            <span className='input-group-text'><FontAwesomeIcon icon={faEnvelope} /></span>
                            <input type = "email" placeholder='Email' className='form-control' id='email' name='email'/>
                        </div>
                    </div>
                    <div className='col-md-6 container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div>
                                    <label for= "direccion">Dirección</label>
                                </div>
                                <div className='input-group'>
                                    <span className='input-group-text'><FontAwesomeIcon icon={faLocationPin} /></span>
                                    <input type = "text" placeholder='Dirección de residencia' className='form-control' id='direccion' name='direccion'/>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <label for= "codPostal">Código postal</label>
                                </div>
                                <div className='input-group'>
                                    <span className='input-group-text'><FontAwesomeIcon icon={faLocationCrosshairs} /></span>
                                    <input type = "text" placeholder='Código postal' className='form-control' id='codPostal' name='codPostal'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row pt-3 px-md-5'>
                    <div className='col-md-6'>
                        <div>
                            <label for= "password">Contraseña</label>
                        </div>
                        <div className='input-group'>
                            <span className='input-group-text'><FontAwesomeIcon icon={faKey} /></span>
                            <input type = "password" placeholder='Contraseña' className='form-control' id='password' name='password'/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <label for= "direccion">Confirmar contraseña</label>
                        </div>
                        <div className='input-group'>
                            <span className='input-group-text'><i className="fa fa-lock"></i></span>
                            <input type = "password" placeholder='Confirme la contraseña' className='form-control' id='passwordConfirm' name='passwordConfirm'/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
}


export default Signup;
