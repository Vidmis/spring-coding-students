import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Box, Button } from "components";
import { QUESTIONS } from "consts";

interface ISpecifications {
  bikeType: string;
  model: string;
  price: number;
}

const Specifications: React.FC<ISpecifications> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return <SpecificationsWrapper>yep</SpecificationsWrapper>;
};

const SpecificationsWrapper = styled(Box)``;
