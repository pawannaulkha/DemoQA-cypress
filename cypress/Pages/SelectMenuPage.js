class SelectMenuPage {

  visit() {
    cy.visit('/select-menu');
  }

  selectValue(value) {
    cy.get('#withOptGroup').click();
    cy.contains(value).click();
  }

  selectTitle(title) {
    cy.get('#selectOne').click();
    cy.contains(title).click();
  }

  selectOldStyle(value) {
    cy.get('#oldSelectMenu').select(value);
  }

  selectMultiple(values) {
    cy.get('#cars').select(values);
  }

}

export default SelectMenuPage;