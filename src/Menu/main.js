import React, { useState } from 'react'
import './style.scss'
import { Menu, Icon } from 'antd'
import Home from '../Home/main'
import About from '../About/main'
import Skills from '../Skills/main'
import Projects from '../Projects/main'
import Contact from '../Contact/main'
import LinkToResume from '../mediaFiles/Surbhi_Resume.pdf'
import { Link } from 'react-router-dom';



function MenuComponent() {
    const [selectedMenuItem, setSelectedMenuItem] = useState('item1');

    const componentsSwtich = (key) => {
        switch (key) {
            case 'item1':
                return (<Home />);
            case 'item2':
                return (<About />);
            case 'item3':
                return (<Skills />);
            case 'item4':
                return (<Projects />);
            case 'item5':
                return (<Contact />);
            default:
                break;
        }
    };

    return (
        <div className="main">
            <div className="menu-bar" style={{ height: window.innerHeight }}>
                <Menu selectedKeys={selectedMenuItem} mode="vertical" >
                    <Menu.Item key="item1" onClick={(e) => setSelectedMenuItem(e.key)}><Icon type="home" /><p>HOME</p></Menu.Item>
                    <Menu.Item key="item2" onClick={(e) => setSelectedMenuItem(e.key)}><Icon type="user" /><p>ABOUT</p></Menu.Item>
                    <Menu.Item key="item3" onClick={(e) => setSelectedMenuItem(e.key)}><Icon type="code" /><p>SKILLS</p><p></p></Menu.Item>
                    <Menu.Item key="item4" onClick={(e) => setSelectedMenuItem(e.key)}><Icon type="eye" /><p>PROJECTS</p></Menu.Item>
                    <Menu.Item key="item5" onClick={(e) => setSelectedMenuItem(e.key)}><Icon type="mail" /><p>CONTACT</p></Menu.Item>
                    <Menu.Item key="item6">
                        <a href={LinkToResume} target="_blank">
                            <Icon type="profile" /><p>RESUME</p>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="item7" className="no-text">
                        <a href="https://www.linkedin.com/in/surbhi-rajpal-a91711184/" target="_blank">
                            <Icon type="linkedin" />
                        </a>
                    </Menu.Item>
                    <Menu.Item key="item8" className="no-text">
                        <a href="https://github.com/surbhirajpal" target="_blank">
                            <Icon type="github" />
                        </a>
                    </Menu.Item>
                </Menu>
            </div>
            <div className="content">
                {componentsSwtich(selectedMenuItem)}
            </div>
        </div>
    )

}

export default MenuComponent