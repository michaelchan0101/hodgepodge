import fetch from './fetch'

export async function getConfig() {
  const result = await fetch.get('/api/client/v1.0/config')
  return result.data
}
