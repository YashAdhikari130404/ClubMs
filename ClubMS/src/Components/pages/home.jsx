import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './home.css'
import Mynavbar from '../inc/Navbar'
import college from '../../assets/images/college.jpg'
import './home_media.css'
import file from '../../assets/images/file.jpg'
import star from '../../assets/images/star.png'
import chat from '../../assets/images/chat.jpg'
import fire1 from '../../assets/images/fire1.jpg'
import nss_home_logo from '../../assets/images/nss_home_logo.jpg' 
import edc_home_club from '../../assets/images/edc_home_club.jpg'
import pasc_home_log from '../../assets/images/pasc_home_log.jpg' 
import { useRef } from "react";


function Home()
{
    const navigate = useNavigate();
    const clubinfo = useRef(null);
    const clubs = useRef(null) ;

    const handleEnroll = () => {
        clubs.current?.scrollIntoView({ behavior: "smooth" }); 
    };

    const handleKnow = () => {
        clubinfo.current?.scrollIntoView({ behavior: "smooth" }); 
    };

    function handlenss()
    {
        navigate("/nss-home") ;
    }

    return (
       <div>
            
            <Mynavbar />
            <section className="container-fluid py-lg-6 py-sm-5 py-4">
                <Container>
                    <div className="row justify-content-between g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="leftside">
                                <h1>Welcome to <span>PICT CLUBS Website</span></h1>
                                <p>Discover a world beyond academics at PICT! Our vibrant clubs provide a platform to explore new passions, collaborate on exciting projects, and create unforgettable experiences.</p>
                                <h3 className="m-0 p-0">Why PICT?</h3>
                                <ul className="m-0 p-0">
                                    <li class="mb-2"><i class="fa-solid fa-circle-check"></i> A legacy of excellence in academics and innovation.</li>
                                    <li class="mb-2"><i class="fa-solid fa-circle-check"></i> Thriving campus life with tech, cultural, and social activities.</li>
                                    <li class="mb-2"><i class="fa-solid fa-circle-check"></i> Endless opportunities to grow, lead, and create impact.</li>
                                </ul>
                                <p>Be part of something bigger. Explore, engage, and evolve at PICT!</p>
                                <div class="bannerbtn d-flex gap-3">
                                <button class="btn btn-primary fbtn" onClick={handleEnroll}>Enroll Now</button>
                                <button class="btn btn-outline-primary sbtn" onClick={handleKnow}>Know more</button>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="rightside">
                                <img src={college} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="container-fluid ">
                <div className="container  mt-3 midcont mb-5">
                    <div className="row p-3 align-items-center row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-sm-3">
                        <div class="col text-center">
                        <h2>300+</h2>
                        <p>Students Trained</p>
                        </div>
                        <div class="col text-center">
                            <h2>3</h2>
                            <p>Active Clubs</p>
                        </div>
                        <div class="col text-center">
                            <h2>10+</h2>
                            <p>Events Conducted</p>
                        </div>
                        <div class="col text-center">
                            <h2>5+</h2>
                            <p>Projects & Innovations</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid py-5 shadow-lg mt-3 clubimp" ref={clubinfo}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Why to join Clubs ?</h2>
                        </div>
                    </div>
                    <div className="row gy-4 mt-2">
                        <div className="col-md-6 col-12">
                            <div className="bg-white p-2 d-flex align-items-center gap-5 clubtabs">
                                <img src={file} alt="" class="img-fluid clubimg ms-4"/>
                                <div class="align-self-center">
                                    <h4>Skill Development & <br/>Practical Exposure</h4>
                                    <p>Enhance your technical, creative, and leadership skills.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className="bg-white p-2 d-flex align-items-center gap-5 clubtabs">
                                <img src={star} alt="" class="img-fluid clubimg ms-4"/>
                                <div class="align-self-center">
                                    <h4>Networking & <br/>Industry Connections</h4>
                                    <p>Connect with peers, alumni, and industry professionals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className="bg-white p-2 d-flex align-items-center gap-5 clubtabs">
                                <img src={chat} alt="" class="img-fluid clubimg ms-4"/>
                                <div class="align-self-center">
                                    <h4>Workshops & <br/>Exclusive Events</h4>
                                    <p>Participate in seminars, hackathons, and cultural fests.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className="bg-white p-2 d-flex align-items-center gap-5 clubtabs">
                                <img src={fire1} alt="" class="img-fluid clubimg ms-4"/>
                                <div class="align-self-center">
                                    <h4>Leadership & <br/>Career Growth</h4>
                                    <p>Take up roles, lead initiatives, and boost your resume.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="container-fluid py-5 mt-3 clubsinfo shadow-lg" ref={clubs}> 
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Be a part of our College Clubs</h2>
                        </div>
                    </div>

                    <div className="row gy-4 gx-4">
                        <div class=" col-lg-4 col-md-6 col-sm-1 pt-3">
                            <div class="m-4 nsshome">
                                <fieldset>
                                    <legend>NSS</legend>
                                    <div class="nssclub">
                                        <img src={nss_home_logo} alt="" class="nsslogo"/>
                                        <ul class="mt-4 p-0">
                                            <li><i class="fa-solid fa-circle-check"></i> Social Impact </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Skill Development  </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Networking </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Certificates & Recognition </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Personal Growth </li>
                                        </ul>
                                        <hr />
                                        <button class="btn btn-success fbtn" id="mybtn" onClick={handlenss}>Apply Now</button>
                                        <br />
                                        <br />
                                        <div class="text-center">
                                            <span>Be part of NSS club</span>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-1 pt-3 ">
                            <div className="m-4 paschome">
                                <fieldset>
                                    <legend>PASC</legend>
                                    <div class="pascclub">
                                        <img src={pasc_home_log} alt="" class="nsslogo" />
                                        <ul class="mt-4 p-0">
                                            <li><i class="fa-solid fa-circle-check"></i> Technical Growth  </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Hands-on Experience  </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Hackathons & Events  </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Networking </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Career Boost </li>
                                        </ul>
                                        <hr />
                                        <button class="btn btn-primary fbtn" id="mybtn" onClick={handleEnroll}>Apply Now</button>
                                        <br />
                                        <br />
                                        <div class="text-center">
                                            <span>Be part of PASC club</span>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-1 pt-3 ">
                            <div className="m-4 edchome">
                                <fieldset>
                                    <legend>EDC</legend>
                                    <div class="edcclub">
                                        <img src={edc_home_club} alt="" class="nsslogo" />
                                        <ul class="mt-4 p-0">
                                            <li><i class="fa-solid fa-circle-check"></i> Startup Culture  </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Business & Strategy  </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Networking , Collaborations  </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Workshops & Events </li>
                                            <li><i class="fa-solid fa-circle-check"></i> Incubation & Support </li>
                                        </ul>
                                        <hr />
                                        <button className="btn fbtn custom-btn" onClick={handleEnroll}>Apply Now</button>
                                        <br />
                                        <br />
                                        <div class="text-center">
                                            <span>Be part of EDC club</span>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
          
       </div>
    )
}

export default Home ;