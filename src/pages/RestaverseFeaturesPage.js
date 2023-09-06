import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FeatureCardContainer from "../components/FeatureCardContainer";
import BottomFooter from "../components/BottomFooter";
import Header from "../components/Header";

const Sbyau1ytnnf6 = styled.section`
  position: absolute;
  top: 107rem;
  left: -8.87rem;
  width: 107.69rem;
  height: 76.13rem;
  background-image: url("/public/sbyau1ytnnf6@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const RestaverseFeaturesPageChild = styled.section`
  position: absolute;
  top: 48.5rem;
  left: 0rem;
  background-color: var(--color-gray-400);
  width: 90rem;
  height: 54.5rem;
`;
const Put = styled.span``;
const Restaverse = styled.span`
  background: linear-gradient(
    180deg,
    #000022 11.34%,
    #8635fd 31.13%,
    rgba(0, 0, 34, 0)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const PutRestaverseToContainer = styled.h1`
  margin: 0;
  position: absolute;
  top: 10rem;
  left: 20.5rem;
  font-size: var(--font-size-45xl);
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  display: inline-block;
  width: 49rem;
  color: var(--color-gray-400);
`;
const Sbyau1ytnnf5 = styled.section`
  position: absolute;
  top: 13.5rem;
  left: 2.75rem;
  width: 84.47rem;
  height: 59.73rem;
  background-image: url("/public/sbyau1ytnnf5@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const WhatMakesUs = styled.h1`
  margin: 0;
  position: absolute;
  top: 69.31rem;
  left: 18.63rem;
  font-size: 2.25rem;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-white);
  text-align: center;
  display: inline-block;
  width: 54rem;
`;
const UnparallelBusinessInsights = styled.h1`
  margin: 0;
  position: absolute;
  top: 109.5rem;
  left: 20.69rem;
  font-size: var(--font-size-29xl);
  font-weight: 700;
  font-family: inherit;
  color: var(--color-gray-400);
  text-align: center;
  display: inline-block;
  width: 48.56rem;
`;
const BoremIpsumDolor = styled.div`
  position: absolute;
  top: 74.31rem;
  left: 17.94rem;
  font-size: var(--font-size-xl);
  font-weight: 500;
  text-align: center;
  display: inline-block;
  width: 54rem;
`;
const BoremIpsumDolor1 = styled.div`
  position: absolute;
  top: 117.81rem;
  left: 18rem;
  font-size: var(--font-size-xl);
  font-weight: 500;
  text-align: center;
  display: inline-block;
  width: 54rem;
`;
const RestaverseFeaturesPageItem = styled.section`
  position: absolute;
  top: 163rem;
  left: 0rem;
  background-color: var(--color-white);
  filter: blur(100px);
  width: 90rem;
  height: 11rem;
`;
const GetStartedButton = styled(Button)`
  position: absolute;
  top: 170.38rem;
  left: 39.63rem;
`;
const Sbyau1ytnnf7 = styled.section`
  position: absolute;
  top: 220.5rem;
  left: -8.87rem;
  width: 107.69rem;
  height: 76.13rem;
  background-image: url("/public/sbyau1ytnnf6@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const UnbiasedLensAcross = styled.h1`
  margin: 0;
  position: absolute;
  top: 223rem;
  left: 20.69rem;
  font-size: var(--font-size-29xl);
  font-weight: 700;
  font-family: inherit;
  color: var(--color-gray-400);
  text-align: center;
  display: inline-block;
  width: 48.56rem;
`;
const BoremIpsumDolor2 = styled.div`
  position: absolute;
  top: 231.31rem;
  left: 18rem;
  font-size: var(--font-size-xl);
  font-weight: 500;
  text-align: center;
  display: inline-block;
  width: 54rem;
`;
const RestaverseFeaturesPageInner = styled.section`
  position: absolute;
  top: 276.5rem;
  left: 0rem;
  background-color: var(--color-white);
  filter: blur(100px);
  width: 90rem;
  height: 11rem;
`;
const GetStartedButton1 = styled(Button)`
  position: absolute;
  top: 283.88rem;
  left: 39.63rem;
`;
const B = styled.b`
  position: absolute;
  top: 186.75rem;
  left: 1.5rem;
  color: var(--color-black);
`;
const SmartBudgeting = styled.h1`
  margin: 0;
  position: absolute;
  top: 186.75rem;
  left: 5.25rem;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-black);
`;
const LineDiv = styled.div`
  position: absolute;
  top: 191.44rem;
  left: 1.44rem;
  border-top: 2px solid var(--color-blueviolet);
  box-sizing: border-box;
  width: 48.13rem;
  height: 0.13rem;
`;
const B1 = styled.b`
  position: absolute;
  top: 194.25rem;
  left: 1.5rem;
  color: var(--color-black);
`;
const DigitalMarketingPlanning = styled.h1`
  margin: 0;
  position: absolute;
  top: 194.25rem;
  left: 5.25rem;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-black);
`;
const RestaverseFeaturesPageChild1 = styled.div`
  position: absolute;
  top: 198.94rem;
  left: 1.44rem;
  border-top: 2px solid var(--color-blueviolet);
  box-sizing: border-box;
  width: 48.13rem;
  height: 0.13rem;
`;
const B2 = styled.b`
  position: absolute;
  top: 201.75rem;
  left: 1.5rem;
  color: var(--color-black);
`;
const DesignatedCustomerSuccess = styled.h1`
  margin: 0;
  position: absolute;
  top: 201.75rem;
  left: 5.25rem;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-black);
`;
const RestaverseFeaturesPageChild2 = styled.div`
  position: absolute;
  top: 206.44rem;
  left: 1.44rem;
  border-top: 2px solid var(--color-blueviolet);
  box-sizing: border-box;
  width: 48.13rem;
  height: 0.13rem;
`;
const Image36Icon = styled.img`
  position: absolute;
  top: 183.38rem;
  left: 52.75rem;
  width: 36.38rem;
  height: 23.63rem;
  object-fit: cover;
`;
const RectangleSection = styled.section`
  position: absolute;
  top: 296.5rem;
  left: 0rem;
  background-color: var(--color-gray-400);
  width: 90rem;
  height: 31.25rem;
`;
const FillOutThis = styled.div`
  position: absolute;
  top: 307.25rem;
  left: 1.75rem;
  font-size: var(--font-size-xl);
  font-weight: 500;
  display: inline-block;
  width: 28.5rem;
`;
const FullName = styled.div`
  position: absolute;
  top: 299.75rem;
  left: 45.75rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 4.5rem;
`;
const Email = styled.div`
  position: absolute;
  top: 299.75rem;
  left: 65.75rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 4.5rem;
`;
const YourNumber = styled.div`
  position: absolute;
  top: 305.06rem;
  left: 45.63rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 5.38rem;
`;
const CompanyBrand = styled.div`
  position: absolute;
  top: 305.25rem;
  left: 67.5rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 10rem;
`;
const NoOfRes = styled.div`
  position: absolute;
  top: 310.44rem;
  left: 45.75rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 10rem;
`;
const WhatCanWe = styled.div`
  position: absolute;
  top: 310.44rem;
  left: 60.5rem;
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: inline-block;
  width: 11.5rem;
`;
const ReadyToTake = styled.h1`
  margin: 0;
  position: absolute;
  top: 299.75rem;
  left: 1.75rem;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-white);
  display: inline-block;
  width: 35.25rem;
`;
const RectangleTextfield = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 301.31rem;
  left: 45.75rem;
`;
const RestaverseFeaturesPageChild3 = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 306.63rem;
  left: 45.63rem;
`;
const RestaverseFeaturesPageChild4 = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 306.63rem;
  left: 67.5rem;
`;
const RestaverseFeaturesPageChild5 = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 312rem;
  left: 45.75rem;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 312rem;
  left: 60.5rem;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-600);
  width: 26rem;
  height: 7.19rem;
`;
const RestaverseFeaturesPageChild6 = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 301.31rem;
  left: 65.75rem;
`;
const Login = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: left;
`;
const LoginButton1 = styled.button`
  cursor: pointer;
  border: 2px solid var(--color-blueviolet);
  padding: var(--padding-mini) var(--padding-21xl);
  background-color: var(--color-blueviolet);
  position: absolute;
  top: 321.56rem;
  left: 45.69rem;
  border-radius: var(--br-8xs);
  box-sizing: border-box;
  width: 40.88rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Page1 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 4.75rem;
