it("hasKey should check if the key exists in sampleObject", () => {
  const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
  const key = "red";
  cy.visit(baseUrl, {
    onBeforeLoad(win) {
      cy.stub(win, "prompt").returns(key);
    }
  });
  cy.window().then(win => {
    expect(hasKey(key)).to.equal(true);
    expect(hasKey("blue")).to.equal(false);
    expect(hasKey("white")).to.equal(true);
  });
});