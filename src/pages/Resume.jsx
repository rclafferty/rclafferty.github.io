import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { InlineWidget } from 'react-calendly';

import ProjectsJSON from '../json/projects.json';
import ResumeJSON from '../json/resume.json';

import styles from '../css/Home.module.css';
import resumeStyles from '../css/Resume.module.css';

export default function Resume() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!location.state?.scrollTo) return;

        document
            .getElementById(location.state.scrollTo)
            ?.scrollIntoView({ behavior: "smooth" });
    }, [location]);

    const createProjectLookup = (...categories) => {
        return Object.fromEntries(
            categories.flatMap(category =>
                (ProjectsJSON[category] || []).map(project => [project.id, project])
            )
        );
    };

    const professionalProjects = createProjectLookup("professional");

    const educationProjects = createProjectLookup(
        "personal",
        "research-education"
    );

    const allProjects = createProjectLookup(
        "professional",
        "personal",
        "research-education"
    );

    return (
        <>

        <div className="section">
            <h1>Computer Skills</h1>
            <h2 className={resumeStyles['subsection-header']}>Programming Languages</h2>
            <div className={styles['section-projects']}>
            {ResumeJSON.languages.map((skill) => { 
                return (!skill.hidden && 
                    <div key={skill.text}>
                        <figure>
                            <img className={resumeStyles['computer-skills-image']} src={skill.image} alt={skill.text} />
                        </figure>
                        {!skill['hide-text'] && <span>{skill.text}</span>}
                    </div>
                );
            })}
            </div>

            <h2 className={resumeStyles['subsection-header']}>Development Tools</h2>
            <div className={styles['section-projects']}>
            {ResumeJSON.tools.map((skill) => { 
                return (!skill.hidden && 
                    <div key={skill.text}>
                        <figure>
                            <img className={resumeStyles['computer-skills-image']} src={skill.image} alt={skill.text} />
                        </figure>
                        {!skill['hide-text'] && <span>{skill.text}</span>}
                    </div>
                );
            })}
            </div>

            <h2 className={resumeStyles['subsection-header']}>Integrated Development Environments (IDEs)</h2>
            <div className={styles['section-projects']}>
            {ResumeJSON.ide.map((skill) => { 
                return (!skill.hidden && 
                    <div key={skill.text}>
                        <figure>
                            <img className={resumeStyles['computer-skills-image']} src={skill.image} alt={skill.text} />
                        </figure>
                        {!skill['hide-text'] && <span>{skill.text}</span>}
                    </div>
                );
            })}
            </div>

            <h2 className={resumeStyles['subsection-header']}>Operating Systems</h2>
            <div className={styles['section-projects']}>
            {ResumeJSON.os.map((skill) => { 
                return (!skill.hidden && 
                    <div key={skill.text}>
                        <figure>
                            <img className={resumeStyles['computer-skills-image']} src={skill.image} alt={skill.text} />
                        </figure>
                        {!skill['hide-text'] && <span>{skill.text}</span>}
                    </div>
                );
            })}
            </div>
        </div>

        <hr />
        <div className="section">
            <h1>Professional Work Experience</h1>

            <div className={styles['section-projects']}>
            {ResumeJSON.experience.map((exp) => { 
                return (!exp.hidden && 
                    <div key={exp.company}>
                        <h2>{exp.title} - {exp.company}</h2>
                        <p className={resumeStyles['exp-details']}>{exp.location}</p>
                        <p>&nbsp;</p>
                        <p className={resumeStyles['exp-details']}>{exp.start} - {exp.end}</p>
                        <p>&nbsp;</p>
                        <ul className={resumeStyles['exp-skill-list']}>
                            {exp.skills.map(skill => {
                                return (
                                    <li key={skill}>{skill}</li>
                                );
                            })}
                        </ul>
                        <p>&nbsp;</p>
                        <p>{exp.description}</p>

                        {exp.projects && <div className={styles['section-projects']} style={{marginTop: "2rem"}}>
                        {exp.projects?.map((projectID) => { 
                            const project = professionalProjects[projectID];
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
                        </div>}
                    </div>
                );
            })}
            </div>
        </div>
        
        <hr />
        <div className="section">
            <h1>Education</h1>

            <div className={styles['section-projects']}>
            {ResumeJSON.education.map((exp) => { 
                return (!exp.hidden && 
                    <div key={exp.school}>
                        <h2>{exp.degree} in {exp.major}</h2>
                        <p className={resumeStyles['exp-details']}>{exp.school}</p>
                        <p>&nbsp;</p>
                        <p className={resumeStyles['exp-details']}>{exp.location}</p>
                        <p>&nbsp;</p>
                        <p className={resumeStyles['exp-details']}>{exp.start} - {exp.end}</p>
                        <p>&nbsp;</p>
                        <ul className={resumeStyles['exp-skill-list']}>
                            {exp.skills.map(skill => {
                                return (
                                    <li key={skill}>{skill}</li>
                                );
                            })}
                        </ul>

                        {exp.projects && <div className={styles['section-projects']} style={{marginTop: "2rem"}}>
                        {exp.projects?.map((projectObj) => { 
                            const project = ProjectsJSON[projectObj.category]
                                ?.find(p => p.id === projectObj.id);

                            if (!project) return null;

                            return (!project.hidden && 
                                <div key={project.id}>
                                <Link to={`/${projectObj.category}/${projectObj.id}`}>
                                    <figure>
                                        <div className={styles['index-overlay']}>
                                            <img className={styles['section-image']} src={`/images/${projectObj.category}/${project['project-image']}`} alt="" />
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
                        </div>}
                    </div>
                );
            })}
            </div>
        </div>

        <hr />
        <div className="section">
            <h1>Honors & Activities</h1>

            <div className={styles['section-projects']}>
            {ResumeJSON.honors.map((exp) => { 
                return (!exp.hidden && 
                    <div key={exp.school} className={styles['section-entry']}>
                        <h2>{exp.title}</h2>
                        {exp.end ? 
                            <p className={resumeStyles['exp-details']}>{exp.start} - {exp.end}</p> :
                            <p className={resumeStyles['exp-details']}>{exp.start}</p>
                        }
                        <p>&nbsp;</p>
                        <ul className={resumeStyles['exp-skill-list']}>
                            {exp.skills.map(skill => {
                                return (
                                    <li key={skill}>{skill}</li>
                                );
                            })}
                        </ul>

                        {exp.projects && <div className={styles['section-projects']} style={{marginTop: "2rem"}}>
                        {exp.projects?.map((projectObj) => { 
                            const project = ProjectsJSON[projectObj.category]
                                ?.find(p => p.id === projectObj.id);

                            if (!project) return null;

                            return (!project.hidden && 
                                <div key={project.id}>
                                <Link to={`/${projectObj.category}/${projectObj.id}`}>
                                    <figure>
                                        <div className={styles['index-overlay']}>
                                            <img className={styles['section-image']} src={`/images/${projectObj.category}/${project['project-image']}`} alt="" />
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
                        </div>}
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
                    <a href="/documents/Robert_Casey_Lafferty_Game_Dev_Resume.pdf" target="_blank" rel="noopener noreferrer">Game Dev Resume</a>
                    <a href="/documents/Robert_Casey_Lafferty_Software_Dev_Resume.pdf" target="_blank" rel="noopener noreferrer">Software Resume</a>
                    <a href="/documents/Robert_Casey_Lafferty_Education_Resume.pdf" target="_blank" rel="noopener noreferrer">Education Resume</a>
                    <a href="/documents/Robert_Casey_Lafferty_Game_Dev_Resume.pdf" target="_blank" rel="noopener noreferrer">Online Resume</a>
                </div>
            </details>

            <a className="button" href="https://www.linkedin.com/in/rclafferty" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="button" href="mailto:robert.casey.lafferty@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>

        <InlineWidget url="https://calendly.com/rclafferty/meet" />
        </>
    );
}