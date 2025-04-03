import Mynavbar from "./navbar"
import nsspic from '../../../assets/images/nsspic.jpg'
import fooddon from '../../../assets/images/fooddon.jpg'
import blooddon from '../../../assets/images/blooddon.jpg'
import teach from '../../../assets/images/teach.jpg'
import planting from '../../../assets/images/planting.jpg'
import mag1 from '../../../assets/images/mag1.jpg'

import './navmedia.css'

function Nsshome()
{
    return (
        <div>
            <Mynavbar />
            
            <section className="mb-4">
                <div className="text-center">
                    <img src={nsspic} alt="" className="nsspic mb-4 p-4"/>
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
                            <h1>Events</h1>
                        </div>
                    </div>
                </div>
               
                <div className="row eventbody mx-1 px-4">
                    <div className="col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center p-4">
                        <div className="text-center w-100">
                            <img src={fooddon} alt="" className="img-fluid uniform-img"/>
                            <h4 className="mt-2">Food Donation</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center p-4">
                        <div className="text-center w-100">
                            <img src={blooddon} alt="" className="img-fluid uniform-img"/>
                            <h4 className="mt-2">Blood Donation</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center p-4">
                        <div className="text-center w-100">
                            <img src={teach} alt="" className="img-fluid uniform-img"/>
                            <h4 className="mt-2">Teaching Activity</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center p-4">
                        <div className="text-center w-100">
                            <img src={planting} alt="" className="img-fluid uniform-img"/>
                            <h4 className="mt-2">Planting Activity</h4>
                        </div>
                    </div>
                </div>

            </section>
            
            <section className="container-fluid shadow-lg magazine">
                <div className="container">
                    <div className="row magazinehead p-3">
                        <div className="col-12 text-center mt-4 ">
                            <h1>Magazines</h1>
                        </div>
                    </div>
                </div>

                <div className="row magazinebody m-1 gx-4 d-flex justify-content-between align-items-center">
                    <div className="col-lg-7 col-12 p-5 m-4 magpara">
                        <p>
                        It is indeed a memorable moment for us in presenting you with ‘ The First Magazine of PICT NSS’. PICT NSSorganizes several activities every year along with an annual camp. The magazine has different sections likeActivities, Achievements, Compositions, Sketches, Experiences of NSS Alumni and teachers. Our NSS volunteersalways believe in the motto ‘Not Me, But You'. Through this magazine, we try to showcase the best version ofour team. Hope you all enjoy it!!
                        </p>
                    </div>

                    <div className="col-lg-4 col-12 p-4 m-4 magimg">
                        <img src={mag1} alt="" className="img-fluid"/>
                    </div>
                </div>
            </section>

            <footer className="container-fluid shadow-lg">
                <div className="row footercont p-4 ">
                    <div className="col-md-7 col-12 nssfooterleft">
                        <h3 className="text-center">Not Me, But You!</h3>
                        <p>Our vision is to build the youth with the mind and spirit to serve the society and work for the social<br></br> uplift of the down-trodden masses of our nation as a movement.</p>
                    </div>
                    <div className="col-md-4 col-12 nssfooterright text-center">
                        <h3>Contact US</h3><br></br>
                        <div className="d-flex justify-content-center align-items-center gap-4">
                              <a href="https://www.instagram.com/pictnss/#" target="_blank" rel="noopener noreferrer" className="insta-icon text-center"> <i class="fa-brands fa-instagram"></i></a>
                              <a href="https://www.facebook.com/pictnss/" target="_blank" rel="noopener noreferrer" className="insta-icon text-center"> <i class="fa-brands fa-facebook"></i></a>
                              <a href="https://www.linkedin.com/company/pictnss" target="_blank" rel="noopener noreferrer" className="insta-icon text-center"> <i class="fa-brands fa-linkedin"></i></a>
                              <a href="https://www.youtube.com/c/PICTNSS" target="_blank" rel="noopener noreferrer" className="insta-icon text-center"> <i class="fa-brands fa-youtube"></i></a>
           
                        </div>
                    </div>
                </div>
            </footer>   
        </div>
    )
}

export default Nsshome