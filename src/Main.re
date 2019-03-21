ReactDOMRe.renderToElementWithId(<TodoApp />, "root");

[%%raw {|
if (module.hot) {
    module.hot.accept("./TodoApp.js");
    require("./TodoApp.js");
}
|}]
