import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card';

export default class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.filterDeck = this.filterDeck.bind(this);
    this.state = {
      search: '',
      rarityFilter: 'todas',
      isTrunfo: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterDeck() {
    const { deckList } = this.props;
    const { search, rarityFilter, isTrunfo } = this.state;

    if (isTrunfo) {
      return [deckList.find(({ trunfoInput }) => trunfoInput === true)];
    }

    if (rarityFilter !== 'todas') {
      return deckList.filter(({ nameInput, rareInput }) => (
        nameInput.includes(search) && rareInput === rarityFilter
      ));
    }
    return search.length > 0
      ? deckList.filter(({ nameInput }) => nameInput.includes(search)) : deckList;
  }

  render() {
    const { removeCard } = this.props;
    const { search, rarityFilter, isTrunfo } = this.state;

    const renderDeckList = this.filterDeck();

    return (
      <section className="deck-container">
        <input
          data-testid="name-filter"
          name="search"
          type="text"
          value={ search }
          onChange={ this.onInputChange }
          disabled={ isTrunfo }
        />
        <select
          data-testid="rare-filter"
          name="rarityFilter"
          disabled={ isTrunfo }
          value={ rarityFilter }
          onChange={ this.onInputChange }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trunfo-filter">
          Super Trunfo
          <input
            id="trunfo-filter"
            name="isTrunfo"
            data-testid="trunfo-filter"
            type="checkbox"
            checked={ isTrunfo }
            onChange={ this.onInputChange }
          />
        </label>
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
