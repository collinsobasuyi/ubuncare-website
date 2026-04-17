export class HowWeHelpSection {
    private selectors = {
        section: '#how-we-help',
        tagline: '[data-testid="how-we-help-tagline"]',
        title: '[data-testid="how-we-help-title"]',
        description: '[data-testid="how-we-help-description"]',
        helpCard: '[data-testid="help-card"]',
        finalMessageTitle: '[data-testid="final-message-title"]',
        finalMessageDescription: '[data-testid="final-message-description"]',
    };

    getSection() {
        return cy.get(this.selectors.section);
    }

    getTagline() {
        return cy.get(this.selectors.tagline);
    }

    getTitle() {
        return cy.get(this.selectors.title);
    }

    getDescription() {
        return cy.get(this.selectors.description);
    }

    getHelpCards() {
        return cy.get(this.selectors.helpCard);
    }

    getFinalMessageTitle() {
        return cy.get(this.selectors.finalMessageTitle);
    }

    getFinalMessageDescription() {
        return cy.get(this.selectors.finalMessageDescription);
    }


    verifyHeaderContentVisible() {
        this.getTagline().should('be.visible').and('contain', 'Supportive tools for everyday wellbeing');
        this.getTitle().should('be.visible').and('contain', 'How Ubuncare helps you every day');
        this.getDescription().should('be.visible').and('contain', 'Whether you’re dealing with stress, loneliness, burnout, or simply');
    }

    verifyHelpCardsCount(expectedCount: number = 6) {
        this.getHelpCards().should('have.length', expectedCount);
    }
}