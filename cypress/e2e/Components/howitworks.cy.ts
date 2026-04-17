import { HowItWorks } from "../../pageObjects/Components/HowItWorks";

describe("How It Works Section E2E Tests", () => {
    const howItWorks = new HowItWorks();
    const sectionId = "#how-it-works";

    beforeEach(() => {
        cy.visit(`/${sectionId}`);
    });

    it("1. Should display all main components on a large screen (Desktop)", () => {
        cy.viewport(1280, 800);

        howItWorks.verifyHeaderElementsVisible();

        howItWorks.verifyStepContentStructure(1);

        howItWorks.verifyStepContentStructure(2);
    });

    it("2. Should display all main components on a small screen (Mobile)", () => {
        cy.viewport("iphone-6");

        howItWorks.verifyHeaderElementsVisible();

        howItWorks.verifyStepContentStructure(1);

        howItWorks.verifyStepContentStructure(2);
    });

    it('3. Should ensure animation elements are present and fully visible after scrolling', () => {

        howItWorks.getHowItWorksSection()
            .scrollIntoView({ duration: 500 });

        cy.wait(700);

        howItWorks.getStepContainer(1).should('be.visible');

        howItWorks.getStepOneMoodItem().should('be.visible');
        howItWorks.getStepOneButton().should('be.visible');

        howItWorks.getStepContainer(2).should('be.visible');

        howItWorks.getStepTwoMessage(1).should('be.visible');
        howItWorks.getStepTwoMessage(2).should('be.visible');
    });
});