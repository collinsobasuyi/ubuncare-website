import { AICoachSection } from "../../pageObjects/Components/AICoachSection";

describe("AI Coach Section E2E Tests", () => {
    const aiCoach = new AICoachSection();
    const sectionId = "#ai-coach";

    beforeEach(() => {
        cy.visit(`/${sectionId}`);
    });

    it("1. Should display all header elements and primary containers", () => {
        cy.viewport(1280, 800);
        aiCoach.getAICoachSection().scrollIntoView();

        aiCoach.verifyHeaderContentVisible();

        aiCoach.getConversationDemo().should('be.visible');
        aiCoach.getCompanionCardsContainer().should('be.visible');
    });

    it("2. Should display the correct number of conversation messages and companion cards", () => {
        cy.viewport(1280, 800);
        aiCoach.getAICoachSection().scrollIntoView();

        aiCoach.verifyConversationDemoStructure(4);

        aiCoach.verifyCompanionCardsCount(4);
    });

    it("3. Should maintain content structure on mobile viewport", () => {
        cy.viewport("iphone-6");
        aiCoach.getAICoachSection().scrollIntoView();

        aiCoach.verifyHeaderContentVisible();

        aiCoach.getConversationDemo().should('be.visible');
        aiCoach.getCompanionCardsContainer().should('be.visible');

        aiCoach.verifyConversationDemoStructure(4);
        aiCoach.verifyCompanionCardsCount(4);
    });
});