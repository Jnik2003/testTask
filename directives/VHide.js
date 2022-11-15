export default {
  name: "hide",

  inserted(el) {
    setTimeout(() => {
      let parentRightPosition = el.getBoundingClientRect().right;
      let nodes = el.childNodes;
      nodes.forEach((item) => {
        let rightPosition = item.getBoundingClientRect().right;
        // console.log(rightPosition, parentRightPosition)
        rightPosition > parentRightPosition
          ? (item.style.display = "none")
          : (item.style.display = "flex");
      });
    }, 500);
  },
};
