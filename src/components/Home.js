
import anime from 'animejs'

import React from 'react'


let animationHome = () => {
    anime.timeline()
    .add({
        targets: "div.home-page",
        translateX: [0, 200],
        duration: 500,
        // rotate: 300,
        easing: "easeOutSine"
    })
}

const Home = () => {

    animationHome()
    return <div className="home-page">
        <span className="title-marquee">LML</span>
        <h4>PRODUCTIONS</h4>
    </div>


}

export default Home