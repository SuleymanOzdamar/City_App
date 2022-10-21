import React, { Component } from 'react'
import Tour from '../Tour'
import {tourData} from "../../tourData";
import './style.scss';


class TourList extends Component {
  state ={
    tours:tourData
  }

  removeTour = id => {
    console.log(id);
  }

  render() {
    const {tours}=this.state
    return (
      <section className="tourList" >
        {
          tours.map(tour => (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          ))
        }
      </section>
    )
  }
}

export default TourList
