import React from 'react';


const Footer = () => {

    return (

            <div style={{backgroundColor:"#ffab91", display:'flex', justifyContent:'space-around',marginBottom:0,flex: '0 0 auto', paddinTop: 10 }}>
                <div style={{width:'300px', marginTop:'30px'}}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <img width="30px" height="30px" style={{margin:'0 20px'}} src="https://image.flaticon.com/icons/png/128/684/684809.png" alt="" />
                        <p>Chyngyz-Aitmatova.pr 45a</p>
                        </div>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <img width="30px" height="30px" style={{margin:'0 20px'}} src="https://image.flaticon.com/icons/png/128/126/126509.png" alt="" />
                        <p>+996-(706)-070-511</p>
                        </div>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <img width="30px" height="30px" style={{margin:'0 20px'}} src="https://image.flaticon.com/icons/png/128/561/561127.png" alt="" />
                        <p>adilalimbekov0@gmail.com</p>
                        </div>
                </div>
                <div style={{width:'350px'}}>
                    <h2>About Company</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate! Minus doloribus nihil beatae, animi eligendi aut mollitia cupiditate minima doloremque pariatur molestiae libero tenetur excepturi impedit dolores exercitationem suscipit.</p>
                </div>
            </div>

    );
};

export default Footer;