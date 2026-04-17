import { CyObjects } from "../CyObjects";

export class HeroPro extends CyObjects {

    getHeroSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("hero-section");
    }

    getStartConversationCta(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("start-conversation-cta");
    }

    getLearnHowItWorksLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("learn-how-it-works-link");
    }

    getTrustEncryptedSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("trust-encrypted");
    }

    getTrustEthicalSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("trust-ethical");
    }

    getDisclaimerText(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("disclaimer-text");
    }

    getDeviceMockupArea(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("device-mockup-area");
    }

    // Action/Verification Methods

    verifyCtaLinksExist(): void {
        cy.log("Verifying CTA links exist and have correct hrefs.");
        this.getStartConversationCta()
            .should("be.visible")
            .and("have.attr", "href", "#waitlist");

        this.getLearnHowItWorksLink()
            .should("be.visible")
            .and("have.attr", "href", "#how-it-works");
    }

    verifyTrustElementsVisible(): void {
        cy.log("Verifying trust and disclaimer elements are visible.");
        this.getTrustEncryptedSection().should("be.visible");
        this.getTrustEthicalSection().should("be.visible");
        this.getDisclaimerText().should("be.visible");
    }

    verifyMockupVisibility(shouldBeVisible: boolean): void {
        cy.log(`Verifying device mockup area is ${shouldBeVisible ? 'visible' : 'hidden'}.`);
        if (shouldBeVisible) {
            this.getDeviceMockupArea().should("be.visible");
        } else {
            this.getDeviceMockupArea().should("not.be.visible");
        }
    }
}