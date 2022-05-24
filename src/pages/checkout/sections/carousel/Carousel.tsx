import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Box, ContentWrapper, SectionWrapper } from "components";
import { theme } from "styles/theme";
import { IBikesDataSlice } from "state/types";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { selectBikes, selectUserBikeTypes } from "state/selectors";
import { fetchBikesActions } from "state/sagasActions";
import BikeImageBox from "pages/checkout/layouts/BikeImageBox";
import BikeSpecifications from "pages/checkout/layouts/BikeSpecifications";
import { mdTablet } from "styles/breakpoints";

interface ICarouselProps {
  bikesData: IBikesDataSlice[];
  matchingBikes: [];
  setBikesSpecs: Object;
}

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
            <SwiperSlide className='swiper'>
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
    /* height: 100%; */
    /* width: 5rem; */
    box-shadow: none;
    border-radius: 5px;
    .swiper-button-prev {
      display: none;
      @media ${mdTablet} {
        display: block;
      }
      color: ${theme.colors.white};
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
    /* min-height: 100%; */
    @media ${mdTablet} {
      /* min-height: 86.5vh; */
    }
  }
`;
