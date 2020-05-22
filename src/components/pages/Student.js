//import lib
import React from 'react';
import myUniversity from '../../api/myUnivesity';
import StudentCardList from '../StudentCardList';
import SectionTitle from '../SectionTitle';
import Card from '../card/Card';
import CardImage from '../card/CardImage';
import listLogo from '../../img/list.png';
import addLogo from '../../img/plus.png';
import deleteLogo from '../../img/trash.png';
import userLogo from '../../img/user.png';
import CardBody from '../card/CardBody';
import StudentForm from '../StudentForm';

// create a component 
class Student extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            students: []
        }
    }

    async componentDidMount(){
        try {
            const response = await myUniversity.get('/secretary/studente');
            this.setState({students: response.data});
            console.log(response.data[0]);
        } catch (error) {
            console.log(`😱 Request failed: ${error}`);
        }
    }

    render(){
        return (
          <main role="main" className="container">
            <SectionTitle 
              logo={addLogo}
              title='Add a student'
              altText='add a student'
              className='mb-2 mr-2'
              style={{maxWidth: '35px', height: 'auto'}}
              />
              <Card className='mx-auto border-0'>
                <CardImage image={userLogo} altText='user logo'/>
                <CardBody>
                    <StudentForm/>
                </CardBody>
              </Card>
              <SectionTitle 
              logo={deleteLogo}
              title='Remove a student'
              altText='remove a student'
              className='mb-2 mr-2'
              style={{maxWidth: '35px', height: 'auto'}}
              />
            <SectionTitle 
              logo={listLogo}
              title='List of students'
              altText='list of students'
              className='mb-2 mr-2'
              style={{maxWidth: '35px', height: 'auto'}}
              />
            <StudentCardList students={this.state.students} />
          </main>
        );
    }
}

//export a component
export default Student;