import React from 'react';
import './App.css';
import Main from './components/Main';
import SignIn from './components/SignIn';
import { inject, observer } from 'mobx-react';

const name = ["윤태준", "승화이", "주뽕"];
const src = ["./img/KakaoTalk_user_img.jpg", "./img/user_img_psh.jpg", "./img/user_img_jjh.jpg"];
const subtitle = ["03년생 입니다.", "나 완전 체했어.", "수능생이였다."];
const content = [[""], ["나 아까 라면 먹었는데", "체했어.ㅋㅋ"], ["드디어 수능 끝났다.", "등급은 물어보지 마라."]];

@inject('userStore')
@observer
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isSignIn : false
    }
  }

  SignIn = (email) => {
    window.sessionStorage.setItem("email", email);
    this.setState({
      isSignIn : true
    });
    this.props.userStore.setUsermail(email);
    this.setUserdata();
    window.location.reload();
  }

  SignOut = () => {
    this.setState({
      isSignIn : false
    });
  }

  setUserdata = () => {
    const {userStore} = this.props;
    var i;
    for(i in name)
      userStore.setUsername(name[i]);
    for(i in src)
      userStore.setUserimg(src[i]);
    for(i in subtitle)
      userStore.setUsersubtitle(subtitle[i]);
    for(i in content)
      userStore.setUsercontent(content[i]);
  }

  componentDidMount(){
    const email = window.sessionStorage.getItem('email');
    if(email){
      this.setState({
        isSignIn : true
      });
      this.props.userStore.setUsermail(email);
      this.setUserdata();
    }
  }

  render(){
    const { isSignIn } = this.state;
    return <div className="app">
      <img className="iPhone" src={"./img/iPhone_img.png"} />
      <div className="wrap">
      {isSignIn ? <Main /> : <SignIn SignIn={this.SignIn} />}
      </div>
    </div>
  }
}

export default App;
