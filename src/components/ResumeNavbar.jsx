import { useRef } from "react";
import { Link, useNavigate } from "react-router";

export default function Navbar() {
    const navigate = useNavigate();

    function scrollTo(id) {
        navigate('/Resume', {
            state: {
                scrollTo: id,
            },
        });
    }

    return (
        <div id="navbar">
            <button className="button" onClick={() => scrollTo("languages")}>Languages</button>
            <button className="button" onClick={() => scrollTo("experience")}>Experience</button>
            <button className="button" onClick={() => scrollTo("projects")}>Projects</button>
            <button className="button" onClick={() => scrollTo("education")}>Education</button>
            <button className="button" onClick={() => scrollTo("honors")}>Honors</button>
        </div>
    );
}