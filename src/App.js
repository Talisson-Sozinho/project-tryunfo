import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
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
    });
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
