import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card';

export default class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      search: '',
    };
  }

  onInputChange({ target }) {
    const { value } = target;
    this.setState({
      search: value,
    });
  }

  render() {
    const { deckList, removeCard } = this.props;
    const { search } = this.state;

    const renderDeckList = search.length > 0
      ? deckList.filter(({ nameInput }) => nameInput.includes(search)) : deckList;

    return (
      <section className="deck-container">
        <input
          data-testid="name-filter"
          type="text"
          value={ search }
          onChange={ this.onInputChange }
        />
        {
          renderDeckList.map(({
            nameInput,
            descriptionInput,
            attr1Input,
            attr2Input,
            attr3Input,
            imageInput,
            rareInput,
            trunfoInput,
          }) => (
            <article key={ nameInput } id={ trunfoInput ? 'super-trunfo-card' : null }>
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
              <button
                data-testid="delete-button"
                type="button"
                onClick={ removeCard }
              >
                Excluir
              </button>
            </article>
          ))
        }
      </section>
    );
  }
}

Deck.propTypes = {
  deckList: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeCard: PropTypes.func.isRequired,
};
