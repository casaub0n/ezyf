import { Hono } from 'hono'
import z from 'zod'

const app = new Hono()
app.get('/', (c) => c.text('Please test me!'))

// form
const formSchema = z.object({
  body: z.object({
    name: z.string().min(6)
  })
})

app.post('/form', async (c) => {
  const message = c.req.parseBody
  const response = formSchema.parse({
    body: message
  })
  return c.json(response)
})

export default app