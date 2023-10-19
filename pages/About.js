import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Nav/>
            <div className="about">
                <div className="info">
                <h1>A propos</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptate doloribus eos consectetur facere, laudantium totam atque qui numquam architecto, vitae, ut accusamus. Error doloremque, eius sint facere saepe, culpa fugit harum officia nobis, ipsa tempora veritatis. Quisquam illum possimus error eius sapiente earum eos, architecto maxime aut! Sequi laborum perspiciatis non quod, commodi ratione ea? Repellendus error aut sequi voluptates libero modi! Sed veritatis nihil necessitatibus esse est ipsam omnis error, vitae ducimus neque aut at, iure quibusdam enim minima! Ex neque, assumenda est soluta vitae ut labore inventore eos, hic facilis voluptates, quaerat ea placeat fuga esse ipsa.</p>
                </div>
            </div>
                <Footer/>
        </div>
    );
};

export default About;