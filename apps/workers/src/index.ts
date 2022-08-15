import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Please test me!'))

export default app