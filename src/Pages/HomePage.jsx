// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home_slider from '../Components/Home_slider/Home_slider'
import Home_card_sliders from '../Components/Home_slider/Home_card_sliders'
import Home_cars_data_carousel from '../Components/Home_slider/Home_cars_data_carousel';
import Services from '../Components/Services/Services';

export default function HomePage() {
  return (
    <div>
      <Home_slider/>
      <Home_card_sliders/>
      <Home_cars_data_carousel/>
      
      <Services />
    </div>
  )
}
