//import lib
import React from 'react';
// COMPONENTS
import Jumbotron from '../bootstrap/Jumbotron';
import ResponsiveImage from '../bootstrap/ResponsiveImage'

// IMAGES
import parthenopeLogo from '../../img/Parthenope-Logo-v3.png'

//create a component
class Home extends React.Component{
    render(){
        return (
        <main role='main' className='container'>
            <Jumbotron>
                <h1>Segreteria - Università degli studi parthenope</h1>
                <hr></hr>
                <p>Progetto creato a puro scopo didattico, volto a dimostrare il funzionamento delle api
                   scritte in Python con Flask</p>
                <ResponsiveImage path={parthenopeLogo} alt='parthenope logo'/>
            </Jumbotron>
        </main>
        );
    }
}

//export a component
export default Home;