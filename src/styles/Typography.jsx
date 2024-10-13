// Typography.js
import styled from 'styled-components';

const createTypographyComponent = (variant, level) => styled.p`
  font-size: ${props => props.theme.typography[variant][level].fontSize};
  line-height: ${props => props.theme.typography[variant][level].lineHeight};
  font-weight: ${props => props.weight || props.theme.fontWeights.normal};
  margin: 0;
`;

export const Display1 = createTypographyComponent('display', 1);
export const Display2 = createTypographyComponent('display', 2);
export const Display3 = createTypographyComponent('display', 3);
export const Display4 = createTypographyComponent('display', 4);
export const Display5 = createTypographyComponent('display', 5);
export const Display6 = createTypographyComponent('display', 6);

export const Headline1 = createTypographyComponent('headline', 1);
export const Headline2 = createTypographyComponent('headline', 2);
export const Headline3 = createTypographyComponent('headline', 3);
export const Headline4 = createTypographyComponent('headline', 4);
export const Headline5 = createTypographyComponent('headline', 5);
export const Headline6 = createTypographyComponent('headline', 6);

export const Title1 = createTypographyComponent('title', 1);
export const Title2 = createTypographyComponent('title', 2);
export const Title3 = createTypographyComponent('title', 3);
export const Title4 = createTypographyComponent('title', 4);
export const Title5 = createTypographyComponent('title', 5);

export const Body1 = createTypographyComponent('body', 1);
export const Body2 = createTypographyComponent('body', 2);
export const Body3 = createTypographyComponent('body', 3);
export const Body4 = createTypographyComponent('body', 4);

export const Caption1 = createTypographyComponent('caption', 1);
export const Caption2 = createTypographyComponent('caption', 2);

export const Label1 = createTypographyComponent('label', 1);

export const Button1 = createTypographyComponent('button', 1);
export const Button2 = createTypographyComponent('button', 2);
export const Button3 = createTypographyComponent('button', 3);