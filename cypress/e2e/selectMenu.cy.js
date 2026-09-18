import SelectMenuPage from '../pages/SelectMenuPage';

describe('Select Menu Tests', () => {

  const selectMenu = new SelectMenuPage();

  beforeEach(() => {
    selectMenu.visit();
  });

  it('should select old style dropdown value', () => {

    selectMenu.selectOldStyle('Purple');

    cy.get('#oldSelectMenu')
      .should('have.value', '4');
  });

  it('should select multiple values', () => {

    selectMenu.selectMultiple([
      'volvo',
      'saab',
      'opel'
    ]);

    cy.get('#cars option:selected')
      .should('have.length', 3);
  });

});