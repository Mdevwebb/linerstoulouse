import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Offres = () => {
    return (
        <div>
           <Nav/>
           <div className="offres">

            <h1>NOS OFFRES</h1>
            <div className="cards">

            <div className="card">
                <h3>Liner 75/100 Blanc</h3>
                <img src="./Assets/Imgs/typesliners/linerblanc.jpg" alt="liner blanc" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, harum non praesentium consequatur id sit?</p>
            </div>
            <div className="card">
                <h3>Liner 75/100 Bleu foncé</h3>
                <img src="./Assets/Imgs/typesliners/linerbleufonce.jpeg" alt="liner bleu foncé" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi provident omnis officiis iusto nihil eaque?
                </p>
            </div>
            <div className="card">
                <h3>Liner 75/100 Vert</h3>
                <img src="./Assets/Imgs/typesliners/linervert.jpeg" alt="liner vert" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint placeat, consequuntur expedita dicta impedit beatae?</p>
            </div>
            </div>
           </div>
           <Footer/>
        </div>
    );
};

export default Offres;