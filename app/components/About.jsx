var React = require('react');

var About = (props) => {
    return(
        <div>
            <h1 className = "text-center">About</h1>
            <p>
                This is a weather application built on React.
                This was built for The Complete React Web App Developer
                course on Udemy.
            </p>
            <p>
                Tools used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - JavaScript framework
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - Weather API
                </li>
                <li>
                    <a href="http://foundation.zurb.com/">Foundation</a> - CSS framework
                </li>
                <li>
                    <a href="http://heroku.com/">Heroku</a> - PaaS
                </li>
                <li>
                    <a href="https://webpack.github.io">Webpack</a> - Module bundler
                </li>
                <li>
                    <a href="https://github.com/">GitHub</a> - Version control
                </li>
            </ul>
        </div>
    )
};

module.exports = About;
