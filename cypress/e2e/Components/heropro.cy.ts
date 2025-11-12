// cypress/e2e/heropro.cy.ts

import { HeroPro } from "../../pageObjects/Components/HeroPro";

describe("Hero Section E2E Tests", () => {
    const hero = new HeroPro();

    beforeEach(() => {
        // Assume the Hero component is on the homepage
        cy.visit("/");
    });

    it("1. Should display the correct structure and CTAs on a large screen (Desktop)", () => {
        cy.viewport(1280, 800);

        hero.getHeroSection().should("be.visible");

        // Verify key static content is present (H1 text is assumed static and read by the server)
        cy.get("#hero-heading").should("contain", "mindful pause");

        // Verify client component CTAs are rendered
        hero.verifyCtaLinksExist();

        // Verify trust elements and mockup are visible
        hero.verifyTrustElementsVisible();
        hero.verifyMockupVisibility(true);
    });

    it("2. Should display the correct structure and CTAs on a small screen (Mobile)", () => {
        cy.viewport("iphone-6");

        hero.getHeroSection().should("be.visible");

        // Verify client component CTAs are rendered
        hero.verifyCtaLinksExist();

        // Verify trust elements are visible on mobile
        hero.verifyTrustElementsVisible();

        // Verify mockup visibility (it remains visible in the current styling)
        hero.verifyMockupVisibility(true);
    });

    it("3. Should correctly point the 'Start Conversation' CTA to the waitlist section", () => {
        cy.viewport(1280, 800);

        // This test simulates the click action to confirm it navigates to the correct section (anchor link test)
        // NOTE: If you replace this with a modal, you would replace .click() with a verification that the modal opens.

        hero.getStartConversationCta().click();

        // Verify the URL hash has changed (This confirms the client boundary link works)
        cy.url().should("include", "/#waitlist");
    });
});