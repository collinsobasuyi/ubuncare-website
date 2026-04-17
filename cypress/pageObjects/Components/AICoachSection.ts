import { CyObjects } from "../CyObjects";

export class AICoachSection extends CyObjects {



    getAICoachSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("ai-coach-section");
    }

    getTagline(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("ai-coach-tagline");
    }

    getTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("ai-coach-title");
    }

    getDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("ai-coach-description");
    }

    getConversationDemo(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("conversation-demo");
    }

    getCompanionCardsContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("companion-cards-container");
    }

    getAllCompanionCards(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("companion-card");
    }


    verifyHeaderContentVisible(): void {
        cy.log("Verifying AI Coach header elements are visible.");
        this.getAICoachSection().should("be.visible");
        this.getTagline().should("be.visible").and("not.be.empty");
        this.getTitle().should("be.visible").and("not.be.empty");
        this.getDescription().should("be.visible").and("not.be.empty");
    }

    verifyConversationDemoStructure(expectedMessages: number): void {
        cy.log("Verifying conversation demo structure.");
        this.getConversationDemo().should("be.visible");

        this.getConversationDemo().find('[data-testid^="conversation-message-"]').should('have.length', expectedMessages);
    }

    verifyCompanionCardsCount(expectedCards: number): void {
        cy.log("Verifying the number of companion cards.");
        this.getCompanionCardsContainer().should("be.visible");
        this.getAllCompanionCards().should("have.length", expectedCards);
    }
}