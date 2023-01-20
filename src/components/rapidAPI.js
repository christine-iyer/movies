import React, {useEffect} from 'react'

const fetch = require('node-fetch');

const url = 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news?pair_ID=1057391&page=1&time_utc_offset=28800&lang_ID=1';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
    'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
  }
};

const rapidAPI = () => {
     useEffect(() => {
          fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

     })
  return (
    <div>rapidAPI</div>
  )
}

export default rapidAPI