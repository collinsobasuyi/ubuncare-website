import { TheScienceSection } from "../../pageObjects/Components/TheScience";

describe("The Science Section E2E Tests", () => {
    const scienceSection = new TheScienceSection();
    const sectionId = "#the-science";

    beforeEach(() => {
       cy.visit(`/${sectionId}`);
    });

    it("1. Should display all header elements and the chart container", () => {
        cy.viewport(1280, 800);
        scienceSection.getTheScienceSection().scrollIntoView();

        scienceSection.verifyHeaderContentVisible();

        scienceSection.getChartsContainer().should('be.visible');
    });

    it("2. Should display the correct number of chart boxes (4)", () => {
        cy.viewport(1280, 800);
        scienceSection.getTheScienceSection().scrollIntoView();

        // There are 4 ChartBox components
        scienceSection.verifyChartBoxesCount(4);
    });

    it("3. Should maintain content structure on mobile viewport", () => {
        cy.viewport("iphone-6");
        scienceSection.getTheScienceSection().scrollIntoView();

        scienceSection.verifyHeaderContentVisible();

        scienceSection.getChartsContainer().should('be.visible');

        scienceSection.verifyChartBoxesCount(4);
    });
});