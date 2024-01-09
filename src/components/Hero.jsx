import React from 'react'

function Hero() {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>your feet deserve the best</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae veniam eligendi natus corrupti quod porro quam modi maxime vitae aspernatur, enim, quibusdam architecto, ipsum fugiat atque ipsa nam vel doloremque.</p>
                <div className='her0-btn'>
                    <button className='shop'>Shop Now</button>
                    <button className='shop'>Category</button>
                </div>
                <div className='shopping'>
                    <p>Available on</p>
                    <div className='brand-icons'>
                        <img src="/images/flip.png" />
                        <img src="/images/amazon.png" />
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/nike.png" />
            </div>
        </main>

    )
}

export default Hero