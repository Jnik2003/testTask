export default {
  name: "hide",
  inserted(el) {
    let parentRightPosition = el.getBoundingClientRect().right;
    let nodes = el.childNodes;
    nodes.forEach((item) => {
      let rightPosition = item.getBoundingClientRect().right;
      rightPosition > parentRightPosition
        ? (item.style.display = "none")
        : (item.style.display = "flex");
    });
  },
};
