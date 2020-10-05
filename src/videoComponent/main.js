import React from 'react'
import { } from 'antd'
import video from '../mediaFiles/video.mp4'

class Video extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <video autoPlay="autoPlay" loop="loop" muted="muted" width="100%">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default Video