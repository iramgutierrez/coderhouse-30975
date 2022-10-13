import { serve } from 'https://deno.land/std@0.100.0/http/mod.ts'

const server = serve({ port: 3000 })

for await (const req of server) {
  let frase = req.url.replace('/?frase=', '')
  frase = decodeURIComponent(frase)

  const response = frase.split(' ').reverse().join(' ')

  req.respond({ body: response })
}