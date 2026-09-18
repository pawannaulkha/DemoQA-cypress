import PracticeFormPage from '../pages/PracticeFormPage';

describe('DemoQA - Practice Form', () => {

    const practiceForm = new PracticeFormPage();

    beforeEach(() => {

        cy.visit('/automation-practice-form');

        cy.url()
            .should('include', '/automation-practice-form');
    });

    it('should successfully submit the practice form', () => {

        cy.fixture('practiceFormData').then((data) => {

            // Personal Information
            practiceForm.enterFirstName(data.firstName);
            practiceForm.enterLastName(data.lastName);
            practiceForm.enterEmail(data.email);

            // Gender
            practiceForm.selectGender(data.gender);

            // Mobile
            practiceForm.enterMobile(data.mobile);

            // Date of Birth
            practiceForm.selectDateOfBirth();

            // Subject
            practiceForm.enterSubject(data.subject);

            // Hobbies
            practiceForm.selectHobbies(data.hobbies);

            // Address
            practiceForm.enterAddress(data.address);

            // State
            practiceForm.selectState(data.state);

            // City
            practiceForm.selectCity(data.city);

            // Submit
            practiceForm.clickSubmit();

            // Validation
            practiceForm.verifySubmission();
        });
    });
});