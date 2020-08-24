import React from 'react';
import { Button } from './Banner';
import './css/detailsOverview.css';

function DetailsOverview({item}) {

  return (
    <div className='details__text'>
      <h3 className='details__title'>{item.name}</h3>
      <div className="small__container">
        <small>{item.first_air_date?.slice(0, 4)}</small>
        <small>{item.number_of_seasons} seasons</small>
        <small>{item.episode_run_time} mins</small>
      </div>
      <p className='details__description'>{item.overview}</p>
      <Button />
    </div>
  );
}

export default DetailsOverview;