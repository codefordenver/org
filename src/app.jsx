//var React = require("react");

const doc = "CONTRIBUTING.md";

document.title = doc;

var p = $.ajax(`https://api.github.com/repos/codefordenver/org/contents/${doc}`, {
    crossDomain: true,
    "Accept": "application/vnd.github.3.raw"
});

var converter = new Showdown.converter();

p.then(function(res){
    return atob(res.content);
}).then(function(markdown){
    $("#app").prepend(converter.makeHtml(markdown));
});

//var App = React.createClass({
//    render() {
//        return <h2>h2</h2>;
//    }
//});

//React.render(<App/>, document.getElementById('app'));
