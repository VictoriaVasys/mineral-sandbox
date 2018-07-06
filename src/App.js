import React from 'react';
import { FormFieldset as _FormFieldset, FormField } from 'mineral-ui/Form';
import TextInput from 'mineral-ui/TextInput';
import { createThemedComponent } from 'mineral-ui/themes';

const FormFieldset = createThemedComponent(_FormFieldset, ({ theme }) => ({
  FormFieldsetLegend_fontSize: theme.fontSize_prose
}));

export default function App() {
  return (
    <section>
      <h2>
        Thank you for participating! Please answer the questions below to be
        entered to win a prize.
      </h2>
      <form>
        <FormFieldset legend="Personal Information">
          <FormField input={TextInput} label="Full Name" />
          <FormField label="Email">
            <TextInput type="email" />
          </FormField>
          {/* <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input type="text" name="email" />
          </div> */}
        </FormFieldset>
        <FormFieldset legend="Vacation Information">
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
        </FormFieldset>
      </form>
    </section>
  );
}
