import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomFooter from "../components/BottomFooter";
import Header from "../components/Header";

const RestaverseCareersPageChild = styled.section`
  position: absolute;
  top: 5rem;
  left: 0rem;
  background-color: var(--color-gray-400);
  width: 90rem;
  height: 43.75rem;
`;
const GetStartedButton = styled(Button)`
  position: absolute;
  top: 35.94rem;
  left: 1.69rem;
`;
const RestaverseCareersPageItem = styled.section`
  position: absolute;
  top: 102.94rem;
  left: 0rem;
  background-color: var(--color-gray-400);
  width: 90rem;
  height: 31.25rem;
`;
const RestaverseIsLooking = styled.span``;
const LikeMinded = styled.span`
  color: var(--color-blueviolet);
`;
const RestaverseIsLookingContainer = styled.h1`
  margin: 0;
  position: absolute;
  top: 9.13rem;
  left: 1.5rem;
  font-size: var(--font-size-45xl);
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  width: 49rem;
  color: var(--color-white);
`;
const Image29Icon = styled.img`
  position: absolute;
  top: 33.38rem;
  left: 54.31rem;
  width: 13.19rem;
  height: 12.63rem;
  object-fit: cover;
`;
const Image31Icon = styled.img`
  position: absolute;
  top: 31rem;
  left: 59.94rem;
  width: 2rem;
  height: 2.44rem;
  object-fit: cover;
`;
const Image32Icon = styled.img`
  position: absolute;
  top: 27.19rem;
  left: 76.31rem;
  width: 1.06rem;
  height: 1.31rem;
  object-fit: cover;
`;
const Image33Icon = styled.img`
  position: absolute;
  top: 27.75rem;
  left: 76.88rem;
  width: 2.25rem;
  height: 2.75rem;
  object-fit: cover;
`;
const Image30Icon = styled.img`
  position: absolute;
  top: 32.88rem;
  left: 69rem;
  width: 15.69rem;
  height: 15.13rem;
  object-fit: cover;
`;
const Image28Icon = styled.img`
  position: absolute;
  top: 29rem;
  left: 58rem;
  width: 22.88rem;
  height: 22.88rem;
  object-fit: cover;
`;
const Image35Icon = styled.img`
  position: absolute;
  top: 7.05rem;
  left: 53.9rem;
  width: 31.07rem;
  height: 31.14rem;
  object-fit: cover;
`;
const YouDontHave = styled.p`
  margin: 0;
`;
const YouDontHaveContainer = styled.h3`
  margin: 0;
  position: absolute;
  top: 30.13rem;
  left: 1.75rem;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  color: #d9d9d9;
  display: inline-block;
  width: 45.5rem;
`;
const OpenPositions = styled.h3`
  margin: 0;
  position: absolute;
  top: 54.5rem;
  left: 38.63rem;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-gray-400);
  display: inline-block;
  width: 11.88rem;
`;
const RestaverseCareersPageInner = styled.section`
  position: absolute;
  top: 60.31rem;
  left: 14.75rem;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  box-shadow: 1px 1px 10px rgba(124, 124, 124, 0.25);
  width: 60.5rem;
  height: 9.38rem;
`;
const FrameButton = styled(Button)`
  position: absolute;
  top: 62.06rem;
  left: 16.19rem;
`;
const MumbaiIndia = styled.div`
  position: absolute;
  top: 66.06rem;
  left: 30.25rem;
  font-size: var(--font-size-base);
  font-weight: 500;
`;
const StrategyAnalyst = styled.h3`
  margin: 0;
  position: absolute;
  top: 62rem;
  left: 28.13rem;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-gray-400);
  display: inline-block;
  width: 13.38rem;
`;
const Login = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-blueviolet);
  text-align: left;
`;
const LoginButton1 = styled.button`
  cursor: pointer;
  border: 2px solid var(--color-blueviolet);
  padding: var(--padding-mini) var(--padding-11xl);
  background-color: transparent;
  position: absolute;
  top: 62rem;
  left: 66.44rem;
  border-radius: var(--br-8xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const RectangleSection = styled.section`
  position: absolute;
  top: 71.94rem;
  left: 14.75rem;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  box-shadow: 1px 1px 10px rgba(124, 124, 124, 0.25);
  width: 60.5rem;
  height: 9.38rem;
`;
const Engineering = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  letter-spacing: 0.1em;
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-gray-400);
  text-align: left;
`;
const EngineeringWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs);
  background-color: var(--color-plum);
  position: absolute;
  top: 73.69rem;
  left: 16.19rem;
  border-radius: var(--br-3xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const RemoteIndia = styled.div`
  position: absolute;
  top: 77.69rem;
  left: 30.25rem;
  font-size: var(--font-size-base);
  font-weight: 500;
`;
const FrontendDeveloper = styled.h3`
  margin: 0;
  position: absolute;
  top: 73.63rem;
  left: 28.13rem;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-gray-400);
  display: inline-block;
  width: 14.88rem;
`;
const LoginButton11 = styled.button`
  cursor: pointer;
  border: 2px solid var(--color-blueviolet);
  padding: var(--padding-mini) var(--padding-11xl);
  background-color: transparent;
  position: absolute;
  top: 73.63rem;
  left: 66.44rem;
  border-radius: var(--br-8xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const RestaverseCareersPageChild1 = styled.section`
  position: absolute;
  top: 83.56rem;
  left: 14.75rem;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  box-shadow: 1px 1px 10px rgba(124, 124, 124, 0.25);
  width: 60.5rem;
  height: 9.38rem;
`;
const Design = styled.div`
  position: relative;
  letter-spacing: 0.1em;
  font-weight: 500;
`;
const DesignWrapper = styled.div`
  position: absolute;
  top: 85.31rem;
  left: 16.19rem;
  border-radius: var(--br-3xs);
  background-color: var(--color-plum);
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs);
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-base);
  color: var(--color-gray-400);
`;
const MumbaiIndia1 = styled.div`
  position: absolute;
  top: 89.31rem;
  left: 30.25rem;
  font-size: var(--font-size-base);
  font-weight: 500;
`;
const SeniorUxConsultant = styled.h3`
  margin: 0;
  position: absolute;
  top: 85.25rem;
  left: 28.13rem;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-gray-400);
  display: inline-block;
  width: 16.13rem;
`;
const LoginButton2 = styled.button`
  cursor: pointer;
  border: 2px solid var(--color-blueviolet);
  padding: var(--padding-mini) var(--padding-11xl);
  background-color: transparent;
  position: absolute;
  top: 85.25rem;
  left: 66.44rem;
  border-radius: var(--br-8xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FillOutThis = styled.div`
  position: absolute;
  top: 113.69rem;
  left: 1.75rem;
  font-size: var(--font-size-xl);
  font-weight: 500;
  display: inline-block;
  width: 28.5rem;
`;
const FullName = styled.div`
  position: absolute;
  top: 106.19rem;
  left: 45.75rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 4.5rem;
`;
const Email = styled.div`
  position: absolute;
  top: 106.19rem;
  left: 65.75rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 4.5rem;
`;
const LinkedinPersonal = styled.div`
  position: absolute;
  top: 111.5rem;
  left: 45.63rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 11.38rem;
`;
const PositionYoureLooking = styled.div`
  position: absolute;
  top: 111.69rem;
  left: 67.5rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 11rem;
`;
const WorkExp = styled.div`
  position: absolute;
  top: 116.88rem;
  left: 45.75rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 10rem;
`;
const PleaseTellUs = styled.div`
  position: absolute;
  top: 116.88rem;
  left: 60.5rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 14.5rem;
`;
const DontSeeWhat = styled.h1`
  margin: 0;
  position: absolute;
  top: 106.19rem;
  left: 1.75rem;
  font-size: var(--font-size-21xl);
  font-weight: 700;
  font-family: inherit;
  color: var(--color-white);
  display: inline-block;
  width: 35.25rem;
`;
const RectangleInput = styled.input`
  border: 0.5px solid var(--color-dodgerblue-200);
  background-color: var(--color-gray-600);
  position: absolute;
  top: 107.75rem;
  left: 45.75rem;
  border-radius: var(--br-3xs);
  box-shadow: 0px 0px 10px rgba(0, 133, 255, 0.3);
  box-sizing: border-box;
  width: 18.75rem;
  height: 2.5rem;
`;
const RestaverseCareersPageChild2 = styled.input`
  border: none;
  background-color: var(--color-gray-600);
  position: absolute;
  top: 113.06rem;
  left: 45.63rem;
  border-radius: var(--br-3xs);
  width: 20.75rem;
  height: 2.5rem;
`;
const RestaverseCareersPageChild3 = styled.input`
  border: none;
  background-color: var(--color-gray-600);
  position: absolute;
  top: 113.06rem;
  left: 67.5rem;
  border-radius: var(--br-3xs);
  width: 19rem;
  height: 2.5rem;
`;
const RestaverseCareersPageChild4 = styled.input`
  border: none;
  background-color: var(--color-gray-600);
  position: absolute;
  top: 118.44rem;
  left: 45.75rem;
  border-radius: var(--br-3xs);
  width: 13.25rem;
  height: 2.5rem;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 118.44rem;
  left: 60.5rem;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-600);
  width: 26rem;
  height: 7.19rem;
