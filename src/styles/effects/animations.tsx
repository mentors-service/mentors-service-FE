import { css, keyframes } from 'styled-components';

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  25% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  75% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

const bounceOut = keyframes`
  0% {
    opacity: 1;
  }
  
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;

const fadeInDownBig = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2000px)
  }

  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const BounceIn = css`
  animation: ${bounceIn} 1.5s;
`;

export const BounceOut = css`
  animation: ${bounceOut} 1.5s;
`;

export const FadeInDownBig = css`
  animation: ${fadeInDownBig} 0.3s;
`;
