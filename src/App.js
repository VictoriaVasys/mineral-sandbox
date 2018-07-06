import React, { Component } from 'react';
import { createStyledComponent } from 'mineral-ui/styles';
import { createThemedComponent } from 'mineral-ui/themes';
import _Button from 'mineral-ui/Button';
import Flex, { FlexItem } from 'mineral-ui/Flex';
import {
  FormField as _FormField,
  FormFieldset as _FormFieldSet
} from 'mineral-ui/Form';
import { RadioGroup } from 'mineral-ui/Radio';
import TextInput from 'mineral-ui/TextInput';
import TextArea from 'mineral-ui/TextArea';
import Section from './Section';

const Wrap = createStyledComponent('div', ({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.color_gray_10,
  paddingTop: '3rem',
  width: '50rem'
}));

const UnstyledButton = createThemedComponent(_Button, ({ theme }) => ({
  Button_fontWeight: theme.fontWeight_bold,
  ButtonContent_fontSize: '1.2em'
}));

const Button = createThemedComponent(UnstyledButton, {
  textAlign: 'right'
});

const UnstyledFormField = createThemedComponent(_FormField, ({ theme }) => ({
  FormFieldLabel_fontSize: theme.h4_fontSize
}));

const FormField = createStyledComponent(UnstyledFormField, ({ theme }) => ({
  marginBottom: theme.space_inline_lg
}));

const UnstyledFormFieldset = createThemedComponent(
  _FormFieldSet,
  ({ theme }) => ({
    FormFieldsetLegend_fontSize: theme.h3_fontSize,
    FormFieldsetLegend_marginBottom: theme.h3_fontSize
  })
);

const FormFieldset = createStyledComponent(UnstyledFormFieldset, {
  '& legend': {
    marginBottom: '0.75rem'
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
      variant: 0
    };
  }

  render() {
    return (
      <div>
        <section>
          <h2>
            Thank you for participating! Please answer the questions below to be
            entered to win a prize.
          </h2>
          <form>
            <fieldset>
              <legend>Personal Information</legend>
              <div>
                <label htmlFor="fullname">Full Name</label>
              </div>
              <div>
                <input type="text" name="fullname" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="text" name="email" />
              </div>
            </fieldset>
            <fieldset>
              <legend>Vacation Information</legend>
              <div>
                <input
                  type="radio"
                  id="vacation1"
                  name="Preferred Vacation"
                  value="iceland"
                />
                <label htmlFor="vacation1">Iceland</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="vacation2"
                  name="Preferred Vacation"
                  value="italy"
                />
                <label htmlFor="vacation2">Italy</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="vacation3"
                  name="Preferred Vacation"
                  value="laos"
                />
                <label htmlFor="vacation3">Laos</label>
              </div>
              <input type="submit" value="Submit" />
            </fieldset>
          </form>
        </section>
        <Wrap>
          <Section title="Thank you for participating! Please answer the questions below to be entered to win a prize.">
            <form>
              <FormFieldset legend="Personal Information">
                <FormField
                  input={TextInput}
                  label="Full Name"
                  placeholder="e.g. John Smith"
                  required
                />
                <FormField
                  label="Email"
                  caption="We promise not to spam you."
                  placeholder="e.g. john_smith@ca.com"
                  required>
                  <TextInput type="email" />
                </FormField>
                <FormField label="Additional important information">
                  <TextArea />
                </FormField>
              </FormFieldset>
              <FormFieldset legend="Vacation Information">
                <FormField
                  input={RadioGroup}
                  label="What is your preferred vacation location?"
                  name="Preferred Vacation"
                  required
                  size="jumbo"
                  data={[
                    { label: 'Iceland', value: 'iceland' },
                    { label: 'Italy', value: 'italy' },
                    { label: 'Laos', value: 'laos' }
                  ]}
                />
              </FormFieldset>
              <Flex justifyContent="end">
                <FlexItem>
                  <Button primary size="jumbo" type="submit">
                    Submit
                  </Button>
                </FlexItem>
              </Flex>
            </form>
          </Section>
        </Wrap>
      </div>
    );
  }
}
