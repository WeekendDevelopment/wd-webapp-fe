import React from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";



class Home extends React.Component {
    render() { return(
        <div>
            <Link to="/profile">
                <button >Profile</button>
            </Link>
        </div>
    )}
}

export default Home;