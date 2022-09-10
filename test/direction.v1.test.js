import { Helper } from "./helpers/helpers";

const helper = new Helper();

describe("Test missing parameters /api/direction/v1/driving", () => {
  test("It should not response the GET method /api/direction/v1/driving - longitude1 parameter missing", async () => {
    const response = await helper.apiServer.get("/api/direction/v1/driving");

    expect(response.statusCode).toBe(404);
    expect.assertions(1);
  });

  test("It should not response the GET method /api/direction/v1/driving/9.377775/ - latitude 1 parameter missing", async () => {
    const response = await helper.apiServer.get(
      "/api/direction/v1/driving/9.377775/"
    );

    expect(response.statusCode).toBe(404);
    expect.assertions(1);
  });
});

describe("Test invalid parameters /api/direction/v1/drivin/139.377775/52.516266/13.404954/52.52", () => {
  test("It should not response the GET method - profile parameter dont exist with english language (de)", async () => {
    const response = await helper.apiServer
      .get("/api/direction/v1/drivin/139.377775/52.516266/13.404954/52.52")
      .set("Accept-Language", "de-DE");
    const statusCode = response.statusCode;
    const type = response.type;
    const header = response.header;
    const contentType = header["content-type"];
    const body = response.body;
    const dataSuccess = body.success;
    const dataMessage = body.message;

    expect(statusCode).toBe(403);
    expect(type).toEqual("application/json");
    expect(contentType).toEqual("application/json; charset=utf-8");
    expect(dataSuccess).toBeFalsy();
    expect(dataMessage).toBe("Profil ist ungültig.");
    expect.assertions(5);
  });

  test("It should not response the GET method - profile parameter dont exist with english language (en)", async () => {
    const response = await helper.apiServer
      .get("/api/direction/v1/drivin/139.377775/52.516266/13.404954/52.52")
      .set("Accept-Language", "en-US");
    const statusCode = response.statusCode;
    const type = response.type;
    const header = response.header;
    const contentType = header["content-type"];
    const body = response.body;
    const dataSuccess = body.success;
    const dataMessage = body.message;

    expect(statusCode).toBe(403);
    expect(type).toEqual("application/json");
    expect(contentType).toEqual("application/json; charset=utf-8");
    expect(dataSuccess).toBeFalsy();
    expect(dataMessage).toBe("Profile is invalid.");

    expect.assertions(5);
  });

  // test("It should not response the GET method /api/direction/v1/driving/139.377775/52.516266/13.404954/52.52 - longitude1 parameter invalid", async () => {
  //   const response = await helper.apiServer.get(
  //     "/api/direction/v1/driving/139.377775/52.516266/13.404954/52.52"
  //   );
  //   const statusCode = response.statusCode;

  //   expect(statusCode).toBe(422);
  // });
});

describe("Test /api/direction/v1/driving/9.377775/52.516266/13.404954/52.52", () => {
  test("It should response the GET method /api/direction/v1/driving/9.377775/52.516266/13.404954/52.52", async () => {
    const response = await helper.apiServer.get(
      "/api/direction/v1/driving/9.377775/52.516266/13.404954/52.52"
    );
    const statusCode = response.statusCode;
    const type = response.type;
    const header = response.header;
    const contentType = header["content-type"];
    const body = response.body;
    const dataSuccess = body.success;

    const parseJson = () => {
      const json = JSON.stringify(body);

      JSON.parse(json);
    };

    expect(statusCode).toBe(200);
    expect(type).toEqual("application/json");
    expect(contentType).toEqual("application/json; charset=utf-8");
    expect(parseJson).not.toThrow();
    expect(dataSuccess).toBe(false);

    expect.assertions(5);
  });
});
