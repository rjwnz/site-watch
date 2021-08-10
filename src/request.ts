import axios from 'axios'

export async function fetchJson(url: string): Promise<String> {
  const response = await axios.get(url)
  return response.data
}
