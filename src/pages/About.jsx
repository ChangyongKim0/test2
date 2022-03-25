import React, {useReducer, useEffect} from "react";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import { API_URI } from "../src_shortcut";

const cx = classNames.bind(styles);

const dispatch = (state, action) => {
  console.log("hello");
  return action.type;
}

const About = () => {
  let [state, handleState] = useReducer(dispatch, "");
  let [state2, handleState2] = useReducer(dispatch, "");

  console.log("new0"+state);

  useEffect(()=>{
    handleState({type:3});
    handleState2({type:4});
    console.log(state);
    he();
    axios.put(API_URI + "urlInfo", {"url": "https://www.molit.go.kr/USR/policyData/m_34681/dtl.jsp?search=&srch_dept_nm=&srch_dept_id=&srch_usr_nm=&srch_usr_titl=Y&srch_usr_ctnt=&search_regdate_s=&search_regdate_e=&psize=10&s_category=p_sec_2&p_category=&lcmspage=1&id=4613"}).then((res) => {
      console.log(res);
    }).catch((res) => {
      console.log(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const he = () => {console.log("new"+state);}

  const PART = <object key="1" className={cx("popup")} data="https://www.eum.go.kr/web/ar/lu/luLandDet.jsp?selSido=11&selSgg=560&selUmd=110&selRi=00&landGbn=1&bobn=0035&bubn=0003&sggcd=&isNoScr=script&mode=search&selGbn=umd&s_type=1&add=land&pnu=1156011000100350003"/>;

  
  return (
    <div>
      <h2 onClick = {() => {
        console.log(state2);
        handleState({type : {a:"3"}});}}>About{state2}</h2>
        {/* <embed width="1200px" height="600px" src="https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B1%B4%EC%B6%95%EB%B2%95"/> */}
        {/* <object key="1" className={cx("popup")} data="https://www.eum.go.kr/web/ar/lu/luLandDet.jsp?selSido=11&selSgg=560&selUmd=110&selRi=00&landGbn=1&bobn=0035&bubn=0003&sggcd=&isNoScr=script&mode=search&selGbn=umd&s_type=1&add=land&pnu=1156011000100350003"/>
        {PART}
        <embed width="1200px" height="600px" src="https://www.nyj.go.kr/main/38?action-value=0a1e2c0c443971a6457801434fc746d1&action=read"/> */}
        
    </div>
  );
};

export default About;
