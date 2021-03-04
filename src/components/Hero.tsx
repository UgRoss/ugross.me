import styled from 'styled-components';

const Hero = styled.div`
  padding-top: calc(3rem + var(--height-navbar));
  margin-top: calc(0rem - var(--height-navbar));

  padding-bottom: 3rem;
  background-color: var(--color-hero);
  margin-bottom: 2rem;

  @media (min-width: 850px) {
    padding-top: calc(3.5rem + var(--height-navbar));
    padding-bottom: 3.5rem;
  }
`;

export default Hero;
