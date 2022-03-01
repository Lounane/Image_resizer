import {Application, Router, } from "https://deno.land/x/oak@v10.4.0/mod.ts"

const app = new Application()
const router = new Router()


router.get("/about", ctx => (ctx.response.body = "About Us"))
// router.get("/:name", ctx => (ctx.response.body = `Welcome Home ${ctx.params.name}` ))

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({port: 1122})

