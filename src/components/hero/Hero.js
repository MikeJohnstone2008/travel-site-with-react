import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <div className="container">
                <div id="carousel-example-generic" className="carousel slide row" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <div id="banner" className="col-md-6 col-md-offset-3">
                        <h1>Welcome to my travel site</h1>
                        <p>This site is about places I would like to travel</p>
                        <h3>Here are some places I would like to visit</h3>
                    </div>

                    {/* Wrapper for slides */}
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="/hero/images/travel_hero.jpg" alt="travel image" />
                            <div className="carousel-caption">
                                ...
                            </div>
                        </div>
                        <div className="item">
                            <img src="/hero/images/travel_hero_art.jpg" alt="travel image" />
                            <div className="carousel-caption">
                                ...
                            </div>
                        </div>
                        <div className="item">
                            <img src="/hero/images/travel_hero_dots.jpg" alt="travel image" />
                            <div className="carousel-caption">
                                ...
                            </div>
                        </div>
                        <div className="item">
                            <img src="/hero/images/travel_hero_heat.jpg" alt="travel image" />
                            <div className="carousel-caption">
                                ...
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        )
    }
};

export default Hero;


