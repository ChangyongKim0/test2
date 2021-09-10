import React, {useReducer, useEffect} from "react";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const he = () => {console.log("new"+state);}

  
  return (
    <div>
      <h2 onClick = {() => {
        console.log(state2);
        handleState({type : {a:"3"}});}}>About{state2}</h2>
    </div>
  );
};

export default About;
