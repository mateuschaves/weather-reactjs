import { z } from 'zod'

const envSchema = z.object({
    VITE_GOOGLE_MAPS_API_KEY: z.string(),
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
  console.error('❌ Env validation error', _env.error)

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
