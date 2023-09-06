import { useCallback } from "react";
import LoginButton from "./LoginButton";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  top: 1.25rem;
  left: 1.75rem;
  font-size: var(--font-size-5xl);
  font-weight: 400;
  font-family: var(--font-poppins);
  color: var(--color-gray-400);
  cursor: pointer;
`;
const Header1 = styled.header`
  position: relative;
  background-color: var(--color-gray-500);
  backdrop-filter: blur(20px);
  width: 90rem;
  height: 5rem;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;
const Sbyau1ytnnf3 = styled.div`
  position: absolute;
  top: 45.96rem;
  left: 45.01rem;
  background-color: var(--color-dodgerblue-100);
  filter: blur(200px);
  width: 24.8rem;
  height: 5.04rem;
  transform: rotate(-113.97deg);
  transform-origin: 0 0;
`;
const Sbyau1ytnnf2 = styled.div`
  position: absolute;
  top: 19.52rem;
  left: 37.44rem;
  background-color: var(--color-dodgerblue-100);
  filter: blur(200px);
  width: 51.05rem;
  height: 3.15rem;
  transform: rotate(-15deg);
  transform-origin: 0 0;
`;
const Sbyau1ytnnf4 = styled.div`
  position: absolute;
  top: 8.19rem;
  left: 87.54rem;
  background-color: var(--color-dodgerblue-100);
  filter: blur(200px);
  width: 14.11rem;
  height: 3.15rem;
  transform: rotate(67.87deg);
  transform-origin: 0 0;
`;
const Sbyau1ytnnf1Icon = styled.img`
  position: absolute;
  top: 0rem;
  left: 17.69rem;
  width: 72.31rem;
  height: 51rem;
  object-fit: cover;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 13.69rem;
  left: 9.13rem;
  background-color: var(--color-blueviolet);
  width: 21.38rem;
  height: 4.38rem;
`;
const YourGrowthPlatform = styled.span``;
const Hospitality = styled.span`
  color: var(--color-white);
`;
const YourGrowthPlatformContainer = styled.h1`
  margin: 0;
  position: absolute;
  top: 8.44rem;
  left: 1.75rem;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  width: 51.19rem;
`;
const YouFocusOn = styled.p`
  margin: 0;
`;
const YouFocusOnContainer = styled.h3`
  margin: 0;
  position: absolute;
  top: 19.81rem;
  left: 1.75rem;
  font-size: var(--font-size-5xl);
  font-weight: 500;
  font-family: inherit;
  color: var(--color-gray-300);
  display: inline-block;
  width: 28rem;
`;
const Header11 = styled.header`
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
const Sbyau1ytnnf3Parent = styled.div`
  position: relative;
  background-color: var(--color-whitesmoke);
  width: 90rem;
  height: 51rem;
  overflow: hidden;
  flex-shrink: 0;
  margin-top: -51rem;
`;
const Restaverse2 = styled.h3`
  margin: 0;
  position: absolute;
  top: 1.25rem;
  left: 1.75rem;
  font-size: var(--font-size-5xl);
  font-weight: 400;
  font-family: var(--font-poppins);
  color: var(--color-gray-200);
`;
const Header2 = styled.div`
  position: relative;
  background-color: var(--color-gray-500);
  backdrop-filter: blur(20px);
  width: 90rem;
  height: 5rem;
  margin-top: -51rem;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
`;
const FrameRoot = styled.section`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 90rem;
  height: 51rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-45xl);
  color: var(--color-gray-400);
  font-family: var(--font-inter);
`;
const HospitalityPlatformContainer = () => {
  const navigate = useNavigate();

  const onRestaverseClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRestaverse1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <FrameRoot>
      <Header1>
        <LoginButton
          buttonText="Login"
          propPadding="var(--padding-3xs) var(--padding-11xl)"
          propBackgroundColor="transparent"
          propTop="1.19rem"
          propLeft="82.25rem"
          propBoxSizing="border-box"
          propWidth="unset"
          propBoxShadow="unset"
          propColor="#8635fd"
        />
        <Services>Services</Services>
        <Careers>Careers</Careers>
        <AboutUs>About us</AboutUs>
        <Restaverse onClick={onRestaverseClick}>restaverse</Restaverse>
      </Header1>
      <Sbyau1ytnnf3Parent>
        <Sbyau1ytnnf3 />
        <Sbyau1ytnnf2 />
        <Sbyau1ytnnf4 />
        <Sbyau1ytnnf1Icon alt="" src="/sbyau1ytnnf-1@2x.png" />
        <FrameChild />
        <YourGrowthPlatformContainer>
          <YourGrowthPlatform>{`Your Growth Platform for the `}</YourGrowthPlatform>
          <Hospitality>Hospitality</Hospitality>
          <YourGrowthPlatform> Space</YourGrowthPlatform>
        </YourGrowthPlatformContainer>
        <YouFocusOnContainer>
          <YouFocusOn>You focus on the operations, leave the</YouFocusOn>
          <YouFocusOn>aggregator management to us</YouFocusOn>
          <YouFocusOn>platform management to us</YouFocusOn>
          <YouFocusOn>customer acquisition costs to us</YouFocusOn>
          <YouFocusOn>user journey metrics to us</YouFocusOn>
          <YouFocusOn>online reputation management to us</YouFocusOn>
          <YouFocusOn>aggregator management to us</YouFocusOn>
        </YouFocusOnContainer>
        <LoginButton
          buttonText="Get Started"
          propPadding="var(--padding-mini) var(--padding-21xl)"
          propBackgroundColor="#8635fd"
          propTop="34.19rem"
          propLeft="1.69rem"
          propBoxSizing="border-box"
          propWidth="unset"
          propBoxShadow="0px 6px 20px rgba(134, 53, 253, 0.5)"
          propColor="#fff"
        />
        <Header11>
          <LoginButton
            buttonText="Login"
            propPadding="var(--padding-3xs) var(--padding-11xl)"
            propBackgroundColor="transparent"
            propTop="1.19rem"
            propLeft="82.25rem"
            propBoxSizing="border-box"
            propWidth="unset"
            propBoxShadow="unset"
            propColor="#8635fd"
          />
          <Services>Services</Services>
          <Careers>Careers</Careers>
          <AboutUs>About us</AboutUs>
          <Restaverse onClick={onRestaverse1Click}>restaverse</Restaverse>
        </Header11>
      </Sbyau1ytnnf3Parent>
      <Header2>
        <LoginButton buttonText="Login" />
        <Services>Services</Services>
        <Careers>Careers</Careers>
        <AboutUs>About us</AboutUs>
        <Restaverse2>restaverse</Restaverse2>
      </Header2>
    </FrameRoot>
  );
};

export default HospitalityPlatformContainer;
