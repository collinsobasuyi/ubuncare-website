import { HowWeHelpSection } from '../../pageObjects/Components/HowWeHelp';

describe('How We Help Section Test Suite', () => {
    const howWeHelp = new HowWeHelpSection();
    const sectionId = "#how-we-help";

    beforeEach(() => {
        cy.visit('/');

        cy.get(sectionId).scrollIntoView();
    });

    it('should display the main section and header content correctly', () => {
        howWeHelp.getSection().should('be.visible');
        howWeHelp.verifyHeaderContentVisible();
    });

    it('should display the correct number of help cards (6)', () => {
        howWeHelp.verifyHelpCardsCount(6);
    });

    it('should verify the content of the first and last help card', () => {
        howWeHelp.getHelpCards().eq(0).as('firstCard').should('be.visible');
        cy.get('@firstCard').find('h3').should('contain', 'Managing Stress & Overwhelm');
        cy.get('@firstCard').find('p').should('contain', 'Ground yourself with AI-guided calm techniques');

        howWeHelp.getHelpCards().eq(5).as('lastCard').should('be.visible');
        cy.get('@lastCard').find('h3').should('contain', 'Finding Balance in Burnout');
        cy.get('@lastCard').find('p').should('contain', 'Rediscover calm and focus through reflection tools');
    });

    it('should verify the final message content is correct', () => {
        howWeHelp.getFinalMessageTitle().should('be.visible').and('contain', 'Small moments, real emotional care');
        howWeHelp.getFinalMessageDescription().should('be.visible').and('contain', 'Every check-in, conversation, and reflection is a small act of kindness');
    });
});