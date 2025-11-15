import { CyObjects } from "../CyObjects";

export class TheScienceSection extends CyObjects {

    getTheScienceSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("the-science-section");
    }

    getTagline(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("the-science-tagline");
    }

    getTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("the-science-title");
    }

    getDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("the-science-description");
    }

    getChartsContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("charts-container");
    }

    getAllChartBoxes(): Cypress.Chainable<JQuery<HTMLElement>> {
        // Targets all chart boxes using the pattern chart-box-*
        return this.getChartsContainer().find('[data-testid^="chart-box-"]');
    }
    
    // Example for a specific chart box
    getChartBoxByTitle(title: string): Cypress.Chainable<JQuery<HTMLElement>> {
        const testId = `chart-box-${title.toLowerCase().replace(/\s/g, '-')}`;
        return this.getByTestId(testId);
    }


    verifyHeaderContentVisible(): void {
        cy.log("Verifying The Science header elements are visible.");
        this.getTheScienceSection().should("be.visible");
        this.getTagline().should("be.visible").and("not.be.empty");
        this.getTitle().should("be.visible").and("not.be.empty");
        this.getDescription().should("be.visible").and("not.be.empty");
    }

    verifyChartBoxesCount(expectedBoxes: number): void {
        cy.log("Verifying the number of chart boxes.");
        this.getChartsContainer().should("be.visible");
        this.getAllChartBoxes().should("have.length", expectedBoxes);
    }
}