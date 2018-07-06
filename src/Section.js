import React from 'react';
import colors from 'mineral-ui/themes/generated/palette';
import { createStyledComponent } from 'mineral-ui/styles';
import { createThemedComponent } from 'mineral-ui/themes';
import Text from 'mineral-ui/Text';

type Props = {
  children: React$Node,
  title: string
};

const Root = createStyledComponent('section', ({ theme }) => ({
  padding: `${theme.space_stack_xl} ${theme.space_inline_xxl}`,

  '& *': {
    padding: `${theme.space_stack_xl} undefined`
  },

  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.borderColor}`
  }
}));

const ThemedText = createThemedComponent(Text, {
  color_h4: colors.dusk_40
});

const Title = (props) => <ThemedText element="h2" {...props} />;

export default function Section(props: Props) {
  const { children, title, ...restProps } = props;
  return (
    <Root {...restProps}>
      {title && <Title>{title}</Title>}
      {children}
    </Root>
  );
}
