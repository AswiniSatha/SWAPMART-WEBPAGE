import React from 'react'
import axios from 'axios';
import Itemcard from '../molecules/Itemcard';
import './Recommendation_list.css';
import { Link } from 'react-router-dom';

function Newcollection_list() {
    const [itemData,setItemData]=React.useState([]);
    React.useEffect(()=>{
      axios.get("https://fir-react-fd4d2-default-rtdb.asia-southeast1.firebasedatabase.app/Newcollection-list.json")
      .then(response=>{  
            let itemData=[];
            for(let key in response.data)
            {
                 // console.log(response[key]);
                 itemData.push({...response.data[key],id:key});
            }
            setItemData(itemData);
            console.log(itemData);

      }).catch(error=>{
            console.log(error)
      })},[]);
  return (
    <section className="recommendation_sec">
    <div className='recommendation_text'><span>New Deals</span>
    <div className='Recommendation_list'>
    <div className='Recomm_Item_List'>
      {itemData.map((item,index)=>(
            <Link to={`/product${item.id}`} key={index}>
<Itemcard key={index} Itemimg={item.Itemimg} Itemprice={item.Itemprice} 
Itemtitle={item.Itemtitle} Itemplace={item.Itemplace} Itemdate={item.Itemdate} discount={item.discount} />
</Link>))}
        </div>
        </div>
        </div>
        </section>
  )
}

export default Newcollection_list