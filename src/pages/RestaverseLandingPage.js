import styled from "styled-components";
import HospitalityPlatformContainer from "../components/HospitalityPlatformContainer";
import ContainerWrapper from "../components/ContainerWrapper";
import AwesomeFunctionalityContainer from "../components/AwesomeFunctionalityContainer";
import ContainerFrame from "../components/ContainerFrame";
import FormFrame from "../components/FormFrame";
import Footer from "../components/Footer";

const TrustedBy = styled.h3`
  margin: 0;
  position: absolute;
  top: 61.06rem;
  left: 40.81rem;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  width: 8.44rem;
`;
const RestaverseHasHelped = styled.div`
  position: absolute;
  top: 192.38rem;
  left: 21.81rem;
  font-size: var(--font-size-xl);
  font-weight: 500;
  color: var(--color-gray-100);
  text-align: center;
  display: inline-block;
  width: 46.94rem;
`;
const WhatOur = styled.span``;
const Customers = styled.span`
  color: var(--color-white);
`;
const WhatOurCustomersContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  width: 30.25rem;
  flex-shrink: 0;
`;
const HighlightTestimonial = styled.div`
  position: relative;
  background-color: var(--color-blueviolet);
  width: 13.5rem;
  height: 2.5rem;
  margin-left: -18.62rem;
`;
const Frame = styled.div`
  position: absolute;
  top: 187.44rem;
  left: 30.19rem;
  width: 30.25rem;
  height: 3rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--font-size-21xl);
`;
const RestaverseLandingPageRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 302.94rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-400);
  font-family: var(--font-inter);
`;
const RestaverseLandingPage = () => {
  return (
    <RestaverseLandingPageRoot>
      <TrustedBy>Trusted by</TrustedBy>
      <RestaverseHasHelped>
        Restaverse has helped the founders of several restaurants, consultants
        and conglomerates in the industry. See why you can trust us too.
      </RestaverseHasHelped>
      <HospitalityPlatformContainer />
      <ContainerWrapper />
      <AwesomeFunctionalityContainer />
      <Frame>
        <WhatOurCustomersContainer>
          <WhatOur>{`What our `}</WhatOur>
          <Customers>customers</Customers>
          <WhatOur> say</WhatOur>
        </WhatOurCustomersContainer>
        <HighlightTestimonial />
      </Frame>
      <ContainerFrame />
      <FormFrame />
      <Footer />
    </RestaverseLandingPageRoot>
  );
};

export default RestaverseLandingPage;
