import ModalDialogsPage from '../pages/ModalDialogsPage';

describe('Modal Dialog Tests', () => {

  const modalPage = new ModalDialogsPage();

  beforeEach(() => {
    modalPage.visit();
  });

  it('should open and close small modal', () => {

    modalPage.openSmallModal();

    modalPage.modal()
      .should('be.visible');

    modalPage.modalBody()
      .should('contain.text', 'This is a small modal');

    modalPage.closeSmallModal();

    modalPage.modal()
      .should('not.exist');
  });


  it('should open and close large modal', () => {

    modalPage.openLargeModal();

    modalPage.modal()
      .should('be.visible');

    modalPage.closeLargeModal();

    modalPage.modal()
      .should('not.exist');
  });

});