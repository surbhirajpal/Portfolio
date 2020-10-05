import React from 'react'
import { Row, Col } from 'antd'
import './styles.scss'

class Main extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="home">
                <div className="container">
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={10}>
                            <div className="text">
                                <p className="tags">&lt;html&gt;</p>
                                <p className="tags">&lt;body&gt;</p>
                                <p className="tags">&lt;h1&gt;</p>
                                <p className="tags">
                                    <p className="heading color">Skills and </p>
                                    <p className="heading color">Experience<span>&lt;/h1&gt;</span></p>
                                </p>
                                <p className="detail">
                                    Passionate front-end web developer with 7-months experience of working as a Software Engineer Trainee in a startup, <a href="https://laxaar.com/" target="_blank">Laxaar</a>,
                                    and building all aspects of the user experience and user interface for client-facing landing pages.
                            </p>
                                <p className="detail">
                                    Experience includes bringing the UX designs into life through HTML5, Sass, React.js.
                                    Operated both independently and with a team.
                                    Juggling an entire project or working alongsideothers has really helped in time management.
                            </p>
                                <p className="detail">
                                    Currently, working as a Trainee Apprentice with <a href="https://www.mu-sigma.com/" target="_blank">Mu Sigma</a> in the field of decision sciences using data analytics.
                            </p>
                                <p className="tags">&lt;/body&gt;</p>
                                <p className="tags">&lt;/html&gt;</p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={14}>
                            <div className="skills-box">
                                <p className="first floating">HTML5</p>
                                <p className="second floating">CSS3</p>
                                <p className="third floating">SASS</p>
                                <p className="fourth floating">Javascript</p>
                                <p className="fifth floating">React.js</p>
                                <p className="sixth floating">AntDesign</p>
                                <p className="seventh floating">Npm</p>
                                <p className="eight floating">Git</p>
                                <p className="ninth floating">Python</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Main