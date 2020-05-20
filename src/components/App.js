//import lib
import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
// NAVIGATION
import Navigation from './navbar/Navigation';
import NavItem from './navbar/NavItem';
import NavDropdown from './navbar/NavDropdown';
// ROUTE
import Home from './pages/Home';
import HeadOffice from './pages/HeadOffice';
import DegreeCourse from './pages/DegreeCourse';
import Discipline from './pages/Discipline';
import Teacher from './pages/Teacher';
import Teaching from './pages/Teaching';
import Locations from './pages/Locations';
import Student from './pages/Student';

//create a component
class App extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navigation navBrandName='myUniversity' className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
                            <NavItem path="/" name="Home"/>
                            <NavItem path="/sede" name="Sede"/>
                            <NavItem path="/corso_laurea" name="Corso di laurea"/>
                            <NavItem path="/disciplina" name="disciplina"/>
                            <NavItem path="/docente" name="docente"/>
                            <NavItem path="/insegnamento" name="insegnamento"/>
                            <NavItem path="/locazione" name="locazione"/>
                            <NavItem path="/studente" name="studente"/>
                            <NavDropdown name="Altro">
                                <Link className="dropdown-item" to="/">menu #1</Link>
                                <Link className="dropdown-item" to="/">menu #2</Link>
                                <Link className="dropdown-item" to="/">menu #3 ...</Link>
                            </NavDropdown>
                        </Navigation>
                        <Route path='/' component={Home} exact/>
                        <Route path='/sede' component={HeadOffice} exact/>
                        <Route path='/corso_laurea' component={DegreeCourse} exact/>
                        <Route path='/disciplina' component={Discipline} exact/>
                        <Route path='/docente' component={Teacher} exact/>
                        <Route path='/insegnamento' component={Teaching} exact/>
                        <Route path='/locazione' component={Locations} exact/>
                        <Route path='/studente' component={Student} exact/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

//export component
export default App;