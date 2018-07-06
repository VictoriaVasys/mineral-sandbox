import React from 'react';

export default function App() {
  return (
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
  );
}
