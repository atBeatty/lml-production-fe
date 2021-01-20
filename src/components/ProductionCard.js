import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import ProductionDetails from '../components/ProductionDetails'
import React from 'react'
import { withRouter } from 'react-router-dom'
import anime from 'animejs'



const ProductionCard = (props) => {
   const handleClick = (e) => {
    anime({
        targets: 'div',
        left: '240px',
        backgroundColor: '#FFF',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad'
      });
    anime.timeline()
        .add({
            targets: "div",
            translateX: [0, 200],
            duration: 500,
            rotate: 300,
            easing: "easeOutSine"
        })
   }

    return <div className="production-card">
       <h2>{props.production.name}</h2>
       <h4>{props.production.client}</h4>
        <Link to={`/productions/${props.production.id}`}>Show Page</Link>
        <button onClick={handleClick}></button>
    </div>

}

export default withRouter(ProductionCard)