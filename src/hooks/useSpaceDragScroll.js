import React, { useEffect } from "react";

const useSpaceDragScroll = (id, handleSpaceKeyPress = () => {}) => {
  useEffect(() => {
    const ele = document.getElementById(id);
    const ele_children = Array.from(ele.children);
    let pos = { top: 0, left: 0, x: 0, y: 0 };
    let enable = true;

    const spaceKeyDownHandler = function (e) {
      if (enable) {
        handleSpaceKeyPress({ type: true });
        pos = {
          // The current scroll
          left: ele.scrollLeft,
          top: ele.scrollTop,
          // height: ele.scrollHeight - ele.clientHeight,
          height: ele.clientHeight,
          // width: ele.scrollWidth - ele.clientWidth,
          width: ele.clientWidth,

          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
        };

        ele.addEventListener("mousemove", mouseMoveHandler);
        ele.addEventListener("keyup", spaceKeyUpHandler);
        ele.addEventListener("mouseleave", spaceKeyUpHandler);
        // console.log(ele);
        // console.log(ele.children);
      }
    };

    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      let scroll_top = pos.top - dy;
      let scroll_left = pos.left - dx;
      ele.scrollTop = scroll_top;
      ele.scrollLeft = scroll_left;
      // if (e.clientY < 40 || e.clientY > pos.height - 40) {
      //   mouseUpHandler();
      // }
      // if (e.clientX < 40 || e.clientX > pos.width - 40) {
      //   mouseUpHandler();
      // }

      // console.log(pos);
      // console.log(pos.top - dy);
      // console.log(e.clientX);
    };

    const spaceKeyUpHandler = function () {
      handleSpaceKeyPress({ type: false });
      ele.removeEventListener("mousemove", mouseMoveHandler);
      ele.removeEventListener("keyup", spaceKeyUpHandler);
      ele.removeEventListener("mouseleave", spaceKeyUpHandler);
    };

    ele.addEventListener("keydown", (event) => {
      console.log(event);
      if (event.code === "Space") {
        spaceKeyDownHandler();
      }
    });
  }, []);
};

export default useSpaceDragScroll;
