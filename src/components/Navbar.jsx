import { useRef } from "react";
import { Link, useNavigate } from "react-router";

export default function Navbar() {
    const navigate = useNavigate();

    function scrollTo(id) {
        navigate('/', {
            state: {
                scrollTo: id,
            },
        });
    }

    return (
        <div id="navbar">
            <button className="button" onClick={() => scrollTo("home")}>Home</button>
            <button className="button" onClick={() => scrollTo("professional")}>Professional</button>
            <button className="button" onClick={() => scrollTo("personal")}>Personal</button>
            <button className="button" onClick={() => scrollTo("education")}>Reserch & Education</button>
        </div>
    );
}