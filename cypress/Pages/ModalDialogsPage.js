class ModalDialogsPage {

  visit() {
    cy.visit('/modal-dialogs');
  }

  openSmallModal() {
    cy.get('#showSmallModal').click();
  }

  closeSmallModal() {
    cy.get('#closeSmallModal').click();
  }

  openLargeModal() {
    cy.get('#showLargeModal').click();
  }

  closeLargeModal() {
    cy.get('#closeLargeModal').click();
  }

  modal() {
    return cy.get('.modal-content');
  }

  modalBody() {
    return cy.get('.modal-body');
  }

}

export default ModalDialogsPage;