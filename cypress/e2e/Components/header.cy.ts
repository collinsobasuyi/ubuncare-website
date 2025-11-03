import { Header } from "../../pageObjects/Components/Header";

describe("Header Navigation E2E Tests", () => {
    const header = new Header();

    beforeEach(() => {
        cy.visit("/");
    });

    it("1. Should display the correct desktop structure on large screens (1280px+)", () => {
        cy.viewport(1280, 800);

        header.verifyLogoLinkWorks();
        header.verifyDesktopStructureVisible();

        header.getDesktopNavLink("how-it-works").should("exist").and("be.visible");
        header.getDesktopNavLink("contact").should("exist").and("be.visible");
        header.getWaitlistCta().should("exist").and("be.visible");
    });

    it("2. Should display the correct mobile structure on small screens (iPhone 6)", () => {
        cy.viewport("iphone-6");

        header.verifyLogoLinkWorks();
        header.verifyMobileStructureVisible();

        header.getDesktopNav().should("not.be.visible");
        header.getWaitlistCta().should("not.be.visible");
    });

    it("3. Should correctly open and close the mobile menu on touch devices", () => {
        cy.viewport("iphone-6");

        header.openMobileMenu();
        header.verifyMobileMenuIsOpen();

        header.getMobileMenuModal().within(() => {
            header.getMobileNavLink("contact").should("be.visible").click();
        });

        cy.viewport("iphone-6");
        header.openMobileMenu();

        header.closeMobileMenu();

        header.getMobileMenuModal().should("have.css", "opacity", "0");
    });
});
