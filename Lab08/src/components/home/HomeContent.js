import React, {Component} from 'react';
import './Home.css';
import write from './write.jpg';
import watch from './watch.jpg';
import learn from './learn.jpg';

class HomeConent extends Component{
    render(){
        return(
            //Services
            <div className="HomeConent">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <section className="page-section bg-light" id="portfolio">
                                <div className="container">
                                    <div className="text-center">
                                        <h2 className="section-heading text-uppercase"><u><i className="fas fa-book-open"></i>COURSES OFFERED</u></h2>
                                        <h3 className="section-subheading">We want to share our creations with you.</h3>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="portfolio-item">
                                                <a className="portfolio-link" href="/video">
                                                    <div className="portfolio-hover">
                                                        <div className="portfolio-hover-content"><i className="fas fa-check fa-2x"></i></div>
                                                    </div>
                                                    <img className="img-fluid" src={watch} alt=""/>
                                                </a>
                                                <div className="portfolio-caption">
                                                    <div className="portfolio-caption-heading">Video Tutorials / $45</div>
                                                    <div className="portfolio-caption-subheading"><p>We offer a variety of tutorials to help you learn the craft of desserts.</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="portfolio-item">
                                                <a className="portfolio-link" href="/">
                                                    <div className="portfolio-hover">
                                                        <div className="portfolio-hover-content"><i className="fas fa-check fa-2x"></i></div>
                                                    </div>
                                                    <img className="img-fluid" src={write} alt="" />
                                                </a>
                                                <div className="portfolio-caption" href="/">
                                                    <div className="portfolio-caption-heading">Recepies / $30</div>
                                                    <div className="portfolio-caption-subheading"><p>Our webpage hosts several recepies to access for your any kind of Desserts.</p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="portfolio-item">
                                                <a className="portfolio-link" href="/video">
                                                    <div className="portfolio-hover">
                                                        <div className="portfolio-hover-content"><i className="fas fa-check fa-2x"></i></div>
                                                    </div>
                                                    <img className="img-fluid" src={learn} alt="" />
                                                </a>
                                                <div className="portfolio-caption">
                                                    <div className="portfolio-caption-heading">Private Sessions / $50</div>
                                                    <div className="portfolio-caption-subheading"><p>We host one-on-one sessions so that you get in depth knowledge on all things Desserts.</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="row">
                            <h3 className="section-subheading">If you wish to view a sample of a course, feel free to go ahead and select the course!</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <section className="page-section bg-light" id="about">
                            <div className="container">
                            <div className = "row">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase"><u><i className="fas fa-users mx-2"></i>ABOUT US</u></h2>
                                    <h3 className="section-subheading">Here to teach, only for you.</h3><br />
                                    <h4>Our team worked hard to master the skill of desert craft. Our years of knowledge collected is put on display at this website. If one bite of our receipies brings joy to your loved ones, then we here at Delicious Deserts have succeded in our goal. We hope this platform satisfies your desert making dreams.</h4>
                                </div>
                            </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeConent;