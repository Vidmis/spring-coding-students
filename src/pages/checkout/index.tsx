import { Box, Typography } from "components";
import React from "react";
import { useAppSelector } from "state/hooks";
import { selectUserBikeTypes } from "state/selectors";

enum bike {
  GRAVEL = "gravel",
  MTB = "mtb",
  ROAD = "road",
  CITY = "city",
}

const Checkout: React.FC = () => {
  const answers = useAppSelector(selectUserBikeTypes);

  const sortedBikes = answers.flat(2).reduce((bikeMatch, bike) => {
    bikeMatch[bike] = (bikeMatch[bike] || 0) + 1;
    return bikeMatch;
  }, {});

  let bestBikeMatch = Object.keys(sortedBikes).reduce((prevBike, currBike) =>
    sortedBikes[prevBike] > sortedBikes[currBike] ? prevBike : currBike
  );

  console.log("bestBikeMatch", bestBikeMatch);
  console.log("object", sortedBikes);

  return (
    <div>
      <Typography type='h2'>Checkout</Typography>
      <Typography type='body18'>
        Best bike match: {bestBikeMatch.toUpperCase()}
      </Typography>
    </div>
  );
};

export default Checkout;
