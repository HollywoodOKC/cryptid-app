import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateCryptid = (props) => {
    // Define the state with useState hook
    const navigate = useNavigate();
    const [cryptid, setCryptid] = useState({
        title: '',
        state: '',
        author: '',
        description: ''
    });

    const onChange = (e) => {
        setCryptid({ ...cryptid, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://192.168.0.7:8082/api/cryptids', cryptid)
            .then((res) => {
                setCryptid({
                    title: '',
                    state: '',
                    author: '',
                    description: '',
                    published_date: '',
                });

                // Push to /
                navigate('/');
            })
            .catch((err) => {
                console.log('Error in CreateCryptid');
            });
    };

    return (
        <div className='CreateCryptid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Cryptid List
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Add Cryptid</h1>
                        <p className='lead text-center'>Create new Cryptid for Database</p>

                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Cryptid Name'
                                    name='title'
                                    className='form-control'
                                    value={cryptid.title}
                                    onChange={onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='State or Country'
                                    name='state'
                                    className='form-control'
                                    value={cryptid.state}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Author'
                                    name='author'
                                    className='form-control'
                                    value={cryptid.author}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Describe this Cryptid'
                                    name='description'
                                    className='form-control'
                                    value={cryptid.description}
                                    onChange={onChange}
                                />
                            </div>

                            <input
                                type='submit'
                                className='btn btn-outline-warning btn-block mt-4'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCryptid;