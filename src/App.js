import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
    this.state = {
      nameInput: '',
      descriptionInput: '',
      attr1Input: '',
      attr2Input: '',
      attr3Input: '',
      imageInput: '',
      rareInput: 'normal',
      trunfoInput: '',
      // hasTrunfo
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.verifyInputs);
  }

  verifyInputs() {
    let allValidFields = true;
    const maxAttributesSum = 210;
    const maxAttributeValue = 90;
    const minAttributeValue = 0;
    const {
      nameInput,
      descriptionInput,
      imageInput,
      rareInput,
      attr1Input,
      attr2Input,
      attr3Input,
    } = this.state;

    if (!nameInput || !descriptionInput || !imageInput || !rareInput) {
      allValidFields = false;
    }

    if (Number(attr1Input) > maxAttributeValue
      || Number(attr2Input) > maxAttributeValue
      || Number(attr3Input) > maxAttributeValue) {
      allValidFields = false;
    }

    if (Number(attr1Input) < minAttributeValue
      || Number(attr2Input) < minAttributeValue
      || Number(attr3Input) < minAttributeValue) {
      allValidFields = false;
    }

    if (Number(attr1Input) + Number(attr2Input) + Number(attr3Input) > maxAttributesSum) {
      allValidFields = false;
    }

    if (allValidFields) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <>
        <Form
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardImage={ imageInput }
          cardRare={ rareInput }
          cardTrunfo={ trunfoInput }
          // hasTrunfo,
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardImage={ imageInput }
          cardRare={ rareInput }
          cardTrunfo={ trunfoInput }
        />
      </>
    );
  }
}

export default App;
