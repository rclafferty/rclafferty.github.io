import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import ProjectsJSON from '../json/projects.json'

import styles from '../css/Project.module.css';

export default function Project() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document
            .getElementById("professional")
            ?.scrollIntoView({ behavior: "smooth" });
    }, [location]);
    
    const { category, id } = useParams();
    const details = ProjectsJSON[category]?.find(x => x?.id === id);

    useEffect(() => {
        if (!details) {
            navigate("/Error404", {replace: true});
        }
    }, [details, navigate]);

    if (!details) return null;
    
    const youtubeLink = details?.links?.find(l => l.title === "YouTube" && l.embed === true);
    const hasYoutubeLink = youtubeLink !== undefined;

    return (
        <div className={`${styles['project']}`} key={details.id}>
            <h1>{details.title}</h1>

            { hasYoutubeLink ? 
                <iframe src={youtubeLink.url} id="project-overlay-embed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> :
                <img src={`/images/${category}/${details['project-image']}`} />
            }

            <p style={{textAlign: "center"}}><i>Target Platforms: {details['platform-support']}</i></p>

            <p>&nbsp;</p>
            <p>{details.description}</p>

            { details.contributions && <>
                <h3>My Contributions</h3>
                <p>{details.contributions}</p>
            </>
            }

            { details['technical-challenges'] && <>
                <h3>Technical Challenges</h3>
                <p>{details['technical-challenges']}</p>
            </>
            }

            { details.links?.some(l => l.hidden !== true) && <>
                <h3>Links</h3>
                {details.links.filter(l => !l.hidden).map((l) => {
                    return (
                    <p key={l.title}>{l.title}: <a href={l.url} target='_blank' rel="noopener noreferrer">{l.url}</a></p>
                    );
                })}
            </>
            }
        </div>
    );
}