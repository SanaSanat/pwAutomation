import { test, expect } from "@playwright/test";

const url = "https://reqres.in";
test.describe("API REQUESTS", () => {
  test("testing GET requests", async ({ request }) => {
    const res = await request.get(`${url}/api/users/2`);
    //console.log(res, 'response')
    expect(res.status()).toBe(200);
    const resBody = JSON.parse(await res.text());
    console.log(resBody, "resBody");
    //expect(resBody.data.id).toBe(2)
    expect(resBody.data.id, `Id should be $(resBody.data.id)`).toBe(3);
    expect(resBody.data.email).toBe("janet.weaver@reqres.in");
  });
  test("testing POST requests", async ({ request }) => {
    const res = await request.post(`${url}/api/user`, {
      data: {
        id: 888,
      },
    });
    console.log(res, "response");
    const resBody = JSON.parse(await res.text());
    console.log(resBody, "resBody");
  });
  test("testing POST requests for registration", async ({ request }) => {
    const res = await request.post(`${url}/api/register`, {
      data: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    });
    console.log(res, "response");
    expect(res.status()).toBe(200);
    const resBody = JSON.parse(await res.text());
    console.log(resBody, "resBody");
    expect(resBody.id).toBe(4);
  });
  test("testing PUT requests for registration", async ({ request }) => {
    const res = await request.put(`${url}/api/users/2`, {
      data: {
        email: "michael@gmail.com",
        password: "michael",
      },
    });
    console.log(res, "response");
    expect(res.status()).toBe(200);
    const resBody = JSON.parse(await res.text());
    console.log(resBody, "resBody");
    expect(resBody.email).toBe("michael@gmail.com");
  });
  test("testing DELETE requests for registration", async ({ request }) => {
    const res = await request.delete(`${url}/api/users/2`)
    console.log(res, "response");
    expect(res.status()).toBe(204);
    const resBody = await res.text();
    console.log(resBody, "resBody");    
  });
  test.only("testing PATCH requests for user", async ({ request }) => {
    const res = await request.patch(`${url}/api/users/2`,{
        data:{
            name: "Michael"
        }
    })
    console.log(res, "response");
    expect(res.status()).toBe(200);
    const resBody = JSON.parse(await res.text());
    console.log(resBody, "resBody"); 
    expect(resBody.name).toBe('Michael')   
  });
});
