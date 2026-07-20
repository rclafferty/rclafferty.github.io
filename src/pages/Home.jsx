import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { InlineWidget } from 'react-calendly';

import ProjectsJSON from '../json/projects.json';

import styles from '../css/Home.module.css';

export default function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!location.state?.scrollTo) return;

        document
            .getElementById(location.state.scrollTo)
            ?.scrollIntoView({ behavior: "smooth" });
    }, [location]);

    return (
        <>

        <div className="section">
            <h1>Professional Projects</h1>
            <p className='centered'><i>This portfolio highlights publicly shareable work. Much of my professional experience cannot be displayed due to NDA and proprietary restrictions.</i></p>
            <p>&nbsp;</p>

            <div className={styles['section-projects']}>
            {ProjectsJSON.professional.map((project) => { 
                return (!project.hidden && 
                    <div key={project.id}>
                    <Link to={`/professional/${project.id}`}>
                        <figure>
                            <div className={styles['index-overlay']}>
                                <img className={styles['section-image']} src={`/images/professional/${project['project-image']}`} alt="" />
                                <div className={styles['index-overlay-text']}>
                                    {
                                        project['overlay-text'] ? <p>{project['overlay-text']}</p> : <p>{`${project['platform'] ?? ""} ${project.language ?? ""}`}</p>
                                    }
                                </div>
                            </div>
                        </figure>
                        <span>{project.title}</span>
                    </Link>
                    </div>
                );
            })}
            </div>
        </div>

        <hr id="personal" />

        <div className="section">
            <h1>Personal Projects</h1>

            <div className={styles['section-projects']}>
            {ProjectsJSON.personal.map((project) => { 
                return (!project.hidden && 
                    <div key={project.id}>
                    <Link to={`/personal/${project.id}`}>
                        <figure>
                            <div className={styles['index-overlay']}>
                                <img className={styles['section-image']} src={`/images/personal/${project['project-image']}`} alt="" />
                                <div className={styles['index-overlay-text']}>
                                    {
                                        project['overlay-text'] ? <p>{project['overlay-text']}</p> : <p>{`${project['platform'] ?? ""} ${project.language ?? ""}`}</p>
                                    }
                                </div>
                            </div>
                        </figure>
                        <span>{project.title}</span>
                    </Link>
                    </div>
                );
            })}
            </div>
        </div>

        <hr id="education" />

        <div className="section">
            <h1>Research & Education Projects</h1>

            <div className={styles['section-projects']}>
            {ProjectsJSON['research-education'].map((project) => { 
                return (!project.hidden && 
                    <div key={project.id}>
                    <Link to={`/research-education/${project.id}`}>
                        <figure>
                            <div className={styles['index-overlay']}>
                                <img className={styles['section-image']} src={`/images/research-education/${project['project-image']}`} alt="" />
                                <div className={styles['index-overlay-text']}>
                                    {
                                        project['overlay-text'] ? <p>{project['overlay-text']}</p> : <p>{`${project['platform'] ?? ""} ${project.language ?? ""}`}</p>
                                    }
                                </div>
                            </div>
                        </figure>
                        <span>{project.title}</span>
                    </Link>
                    </div>
                );
            })}
            </div>
        </div>

        <hr />
        <h1>Interested in Connecting?</h1>
        <p>Whether you'd like to discuss a software engineering opportunity, collaborate on a project, or simply chat, I'd be happy to connect. Feel free to reach out on LinkedIn, send me an email, or schedule a conversation at a time that's convenient for you.</p>
        
        <div id="header-links">

            <details className="resume-dropdown">
                <summary className="button">Resume</summary>

                <div className="resume-options">
                    <Link to={'/resume'}>Online Resume</Link>
                    <a href="/documents/Robert_Casey_Lafferty_Game_Dev_Resume.pdf" target="_blank" rel="noopener noreferrer">Game Dev Resume</a>
                    <a href="/documents/Robert_Casey_Lafferty_Software_Dev_Resume.pdf" target="_blank" rel="noopener noreferrer">Software Resume</a>
                    <a href="/documents/Robert_Casey_Lafferty_Education_Resume.pdf" target="_blank" rel="noopener noreferrer">Education Resume</a>
                </div>
            </details>

            <a className="button" href="https://www.linkedin.com/in/rclafferty" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="button" href="mailto:robert.casey.lafferty@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>

        <InlineWidget url="https://calendly.com/rclafferty/meet" />
        </>
    );
}