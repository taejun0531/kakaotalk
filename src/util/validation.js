import * as Yup from "yup";

export function vEmail() {
  return Yup.string("")
  .email("올바른 이메일 주소를 입력하세요.")
  .required("이메일 주소가 필요합니다.");
}

export function vPassword() {
  let check1 = /^(?=.*[a-z])(?=.*[0-9]).{8,15}$/;
	let check2 = /^(?=.*[a-z])(?=.*[^a-z0-9]).{8,15}$/;
  let check3 = /^(?=.*[^a-z0-9])(?=.*[0-9]).{8,15}$/;
  
  return  Yup.string("")
  .matches(check1 || check2 || check3, {message: "영문/숫자 포함 8~15자를 입력해 주세요."})
  .required("패스워드가 필요합니다.");
}