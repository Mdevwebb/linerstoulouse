import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="question">
                <h2>Une question ?</h2>
                    <h3>05 00 00 00 00</h3>
                    <h4>Lundi - Vendredi</h4>
                    <p>9h - 12h / 14h - 17h</p>
            </div>
            <div className="reseaux">
                <h2>Nous contacter</h2>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="avis">
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            </div>
        </div>
    );
};

export default Footer;