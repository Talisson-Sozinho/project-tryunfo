import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input id="name-input" data-testid="name-input" type="text" />
        </label>

        <label htmlFor="description-input">
          Descrição
          <textarea id="description-input" data-testid="description-input" />
        </label>

        <label htmlFor="attr1-input">
          Attr01
          <input id="attr1-input" data-testid="attr1-input" type="number" />
        </label>

        <label htmlFor="attr2-input">
          Attr02
          <input id="attr2-input" data-testid="attr2-input" type="number" />
        </label>

        <label htmlFor="attr3-input">
          Attr03
          <input id="attr3-input" data-testid="attr3-input" type="number" />
        </label>

        <label htmlFor="image-input">
          Imagem
          <input id="image-input" data-testid="image-input" type="text" />
        </label>

        <label htmlFor="rare-input">
          Raridade
          <select id="rare-input" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input id="trunfo-input" data-testid="trunfo-input" type="checkbox" />
        </label>

        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}
