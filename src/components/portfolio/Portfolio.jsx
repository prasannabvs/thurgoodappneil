import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected,setSelected] = useState("quote");
  const [data,setData] = useState([]);
  const list = [
    
  ];

  useEffect(()=>{

    switch(selected){
      case "featured": 
        setData(featuredPortfolio);
        break;
      default:
          setData(featuredPortfolio);
    }

  },[selected])


  return (
    <div className="portfolio" id="portfolio">
      <h2>Quote</h2>
      <ul>
        {list.map(item=> (
          <PortfolioList 
            title={item.title}
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
          
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
        
      </div>
      <h1>"We will only attain freedom if we learn to appreciate what is different and muster the courage to discover what is fundamentally the same"</h1>
    </div>
  )
}
