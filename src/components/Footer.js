import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/victoria-tombor-55a230139/" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                        <li><a href="https://www.instagram.com/victoriatombor/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="mailto:victoria.tombor@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
