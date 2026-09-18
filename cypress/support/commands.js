Cypress.Commands.add('closeAdIfPresent', () => {
  cy.get('body').then(($body) => {
    const closeButton = $body.find('#close-fixedban');

    if (closeButton.length) {
      cy.wrap(closeButton).click({ force: true });
    }
  });
});