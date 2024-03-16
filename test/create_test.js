const assert = require("assert");
const User = require("../src/user");

describe("Creating records", () => {
  it("saves a user", () => {
    const maddy = new User({ name: "Maddy" });
    maddy
      .save() // es6
      .then(() => {
        assert(!maddy.isNew);
      });
  });
});
