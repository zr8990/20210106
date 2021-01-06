import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <h3>Hello o哈哈哈 World!</h3>;
  }
}

function HelloMessage(props) {
  return <h4>Hello 我是方法 World!</h4>;
}

function HelloMessageCan(props) {
  return <h1>Hello {props.name}!</h1>;
}
const element = <HelloMessage name="Runoob"/>;

function Name(props) {
  return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
  return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
  return <h1>网站小名：{props.nickname}</h1>;
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloMessage></HelloMessage>
          {element}
          <Welcome></Welcome>
          <h2>Welcome to React</h2>
          <h5>欢迎来到菜鸟教程</h5>
          <Name name="百度" />
          <Url url = "http://www.baidu.com" />
          <Nickname nickname="小度" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          你可以在src/App.js文件中修改
        </p>
      </div>
    );
  }
}

export default App;
