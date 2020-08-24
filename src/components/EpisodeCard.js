import React from 'react';
import './css/episodeCard.css';

function EpisodeCard({episode}) {
  return (
    <div className='card'>
      <img src={`https://image.tmdb.org/t/p/original${episode?.still_path}`} alt={`${episode?.name}`} />

      <div className="card__text">
        <h3 className='episode__number'>Episode {`${episode?.episode_number}`}</h3>
        <h4 className='episode__name'>{`${episode?.name}`}</h4>
        <p className='episode__overview'>{`${episode?.overview}`}</p>
      </div>
    </div>
  );
}

export default EpisodeCard;