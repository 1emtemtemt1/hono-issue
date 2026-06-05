import { Hono } from "hono";
import { setCookie } from "hono/cookie";

const app = new Hono();

app.get("/hello", (c) => {
  setCookie(c, "test", "test", {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    secure: false,
  });
  setCookie(c, "test2", "test2", {
    path: "/hello",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    secure: false,
  });
  return c.text("Hello World");
});

export default app;