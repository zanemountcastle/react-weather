var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = ''; //clear text field in browser
      this.props.onSearch(location);
    }
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type = "text" ref="location" placeholder="Enter city name"></input>
          </div>
          <div>
            <button className="button expanded hollow">Get weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
