import FAQPage from '../../pageObjects/Components/FAQ';

describe('FAQ Component Functional Tests (Fragment Navigation)', () => {

    beforeEach(() => {
        cy.visit('/#faq');
        FAQPage.getFaqSection().should('be.visible');
    });

    it('should display the main elements and check the CTA link integrity', () => {
        FAQPage.getFaqTitle().should('be.visible').and('contain', 'Frequently Asked Questions');
        FAQPage.getFaqList().should('be.visible').children().should('have.length.greaterThan', 5);

        FAQPage.getContactCta().should('be.visible')
            .and('have.attr', 'href', 'mailto:contact@ubuncare.com')
            .and('contain', 'Contact Support');
    });

    it('should correctly toggle (open/close) the first FAQ item via click', () => {
        const index = 0;

        FAQPage.getFaqAnswerPanel(index).should('not.be.visible').and('have.css', 'max-height', '0px');
        FAQPage.getFaqQuestionButton(index).should('have.attr', 'aria-expanded', 'false');

        FAQPage.toggleQuestion(index);

        FAQPage.getFaqAnswerPanel(index).should('be.visible');
        FAQPage.getFaqQuestionButton(index).should('have.attr', 'aria-expanded', 'true');

        FAQPage.toggleQuestion(index);

        FAQPage.getFaqAnswerPanel(index).should('not.be.visible').and('have.css', 'max-height', '0px');
        FAQPage.getFaqQuestionButton(index).should('have.attr', 'aria-expanded', 'false');
    });

    it('should ensure only one FAQ item is open at a time (accordion behavior)', () => {
        const index1 = 2;
        const index2 = 3;

        FAQPage.toggleQuestion(index1);
        FAQPage.getFaqAnswerPanel(index1).should('be.visible');

        FAQPage.toggleQuestion(index2);
        FAQPage.getFaqAnswerPanel(index2).should('be.visible');

        FAQPage.getFaqAnswerPanel(index1).should('not.be.visible').and('have.css', 'max-height', '0px');
    });
});