import { useNavigate } from "react-router-dom";

export default function scrollTo(id) {
    const navigate = useNavigate();
    navigate('/', {
        state: {
            scrollTo: id,
        },
    });
}