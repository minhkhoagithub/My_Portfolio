export default async function handler(req, res) {
  const { code } = req.query
  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env

  if (!code) {
    return res.status(400).json({ error: 'Missing code parameter' })
  }

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
    }),
  })

  const data = await response.json()

  if (data.access_token) {
    const protocol = req.headers['x-forwarded-proto'] || 'https'
    const host = req.headers.host
    res.redirect(`${protocol}://${host}/admin/#access_token=${data.access_token}`)
  } else {
    res.status(400).json({ error: 'Failed to get access token', details: data })
  }
}
