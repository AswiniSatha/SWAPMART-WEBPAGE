import './Header.css';

function Header({productimg,productTitle,productDesc1,productDesc2,productDesc3,productDesc4,prductprice,productexchnage})
{
   
  return(
    <div className="card">
        <div className="card_img">
        <img src={productimg} alt="iPhone_Img" ></img>
        </div>
        <div className='card_desc'>
        <h3>{productTitle}</h3>
        <ul>
            <li>{productDesc1}</li>
            <li>{productDesc2}</li>
            <li>{productDesc3}</li>
            <li>{productDesc4}</li>
        </ul>
        </div>
        <div>/pl,
            <h3>{prductprice}</h3>
            <p>Free delivery</p>
            <p>Saver Deal</p>
            <p>{productexchnage}</p>

        </div>
    </div>
    
    
  );
}



export default Header;