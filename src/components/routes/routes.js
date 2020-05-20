//import lib
import React from 'react';
import {Route, Switch} from 'react-router-dom';
// ROUTE
import Home from '../pages/Home';
import HeadOffice from '../pages/HeadOffice';
import DegreeCourse from '../pages/DegreeCourse';
import Discipline from '../pages/Discipline';
import Teacher from '../pages/Teacher';
import Teaching from '../pages/Teaching';
import Locations from '../pages/Locations';
import Student from '../pages/Student';


const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/sede' component={HeadOffice}/>
            <Route path='/corso_laurea' component={DegreeCourse}/>
            <Route path='/disciplina' component={Discipline}/>
            <Route path='/docente' component={Teacher}/>
            <Route path='/insegnamento' component={Teaching}/>
            <Route path='/locazione' component={Locations}/>
            <Route path='/studente' component={Student}/>
        </Switch>
    );
}

export default Routes;