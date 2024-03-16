const assert = require("assert");
const User = require("../src/user");

describe("Validating Records", () => {
  it("requires a user name", () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name; // destructure
    assert(message === 'Name is required.');
  });
});
