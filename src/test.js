import React ,{useState}from 'react'
import {Menu} from 'antd'

function MyComponent(){
    const [selectedMenuItem, setSelectedMenuItem]= useState('item1');
   
    const componentsSwtich = (key) => {
    switch (key) {
      case 'item1':
        return (<h1>item1</h1>);
      case 'item2':
        return (<h1>item2</h1>);
      case 'item3':
        return (<h3>item3</h3>);
      default:
        break;
     }
    };
   
   return(
    <div>
     <Menu selectedKeys={selectedMenuItem} mode="vertical" onClick={(e) => 
           setSelectedMenuItem(e.key)}>
       <Menu.Item key="item1">your first component here</Menu.Item>
       <Menu.Item key="item2">your second here</Menu.Item>
       <Menu.Item key="item3">your third here</Menu.Item>
      </Menu>
      <div>
        {componentsSwtich(selectedMenuItem)}
      </div>
    </div>
    )
     
}

export default MyComponent