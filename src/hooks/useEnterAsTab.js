import React, { useEffect } from "react";

const useEnterAsTab = (id) => {
  useEffect(() => {
    const ele = document.getElementById(id);
    const element_list = ele.querySelectorAll("input");
    ele.addEventListener("keyup", (event) => {
      //   console.log(event);
      if (event.code === "Enter" && event.target.nodeName === "INPUT") {
        // console.log("enter pressed.");
        // console.log(element_list);
        // let form = event.target.form;
        let index = Array.prototype.indexOf.call(element_list, event.target);
        if (element_list.length == index + 1) {
          element_list[0].focus();
        } else {
          element_list[index + 1].focus();
        }
        // event.preventDefault();
      }
    });
  }, []);
};

export default useEnterAsTab;
