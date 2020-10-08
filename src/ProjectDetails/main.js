import React from 'react'
import { Carousel, Button } from 'antd'
import './styles.scss'
import image1 from '../mediaFiles/project1.png'
import image2 from '../mediaFiles/project2.png'
import image3 from '../mediaFiles/project3.png'
import image4 from '../mediaFiles/project4.png'
import image5 from '../mediaFiles/project5.png'
import image6 from '../mediaFiles/project6.png'
import image7 from '../mediaFiles/project7.png'
import image8 from '../mediaFiles/project8.png'

class Main extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        const {project} = this.props
        const images = [image1, image2, image3, image4, image5, image6, image7, image8]
        return (
            <div className="project-details">
                {
                    project == "p1" ? (
                        <div>
                            <div className="slider">
                    <Carousel
                        pauseOnHover={false}
                        pauseOnFocus={false}
                        autoplaySpeed={2000}
                        autoplay={true}>
                        {
                            (images && images.length > 0) ? images.map((item, index) => {
                                return (
                                    <div key={index} className="slide">
                                        <span
                                            className="image"
                                            style={{
                                                backgroundImage: "url(" + item + ")"
                                            }}
                                        />
                                    </div>

                                )
                            }) : (
                                    <div className="slide">
                                        <span className="image one" />
                                    </div>
                                )
                        }
                    </Carousel>
                </div>
                <div className="details">
                    <p className="name">Website Builder</p>
                    <p className="description">
                        Website builder is an application that I developed during my intership with Laxaar.
                        It is a company's internal application.
                        While working on different websites , it was noticed that there are few sections
                        that are present in most of the websites like Banner, Information section, Card section,
                        Footer, Introduction section, Header, Location section, Newsletter, Contact section and many more .
                        To avoid this continuous and repeated work, it was decided to develop a project that
                        would have all samples ready and team members can directly use them whenever required.
                        
                    </p>
                    <p className="description">
                        This project totally works on passing the props. Depending upon the props passed to the component
                        (image to be displayed, title, text, alignment, color) , the component is rendered and displayed.
                        These all components are fully responsive and there are different designs for each section. 
                        This project will help in case when the front-end team is not available .
                        Back-end team members can easily create a website just by passing the props.
                    </p>
                    <p className="description">
                        Technologies used - HTML5, CSS3, Sass, React.js, AntDesign.
                    </p>
                </div>
            </div>
                    ): 
                    (
                        <div className="details">
                            <p className="name">Qualitative Analysis and Detection of Genes</p>
                            <p className="description">
                                Website builder is an application that I developed during my intership with Design Innovation Center, UIET.
                                This project was of Biotechnology department of Panjab University, where they used to calculate fold change in 
                                animal genes manually using a formula. But this project reduced the human effort by calculating the fold change by just 
                                uploading the excel (csv) file of the data.
                                Respective graphs were plotted and final output was displayed.
                                        
                            </p>
                            <p className="description">
                                Technologies used - Python (tkinter, numpy, pandas, matplotlib)
                            </p>
                    </div>
                    )
                }
                        </div>
        )
    }
}

export default Main