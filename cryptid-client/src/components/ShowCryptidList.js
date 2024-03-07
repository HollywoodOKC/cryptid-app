import React, { useState, useEffect } from 'react';
import '../App.css';
import '../Font.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CryptidCard from './CryptidCard';

function ShowCryptidList() {
    const [cryptid, setCryptid] = useState([]);

    useEffect(() => {
        axios
            .get('http://192.168.0.7:8082/api/cryptids')
            .then((res) => {
                setCryptid(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowCryptidList');
            });
    }, []);

    const cryptidList =
        cryptid.length === 0
            ? 'there is no cryptid record!'
            : cryptid.map((cryptid, k) => <CryptidCard cryptid={cryptid} key={k} />);

    return (
        <div className='ShowCryptidList'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <br />
                        <h2 className='display-4 text-center'>Cryptids List</h2>
                    </div>

                    <div className='col-md-11'>
                        <Link
                            to='/create-cryptid'
                            className='btn btn-outline-warning float-right'
                        >
                            + Add New Cryptid
                        </Link>
                        <br />
                        <br />
                        <hr />
                    </div>
                </div>

                <div className='list'>{cryptidList}</div>
            </div>
        </div>
    );
}

export default ShowCryptidList;