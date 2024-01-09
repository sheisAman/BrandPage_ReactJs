import React from 'react'

function Navigation() {
    return (
        <div>
            <nav className='container'>
                <div className="logo">
                    <img src="/images/brandlogo.png" alt="" />
                </div>

                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Location</li>
                </ul>
                <button>login</button>
            </nav>
        </div>
    )
}

export default Navigation