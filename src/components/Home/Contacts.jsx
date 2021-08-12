import React from 'react';

const Contacts = () => {
    return (
        <div style={{display:'flex',flexDirection:'column' ,alignItems:'center',justifyContent:'center',  minHeight: 'calc(75vh - 80px)'}}>
            <h2>Our Contacts</h2>
            <ul>
                <li>Director: +999-(000)-090-090</li>
                <li>Maneger: +999-(000)-090-090</li>
                <li>Dizainer: +999-(000)-090-090</li>
                <li>Programmer: +999-(000)-090-090</li>
            </ul>
        </div>
    );
};

export default Contacts;