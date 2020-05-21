//import lib
import React from 'react';
import myUniversity from '../../api/myUnivesity'
import Card from '../card/Card';
import CardImage from '../card/CardImage';
import CardBody from '../card/CardBody';
import userLogo from '../../img/user.png';

// create a component 
class Student extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    fetchUsers = async() =>{
       const response = await myUniversity.get('/secretary/studente');
       this.setState({users: response});
       console.log(response);
    }

    componentDidMount(){
        this.fetchUsers();
    }

    render(){
        return (
            <main role='main' className='container'>
                <Card image={userLogo} altText='Student Image'>
                    <CardImage image={userLogo} altText='user logo'/>
                    <CardBody>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </CardBody>
                </Card>
            </main>
        );
    }
}

//export a component
export default Student;