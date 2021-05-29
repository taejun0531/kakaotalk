import React from 'react';
import {
  BrowserRouter,
  Switch, Route, Link
} from 'react-router-dom';
import '../css/Main.css';
import '../css/screen-header.css';
import '../css/user-component.css';
import '../css/user-set.css';
import '../css/alt-screen-header.css';
import Friends from './Friends';
import Chats from './Chats';
import Setting from './Setting';
import Chat from './Chat';

class Main extends React.Component{
  render(){
    const today = new Date();
    const hours = today.getHours();
    var minutes = today.getMinutes();
    if(minutes < 10) minutes = "0" + minutes;

    // 현재 시간을 계속 출력 해줄 수 있도록 변경하기.
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="main__wrap">
        <div className="status-bar">
          <div className="status-bar__column">
            <span>연결 없음</span>
            <i className="fas fa-wifi" aria-hidden="true" />
          </div>
          <div className="status-bar__column">
            <span>{`${hours}:${minutes}`}</span>
          </div>
          <div className="status-bar__column">
            <span>97%</span>
            <i className="fas fa-battery-full" aria-hidden="true" />
            <i className="fas fa-bolt" aria-hidden="true" />
          </div>
        </div>

        <Switch>
          <Route path="/friends" component={Friends} />
          <Route path="/chats" component={Chats} />
          <Route path="/setting" component={Setting} />
          <Route path="/chat" component={Chat} />
          <Route path="/" component={Friends} />
        </Switch>
        
        <footer className="main__footer">
          <ul className="list">
            <li className="btn">
              <Link className="link" to="/friends">
                <i id="friends" className="fas fa-user fa-lg" aria-hidden="true" />
              </Link>
            </li>
            <li className="btn">
              <Link className="link"  to="/chats">
                <i id="chats" className="far fa-comment fa-lg" aria-hidden="true" />
              </Link>
            </li>
            <li className="btn">
              <Link className="link"  to="/setting">
                <i id="setting" className="fas fa-ellipsis-h fa-lg" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </BrowserRouter>
  }
}

export default Main;