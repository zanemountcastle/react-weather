var React = require('react');
var {Link, IndexLink} = require('react-router'); //add links to nav bar

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault(); //prevent page refresh
    alert('Not yet wired up!');
  },
  render: function(){
    return(
      <div className = "top-bar">
        <div className = "top-bar-left">
          <ul className = "menu">
            <li className = "menu-text">React Weather App</li>
            <li>
              <IndexLink to = "/" activeClassName = "active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to = "/about" activeClassName = "active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to = "/examples" activeClassName = "active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className = "top-bar-right">
          <form onSubmit = {this.onSearch}>
            <ul className = "menu">
                <li>
                  <input type="search" placeholder="Search weather"></input>
                </li>
                <li>
                  <input type="submit" className="button" value="Get weather"></input>
                </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
