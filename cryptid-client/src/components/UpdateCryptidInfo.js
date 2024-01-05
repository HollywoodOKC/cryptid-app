import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import '../Font.css';

function UpdateCryptidInfo(props) {
    const [cryptid, setCryptid] = useState({
        title: '',
        state: '',
        author: '',
        description: '',
        cryptidOf_Month: false,
        published_date: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8082/api/cryptids/${id}`)
            .then((res) => {
                setCryptid({
                    title: res.data.title,
                    state: res.data.state,
                    author: res.data.author,
                    description: res.data.description,
                    cryptidOfMonth: res.data.cryptidOf_Month,
                    published_date: res.data.published_date,
                });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);

    const onChange = (e) => {
        setCryptid({ ...cryptid, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: cryptid.title,
            state: cryptid.state,
            author: cryptid.author,
            description: cryptid.description,
            cryptidOfMonth: cryptid.cryptidOf_Month,
            published_date: cryptid.published_date,
        };

        axios
            .put(`http://localhost:8082/api/cryptids/${id}`, data)
            .then((res) => {
                navigate(`/show-cryptid/${id}`);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className='UpdateCryptidInfo'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Cryptid List
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Edit Cryptid Information</h1>
                        <p className='lead text-center'>Update Cryptid's Info</p>
                    </div>
                </div>

                <div className='col-md-8 m-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='title'>Name</label>
                            <input
                                type='text'
                                placeholder='Name of Cryptid'
                                name='title'
                                className='form-control'
                                value={cryptid.title}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='state'>State or Country</label>
                            <input
                                type='text'
                                placeholder='State or Country'
                                name='state'
                                className='form-control'
                                value={cryptid.state}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='author'>Author</label>
                            <input
                                type='text'
                                placeholder='Author'
                                name='author'
                                className='form-control'
                                value={cryptid.author}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='description'>Description</label>
                            <textarea
                                type='text'
                                placeholder='Description of the Cryptid'
                                name='description'
                                className='form-control'
                                value={cryptid.description}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <button
                            type='submit'
                            className='btn btn-outline-info btn-lg btn-block'
                        >
                            Update Cryptid
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateCryptidInfo;