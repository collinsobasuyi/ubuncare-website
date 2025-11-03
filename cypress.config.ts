import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // *** ADDING baseUrl HERE ***
    baseUrl: "http://localhost:3000",
    // **************************
  },
});
