import fs from 'fs'
import path from 'path'
import OSS from 'ali-oss'

function getEnv(name, fallback = '') {
  return process.env[name] ?? fallback
}

function createClient() {
  const region = getEnv('OSS_REGION')
  const bucket = getEnv('OSS_BUCKET')
  const accessKeyId = getEnv('OSS_AK')
  const accessKeySecret = getEnv('OSS_SK')
  const endpoint = getEnv('OSS_ENDPOINT') || `${bucket}.${region}.aliyuncs.com`
  const securityToken = process.env.OSS_STS_TOKEN
  if (!region || !bucket || !accessKeyId || !accessKeySecret) {
    console.error('Missing OSS config: OSS_REGION/OSS_BUCKET/OSS_AK/OSS_SK')
    process.exit(1)
  }
  return new OSS({ region, bucket, accessKeyId, accessKeySecret, endpoint, securityToken })
}

function replaceAssetUrls(html, replacer) {
  html = html.replace(/src="([^"]*assets\/[^"]+\.js)"/g, (m, url) => `src="${replacer(url)}"`)
  html = html.replace(/href="([^"]*assets\/[^"]+\.css)"/g, (m, url) => `href="${replacer(url)}"`)
  return html
}

async function main() {
  const distDir = path.resolve('dist')
  const htmlPath = path.join(distDir, 'index.html')
  const cdnBase = getEnv('VITE_CDN_BASE', '')
  const expires = parseInt(getEnv('OSS_EXPIRES', '2592000'), 10) // default 30 days

  if (!fs.existsSync(htmlPath)) {
    console.error('dist/index.html not found. Run vite build first.')
    process.exit(1)
  }

  const client = createClient()
  let html = fs.readFileSync(htmlPath, 'utf8')

  const newHtml = await replaceAssetUrls(html, (url) => {
    const key = url
      .replace(/^https?:\/\/[^/]+\//, '') // strip domain if present
      .replace(/^\//, '') // strip leading slash
    const signed = client.signatureUrl(key, { expires })
    return signed
  })

  fs.writeFileSync(htmlPath, newHtml)
  console.log('Signed OSS asset URLs in dist/index.html')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})