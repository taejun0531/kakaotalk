import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class Chats extends React.Component{

  componentDidMount(){
    document.getElementById('friends').className = "far fa-user fa-lg";
    document.getElementById('chats').className = "fas fa-comment fa-lg";
    var ele = document.getElementsByTagName('footer');
    if(ele)
      ele[0].style.display = "block";
    ele = document.getElementsByClassName('status-bar');
    ele[0].style.backgroundColor = "white";
  }

  render(){
    const { username } = this.props.userStore;
    const { userimg } = this.props.userStore;
    const { usercontent } = this.props.userStore;

    return <div className="Chats">
    <header className="screen-header">
      <h1 className="screen-header__title">채팅</h1>
      <div className="screen-header__icons">
        <span><i className="fas fa-search fa-lg" aria-hidden="true" /></span>
        <span><i className="fas fa-music fa-lg" aria-hidden="true" /></span>
        <span><i className="fas fa-cog fa-lg" aria-hidden="true" /></span>
      </div>
    </header>
    <section className="chats-screen">
      <Link to="/chat?index=1">
        <div className="user-component">
          <div className="user-component__column">
            <img src={userimg[1]} className="user-component__avatar user-component__avatar--sm" />
            <div className="user-component__text">
              <h4 className="user-component__title user-component__title--not-bold">{username[1]}</h4>
              <h6 className="user-component__subtitle user-component__subtitle--not-bold">{usercontent[2][usercontent[2].length-1]}</h6>
            </div>
          </div>
        </div>
      </Link>
      <br/>
      <br/>
      <Link to="/chat?index=2">
        <div className="user-component">
          <div className="user-component__column">
            <img src={userimg[2]} className="user-component__avatar user-component__avatar--sm" />
            <div className="user-component__text">
              <h4 className="user-component__title user-component__title--not-bold">{username[2]}</h4>
              <h6 className="user-component__subtitle user-component__subtitle--not-bold">{usercontent[3][usercontent[3].length-1]}</h6>
            </div>
          </div>
        </div>
      </Link>
    </section>
  </div>
  }
}

export default Chats;