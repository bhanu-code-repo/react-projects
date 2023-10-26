function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.childern;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   domElement.setAttribute("rel", reactElement.props.rel);
  for (const prop in reactElement.props) {
    if (prop === "childern") {
      continue;
    }
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  childern: "Learn React",
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
