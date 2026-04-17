import { HeroPro } from "../../pageObjects/Components/HeroPro";

describe("Hero Section E2E Tests", () => {
    const hero = new HeroPro();

    beforeEach(() => {
        cy.visit("/");
    });

    it("1. Should display the correct structure and CTAs on a large screen (Desktop)", () => {
        cy.viewport(1280, 800);

        hero.getHeroSection().should("be.visible");

        cy.get("#hero-heading").should("contain", "mindful pause");

        hero.verifyCtaLinksExist();

        hero.verifyTrustElementsVisible();
        hero.verifyMockupVisibility(true);
    });

    it("2. Should display the correct structure and CTAs on a small screen (Mobile)", () => {
        cy.viewport("iphone-6");

        hero.getHeroSection().should("be.visible");

        hero.verifyCtaLinksExist();

        hero.verifyTrustElementsVisible();

        hero.verifyMockupVisibility(true);
    });

    it("3. Should correctly point the 'Start Conversation' CTA to the waitlist section", () => {
        cy.viewport(1280, 800);

        hero.getStartConversationCta().click();

        cy.url().should("include", "/#waitlist");
    });
});