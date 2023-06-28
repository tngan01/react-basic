import React from 'react';
import logo from './logo.svg';
import './App.scss';

export class App extends React.Component{
  state = {
    name: 'Eric',
    channel: 'Hoi Dan IT'
  }
  // arrow function
  handleOnChangeName = (event) => {
    // cập nhật lại state
    // hàm setState tự động merge, các state còn lại được giữ nguyên (channel)
    // mỗi lần gọi sẽ cập nhật biến state và đồng thời gọi react gọi lại hàm render
    this.setState({
      name:event.target.value //  thay đổi
    })
  }
  //
  handleClickButton = () =>{
    console.log('in ra màn hình')
    alert('click me')
  }
  render(){  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      
     <div className='firt'>
      <input value={this.state.name} type='text'
        onChange={(event)=> this.handleOnChangeName(event)}/>
      Hello my components, My name is {this.state.name}
     </div>
     <div className='second'>
      My youtube channel: {this.state.channel}
     </div>
     <div className='click'>
      <button onClick={this.handleClickButton}>Click me</button>
     </div>
      </header>
      </div>
    </div>
    
  );
}
}

export default App;
