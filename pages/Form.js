import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Form = () => {
    return (
        <div>
           <Nav/> 
           <div className="devis">

            <h1>DEVIS</h1>
            <form>
                <div className="input">
                <label htmlFor="name">Nom</label>
                <input type="text" autoComplete='off' id='name' />
                </div>
                <div className="input">
                <label htmlFor="mail">Email</label>
                <input type="text" autoComplete='off' id='mail' />
                </div>
                <div className="input">
                <label htmlFor="msg">Votre message</label>
                <input type="text" autoComplete='off' id='msg' />
                </div>
                <button>Envoyer</button>
            </form>
           </div>
            <Footer/>
        </div>
    );
};

export default Form;