import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.Js and Next.Js<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Next JS and Firebase<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Docker and Kubernetes<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List> 

        
  </Section>
);

export default Technologies;
