import app from "./cloud-functions/[[default]].js";
import { serve } from '@hono/node-server'

serve(app, (info) => {
    console.log(`Listening on http://localhost:${info.port}`) // Listening on http://localhost:3000
  })