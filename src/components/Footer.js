import styled from "styled-components";
import BottomFooter from "./BottomFooter";

const Page1 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 4.75rem;
`;
const Page1Parent = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 15rem;
  width: 4.75rem;
  height: 6.44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4xl);
`;
const PrivacyPolicy = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 10.5rem;
`;
const PrivacyPolicyParent = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 44.31rem;
  width: 10.5rem;
  height: 6.44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-4xl);
`;
const Restaverse = styled.h3`
  margin: 0;
  position: absolute;
  top: 0rem;
  left: 0rem;
  font-size: var(--font-size-5xl);
  font-weight: 400;
  font-family: var(--font-poppins);
  color: var(--color-gray-200);
`;
const FrameRoot = styled.section`
  position: absolute;
  top: 294.13rem;
  left: 1.5rem;
  width: 85.75rem;
  height: 7.19rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;
const Footer = () => {
  return (
    <FrameRoot>
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
      <BottomFooter propTop="0.5rem" frameDivLeft="79.38rem" />
    </FrameRoot>
  );
};

export default Footer;
