//import lib
import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom';
// NAVIGATION
import Navigation from './navbar/Navigation';
import NavItem from './navbar/NavItem';
import NavDropdown from './navbar/NavDropdown';
import Routes from './routes/routes'

//create a component
class App extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navigation navBrandName='myUniversity' className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
                            <NavItem path="/" name="Home" exact={true}/>
                            <NavItem path="/sede" name="Sede"/>
                            <NavItem path="/corso_laurea" name="Corso di laurea"/>
                            <NavItem path="/disciplina" name="disciplina"/>
                            <NavItem path="/docente" name="docente"/>
                            <NavItem path="/insegnamento" name="insegnamento"/>
                            <NavItem path="/locazione" name="locazione"/>
                            <NavItem path="/studente" name="studente"/>
                        </Navigation>
                        <Routes/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

//export component
export default App;