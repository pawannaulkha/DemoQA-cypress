class PracticeFormPage {

    // Locators
    firstName = '#firstName';
    lastName = '#lastName';
    email = '#userEmail';

    genderMale = 'label[for="gender-radio-1"]';
    genderFemale = 'label[for="gender-radio-2"]';
    genderOther = 'label[for="gender-radio-3"]';

    mobile = '#userNumber';

    dateOfBirth = '#dateOfBirthInput';

    subjects = '#subjectsInput';

    hobbiesSports = 'label[for="hobbies-checkbox-1"]';
    hobbiesReading = 'label[for="hobbies-checkbox-2"]';
    hobbiesMusic = 'label[for="hobbies-checkbox-3"]';

    uploadPicture = '#uploadPicture';

    currentAddress = '#currentAddress';

    state = '#state';
    city = '#city';

    submitButton = '#submit';

    // Actions

    enterFirstName(firstName) {
        cy.get(this.firstName)
            .should('be.visible')
            .clear()
            .type(firstName);
    }

    enterLastName(lastName) {
        cy.get(this.lastName)
            .should('be.visible')
            .clear()
            .type(lastName);
    }

    enterEmail(email) {
        cy.get(this.email)
            .should('be.visible')
            .clear()
            .type(email);
    }

    selectGender(gender) {

        if (gender === 'Male') {
            cy.get(this.genderMale).click();
        }
        else if (gender === 'Female') {
            cy.get(this.genderFemale).click();
        }
        else if (gender === 'Other') {
            cy.get(this.genderOther).click();
        }
    }

    enterMobile(mobile) {
        cy.get(this.mobile)
            .clear()
            .type(mobile);
    }

    selectDateOfBirth() {

        cy.get(this.dateOfBirth)
            .click();

        // Example date selection
        cy.get('.react-datepicker__year-select')
            .select('1995');

        cy.get('.react-datepicker__month-select')
            .select('May');

        cy.get('.react-datepicker__day--015')
            .not('.react-datepicker__day--outside-month')
            .click();
    }

    enterSubject(subject) {

        cy.get(this.subjects)
            .click()
            .type(subject);

        cy.get('.subjects-auto-complete__option')
            .contains(subject)
            .click();
    }

    selectHobbies(hobbies) {

        hobbies.forEach((hobby) => {

            if (hobby === 'Sports') {
                cy.get(this.hobbiesSports).click();
            }

            if (hobby === 'Reading') {
                cy.get(this.hobbiesReading).click();
            }

            if (hobby === 'Music') {
                cy.get(this.hobbiesMusic).click();
            }
        });
    }

    uploadFile(fileName) {

        cy.get(this.uploadPicture)
            .selectFile(`cypress/fixtures/${fileName}`);
    }

    enterAddress(address) {

        cy.get(this.currentAddress)
            .clear()
            .type(address);
    }

    selectState(stateName) {

        cy.get(this.state)
            .click();

        cy.get('#react-select-3-option-0')
            .contains(stateName)
            .click();
    }

    selectCity(cityName) {

        cy.get(this.city)
            .click();

        cy.get('.css-26l3qy-menu')
            .contains(cityName)
            .click();
    }

    clickSubmit() {

        cy.get(this.submitButton)
            .scrollIntoView()
            .click();
    }

    verifySubmission() {

        cy.get('.modal-content')
            .should('be.visible');

        cy.get('.modal-title')
            .should('contain.text', 'Thanks for submitting the form');
    }
}

export default PracticeFormPage;