import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="home">
                <h1>La pose de liners qu'il vous faut</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem dignissimos ipsum quia minus voluptas, facilis dolorem assumenda! Vero iure libero voluptates itaque sit totam porro minima recusandae nemo hic consectetur odit omnis reiciendis explicabo consequuntur ducimus, voluptatibus accusantium officia debitis magni. Quae nobis natus porro amet obcaecati similique ipsam.</p>
                <NavLink to="/about"><button>Qu'est-ce qu'un liner ?</button></NavLink>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;