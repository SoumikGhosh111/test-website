import React from 'react'; 
import "./Stars.css"
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function Stars({rate}) {
    const numberOfStars = 5; 
    const rating = rate; 
  return (
    <div className='review'>
        {[...new Array(numberOfStars)].map((item, indx) => {
            return indx < rating ? <StarRoundedIcon /> : <StarHalfRoundedIcon />
        })}
    </div>
  )
}

export default Stars