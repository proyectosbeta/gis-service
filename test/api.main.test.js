import { Helper } from "./helpers/helpers";

const helper = new Helper();

describe("Test /api", () => {
  test("It should response the GET method /api with german language (de)", async () => {
    const response = await helper.apiServer
      .get("/api")
      .set("Accept-Language", "de-DE");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(
      "Willkommen beim API REST (Gis-Service)"
    );
  });

  test("It should response the GET method /api with english language (en)", async () => {
    const response = await helper.apiServer
      .get("/api")
      .set("Accept-Language", "en-US");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Welcome to the API REST (Gis-Service)");
  });
});
