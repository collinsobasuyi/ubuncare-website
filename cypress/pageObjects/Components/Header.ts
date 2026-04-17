import { CyObjects } from "../CyObjects";

export class Header extends CyObjects {

    getLogoLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("header-logo-link");
    }

    getDesktopNav(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("desktop-nav");
    }

    getDesktopNavLink(hrefAnchor: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`nav-link-${hrefAnchor}`);
    }

    getWaitlistCta(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("waitlist-cta-link");
    }

    getMobileMenuOpenButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("mobile-menu-open-button");
    }

    getMobileMenuModal(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("mobile-menu-modal");
    }

    getMobileMenuCloseButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId("mobile-menu-close-button");
    }


    getMobileNavLink(hrefAnchor: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getByTestId(`mobile-nav-link-${hrefAnchor}`);
    }

    openMobileMenu(): void {
        this.getMobileMenuOpenButton().click();
    }

    closeMobileMenu(): void {
        this.getMobileMenuCloseButton().click();
    }

    verifyDesktopStructureVisible(): void {
        cy.log("Verifying desktop navigation is visible and mobile button is hidden.");
        this.getDesktopNav().should("be.visible");
        this.getWaitlistCta().should("be.visible");
        this.getMobileMenuOpenButton().should("not.be.visible");
    }

    verifyMobileStructureVisible(): void {
        cy.log("Verifying mobile button is visible and desktop navigation is hidden.");
        this.getDesktopNav().should("not.be.visible");
        this.getWaitlistCta().should("not.be.visible");
        this.getMobileMenuOpenButton().should("be.visible");
    }

    verifyMobileMenuIsOpen(): void {
        cy.log("Verifying mobile menu is open.");
        this.getMobileMenuModal().should("have.css", "opacity", "1");
        this.getMobileMenuCloseButton().should("be.visible");
    }

    verifyLogoLinkWorks(): void {
        cy.log("Verifying logo links to home.");
        this.getLogoLink()
            .should("be.visible")
            .and("have.attr", "href", "/");
    }
}
