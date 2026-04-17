import { WhyItWorksSection } from '../../pageObjects/Components/WhyItWorks';

describe('Why It Works Section Test Suite', () => {
    const whyItWorks = new WhyItWorksSection();
    const sectionId = "#why-it-works";

    beforeEach(() => {
        cy.visit('/');
        cy.get(sectionId).scrollIntoView();
    });

    it('should display the main section and header content correctly', () => {
        whyItWorks.getSection().should('be.visible');
        whyItWorks.verifyHeaderContentVisible();
    });

    it('should display the correct number of core principle cards (3)', () => {
        whyItWorks.verifyPrinciplesCount(3);
    });

    it('should verify the structure of a specific core principle card', () => {
        whyItWorks.getPrincipleCards().eq(1).as('secondCard').should('be.visible');

        cy.get('@secondCard').find('h3').should('contain', 'Compassion Comes First');
        cy.get('@secondCard').find('p').should('contain', 'Healing begins with feeling heard');

        whyItWorks.getPrinciplePoint(1, 0).should('contain', 'Judgment-free conversations');
        whyItWorks.getPrinciplePoint(1, 2).should('contain', 'Focus on self-kindness and acceptance');
    });

    it('should display the correct number of trust badges (4)', () => {
        whyItWorks.verifyTrustItemsCount(4);
    });

    it('should verify content of the Trust Section banner', () => {
        whyItWorks.getTrustItems().eq(0).should('contain', 'Privacy First');
        whyItWorks.getTrustItems().eq(3).should('contain', 'Human-Centered');
    });
});