import React from 'react'
import product_card from "../data/product_data";


const MainContent=()=>{
    console.log(product_card);
    const listItems = product_card.map((item)=>
    <div className="card" key={item.id}>
       <div className="card_img">
           <img src={item.thumb}/>
       </div>
       <div className="card_header">
            <h4 >{item.product_name}</h4>
            <p>{item.description}</p>
            <p className='price'>{item.currency}<span>{item.price}</span></p>
            <div className='btn1'>Add to cart</div>
       </div>
    </div>
    );
    return(
        <div>
        
        <div className="main_content">
            
            {listItems}
        </div>
        </div>
    )
}
export default MainContent;