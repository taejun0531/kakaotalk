import { observable, action } from 'mobx';

export class UserStore{
  @observable usermail = "";
  @observable username = [];
  @observable userimg = [];
  @observable usersubtitle = [];
  @observable usercontent = [[]];


  @action setUsermail = (usermail) => {
    this.usermail = usermail;
    //console.log(`UserStore(mail) : ${usermail}`);
  }

  @action setUsername = (username) => {
    this.username[this.username.length] = username;
    //console.log(`UserStore(name) : ${username}`);
  }

  @action setUsersubtitle = (usersubtitle) => {
    this.usersubtitle[this.usersubtitle.length] = usersubtitle;
    //console.log(`UserStore(subtitle) : ${usersubtitle}`);
  }

  @action setUserimg = (userimg) => {
    this.userimg[this.userimg.length] = userimg;
    //console.log(`UserStore(img:src) : ${userimg}`);
  }

  @action setUsercontent = (usercontent) => {
    this.usercontent[this.usercontent.length] = usercontent;
    //console.log(`UserStore(content) : ${usercontent}`);
  }
}