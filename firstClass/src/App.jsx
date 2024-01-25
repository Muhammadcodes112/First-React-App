import React from "react";
import Counter from "./counter";
import Profile from "./profile";
import Test from "./test";
import Todolist from "./Todolist";

function App(){
  return(
    <div>
      <h2>App Component</h2>

      {/* <Test/> */}
      <Todolist/>
      
      {/* <Counter /> */}
      {/* <Profile/> */}
    </div>
  )
}
export default App;