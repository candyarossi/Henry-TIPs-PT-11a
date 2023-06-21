const HasBalancedBrackets = require("../02-HasBalancedBrackets/HasBalancedBrackets");

describe("HasBalancedBrackets", function () {
  it("Debería retornar TRUE con {[]()}", function () {
    expect(HasBalancedBrackets("{[]()}")).toEqual(true);
  });
  it("Debería retornar FALSE con {[(])}", function () {
    expect(HasBalancedBrackets("{[(])}")).toEqual(false);
  });
  it("Debería retornar FALSE con {[(", function () {
    expect(HasBalancedBrackets("{[(")).toEqual(false);
  });
  it("Debería retornar TRUE con {[([{()[]{}}])]}", function () {
    expect(HasBalancedBrackets("{[([{()[]{}}])]}")).toEqual(true);
  });
  it("Debería retornar FALSE con {[]}}", function () {
    expect(HasBalancedBrackets("{[]}}")).toEqual(false);
  });
});
