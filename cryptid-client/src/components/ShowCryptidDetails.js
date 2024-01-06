import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import '../Font.css';
import axios from 'axios';

function ShowCryptidDetails(props) {
    const [cryptid, setCryptid] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8082/api/cryptids/${id}`)
            .then((res) => {
                setCryptid(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);

    const onDeleteClick = () => {
        axios
            .delete(`http://localhost:8082/api/cryptids/${id}`)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const CryptidItem = (
        <div>
            <table className='table table-hover table-dark'>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Name</td>
                        <td>{cryptid.title}</td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>State</td>
                        <td>{cryptid.state}</td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>Author</td>
                        <td>{cryptid.author}</td>
                    </tr>
                    <tr>
                        <th scope='row'>5</th>
                        <td>Description</td>
                        <td>{cryptid.description}</td>
                    </tr>
                    <tr>
                        <th scope='row'>6</th>
                        <td>Cryptid of Month?</td>
                        <td>{cryptid.cryptidOf_month}</td>
                    </tr>
                    <tr>
                        <th scope='row'>7</th>
                        <td>Update</td>
                        <td>{cryptid.updated_date}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    return (
        <div className='ShowCryptidDetails'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 m-auto'>
                        <br /> <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Cryptid List
                        </Link>
                    </div>
                    <br />
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Cryptid Records</h1>
                        <p className='lead text-center'>View Cryptids Info</p>
                        <hr /> <br />
                    </div>
                    <div className='col-md-10 m-auto'>{CryptidItem}</div>
                    <div className='col-md-6 m-auto'>
                        <button
                            type='button'
                            className='btn btn-outline-danger btn-lg btn-block'
                            onClick={() => {
                                onDeleteClick(cryptid.id);
                            }}
                        >
                            Delete Cryptid
                        </button>
                    </div>
                    <div className='col-md-6 m-auto'>
                        <Link
                            to={`/edit-cryptid/${cryptid._id}`}
                            className='btn btn-outline-info btn-lg btn-block'
                        >
                            Edit Cryptid
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowCryptidDetails;