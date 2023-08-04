import React from "react";
interface mediaItemProps {
  imgUrl: string;
  videoUrl?: string;
}
const MediaItem = ({ imgUrl }: mediaItemProps) => {
  return (
    <div className="">
      <img src={imgUrl} alt="image1" className=" h-60 object-cover" />
    </div>
  );
};

export default MediaItem;
