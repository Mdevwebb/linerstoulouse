import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Engagements = () => {
    return (
        <div>
           <Nav/>
           <div className="container-engag">

                <h1>NOS ENGAGEMENTS</h1>
                <div className="engag">

                <div className="qualite">
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </div>
                <div className="price">
                    <ul>
                        <li>Lorem.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                </div>
                </div>
           </div>
                <Footer/>
        </div>
    );
};

export default Engagements;