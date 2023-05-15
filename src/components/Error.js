import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="modal">
            <div className="modalContent">
                <h2>404 Error</h2>
                <p>Page not found, return home</p>
                <Link to='/'><button class="modalButton">Return Home</button></Link>

            </div>
        </div>

    )
}

export default Error;