`;
const Page1Parent = styled.div`
  position: absolute;
  top: 331.94rem;
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
  top: 331.69rem;
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
const Restaverse1 = styled.h3`
  margin: 0;
  position: absolute;
  top: 331.19rem;
  left: 1.75rem;
  font-size: var(--font-size-5xl);
  font-weight: 400;
  font-family: var(--font-poppins);
  color: var(--color-gray-200);
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 168.38rem;
  left: 0rem;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
`;
const RestaverseFeaturesPageRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 342rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;
const RestaverseFeaturesPage = () => {
  const navigate = useNavigate();

  const onRestaverse1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <RestaverseFeaturesPageRoot>
      <Sbyau1ytnnf6 />
      <RestaverseFeaturesPageChild />
      <PutRestaverseToContainer>
        <Put>{`Put `}</Put>
        <Restaverse>Restaverse</Restaverse>
        <Put> to work. Invest your time where it’s needed.</Put>
      </PutRestaverseToContainer>
      <Sbyau1ytnnf5 />
      <WhatMakesUs>What makes us stand out ?</WhatMakesUs>
      <UnparallelBusinessInsights>{`Unparallel business insights & call to action`}</UnparallelBusinessInsights>
      <BoremIpsumDolor>{`Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. `}</BoremIpsumDolor>
      <BoremIpsumDolor1>
        Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus.
      </BoremIpsumDolor1>
      <FeatureCardContainer featureHeading1="Feature Heading 1" />
      <FeatureCardContainer
        featureHeading1="Feature Heading 2"
        propLeft="34.69rem"
      />
      <FeatureCardContainer
        featureHeading1="Feature Heading 3"
        propLeft="60.5rem"
      />
      <RestaverseFeaturesPageItem />
      <GetStartedButton variant="contained" color="primary">
        Get Started
      </GetStartedButton>
      <Sbyau1ytnnf7 />
      <UnbiasedLensAcross>
        Unbiased lens across all your platforms
      </UnbiasedLensAcross>
      <BoremIpsumDolor2>
        Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus.
      </BoremIpsumDolor2>
      <RestaverseFeaturesPageInner />
      <GetStartedButton1 variant="contained" color="primary">
        Get Started
      </GetStartedButton1>
      <B>1.</B>
      <SmartBudgeting>Smart budgeting</SmartBudgeting>
      <LineDiv />
      <B1>2.</B1>
      <DigitalMarketingPlanning>
        Digital Marketing Planning
      </DigitalMarketingPlanning>
      <RestaverseFeaturesPageChild1 />
      <B2>3.</B2>
      <DesignatedCustomerSuccess>
        Designated customer success team
      </DesignatedCustomerSuccess>
      <RestaverseFeaturesPageChild2 />
      <Image36Icon alt="" src="/image-36@2x.png" />
      <RectangleSection />
      <FillOutThis>
        Fill out this form and we promise to get back as soon as possible.
      </FillOutThis>
      <FullName>Full Name</FullName>
      <Email>Email</Email>
      <YourNumber>Your Number</YourNumber>
      <CompanyBrand>Company / Brand name</CompanyBrand>
      <NoOfRes>No. of res ids</NoOfRes>
      <WhatCanWe>What can we help you with?</WhatCanWe>
      <ReadyToTake>
        Ready to take your business to the next level? 🚀
      </ReadyToTake>
      <RectangleTextfield
        sx={{ width: 300 }}
        color="primary"
        variant="filled"
        type="text"
        label="Label"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <RestaverseFeaturesPageChild3
        sx={{ width: 332 }}
        color="primary"
        variant="filled"
        type="text"
        label="Label"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <RestaverseFeaturesPageChild4
        sx={{ width: 304 }}
        color="primary"
        variant="filled"
        type="text"
        label="Label"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <RestaverseFeaturesPageChild5
        sx={{ width: 212 }}
        color="primary"
        variant="filled"
        type="text"
        label="Label"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <RectangleDiv />
      <RestaverseFeaturesPageChild6
        sx={{ width: 332 }}
        color="primary"
        variant="filled"
        type="text"
        label="Label"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <LoginButton1>
        <Login>Submit</Login>
      </LoginButton1>
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
      <Restaverse1>restaverse</Restaverse1>
      <BottomFooter />
      <FrameDiv />
      <Header onRestaverse1Click={onRestaverse1Click} />
    </RestaverseFeaturesPageRoot>
  );
};

export default RestaverseFeaturesPage;
