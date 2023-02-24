import React from 'react'
import Carditemlist from '../organisms/Card_Item_List'
import Homebanner from '../molecules/home_banner'
import Recommendation from '../organisms/Recommendation_list'
import Newcollection_list from '../organisms/NewCollectionList'
function Home() {
  return (
    <div>
      <Homebanner/>
      <Newcollection_list/>
      <Recommendation/>
       <Carditemlist/> 
      </div>
  )
}

export default Home