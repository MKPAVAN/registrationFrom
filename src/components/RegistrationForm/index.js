import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput === ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    console.log(isValidFirstName)
    this.setState({showFirstNameError: isValidFirstName})
  }

  validateLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput === ''
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({showLastNameError: isValidLastName})
  }

  onSubmitRegistrationForm = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()

    const isValidLastName = this.validateLastName()

    if (isValidFirstName === false && isValidLastName === false) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: false,
        showLastNameError: false,
        isFormSubmitted: false,
      })
    }
  }

  emptyRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state
    return (
      <form onSubmit={this.onSubmitRegistrationForm}>
        <div className="input-container">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            id="firstName"
            type="text"
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
          {showFirstNameError && <p>Required</p>}
        </div>
        <div className="input-container">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            id="lastName"
            type="text"
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
          {showLastNameError && <p>Required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({
      isFormSubmitted: false,
      firstNameInput: '',
      lastNameInput: '',
    })
  }

  successfullySubmittedForm = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="bg-container">
        <h1>Registration</h1>
        <div className="card-container">
          {isFormSubmitted
            ? this.successfullySubmittedForm()
            : this.emptyRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
