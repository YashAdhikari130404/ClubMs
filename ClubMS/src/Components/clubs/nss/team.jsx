import React, { useState } from 'react';
import { Container, Navbar } from "react-bootstrap";
import Mynavbar from './navbar';
import './navmedia.css'

const peopleData = {
    Coordinators: [
      { name: 'Prof. Sunil Khot', designation: 'Faculty Coordinator', email: 'sskhot@pict.edu' },
      { name: 'Prof. Amol Ingole', designation: 'Faculty Coordinator', email: 'asingole@pict.edu' },
    ],
    Heads: [
      { name: 'Rohit Pimpale', designation: 'Technical Head'},
      { name: 'Pranav Bhiungde', designation: 'Frontend Head'},
      { name: 'Adarsh Jain', designation: 'Backend Head'},
      { name: 'Parth Sali', designation: 'Design Head'},
      { name: 'Vishal Bhokre', designation: 'Activity Head'},
      ],
  };

function Nssteam()
{
    const [selectedGroup, setSelectedGroup] = useState('');
    return (
        <div>
            <Mynavbar />
            <Container>
                <div style={{ padding: '20px', fontFamily: 'Arial' }}>
                    <h2 style={{marginTop: '60px', marginBottom: '20px', textAlign: 'center', fontSize: '50px' }}>Team Members</h2>
                    
                    <div  style={{ textAlign: 'center' }}>
                        <button className="btn-primary"
                        onClick={() => setSelectedGroup('Coordinators')}
                        style={{ marginRight: '10px' }}
                        >
                        Coordinators
                        </button>
                        <button className="btn-primary"
                        onClick={() => setSelectedGroup('Heads')}>
                        Heads
                        </button>
                    </div>

                    <div className="team-container">
                    {selectedGroup &&
                        peopleData[selectedGroup].map((person, index) => (
                        <div key={index} className="teamm">
                            <p style={{fontSize:"25px" , fontWeight:"bold"}}>{person.name}</p>
                            <p style={{fontSize:"20px"}} >{person.designation}</p>
                            <p style={{fontSize:"15px" }}>{person.email}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Nssteam ;