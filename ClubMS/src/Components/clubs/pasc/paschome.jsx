import paschome from '../../../assets/images/paschome.jpg'
import Pascnavbar from "./pascnavbar";
import pulzion from '../../../assets/images/pulzion.jpg'
import pasckathon from '../../../assets/images/pasckathon.jpg'
import radiance from '../../../assets/images/radiance.jpg'
import coding from '../../../assets/images/coding.png'
import machinelearn from '../../../assets/images/machinelearn.png'
import webdev from '../../../assets/images/webdev.png'
import appdev from '../../../assets/images/appdev.png'

function Paschome()
{
    return (
        <div>
            <Pascnavbar />

            <section className="mb-4">
                <div className="text-center">
                    <img src={paschome} alt="" className="nsspic mb-4 p-4"/>
                </div>
            </section>

            <section className="container-fluid ">
                <div className="container  mt-4 midconti mb-5">
                    <div className="row p-3 align-items-center row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-sm-3">
                        <div class="col text-center">
                        <h2>1200+</h2>
                        <p>Total Members</p>
                        </div>
                        <div class="col text-center">
                            <h2>150+</h2>
                            <p>Active Members</p>
                        </div>
                        <div class="col text-center">
                            <h2>40+</h2>
                            <p>Events Conducted</p>
                        </div>
                        <div class="col text-center">
                            <h2>20+</h2>
                            <p>Awards & Recognition</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid eventcont shadow-lg">
                <div className="container">
                    <div className="row eventhead">
                        <div className="col-12 text-center p-3">
                            <h1 className='text-primary'>Events</h1>
                        </div>
                    </div>
                </div>
               
                <div className="row eventbody mx-1 px-4 gx-4 d-flex justify-content-center">
                    <div className="col-lg-3 col-12 d-flex flex-column align-items-center p-4 border border-dark m-4">
                        <div className="text-center w-100">
                            <img src={pulzion} alt="" className="img-fluid uniform-img"/>
                            <h4 className="mt-2">Pulzion</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-12 d-flex flex-column align-items-center p-4 border border-dark m-4">
                        <div className="text-center w-100">
                            <img src={pasckathon} alt="" className="img-fluid uniform-img"/>
                            <h4 className="mt-2">Pasckathon</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-12 d-flex flex-column align-items-center p-4 border border-dark m-4">
                        <div className="text-center w-100">
                            <img src={radiance} alt="" className="img-fluid uniform-img"/>
                            <h4 className="mt-2">Radiance</h4>
                        </div>
                    </div>
                </div>
            </section>  

            <section>
                <div className="text-center my-5">
                    <h2 className="section-title">Domains</h2>
                    <div className="row g-4 justify-content-center">

                    <div className="col-md-6 col-lg-5">
                        <div className="domain-card d-flex flex-column flex-md-row justify-content-between align-items-center text-start">
                        <div>
                            <h5 className="fw-bold">Competitive Programming</h5>
                            <p className="text-justify mb-0">
                            Competitive Programming is a mental sport that enables you to code a given problem under provided constraints, enhancing not only your coding skills but also your thinking ability.
                            </p>
                        </div>
                        <img src={coding} alt="Competitive Programming" className="domain-icon ms-md-3 mt-3 mt-md-0" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5">
                        <div className="domain-card d-flex flex-column flex-md-row justify-content-between align-items-center text-start">
                        <div>
                            <h5 className="fw-bold">Web Development</h5>
                            <p className="text-justify mb-0">
                            Web Development is one of the primary domains of PASC, helping students build, design, and maintain a website through various activities.
                            </p>
                        </div>
                        <img src={webdev} alt="Web Development" className="domain-icon ms-md-3 mt-3 mt-md-0" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5">
                        <div className="domain-card d-flex flex-column flex-md-row justify-content-between align-items-center text-start">
                        <div>
                            <h5 className="fw-bold">App Development</h5>
                            <p className="text-justify mb-0">
                            App Development is one of the core domains of PASC, involving the creation of software apps for mobile devices. We encourage students to explore and build mobile apps.
                            </p>
                        </div>
                        <img src={appdev} alt="App Development" className="domain-icon ms-md-3 mt-3 mt-md-0" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5">
                        <div className="domain-card d-flex flex-column flex-md-row justify-content-between align-items-center text-start">
                        <div>
                            <h5 className="fw-bold">Machine Learning</h5>
                            <p className="text-justify mb-0">
                            Machine Learning is a fascinating domain that PASC is striving to inculcate among its members by helping them explore real-world ML applications.
                            </p>
                        </div>
                        <img src={machinelearn} alt="Machine Learning" className="domain-icon ms-md-3 mt-3 mt-md-0" />
                        </div>
                    </div>

                    </div>
                </div>
            </section>

            <footer className="container-fluid shadow-lg">
                <div className="row footercont p-4 ">
                    <div className="col-md-7 col-12 nssfooterleft">
                        <h3 className="text-center">About PASC!</h3>
                        <p>PASC is a student-driven tech club that aims to inspire, educate, and empower students in various domains like Web Dev, CP, App Dev, and Machine Learning.
                        </p>
                    </div>
                    <div className="col-md-4 col-12 nssfooterright text-center">
                        <h3>Contact US</h3><br></br>
                        <div className="d-flex justify-content-center align-items-center gap-4">
                              <a href="https://www.instagram.com/acm.pict/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className="insta-icon text-center"> <i class="fa-brands fa-instagram"></i></a>
                              <a href="https://www.facebook.com/acmpict/#" target="_blank" rel="noopener noreferrer" className="insta-icon text-center"> <i class="fa-brands fa-facebook"></i></a>
                              <a href="https://www.linkedin.com/in/pict-acm-student-chapter-09004a132/" target="_blank" rel="noopener noreferrer" className="insta-icon text-center"> <i class="fa-brands fa-linkedin"></i></a>
                              <a href="https://www.youtube.com/channel/UCGd_SUiVRCi3UxOE9GtbcMA" target="_blank" rel="noopener noreferrer" className="insta-icon text-center"> <i class="fa-brands fa-youtube"></i></a>
           
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Paschome ;