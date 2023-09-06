import styled from "styled-components";

const Login = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-blueviolet);
  text-align: left;
  color: ${(p) => p.propColor};
`;
const LoginButtonRoot = styled.button`cursor: pointer;
  border: 2px solid var(--color-blueviolet);
  padding: var(--padding-3xs) var(--padding-11xl);
  background-color: transparent;
  position: absolute;
  top: 1.19rem;
  left: 82.25rem;
  border-radius: var(--br-8xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${(p) => p.propPadding}
  background-color: ${(p) => p.propBackgroundColor}
  top: ${(p) => p.propTop}
  left: ${(p) => p.propLeft}
  box-sizing: ${(p) => p.propBoxSizing}
  width: ${(p) => p.propWidth}
  box-shadow: ${(p) => p.propBoxShadow}
`;
const LoginButton = ({
  buttonText,
  propPadding,
  propBackgroundColor,
  propTop,
  propLeft,
  propBoxSizing,
  propWidth,
  propBoxShadow,
  propColor,
}) => {
  return (
    <LoginButtonRoot
      propPadding={propPadding}
      propBackgroundColor={propBackgroundColor}
      propTop={propTop}
      propLeft={propLeft}
      propBoxSizing={propBoxSizing}
      propWidth={propWidth}
      propBoxShadow={propBoxShadow}
    >
      <Login propColor={propColor}>{buttonText}</Login>
    </LoginButtonRoot>
  );
};

export default LoginButton;
