class FAQPage {
    getFaqSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="faq-section"]');
    }

    getFaqTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="faq-title"]');
    }

    getFaqList(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="faq-list"]');
    }

    getFaqItem(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[data-testid="faq-item-${index}"]`);
    }

    getFaqQuestionButton(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[data-testid="faq-btn-${index}"]`);
    }

    getFaqAnswerPanel(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[data-testid="faq-answer-${index}"]`);
    }

    getContactCta(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-testid="contact-cta"]');
    }

    toggleQuestion(index: number): void {
        this.getFaqQuestionButton(index).click();
    }
}
export default new FAQPage();