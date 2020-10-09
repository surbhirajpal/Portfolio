import React from 'react'
import { Row, Col } from 'antd'
import './styles.scss'
import Video from '../videoComponent/main'
import Loading from '../loading/main'
import {Logo} from '../mediaFiles/logoName.png'

class Main extends React.Component {
    
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
                                    <p className="heading">Hey,</p>
                                    <p className="heading">I'm Surbhi,</p>
                                    <p className="heading">web developer. <span className="tag">&lt;/h1&gt;</span></p>
                                </p>
                                <img src={Logo}/>
                                <p className="tags">
                                    <p className="sub-heading">Front End Developer</p>
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