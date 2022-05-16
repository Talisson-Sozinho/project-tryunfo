import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.resetFields = this.resetFields.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.state = {
      nameInput: '',
      descriptionInput: '',
      attr1Input: '',
      attr2Input: '',
      attr3Input: '',
      imageInput: '',
      rareInput: 'normal',
      trunfoInput: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deckList: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.verifyInputs);
  }

  onSaveButtonClick() {
    this.setState(({
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput,
      hasTrunfo,
      deckList }) => {
      const cardObject = {
        nameInput,
        descriptionInput,
        attr1Input,
        attr2Input,
        attr3Input,
        imageInput,
        rareInput,
        trunfoInput,
      };
      return {
        hasTrunfo: hasTrunfo || trunfoInput,
        deckList: [...deckList, cardObject],
      };
    }, this.resetFields);
  }

  resetFields() {
    this.setState({
      nameInput: '',
      descriptionInput: '',
      attr1Input: '0',
      attr2Input: '0',
      attr3Input: '0',
      imageInput: '',
      rareInput: 'normal',
      trunfoInput: false,
      isSaveButtonDisabled: true,
    });
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

  removeCard({ target }) {
    if (target.parentNode.id === 'super-trunfo-card') {
      this.setState({ hasTrunfo: false });
    }
    target.parentNode.remove();
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
      deckList,
      hasTrunfo,
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        <Deck
          deckList={ deckList }
          removeCard={ this.removeCard }
        />
      </>
    );
  }
}

export default App;
