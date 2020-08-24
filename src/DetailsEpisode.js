import React, { useEffect, useState } from 'react';
import { base_url, API_KEY } from './components/api';
import './components/css/detailsEpisode.css'
import EpisodeCard from './components/EpisodeCard';

function DetailsEpisode({item}) {
  const [currentSeasonNum, setCurrentSeasonNum] = useState(1);
  const [episodeArray, setEpisodeArray] = useState([]);

  let numSeason = item.seasons;

  function handleChange(e) {
    setCurrentSeasonNum(e.target.value)
  }

  useEffect(() => {
    let fetchURL = `${base_url}tv/${item.id}/season/${currentSeasonNum}?api_key=${API_KEY}`;
    fetch(fetchURL)
      .then(res => res.json())
      .then(data => setEpisodeArray(data.episodes));

  }, [item.id, currentSeasonNum]);

  return (
    <div className='episode__container'>

      <select className='episode__select' value={currentSeasonNum} onChange={handleChange}>
        {numSeason.map(num => (
          <option key={num.id} value={num.season_number} >{num.name}</option>
        ))}
      </select> 

      <div className="card__container">
        {episodeArray.map(item => (
          <EpisodeCard key={item.id} episode={item} />
        ))}

      </div>
    </div>
  );
}

export default DetailsEpisode;