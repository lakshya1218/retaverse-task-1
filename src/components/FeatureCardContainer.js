import styled from "styled-components";

const FeaturesCard1Child = styled.div`
  position: absolute;
  top: 12.5rem;
  left: 20.63rem;
  border-radius: var(--br-3xs);
  background: linear-gradient(
    235.14deg,
    rgba(124, 124, 124, 0.25) 33.45%,
    rgba(124, 124, 124, 0.13) 99.99%,
    rgba(124, 124, 124, 0)
  );
  backdrop-filter: blur(30px);
  width: 20.63rem;
  height: 12.5rem;
  transform: rotate(-180deg);
  transform-origin: 0 0;
`;
const LightningIcon = styled.img`
  position: absolute;
  top: 1.5rem;
  left: 1.63rem;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
`;
const FeatureHeading1 = styled.b`
  position: absolute;
  top: 5.75rem;
  left: 1.94rem;
  display: inline-block;
  width: 16.5rem;
`;
const ThisFeatureHelps = styled.div`
  position: absolute;
  top: 8rem;
  left: 1.94rem;
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-gray-100);
  display: inline-block;
  width: 17.75rem;
`;
const FeaturesCard1Root = styled.div`
  position: absolute;
  top: 82.38rem;
  left: 8.88rem;
  width: 20.63rem;
  height: 12.5rem;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-inter);
  left: ${(p) => p.propLeft};
`;
const FeatureCardContainer = ({ featureHeading1, propLeft }) => {
  return (
    <FeaturesCard1Root propLeft={propLeft}>
      <FeaturesCard1Child />
      <LightningIcon alt="" src="/lightning.svg" />
      <FeatureHeading1>{featureHeading1}</FeatureHeading1>
      <ThisFeatureHelps>
        This feature helps us distinguish ourselves.
      </ThisFeatureHelps>
    </FeaturesCard1Root>
  );
};

export default FeatureCardContainer;
