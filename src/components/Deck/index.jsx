import PropTypes from 'prop-types';
import React from 'react';
import Card from '../Card';

export default class Deck extends React.Component {
  render() {
    const { deckList } = this.props;
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
            <Card
              key={ nameInput }
              cardName={ nameInput }
              cardDescription={ descriptionInput }
              cardAttr1={ attr1Input }
              cardAttr2={ attr2Input }
              cardAttr3={ attr3Input }
              cardImage={ imageInput }
              cardRare={ rareInput }
              cardTrunfo={ trunfoInput }
            />
          ))
        }
      </section>
    );
  }
}

Deck.propTypes = {
  deckList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
