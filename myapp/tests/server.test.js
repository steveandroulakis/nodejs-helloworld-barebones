const app = require("../app");
const supertest = require("supertest");

beforeEach(() => {
  console.log("before each test");
})

afterEach(() => {
  console.log("after each test");
})

test("GET /", async () => {
  await supertest(app).get("/")
    .expect(200)
    .then((response) => {
      expect(response.text).toBe("Hello World!");
    });
});
