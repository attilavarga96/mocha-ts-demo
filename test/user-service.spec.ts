import { assert } from "chai";
import sinon from "sinon";
import { User } from "../src/user";

describe("User Service Tests", () => {
   it("should return user data when id is 1", async () => {
      // create a mock for the User class
      const userMock = sinon.mock(User);

     // return a mock user when the getUser function is called with id 1
     userMock.expects("findUser").resolves(new User(1, "John"));

     // call the findUser function
     const user: User = await User.findUser(1);

     // assert that the user id is 1
     assert.equal(user.id, 1);
  });
});