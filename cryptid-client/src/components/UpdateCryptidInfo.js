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
        cryptidOf_month: false,
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
                    cryptidOf_month: false,
                    published_date: res.data.published_date,
                });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);

    const truth = (e) => {
        if (e.target.checked) {
            return true;
        } else {
            return false;
        }
    }

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
            cryptidOf_month: true,
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
                                id='title'
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
                                id='state'
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
                                id='author'
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
                                id='description'
                                className='form-control'
                                value={cryptid.description}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-check'>
                            <input
                                type='checkbox'
                                placeholder='Cryptid of Month'
                                id='cryptidOf_month'
                                value={cryptid.cryptidOf_month}
                                onChange={onChange}
                                onClick={truth}
                                className='form-check-input'
                            />
                            <label className="form-check-label" htmlFor='cryptidOf_month'>Cryptid Of Month</label>
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