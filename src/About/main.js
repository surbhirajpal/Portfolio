import React from 'react'
import { Row, Col } from 'antd'
import './styles.scss'
import Video from '../videoComponent/main'

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
                                    <p className="heading color">About me<span>&lt;/h1&gt;</span></p>
                                </p>
                                <p className="detail">
                                    Graduate of UIET, Panjab University(2020) , trying my best to make connections in IT industry
                                    and seeking an opportunity suitable for my profile and be a member of skillful team.
                                </p>
                                <p className="detail">
                                    Well organized, confident individual with leadership qualities. Loves to dance and paint, participated in many competitions of same but won few! ;) .      
                                </p>
                                <p className="detail">
                                    Interested to work in field of frontend development, explore and expand my knowledge in other technologies as well.
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