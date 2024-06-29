import { useState } from 'react';
import { slide } from '../data'

export default function Header() {
    return (
        <header className='hero'>
            <div className="container">
                <div className="row">
                    <div className="col-5 body">
                            <h1>{slide.name}</h1>
                            <p>{slide.describtion}</p>
                            <a className='cta' href="">Order Now <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="col-12"></div>
                </div>
            </div>
        </header>
    )
}