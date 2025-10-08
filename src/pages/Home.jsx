import React from 'react'
import Banner from '../components/Banner'
import FlashSale from '../components/FlashSale'
import Category from '../components/Category'
import BestSelling from '../components/BestSelling'
import MusicExperience from '../components/MusicExperience '
import ExploreProduct from '../components/ExploreProduct'
import NewArrival from '../components/NewArrival'
import Service from '../components/Service'

const Home = () => {
  return (
    <>
      <Banner />
      <FlashSale />
      <Category />
      <ExploreProduct />
      <MusicExperience />
      <BestSelling />
      <NewArrival />
      <Service />
    </>
  )
}

export default Home