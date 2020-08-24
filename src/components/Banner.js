import React from 'react';
import './css/banner.css';
import { base_url, request, image_url } from './api';
import { useState, useEffect } from 'react';

export function Button() {
  return (
    <div>
      <button className='header__button'><i className="fas fa-play"></i> Play</button>
      <button className='header__button'><i className="fas fa-plus"></i> Add To</button>
    </div>
  );
}

function Banner() {
 const [bannerSeries, setBannerSeries] = useState({});

 const styles = {
   backgroundImage: `linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(0,0,0,0) 50%), url(${image_url}${bannerSeries.backdrop_path})`,
 }

  useEffect(() => {
    
    fetch(`${base_url}${request.fetchNetflixOriginals}`)
    .then(res => res.json())
    .then(data => setBannerSeries(data.results[Math.floor(Math.random() * data.results.length)]));

  }, [])

  return (
    <header style={styles} className='header' >
      <div className='header__container'>
        <h1 className='header__title'>{bannerSeries.name}</h1>
        <Button />
        <p>{bannerSeries.overview?.slice(0, 100) + '...'}</p>
      </div>
    </header>
  )
}

export default Banner;
