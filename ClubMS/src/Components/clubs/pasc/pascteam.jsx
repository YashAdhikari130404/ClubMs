import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Pascnavbar from './pascnavbar';
import './pascnavmedia.css'

const peopleData = {
    Coordinators: [
      { name: 'Dr. Geetanjali Kale', designation: 'Faculty Coordinator', email: 'gkale@pict.edu' },
    ],
    Heads: [
      { name: 'Pranav Jaju', designation: 'Technical Head'},
      { name: 'Mustafa Trunkwala', designation: 'Technical Head'},
      { name: 'Rohit Kuvar', designation: 'Public Relations Head'},
      { name: 'Om Lachure', designation: 'Marketing Head'},
      { name: 'Mikhiel Benji', designation: 'Creative Head'},
      { name: 'Shraddha Asolkar ', designation: 'Creative Head'},
      ],
  };

function Pascteam()
{
    const [selectedGroup, setSelectedGroup] = useState('');
    return (
        <div>
            <Pascnavbar />
            <Container>
                <div style={{ padding: '20px', fontFamily: 'Arial' }}>
                    <h2 style={{marginTop: '60px', marginBottom: '20px', textAlign: 'center', fontSize: '50px' }}>Team Members</h2>
                    
                    <div  style={{ textAlign: 'center' }}>
                        <button className="btn-primary-p"
                        onClick={() => setSelectedGroup('Coordinators')}
                        style={{ marginRight: '10px' }}
                        >
                        Coordinators
                        </button>
                        <button className="btn-primary-p"
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

export default Pascteam ;