import React from 'react';
import Header from '../components/Header'
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div className="Home">
            <NavBar />
            <Header />
            <main className="home-main">
                <section className="work">
                    <h3>Mes projets</h3>
                    <hr></hr>
                    <div className="work-container">
                        <div className="work-card">
                            <figure>
                                <img src="" alt=''></img>
                            </figure>
                            <div className="content">
                                <h4>Dev Web Front-End</h4>
                                <p>Retrouvez tout mes travaux et projets de développement web. Mais aussi de l'intégration de maquettes ainsi que des créations en HTML - CSS - JS ou encore en React - Node.</p>
                                <button className="btn-alt">Voir plus</button>
                            </div>
                        </div>
                        <div className="work-card">
                            <figure>
                                <img src="" alt=''></img>
                            </figure>
                            <div className="content">
                                <h4>Illustration</h4>
                                <p>Retrouvez tout mes travaux et projets de développement web. Mais aussi de l'intégration de maquettes ainsi que des créations en HTML - CSS - JS ou encore en React - Node.</p>
                                <button className="btn-alt">Voir plus</button>
                            </div>
                        </div>
                        <div className="work-card">
                            <figure>
                                <img src="" alt=''></img>
                            </figure>
                            <div className="content">
                                <h4>Graphisme</h4>
                                <p>Retrouvez tout mes travaux et projets de développement web. Mais aussi de l'intégration de maquettes ainsi que des créations en HTML - CSS - JS ou encore en React - Node.</p>
                                <button className="btn-alt">Voir plus</button>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="about">
                    <h3> A propos</h3>
                    <hr></hr>
                    <figure>
                    </figure>

                </section>
                <section className="contact">
                        <h3>Contactez-moi</h3>
                        <hr></hr>

                        <div className="contact-container">
                            <div className="contact-cards">
                                <div className="title">
                                    <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                    <h4>LinkedIn</h4>
                                </div>
                                <a href="https://www.linkedin.com/in/tom-pirescruz/">LinkedIn - Tom Pires Cruz</a>
                            </div>
                            <div className="contact-cards">
                                <div className="title">
                                    <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                    <h4>Mail</h4>
                                </div>
                                    <p>tpirescruz@gmail.com</p>
                            </div>
                            <div className="contact-cards">
                                <div className="title">
                                    <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                    <h4>LinkedIn</h4>
                                </div>
                                <a href="https://www.linkedin.com/in/tom-pirescruz/">LinkedIn - Tom Pires Cruz</a>
                            </div>

                        </div>
                        <button><a href="/">Consultez mon CV</a></button>
                </section>
            </main>
        </div>
    );
};

export default Home;