import { Image } from "components";
import React from "react";

interface BikeImageBoxProps {
  url: string;
  bikeType: string;
}

const BikeImageBox: React.FC<BikeImageBoxProps> = ({ url, bikeType }) => (
  <Image srcUrl={url} alt={bikeType} width='20rem' />
);

export default BikeImageBox;
