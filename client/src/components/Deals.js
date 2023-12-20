import React, {useEffect, useState} from 'react';
import NoUserFound from './NoUserFound';

// maybe could rando the store or let user choose store to reveal the 3 deals
// we have on offer for user

function Deals({user}) {

    const [deals, setDeals] = useState([]);


    useEffect(() => {
        fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=3")
            .then(r=> r.json())
            .then(json => setDeals(json))
    }, [])
    
    if (!deals) return <h3> Loading...</h3>

    // https://www.cheapshark.com/api/1.0/deals?storeID=1

    // top 3 deals per store

    if (!user) {
      return <NoUserFound/>
    } else {
      return (
        <div className='deals'>
            <h2>🤝 Top 3 Steam Deals</h2>
            <p>Here are your curated deals (in USD), thank you for signing up! Purchasable on steam.</p>
            <ul className = 'deals-list'>
                {
                    deals.map((deal) => {
                    if (!deal) return <p>Loading...</p>
                    return (
                        <li className = 'deal' key = {deal.dealID}>
                            <h4>{deal.title}</h4>
                            <img className = 'deal-image' src={deal.thumb} alt = {deal.title}/>
                            <p>Original Price: ${deal.normalPrice}</p>
                            <p>Steam Sale Price: ${deal.salePrice}</p>
                            <button onClick={() => {
                                window.open(`https://store.steampowered.com/app/${deal.steamAppID}/${deal.title}/`)
                            }}>View Deal</button>

                        </li>
                    )
                })}
            </ul>
        </div>
    )  
    }
    
}

export default Deals;