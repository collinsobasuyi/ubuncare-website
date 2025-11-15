// pageObjects/Components/Footer.ts

import { CyObjects } from "../CyObjects";

export class Footer extends CyObjects {

    // --- Crisis Section Elements ---

    getCrisisSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("crisis-section");
    }

    getCrisisHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("crisis-header");
    }

    getCrisisCard(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`crisis-card-${index}`);
    }

    getCrisisCardTitle(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`crisis-card-title-${index}`);
    }

    getCrisisCardContent(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`crisis-card-content-${index}`);
    }

    getNonUrgentAdviceText(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("non-urgent-advice-text");
    }

    getNonUrgentLink(linkType: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`non-urgent-link-${linkType}`);
    }

    getCrisisDisclaimer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("crisis-disclaimer");
    }

    // --- Main Footer/Navigation Section Elements ---

    getMainFooterNavSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("main-footer-nav-section");
    }

    getCompanyLogoText(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("company-logo-text");
    }

    getCompanyTagline(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("company-tagline");
    }

    getTrustBadge(type: 'clinically-reviewed' | 'nhs-partner'): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`trust-badge-${type}`);
    }

    getNavColumn(title: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`nav-column-${title}`);
    }

    // FIX: Corrected return type
    getNavLink(linkName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        // linkName must be lowercase and hyphenated, e.g., 'privacy-policy'
        return this.getByTestId(`nav-link-${linkName}`);
    }

    getSocialIconsContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("social-icons-container");
    }

    getSocialIcon(id: string): Cypress.Chainable<JQuery<HTMLElement>> {
        // id can be 'x-twitter', 'linkedin', 'instagram', 'youtube'
        return this.getByTestId(`social-icon-${id}`);
    }

    // --- Bottom Section Elements ---

    getCopyrightText(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("copyright-text");
    }

    getComplianceBadge(id: string): Cypress.Chainable<JQuery<HTMLElement>> {
        // id can be 'hipaa', 'ssl', 'iso', 'ce'
        return this.getByTestId(`compliance-badge-${id}`);
    }

    getClinicalDisclaimer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("clinical-disclaimer");
    }

    // --- Verification Methods ---

    verifyCrisisSectionVisible(): void {
        cy.log("Verifying Crisis Support Section elements are visible.");
        // Use cy.get('#footer-section') to ensure scroll works reliably if it's not the top of the page
        cy.get('#footer-section').scrollIntoView({ duration: 500 });
        this.getCrisisSection().should("be.visible");
        this.getCrisisHeader().should("be.visible");
        this.getCrisisCard(0).should("be.visible"); // Check first card
        this.getCrisisCardTitle(0).should("contain.text", "Emergency");
        this.getNonUrgentAdviceText().should("be.visible");
        this.getCrisisDisclaimer().should("be.visible");
    }

    verifyMainFooterNavSectionVisible(): void {
        cy.log("Verifying Main Footer Navigation Section elements are visible.");
        this.getMainFooterNavSection().should("be.visible");
        this.getCompanyLogoText().should("be.visible").and("contain.text", "Ubuncare");
        this.getTrustBadge('clinically-reviewed').should("be.visible");
        this.getNavColumn('product').should("be.visible");
        this.getNavLink('how-it-works').should("be.visible");
    }
}