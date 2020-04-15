
// Started to write tests, not currently functional, to revisit

// process.env.NODE_ENV = "test"

// const db = require("../db");
// const Book = require("./models/book");


// describe("GET  /books", function () {
//   beforeEach(async function () {
//     await db.query("DELETE FROM books");
//     let b = await Book.create({
//       isbn: "0123456789",
//       author: "TestAuthor",
//       amazon_url: "test.com",
//       language: "English",
//       pages: 100,
//       publisher: "TestPub",
//       title: "TestTitle",
//       year: 2020
//     });
//   });


//   test("can see all books", async function () {

//       const response = await request(app).get("/books")

//       expect(response.statusCode).toBe(200);
//       expect(response.body[0]).toEqual({ isbn: "0123456789",
//                                         author: "TestAuthor",
//                                         amazon_url: "test.com",
//                                         language: "English",
//                                         pages: 100,
//                                         publisher: "TestPub",
//                                         title: "TestTitle",
//                                         year: 2020 });
//       expect(response.body).toHaveLength(1);
//   });
//   afterAll(async function() {
//     await db.end();
//   });
// }