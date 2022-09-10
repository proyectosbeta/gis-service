import { Helper } from "./helpers/helpers";

const helper = new Helper();

describe("Test missing parameters /api/geocoding/v1/forward", () => {
  test("It should not response the GET method /api/geocoding/v1/forward - place parameter missing", async () => {
    const response = await helper.apiServer.get("/api/geocoding/v1/forward");

    expect(response.statusCode).toBe(404);
    expect.assertions(1);
  });
});

describe("Test /api/geocoding/v1/forward/berlin", () => {
  test("It should response the GET method /api/geocoding/v1/forward/berlin", async () => {
    const response = await helper.apiServer.get(
      "/api/geocoding/v1/forward/berlin"
    );
    const statusCode = response.statusCode;
    const type = response.type;
    const header = response.header;
    const contentType = header["content-type"];
    const body = response.body;
    const dataSuccess = body.success;
    const data = body.data;
    const parseJson = () => {
      const json = JSON.stringify(body);

      JSON.parse(json);
    };

    expect(statusCode).toBe(200);
    expect(type).toEqual("application/json");
    expect(contentType).toEqual("application/json; charset=utf-8");
    expect(parseJson).not.toThrow();
    expect(dataSuccess).toBe(true);
    expect(body).toHaveProperty("success");
    expect(body).toHaveProperty("data");
    expect(data).toHaveProperty("features");

    expect.assertions(8);
  });
});
