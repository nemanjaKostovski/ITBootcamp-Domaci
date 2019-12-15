import React, { Component, Fragment } from 'react';
import './App.css';
import { Popup } from './components/popup';

class App extends Component {


  state = {
    imenik: [
      {
        name: "Johan Do",
        phone: "123456"
      },
      {
        name: "Marko Do",
        phone: "654321"
      }
    ],
    fullName: '',
    phoneNum: '',
    userExists: false,
    prompt: false,
    error: false,
  }

  handlePromptAccept = () => {
    const { imenik, phoneNum } = this.state;
    const index = imenik.findIndex(person => person.name === this.state.fullName);
    const newImenikState = [...imenik];
    newImenikState[index] = {
      ...newImenikState[index],
      phone: phoneNum
    };
    this.setState({ imenik: newImenikState, prompt: false })
  }

  handlePromptReject = () => {
    this.setState({ prompt: false });
  }

  _updateField = (fieldName, value) => {
    this.setState({ [fieldName]: value })
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    const {
      imenik,
      fullName,
      phoneNum
    } = this.state;

    const result = imenik.filter(person => person.name === fullName);

    if (fullName === '' || phoneNum === '' || phoneNum[0] === '-')
      return this.setState({ error: true });

    if (result.length)
      return this.setState({ prompt: true, error: false });

    this.setState(prevState => ({
      imenik: [...prevState.imenik, { name: prevState.fullName, phone: prevState.phoneNum }],
      error: false
    }))
  }

  render() {
    const {
      fullName,
      phoneNum,
      imenik,
      prompt,
      error,
    } = this.state;

    return (
      <Fragment>
        {error && (
          <div style={{
            border: '1px solid red',
            backgroundColor: 'pink',
            color: 'red',
          }}>
            {'Polje sa imenom i prezimenom i polje sa brojem telefona ne smeju biti prazna, takodje broj telefona ne sme pocinjati sa -'}
          </div>
        )}
        {prompt && <Popup accept={this.handlePromptAccept} reject={this.handlePromptReject} message="Da li zelite da promenite broj telefona?" />}
        <form>
          <input type="text" placeholder="Ime i prezime" value={fullName} onChange={e => this._updateField('fullName', e.currentTarget.value)} />
          <input type="number" placeholder="Broj telefona" value={phoneNum} onChange={e => this._updateField('phoneNum', e.currentTarget.value)} />
          <button onClick={this._handleSubmit}>Add</button>
        </form>
        <ul>
          {imenik.map(person => (
            <li key={person.phone}>
              <h4>{person.name}</h4>
              <div>{person.phone}</div>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default App;
