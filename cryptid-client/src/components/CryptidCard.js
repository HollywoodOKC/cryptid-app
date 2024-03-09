import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../Font.css';

const CryptidCard = (props) => {
    const cryptid = props.cryptid;

    return (
        <div className='card-container'>
            <img
                src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8889266901743.5b272edfa5b78.png'
                alt='Cryptids'
                height={200}
            />
            <div className='desc'>
                <h2>
                    <Link id="cryptidName" to={`/show-cryptid/${cryptid._id}`}>{cryptid.title}</Link>
                </h2>
                <h3 className='author'>{cryptid.author}</h3>
                <p className='description'>{cryptid.description}</p>
            </div>
        </div>
    );
};

export default CryptidCard;