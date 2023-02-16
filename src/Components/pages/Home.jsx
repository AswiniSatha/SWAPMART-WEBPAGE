import React from 'react'
import Card_Item_List from '../organisms/Card_Item_List'
import Homebanner from '../molecules/home_banner'
import Recommendation_list from '../organisms/Recommendation_list'
function Home() {
  return (
    <div>
      <Homebanner/>
      <Recommendation_list/>
       <Card_Item_List/> 
      </div>
  )
}

export default Home