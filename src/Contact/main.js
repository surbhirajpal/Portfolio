import React from 'react'
import { Row, Col } from 'antd'
import './styles.scss'
import Video from '../videoComponent/main'

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
                                    <p className="heading color">Contact Me<span>&lt;/h1&gt;</span></p>
                                </p>
                                <p className="detail">
                                    I'm seeking an opportunity in fun and challenging environment to utilize and grow my skills along with the organizational objective.
                                    However, if you have any other request or query, please do contact me!
                                </p>
                                <p className="detail">
                                    Surbhi Rajpal <br />
                                    @:
                                    <a href="mailto:surbhirajpal88@gmail.com">
                                     surbhirajpal88@gmail.com
                                    </a>
                                </p>
                                <p className="tags">&lt;/body&gt;</p>
                                <p className="tags">&lt;/html&gt;</p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={14}>
                            <Video />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Main