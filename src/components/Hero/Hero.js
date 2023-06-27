import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm Ali, <br/ >
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Frontend Web Developer. I can provide clean code and pixel
        perfect design. I also make website more & more interactive with web
        animations.
      </SectionText>
      <Button onClick={() => (window.location = "/")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
