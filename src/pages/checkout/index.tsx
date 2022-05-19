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
    if (bikeMatch[bike] == null) {
      bikeMatch[bike] = 0;
    }
    bikeMatch[bike] = bikeMatch[bike] + 1;
    return bikeMatch;
  }, {});

  let obj = {
    road: 4,
    mtb: 6,
    c: 1,
    d: 1,
  };

  // let arr = Object.keys(obj);
  // let min = Math.min(...arr);
  // let max = Math.max(...arr);

  // Object.keys(sortedBikes): Object.values(sortedBikes),

  console.log(sortedBikes[bike.GRAVEL]);

  return (
    <div>
      <Typography type='h2'>Checkout</Typography>
      <Box></Box>
    </div>
  );
};

export default Checkout;
