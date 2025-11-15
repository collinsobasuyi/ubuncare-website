import { Footer } from "../../pageObjects/Components/Footer";

describe("Footer Section E2E Tests", () => {
    const footer = new Footer();
    const sectionId = "#footer-section";
    const navLinks = ["features", "terms-of-service", "help-center"];
    const crisisTitles = ["Emergency", "Samaritans", "Shout Text Line", "NHS 111"];
    const socialIcons = ["x-twitter", "linkedin", "instagram", "youtube"];

    beforeEach(() => {
        cy.visit(`/`);
    });

    it("1. Should display all core elements of the Crisis Support section on Desktop", () => {
        cy.viewport(1280, 800);
        footer.verifyCrisisSectionVisible();

        crisisTitles.forEach((title, index) => {
            footer.getCrisisCardTitle(index).should("contain.text", title);
            footer.getCrisisCardContent(index).should("not.be.empty");
        });

        footer.getNonUrgentLink("local").should("be.visible").and("have.attr", "href", "#");
        footer.getNonUrgentLink("directory").should("be.visible");
        footer.getNonUrgentLink("international").should("be.visible");
    });

    it("2. Should display all core elements of the Main Footer/Nav section on Mobile, including social icons", () => {
        cy.viewport("iphone-6");
        cy.get(sectionId).scrollIntoView({ duration: 300 });

        footer.verifyMainFooterNavSectionVisible();

        footer.getCompanyTagline().should("be.visible");
        footer.getTrustBadge('nhs-partner').should("be.visible");

        footer.getSocialIconsContainer().should('be.visible');

        socialIcons.forEach((id) => {
            footer.getSocialIcon(id)
                .should("be.visible")
                .and("have.attr", "href", "#");
        });
    });

    it("3. Should ensure all main navigation links and compliance badges are present", () => {
        cy.viewport(1280, 800);
        cy.get(sectionId).scrollIntoView({ duration: 300 });
        footer.verifyMainFooterNavSectionVisible();

        navLinks.forEach((link) => {
            footer.getNavLink(link)
                .should("be.visible")
                .and("have.attr", "href", `#${link}`);
        });

        footer.getComplianceBadge('hipaa').should("be.visible").and("contain.text", "HIPAA Compliant");
        footer.getComplianceBadge('iso').should("be.visible").and("contain.text", "ISO 27001 Ready");

        footer.getCopyrightText().should("contain.text", "© 2025 Ubuncare. All rights reserved.");
        footer.getClinicalDisclaimer().should("be.visible").and('contain.text', 'not a substitute for clinical care');
    });
});