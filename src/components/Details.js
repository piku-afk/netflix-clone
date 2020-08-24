import React, { useState, useEffect } from 'react';
import './css/details.css';
import { base_url, API_KEY, image_url } from './api';

import DetailsOverview from './DetailsOverview';
import DetailsEpisode from '../DetailsEpisode';



function getCurrentTab(tab, item) {
  switch(tab) {
    default:
    case 'overview': return <DetailsOverview item={item}/>;
    case 'episode': return <DetailsEpisode item={item}/>;
  }
}


 
function Details({id}) {

  

  const [activeTab, setActiveTab] = useState('overview');
  const [currentSeries, setCurrentSeries] = useState({});
  let fetchURL = `${base_url}tv/${id}?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(fetchURL)
    .then(res => res.json())
    .then(data => setCurrentSeries(data));
  }, [fetchURL]);


  const styles = {
    backgroundImage: `linear-gradient(90deg, rgba(17,17,17,1) 0%, rgba(0,0,0,0.5) 100%), url(${image_url}${currentSeries.backdrop_path})`
  }
  

  function handleClick(e) {
    setActiveTab(e.target.name);
  }

  return (
    <div className='details__container' style={styles}>
      {
        getCurrentTab(activeTab, currentSeries)
      }
      <div className='button__container'>
        <button name='overview' className={`${activeTab === 'overview' && 'active' }`} onClick={handleClick}>Overview</button>
        <button name='episode' className={`${activeTab === 'episode' && 'active' }`} onClick={handleClick}>Episodes</button>
      </div>
    </div>
  );
}

export default Details;