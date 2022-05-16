import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card';

export default class Deck extends React.Component {
  render() {
    const { deckList, removeCard } = this.props;
    return (
      <section className="deck-container">
        {
          deckList.map(({
            nameInput,
            descriptionInput,
            attr1Input,
            attr2Input,
            attr3Input,
            imageInput,
            rareInput,
            trunfoInput,
          }) => (
            <article key={ nameInput } id="super-trunfo-card">
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
