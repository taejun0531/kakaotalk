import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class Friends extends React.Component{

  componentDidMount(){
    document.getElementById('friends').className = "fas fa-user fa-lg";
    document.getElementById('chats').className = "far fa-comment fa-lg";
  }

  render(){
    const { username } = this.props.userStore;
    const { userimg } = this.props.userStore;
    const { usersubtitle } = this.props.userStore;

    return <div className="Friends">
      <header className="screen-header">
        <h1 className="screen-header__title">친구</h1>
        <div className="screen-header__icons">
          <span><i className="fas fa-search fa-lg" aria-hidden="true" /></span>
          <span><i className="fas fa-music fa-lg" aria-hidden="true" /></span>
          <span><i className="fas fa-cog fa-lg" aria-hidden="true" /></span>
        </div>
      </header>
      <section className="friends-screen">
        <div className="user-component">
          <div className="user-component__column">
            <img src={userimg[0]} className="user-component__avatar user-component__avatar--xl" />
            <div className="user-component__text">
              <h4 className="user-component__title">{username[0]}</h4>
              <h6 className="user-component__subtitle">{usersubtitle[0]}</h6>
            </div>
          </div>
        </div>
        <div className="friends-screen__channel">
          <div className="friends-screen__channel-header">
            <span>친구 2</span>
            <i className="fas fa-chevron-up fa-xs" aria-hidden="true"></i>
          </div>
          <div className="user-component">
            <div className="user-component__column">
              <img src={userimg[1]} className="user-component__avatar user-component__avatar--sm" />
              <div className="user-component__text">
                <h4 className="user-component__title user-component__title--not-bold">{username[1]}</h4>
                <h6 className="user-component__subtitle user-component__subtitle--not-bold">{usersubtitle[1]}</h6>
              </div>
            </div>
          </div>
          <br />
          <div className="user-component">
            <div className="user-component__column">
              <img src={userimg[2]} className="user-component__avatar user-component__avatar--sm" />
              <div className="user-component__text">
                <h4 className="user-component__title user-component__title--not-bold">{username[2]}</h4>
                <h6 className="user-component__subtitle user-component__subtitle--not-bold">{usersubtitle[2]}</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}

export default Friends;