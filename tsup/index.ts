import { Hono } from "hono";

const app = new Hono();

app.post("/hello", (c) => c.text("Hello World"));
app.get("/hello", (c) => c.text("Hello World"));

export function onRequest(context: any) {
    return app.fetch(context.request, context.env)
}