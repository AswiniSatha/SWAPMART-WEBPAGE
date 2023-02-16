import React from 'react'
import Itemcard from '../molecules/Itemcard'
import './Card_iten_List.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Card_Item_List() {

      const Itemlist=[
            {"Itemimg":"https://m.media-amazon.com/images/I/51eTOVYRbTL._AC_SX296_SY426_FMwebp_QL65_.jpg",
            "Itemprice":"$15000",
            "Itemtitle":"APPLE iPhone 11(White 23 GB)",
            "Itemplace":"Chennai, TamilNadu",
            "Itemdate":"26-01-2023"},
            {"Itemimg":"https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70",
            "Itemprice":"$15000",
            "Itemtitle":"APPLE iPhone 11(White 23 GB)",
            "Itemplace":"Chennai, TamilNadu",
            "Itemdate":"26-01-2023"},
            {"Itemimg":"https://rukminim1.flixcart.com/image/200/200/krtjgcw0/headphone/d/9/g/au-mh501-maono-original-imag5j35rffkwpac.jpeg?q=70",
            "Itemprice":"$15000",
            "Itemtitle":"APPLE iPhone 11(White 23 GB)",
            "Itemplace":"Chennai, TamilNadu",
            "Itemdate":"26-01-2023"},
            {"Itemimg":"https://m.media-amazon.com/images/I/41CQCMPCSdL._AC_SY400_.jpg",
            "Itemprice":"$15000",
            "Itemtitle":"APPLE iPhone 11(White 23 GB)",
            "Itemplace":"Chennai, TamilNadu",
            "Itemdate":"26-01-2023"},
            {"Itemimg":"https://m.media-amazon.com/images/I/418PM3NqdcL._AC_SY400_.jpg",
            "Itemprice":"$15000",
            "Itemtitle":"APPLE iPhone 11(White 23 GB)",
            "Itemplace":"Chennai, TamilNadu",
            "Itemdate":"26-01-2023"},
            {"Itemimg":"https://m.media-amazon.com/images/I/51rrWvzviVL._AC_SX296_SY426_FMwebp_QL65_.jpg",
            "Itemprice":"$15000",
            "Itemtitle":"APPLE iPhone 11(White 23 GB)",
            "Itemplace":"Chennai, TamilNadu",
            "Itemdate":"26-01-2023"},
            {"Itemimg":"https://m.media-amazon.com/images/I/61ODBAvzOXL._AC_SX296_SY426_FMwebp_QL65_.jpg",
            "Itemprice":"$15000",
            "Itemtitle":"APPLE iPhone 11(White 23 GB)",
            "Itemplace":"Chennai, TamilNadu",
            "Itemdate":"26-01-2023"},
            {"Itemimg":"	https://m.media-amazon.com/images/I/91veRYPjpeL._AC_SX296_SY426_FMwebp_QL65_.jpg",
            "Itemprice":"$15000",
            "Itemtitle":"APPLE iPhone 11(White 23 GB)",
            "Itemplace":"Chennai, TamilNadu",
            "Itemdate":"26-01-2023"}
      ]
      
      const [itemData,setItemData]=React.useState([]);
      // React.useEffect(()=>{
      // fetch("https://fir-react-fd4d2-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json")
      // .then(response=>response.json()).then(data=>{
      //       let ItemList_data=[];
      //       for(let key in data)
      //       {
      //             console.log(key);
      //             ItemList_data.push(data[key]);
      //       }
      //       setItemData(ItemList_data)

      // })}
      // ,[])
//API CALL USING AXIOS
      React.useEffect(()=>{
      axios.get("https://fir-react-fd4d2-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json")
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
      // {itemData.map((item,index)=>(
      //       <Itemcard key={index} Itemimg={item.Itemimg} Itemprice={item.Itemprice} 
      //       Itemtitle={item.Itemtitle} Itemplace={item.Itemplace} Itemdate={item.Itemdate} />))}
  return (
      <div><h3>Electronics</h3>
    <div className='Card_Item_List'>
      {itemData.length===0?<h3>No Product Found</h3>
      :itemData.map((item,index)=>(
            <Link to={`/${item.id}`} key={index}>
            <Itemcard key={index} Itemimg={item.Itemimg} Itemprice={item.Itemprice} 
            Itemtitle={item.Itemtitle} Itemplace={item.Itemplace} Itemdate={item.Itemdate} />
            </Link>))}
        </div>
        </div>
  )
      }

export default Card_Item_List