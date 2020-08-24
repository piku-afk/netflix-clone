import React, { useEffect, useState } from 'react';
import { base_url, image_url } from './api';
import './css/row.css';
import Details from './Details';

function Row({title, fetchURL, isLarge}) {
  const [series, setSeries] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showItem, setShowItem] = useState({});

  const [prevID, setPrevID] = useState('');

  useEffect(() => {
    fetch(`${base_url}${fetchURL}`)
      .then(res => res.json())
      .then(data => setSeries(data.results));
  }, [fetchURL])

  function handleClick(e, item) {
    if(e.target.dataset.id === prevID) {
      setShowDetails(false);
      setPrevID('');
    } else {
      setShowDetails(true);
      setPrevID(e.target.dataset.id);
    }

    setShowItem(item)
  };

  return (
    <div className="row__container">
      <h2 className="row__title">{title}</h2>
      <div className='image__container'>
        {series.map( item => (
          <img key={item.id} data-id={item.id} onClick={(event) => handleClick(event, item)} className={`row__image ${isLarge && 'large'}`} src={`${image_url}${isLarge ? item.poster_path : item.backdrop_path}`} alt={item.original_name} />
        ))}
    </div>
      { showDetails && <Details id={showItem.id}/>}
    </div>
  )
}

export default Row;
