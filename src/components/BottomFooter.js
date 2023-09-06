import styled from "styled-components";

const FollowUs = styled.div`
  position: absolute;
  top: 0rem;
  left: 0.13rem;
  font-weight: 500;
  display: inline-block;
  width: 6.25rem;
`;
const InstagramlogoIcon = styled.img`
  position: absolute;
  top: 2.19rem;
  left: 2.88rem;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
`;
const LinkedinlogoIcon = styled.img`
  position: absolute;
  top: 2.19rem;
  left: 0rem;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
`;
const FollowUsParentRoot = styled.div`position: absolute;
  top: 331.69rem;
  left: 81.13rem;
  width: 6.38rem;
  height: 4.19rem;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  top: ${(p) => p.propTop}
  left: ${(p) => p.frameDivLeft}
`;
const BottomFooter = ({ propTop, frameDivLeft }) => {
  return (
    <FollowUsParentRoot propTop={propTop} frameDivLeft={frameDivLeft}>
      <FollowUs>{`Follow us `}</FollowUs>
      <InstagramlogoIcon alt="" src="/instagramlogo.svg" />
      <LinkedinlogoIcon alt="" src="/linkedinlogo.svg" />
    </FollowUsParentRoot>
  );
};

export default BottomFooter;
