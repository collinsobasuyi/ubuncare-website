export class WhyItWorksSection {
    private selectors = {
        section: '[data-testid="why-it-works-section"]',
        tagline: '[data-testid="why-it-works-tagline"]',
        title: '[data-testid="why-it-works-title"]',
        description: '[data-testid="why-it-works-description"]',
        corePrinciplesContainer: '[data-testid="core-principles-container"]',
        principleCard: '[data-testid="core-principle-card"]',
        principlePoint: (cardIndex: number, pointIndex: number) =>
            `[data-testid="core-principle-point-${cardIndex}-${pointIndex}"]`,
        trustSectionContainer: '[data-testid="trust-section-container"]',
        trustItem: '[data-testid="trust-item"]',
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

    getCorePrinciplesContainer() {
        return cy.get(this.selectors.corePrinciplesContainer);
    }

    getPrincipleCards() {
        return cy.get(this.selectors.principleCard);
    }

    getPrinciplePoint(cardIndex: number, pointIndex: number) {
        return cy.get(this.selectors.principlePoint(cardIndex, pointIndex));
    }

    getTrustItems() {
        return cy.get(this.selectors.trustItem);
    }

    verifyHeaderContentVisible() {
        this.getTagline().should('be.visible').and('contain', 'The psychology behind feeling better');
        this.getTitle().should('be.visible').and('contain', 'Why Ubuncare Works');
        this.getDescription().should('be.visible').and('contain', 'Ubuncare combines psychology and compassion');
    }

    verifyPrinciplesCount(expectedCount: number = 3) {
        this.getPrincipleCards().should('have.length', expectedCount);
    }

    verifyTrustItemsCount(expectedCount: number = 4) {
        this.getTrustItems().should('have.length', expectedCount);
    }
}