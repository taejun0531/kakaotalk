import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { vEmail, vPassword } from '../util/validation';
import '../css/SignIn.css';

class SignIn extends React.Component{
  render(){
    console.log("비밀번호 : 영문/숫자 포함 8~15자를 입력해 주세요.");
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    // 현재 시간을 계속 출력 해줄 수 있도록 변경하기.
    return <div className="check_signin">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={
          Yup.object({
            email: vEmail(),
            password: vPassword()
          })
        }
        onSubmit={(value) => {
          this.props.SignIn(value.email);
        }}
      >
        {props =>
        <div className="signin">
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
          <div className="signin__wrapper">
            <header className="signin-header">
              <h1>Welcome My KaKaoTalk</h1>
              <p>카카오톡 클론 앱 입니다.</p>
            </header>
            <section className="signin__form">
              <form onSubmit={props.handleSubmit}>
                <input id="email" name="email" type="email" placeholder="이메일을 입력하세요."
                onChange={props.handleChange} /><br />
                <input id="password" name="password" type="password" placeholder="비밀번호를 입력하세요."
                onChange={props.handleChange} /><br />
                <input className="submit__btn" type="submit" value="LOGIN" /><br />
              </form>
            </section>
            <footer className="signin__register">
              <p>Not registered? <a href="#" className="signin__register__create">Create an account</a></p>
            </footer>
          </div>
        </div>}
      </Formik>
    </div>
  }
}

export default SignIn;
