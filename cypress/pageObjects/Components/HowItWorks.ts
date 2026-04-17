import { CyObjects } from "../CyObjects";

export class HowItWorks extends CyObjects {

    getHowItWorksSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("how-it-works-section");
    }

    getHeaderTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("header-title");
    }

    getHeaderTagline(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("header-tagline");
    }

    getStepContainer(stepNumber: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`how-it-works-step-${stepNumber}`);
    }

    getStepFeature(stepNumber: number, featureNumber: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`step-${stepNumber}-feature-${featureNumber}`);
    }

    getStepOneMoodItem(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("step-1-mood-item").first();
    }

    getStepOneButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("step-1-button");
    }

    getStepTwoMessage(messageNumber: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`step-2-message-${messageNumber}`);
    }

    verifyHeaderElementsVisible(): void {
        cy.log("Verifying How It Works header elements are visible.");
        this.getHowItWorksSection().should("be.visible");
        this.getHeaderTitle().should("be.visible");
        this.getHeaderTagline().should("be.visible");
    }

    verifyStepContentStructure(stepNumber: number): void {
        cy.log(`Verifying structural elements for Step ${stepNumber}.`);
        const step = this.getStepContainer(stepNumber).should("be.visible");

        this.getStepFeature(stepNumber, 1).should("be.visible");

        if (stepNumber === 1) {
            this.getStepOneMoodItem().should("be.visible");
            this.getStepOneButton().should("be.visible");
        } else if (stepNumber === 2) {
            this.getStepTwoMessage(1).should("be.visible");
            this.getStepTwoMessage(2).should("be.visible");
        }
    }
}