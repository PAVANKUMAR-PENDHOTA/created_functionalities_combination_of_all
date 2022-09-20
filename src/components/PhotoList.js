import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoList = ({photos}) => {
    console.log(photos,"Phtos checkin")
  return (
    <div>
    {Array.isArray(photos) ?
    photos.map((photo, index) => {
        return (
            <PhotoCard
                key={index}
                image={photo.url}
                name={photo.title}
                price={photo.id}
            />
        );
    }) : null
    }
</div>
  )
}

export default PhotoList
