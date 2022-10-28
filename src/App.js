//  Define the content of the app as 'App'
// This is a function component
const App = () => {
    return React.createElement(
        "div",                  // create a simple div
        {},                     // which has no additional paramaters //P.S. null can be used instead of {}
        React.createElement(    // whose content is another new element
            "h1",               // create a h1 inside the div
            {},                 // with no additional parameters such as class name or id // id: "brand"
            "Next Best Friend"         // with the content 'Next Best Friend'
        )
    );
};

// render the app 'App' inside the HTML element with the id of 'root'
ReactDOM.render(React.createElement(App), document.getElementById("root"));