import { Box, Image, SectionWrapper, Typography } from "components";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { fetchBikesActions } from "state/sagasActions";
import { selectBikes, selectUserBikeTypes } from "state/selectors";

interface IBikeBox {
  url: string;
  bikeType?: string;
}

const BikeBox: React.FC<IBikeBox> = ({ url, bikeType }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Box onClick={() => setIsSelected(!isSelected)}>
      <Typography>{bikeType}</Typography>
      <Image srcUrl={url} alt={bikeType} width='20rem' />
    </Box>
  );
};

const Checkout: React.FC = () => {
  const dispatch = useAppDispatch();
  const answers = useAppSelector(selectUserBikeTypes);
  const bikesData = useAppSelector(selectBikes);

  console.log("bikesData", bikesData);

  useEffect(() => {
    dispatch(fetchBikesActions());
  }, []);

  const sortedBikes = answers.flat(2).reduce((bikeMatch, bike) => {
    bikeMatch[bike] = (bikeMatch[bike] || 0) + 1;
    return bikeMatch;
  }, {});

  const matchingBikes = Object.keys(sortedBikes).filter(
    (bike) =>
      sortedBikes[bike] === Math.max.apply(null, Object.values(sortedBikes))
  );

  return (
    <>
      <Typography type='body18'>
        Best bike match: {matchingBikes.join(" / ")}
      </Typography>
      <SectionWrapper>
        {bikesData?.map(({ url, bikeType }) =>
          matchingBikes.includes(bikeType) ? (
            <BikeBox url={url} bikeType={bikeType} />
          ) : null
        )}
      </SectionWrapper>
    </>
  );
};

export default Checkout;