`;
const RestaverseCareersPageChild5 = styled.input`
  border: none;
  background-color: var(--color-gray-600);
  position: absolute;
  top: 107.75rem;
  left: 65.75rem;
  border-radius: var(--br-3xs);
  width: 20.75rem;
  height: 2.5rem;
`;
const Login3 = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: left;
`;
const LoginButton3 = styled.button`
  cursor: pointer;
  border: 2px solid var(--color-blueviolet);
  padding: var(--padding-mini) var(--padding-21xl);
  background-color: var(--color-blueviolet);
  position: absolute;
  top: 128rem;
  left: 45.69rem;
  border-radius: var(--br-8xs);
  box-sizing: border-box;
  width: 40.88rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const MappinlineIcon = styled.img`
  position: absolute;
  top: 65.88rem;
  left: 28rem;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
`;
const MappinlineIcon1 = styled.img`
  position: absolute;
  top: 77.38rem;
  left: 28rem;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
`;
const MappinlineIcon2 = styled.img`
  position: absolute;
  top: 89.13rem;
  left: 28rem;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
`;
const Page1 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 4.75rem;
`;
const Page1Parent = styled.div`
  position: absolute;
  top: 137.44rem;
  left: 16.75rem;
  width: 4.75rem;
  height: 6.44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  font-size: var(--font-size-base);
`;
const PrivacyPolicy = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 10.5rem;
`;
const PrivacyPolicyParent = styled.div`
  position: absolute;
  top: 137.19rem;
  left: 46.06rem;
  width: 10.5rem;
  height: 6.44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  font-size: var(--font-size-base);
`;
const Restaverse = styled.h3`
  margin: 0;
  position: absolute;
  top: 136.69rem;
  left: 1.75rem;
  font-size: inherit;
  font-weight: 400;
  font-family: var(--font-poppins);
  color: var(--color-gray-200);
