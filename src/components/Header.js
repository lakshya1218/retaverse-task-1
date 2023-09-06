import { Button } from "@mui/material";
import styled from "styled-components";

const LoginButton1 = styled(Button)`
  position: absolute;
  top: 1.19rem;
  left: 82.25rem;
`;
const Services = styled.div`
  position: absolute;
  top: 1.81rem;
  left: 35rem;
  font-weight: 500;
`;
const Careers = styled.div`
  position: absolute;
  top: 1.81rem;
  left: 42.94rem;
  font-weight: 500;
`;
const AboutUs = styled.div`
  position: absolute;
  top: 1.81rem;
  left: 50.5rem;
  font-weight: 500;
`;
const Restaverse = styled.h3`
  margin: 0;
  position: absolute;
  top: 1.38rem;
  left: 1.75rem;
  font-size: var(--font-size-5xl);
  font-weight: 400;
  font-family: var(--font-poppins);
  color: var(--color-gray-400);
  cursor: pointer;
  top: ${(p) => p.propTop};
`;
const HeaderRoot = styled.header`
  position: absolute;
  top: 0rem;
  left: 0rem;
  background-color: var(--color-gray-500);
  backdrop-filter: blur(20px);
  width: 90rem;
  height: 5rem;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;
const Header = ({ propTop, onRestaverse1Click }) => {
  return (
    <HeaderRoot>
      <LoginButton1 variant="outlined" color="primary">
        Login
      </LoginButton1>
      <Services>Services</Services>
      <Careers>Careers</Careers>
      <AboutUs>About us</AboutUs>
      <Restaverse onClick={onRestaverse1Click} propTop={propTop}>
        restaverse
      </Restaverse>
    </HeaderRoot>
  );
};

export default Header;
