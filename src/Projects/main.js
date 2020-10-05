import React from 'react'
import { Row, Col } from 'antd'
import './styles.scss'
import Image1 from '../mediaFiles/WebsiteDeveloper.jpg'
import Image2 from '../mediaFiles/NationalTRT.jpg'
import Image3 from '../mediaFiles/SPF.jpg'
import Image4 from '../mediaFiles/genesAnalysis.jpg'
import Image5 from '../mediaFiles/RestaurantBilling.jpg'

class Main extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="projects">
                <div className="row">
                    <div className="col">
                        <a href="" target="_blank">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front" style={{ 'backgroundImage': 'url(' + Image1 + ')' }}>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Website Builder</p>
                                        <p>(05/2020 - 07/2020)</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <p></p>
                    </div>
                    <div className="col">
                        <a href="https://nationaltrtclinics.now.sh/landing" target="_blank">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front" style={{ 'backgroundImage': 'url(' + Image2 + ')' }}>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>National TRT Clinics</p>
                                        <p>(03/2020 - 05/2020)</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <p></p>
                    </div>
                    <div className="col">
                        <a href="https://advisor-portal-web.herokuapp.com/landing" target="_blank">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front" style={{ 'backgroundImage': 'url(' + Image3 + ')' }}>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Sixty Plus Finance</p>
                                        <p>(01/2020 - 03/2020)</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p></p>
                    </div>
                    <div className="col">
                        <a href="" target="_blank">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front" style={{ 'backgroundImage': 'url(' + Image4 + ')' }}>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Qualitative Analysis and Detection of Genes</p>
                                        <p>(07/2018 - 12/2018)</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <p></p>
                    </div>
                    <div className="col">
                        <a href="https://github.com/surbhirajpal/restaurant-billing-system" target="_blank">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front" style={{ 'backgroundImage': 'url(' + Image5 + ')' }}>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Restaurant Billing System</p>
                                        <p>(06/2018 - 07/2018)</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main