`;
const RestaverseCareersPageRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 148.38rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;
const RestaverseCareersPage = () => {
  const navigate = useNavigate();

  const onRestaverse1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <RestaverseCareersPageRoot>
      <RestaverseCareersPageChild />
      <GetStartedButton variant="contained" color="primary">
        Get Started
      </GetStartedButton>
      <RestaverseCareersPageItem />
      <RestaverseIsLookingContainer>
        <RestaverseIsLooking>{`Restaverse is looking for `}</RestaverseIsLooking>
        <LikeMinded>like-minded</LikeMinded>
        <RestaverseIsLooking>
          {" "}
          individuals. We prefer both humans and aliens 👽
        </RestaverseIsLooking>
      </RestaverseIsLookingContainer>
      <Image29Icon alt="" src="/image-29@2x.png" />
      <Image31Icon alt="" src="/image-31@2x.png" />
      <Image32Icon alt="" src="/image-32@2x.png" />
      <Image33Icon alt="" src="/image-33@2x.png" />
      <Image30Icon alt="" src="/image-30@2x.png" />
      <Image28Icon alt="" src="/image-28@2x.png" />
      <Image35Icon alt="" src="/image-35@2x.png" />
      <YouDontHaveContainer>
        <YouDontHave>You don’t have to wait for a better world.</YouDontHave>
        <YouDontHave>You can join us and build it.</YouDontHave>
      </YouDontHaveContainer>
      <OpenPositions>Open Positions</OpenPositions>
      <RestaverseCareersPageInner />
      <FrameButton variant="contained" color="primary">
        MARKETING
      </FrameButton>
      <MumbaiIndia>Mumbai, India</MumbaiIndia>
      <StrategyAnalyst>Strategy Analyst</StrategyAnalyst>
      <LoginButton1>
        <Login>Apply</Login>
      </LoginButton1>
      <RectangleSection />
      <EngineeringWrapper>
        <Engineering>ENGINEERING</Engineering>
      </EngineeringWrapper>
      <RemoteIndia>Remote, India</RemoteIndia>
      <FrontendDeveloper>Frontend Developer</FrontendDeveloper>
      <LoginButton11>
        <Login>Apply</Login>
      </LoginButton11>
      <RestaverseCareersPageChild1 />
      <DesignWrapper>
        <Design>DESIGN</Design>
      </DesignWrapper>
      <MumbaiIndia1>Mumbai, India</MumbaiIndia1>
      <SeniorUxConsultant>Senior UX Consultant</SeniorUxConsultant>
      <LoginButton2>
        <Login>Apply</Login>
      </LoginButton2>
      <FillOutThis>
        Fill out this form with your skills and we promise to get back as soon
        as possible.
      </FillOutThis>
      <FullName>Full Name</FullName>
      <Email>Email</Email>
      <LinkedinPersonal>LinkedIn / Personal Website</LinkedinPersonal>
      <PositionYoureLooking>Position you’re looking for</PositionYoureLooking>
      <WorkExp>Work exp.</WorkExp>
      <PleaseTellUs>Please tell us a little about yourself</PleaseTellUs>
      <DontSeeWhat>Don’t see what you’re looking for?</DontSeeWhat>
      <RectangleInput type="text" />
      <RestaverseCareersPageChild2 type="text" />
      <RestaverseCareersPageChild3 type="text" />
      <RestaverseCareersPageChild4 type="text" />
      <RectangleDiv />
      <RestaverseCareersPageChild5 type="text" />
      <LoginButton3>
        <Login3>Submit</Login3>
      </LoginButton3>
      <MappinlineIcon alt="" src="/mappinline.svg" />
      <MappinlineIcon1 alt="" src="/mappinline.svg" />
      <MappinlineIcon2 alt="" src="/mappinline.svg" />
      <Page1Parent>
        <Page1>Page 1</Page1>
        <Page1>Page 2</Page1>
        <Page1>Page 3</Page1>
      </Page1Parent>
      <PrivacyPolicyParent>
        <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
        <PrivacyPolicy>Terms of Service</PrivacyPolicy>
        <PrivacyPolicy>Contact us</PrivacyPolicy>
      </PrivacyPolicyParent>
      <Restaverse>restaverse</Restaverse>
      <BottomFooter propTop="137.19rem" frameDivLeft="81.13rem" />
      <Header propTop="1.25rem" onRestaverse1Click={onRestaverse1Click} />
    </RestaverseCareersPageRoot>
  );
};

export default RestaverseCareersPage;
