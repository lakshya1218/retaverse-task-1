import styled from "styled-components";
import LoginButton from "./LoginButton";

const FillOutThis = styled.div`
  position: absolute;
  top: 10.75rem;
  left: 1.75rem;
  font-size: var(--font-size-xl);
  font-weight: 500;
  display: inline-block;
  width: 28.5rem;
`;
const FullName = styled.div`
  position: absolute;
  top: 3.25rem;
  left: 45.75rem;
  font-weight: 300;
  display: inline-block;
  width: 4.5rem;
`;
const Email = styled.div`
  position: absolute;
  top: 3.25rem;
  left: 65.75rem;
  font-weight: 300;
  display: inline-block;
  width: 4.5rem;
`;
const YourNumber = styled.div`
  position: absolute;
  top: 8.56rem;
  left: 45.63rem;
  font-weight: 300;
  display: inline-block;
  width: 5.38rem;
`;
const CompanyBrand = styled.div`
  position: absolute;
  top: 8.75rem;
  left: 67.5rem;
  font-weight: 300;
  display: inline-block;
  width: 10rem;
`;
const NoOfRes = styled.div`
  position: absolute;
  top: 13.94rem;
  left: 45.75rem;
  font-weight: 300;
  display: inline-block;
  width: 10rem;
`;
const WhatCanWe = styled.div`
  position: absolute;
  top: 13.94rem;
  left: 60.5rem;
  font-weight: 300;
  display: inline-block;
  width: 11.5rem;
`;
const ReadyToTake = styled.h1`
  margin: 0;
  position: absolute;
  top: 3.25rem;
  left: 1.75rem;
  font-size: var(--font-size-21xl);
  font-weight: 700;
  font-family: inherit;
  color: var(--color-white);
  display: inline-block;
  width: 35.25rem;
`;
const FrameChild = styled.input`
  border: 0.5px solid var(--color-dodgerblue-200);
  background-color: var(--color-gray-600);
  position: absolute;
  top: 4.81rem;
  left: 45.75rem;
  border-radius: var(--br-3xs);
  box-shadow: 0px 0px 10px rgba(0, 133, 255, 0.3);
  box-sizing: border-box;
  width: 18.75rem;
  height: 2.5rem;
`;
const FrameItem = styled.input`
  border: none;
  background-color: var(--color-gray-600);
  position: absolute;
  top: 10.13rem;
  left: 45.63rem;
  border-radius: var(--br-3xs);
  width: 20.75rem;
  height: 2.5rem;
`;
const FrameInner = styled.input`
  border: none;
  background-color: var(--color-gray-600);
  position: absolute;
  top: 10.13rem;
  left: 67.5rem;
  border-radius: var(--br-3xs);
  width: 19rem;
  height: 2.5rem;
`;
const RectangleInput = styled.input`
  border: none;
  background-color: var(--color-gray-600);
  position: absolute;
  top: 15.5rem;
  left: 45.75rem;
  border-radius: var(--br-3xs);
  width: 13.25rem;
  height: 2.5rem;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 15.5rem;
  left: 60.5rem;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-600);
  width: 26rem;
  height: 7.19rem;
`;
const FrameChild1 = styled.input`
  border: none;
  background-color: var(--color-gray-600);
  position: absolute;
  top: 4.81rem;
  left: 65.75rem;
  border-radius: var(--br-3xs);
  width: 20.75rem;
  height: 2.5rem;
`;
const FrameRoot = styled.section`
  position: absolute;
  top: 261.19rem;
  left: 0rem;
  background-color: var(--color-gray-400);
  width: 90rem;
  height: 31.25rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;
const FormFrame = () => {
  return (
    <FrameRoot>
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
      <FrameChild type="text" />
      <FrameItem type="text" />
      <FrameInner type="text" />
      <RectangleInput type="text" />
      <RectangleDiv />
      <FrameChild1 type="text" />
      <LoginButton
        buttonText="Submit"
        propPadding="var(--padding-mini) var(--padding-21xl)"
        propBackgroundColor="#8635fd"
        propTop="25.06rem"
        propLeft="45.69rem"
        propBoxSizing="border-box"
        propWidth="40.88rem"
        propBoxShadow="unset"
        propColor="#fff"
      />
    </FrameRoot>
  );
};

export default FormFrame;
