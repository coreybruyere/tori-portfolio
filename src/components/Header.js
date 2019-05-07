import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/thumbs/tor-thumb.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>Hi, I'm <strong>Victoria Tombor</strong>. I'm a continuous learner, graduate, and adventurer.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
