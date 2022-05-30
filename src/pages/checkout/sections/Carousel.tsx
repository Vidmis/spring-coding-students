import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { Navigation, Pagination } from "swiper";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { laptop, mdTablet } from "styles/breakpoints";
import { selectBikes, selectUserBikeTypes } from "state/selectors";
import { useAppDispatch, useAppSelector } from "state/hooks";

import BikeImageBox from "pages/checkout/elements/BikeImageBox";
import BikeSpecifications from "pages/checkout/elements/BikeSpecifications";
import { Box } from "components";
import { fetchBikesActions } from "state/sagasActions";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

const Carousel: React.FC = () => {
  const dispatch = useAppDispatch();
  const answers = useAppSelector(selectUserBikeTypes);
  const bikesData = useAppSelector(selectBikes);

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
    <SpecificationsWrapper>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className='swiper-wrapper'
      >
        {bikesData.map(({ url, bikeType, model, price, id }) =>
          matchingBikes.includes(bikeType) ? (
            <SwiperSlide key={model + price} className='swiper'>
              <Box
                display={{ _: "flex" }}
                flexWrap={{ _: "wrap", mdTablet: "nowrap" }}
                justifyContent='space-around'
                height='82vh'
                alignItems='center'
              >
                <BikeImageBox url={url} bikeType={bikeType} />
                <BikeSpecifications
                  bikeType={bikeType}
                  model={model}
                  price={price}
                  id={id}
                />
              </Box>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </SpecificationsWrapper>
  );
};

export default Carousel;

const SpecificationsWrapper = styled(Box)`
  .swiper-wrapper {
    display: flex;
    justify-content: start;
    box-shadow: none;
    border-radius: 5px;
    .swiper-button-prev {
      display: none;
      @media ${mdTablet} {
        display: block;
        color: ${theme.colors.primary};
      }
      @media ${laptop} {
        color: ${theme.colors.white};
      }
    }
    .swiper-button-next {
      display: none;
      @media ${mdTablet} {
        display: block;
      }
      color: ${theme.colors.primary};
    }
  }
  .swiper {
    width: 100%;
  }
`;
