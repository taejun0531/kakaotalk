import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class Setting extends React.Component{

  componentDidMount(){
    document.getElementById('friends').className = "far fa-user fa-lg";
    document.getElementById('chats').className = "far fa-comment fa-lg";
  }

  render(){
    const { username } = this.props.userStore;
    const { userimg } = this.props.userStore;
    const { usermail } = this.props.userStore;

    return <div className="Setting">
    <header className="screen-header">
      <h1 className="screen-header__title">설정</h1>
      <div className="screen-header__icons">
        <span><i className="fas fa-search fa-lg" aria-hidden="true" /></span>
        <span><i className="fas fa-music fa-lg" aria-hidden="true" /></span>
        <span><i className="fas fa-cog fa-lg" aria-hidden="true" /></span>
      </div>
    </header>
    <section className="setting-screen">
      <div className="user-component">
        <div className="user-component__column">
          <img src={userimg[0]} className="setting-user-img" />
            <div className="user-component__text">
              <h4 className="user-component__title">{username[0]}</h4>
              <h6 className="user-component__mail">{usermail}</h6>
          </div>
        </div>
      </div>
    </section>
  </div>
  }
}

export default Setting;