import { FeatureSection } from "../../pageObjects/Components/FeatureSection";

describe("Features Section E2E Tests", () => {
    const featureSection = new FeatureSection();
    const sectionId = "#features";

    beforeEach(() => {
        cy.visit(`/${sectionId}`);
    });

    it("1. Should display all header elements and the feature grid container", () => {
        cy.viewport(1280, 800);
        featureSection.getFeatureSection().scrollIntoView();

        featureSection.verifyHeaderContentVisible();

        featureSection.getFeaturesGridContainer().should('be.visible');
    });

    it("2. Should display the correct number of feature cards (6)", () => {
        cy.viewport(1280, 800);
        featureSection.getFeatureSection().scrollIntoView();

        featureSection.verifyFeatureCardsCount(6);
    });

    it("3. Should maintain content structure on mobile viewport", () => {
        cy.viewport("iphone-6");
        featureSection.getFeatureSection().scrollIntoView();

        featureSection.verifyHeaderContentVisible();

        featureSection.getFeaturesGridContainer().should('be.visible');

        featureSection.verifyFeatureCardsCount(6);
    });
});