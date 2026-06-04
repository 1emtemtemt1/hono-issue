import { Hono } from "hono";

const app = new Hono();

app.post("/hello", (c) => c.text("Hello World"));

export function onRequest(context) {
    return app.fetch(context.request, context.env)
  }