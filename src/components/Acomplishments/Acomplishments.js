import React from "react";
import { motion } from "framer-motion";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 5, text: "Open Source Projects" },
  { number: 10, text: "Students" },
  { number: 5, text: "Certifications" },
  { number: 100, text: "Followers" },
];

const AnimatedBox = motion(Box);

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <AnimatedBox
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </AnimatedBox>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;