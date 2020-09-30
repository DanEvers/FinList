import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class Main extends Component {
    render() {
        return (
            <header className="head">
                <Link to="subscribe">
                    <button id="button">
                        Test Sichern!
                    </button>
                </Link>
            </header>
        )
    }
}

export default Main
