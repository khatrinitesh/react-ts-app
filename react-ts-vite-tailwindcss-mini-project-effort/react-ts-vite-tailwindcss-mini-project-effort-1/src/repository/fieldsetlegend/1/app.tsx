import React from 'react'

const CustomApp = () => {
  return (
    <>
        <FormComponent/>
    </>
  )
}

export default CustomApp

const FormComponent: React.FC = () => {
    return (
      <form>
        <fieldset>
          <legend>Personal Information</legend>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" />
          </div>
        </fieldset>
      </form>
    );
  };