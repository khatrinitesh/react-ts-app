// Constants for animation styles (using CSS-in-JS example with styled-components)
import styled, { keyframes, css } from 'styled-components';
import { animationConstants } from '../../interface/interface';

// Keyframes for animations
const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOutAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const slideInAnimation = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
`;

const slideOutAnimation = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
    }
`;
// Styled components with animation
export const AnimatedBox = styled.div<{ animationName: string }>`
    padding: 20px;
    background-color: #f0f0f0;
    ${({ animationName }) => animationName === 'fadeIn' && css`${fadeInAnimation}`};
    ${({ animationName }) => animationName === 'fadeOut' && css`${fadeOutAnimation}`};
    ${({ animationName }) => animationName === 'slideIn' && css`${slideInAnimation}`};
    ${({ animationName }) => animationName === 'slideOut' && css`${slideOutAnimation}`};
    animation-duration: ${({ animationName }) => animationConstants[animationName]?.duration};
    animation-timing-function: ${({ animationName }) => animationConstants[animationName]?.easing};
`;

