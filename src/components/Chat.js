import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class Chat extends React.Component{

  componentDidMount(){
    var ele = document.getElementsByTagName('footer');
    if(ele)
      ele[0].style.display = "none";
    ele = document.getElementsByClassName('status-bar');
    ele[0].style.backgroundColor = "#abc1d1";
  }

  render(){
    const { username } = this.props.userStore;
    const { userimg } = this.props.userStore;
    const { usercontent } = this.props.userStore;
    const n = Number(window.location.search.substring(7));
    var mintime = 36;

    return <div className="chat-screen">
      <div className="Chat">
      <header className="alt-header">
        <div className="alt-header__column">
          <Link to="/chats">
            <i className="fas fa-angle-left fa-3x" aria-hidden="true" />
          </Link>
        </div>
        <div className="alt-header__column">
          <h1 className="alt-header__title">{username[n]}</h1>
        </div>
        <div className="alt-header__column">
          <span><i className="fas fa-search fa-lg" aria-hidden="true" /></span>
          <span><i className="fas fa-bars fa-lg" aria-hidden="true" /></span>
        </div>
      </header>
      
      <section className="main-screen main-chat">
        <div className="chat__timestamp">
          2021년 01월 28일 목요일
        </div>
        
        {usercontent[n+1].map((content,  i) =>
          <div className="message-row" key={i}>
            <div className="message-row-per">
              <img src={userimg[n]} />
              <div className="message-row__content">
                <span className="message__author">{username[n]}</span>
                <div className="message__info">
                  <span className="message__bubble">{content}</span>
                  <span className="message__time">21:{mintime++}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      </div>
    </div>
  }
}

export default Chat;