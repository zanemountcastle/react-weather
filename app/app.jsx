var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation // css! = css loader // style! = chain loaders to inject into HTML
require('style!css!foundation-sites/dist/foundation.min.css');  // css! = css loader
$(document).foundation();

//App css
require('style!css!appplicationStyles')

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = "/" component={Main}>
      <Route path = "about" component={About}/>
      <Route path = "examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
