//import lib
import React from 'react';
// IMAGES
import parthenopeLogo from '../../img/Parthenope-Logo-v3.png'

//create a component
class Home extends React.Component{
    render(){
        return (
        <main role='main' className='container'>
            <div className='jumbotron'>
                <h1>Segreteria - Università degli studi parthenope</h1>
                <hr></hr>
                <p>Progetto creato a puro scopo didattico, volto a dimostrare il funzionamento delle api
                   scritte in Python con Flask</p>
                <img src={parthenopeLogo} alt='parthenope logo' className='img-fluid'/>
            </div>
        </main>
        );
    }
}

//export a component
export default Home;