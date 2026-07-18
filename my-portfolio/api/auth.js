export default function handler(req, res) {
  const { GITHUB_CLIENT_ID } = process.env

  if (!GITHUB_CLIENT_ID) {
    return res.status(500).json({ error: 'GITHUB_CLIENT_ID not configured' })
  }

  const protocol = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers.host
  const callbackUrl = `${protocol}://${host}/api/callback`

  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: callbackUrl,
    scope: 'repo,user',
  })

  res.redirect(`https://github.com/login/oauth/authorize?${params}`)
}
