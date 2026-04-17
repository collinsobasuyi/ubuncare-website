import { CyObjects } from "../CyObjects";

export class FeatureSection extends CyObjects {

    getFeatureSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("features-section");
    }

    getTagline(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("features-tagline");
    }

    getTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("features-title");
    }

    getDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("features-description");
    }

    getFeaturesGridContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("features-grid-container");
    }

    getAllFeatureCards(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getFeaturesGridContainer().find('[data-testid^="feature-card-"]');
    }

    verifyHeaderContentVisible(): void {
        cy.log("Verifying Features header elements are visible.");
        this.getFeatureSection().should("be.visible");
        this.getTagline().should("be.visible").and("not.be.empty");
        this.getTitle().should("be.visible").and("not.be.empty");
        this.getDescription().should("be.visible").and("not.be.empty");
    }

    verifyFeatureCardsCount(expectedCards: number): void {
        cy.log("Verifying the number of feature cards.");
        this.getFeaturesGridContainer().should("be.visible");
        this.getAllFeatureCards().should("have.length", expectedCards);
    }
}