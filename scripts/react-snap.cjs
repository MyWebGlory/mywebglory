// Cross-platform react-snap runner.
// Uses PUPPETEER_EXECUTABLE_PATH env var when set (CI/Linux),
// falls back to macOS system Chrome for local development.
const { run } = require('react-snap');

const defaultChromePath =
  process.platform === 'darwin'
    ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    : '/usr/bin/google-chrome-stable';

const chromePath = process.env.PUPPETEER_EXECUTABLE_PATH || defaultChromePath;

run({
  source: 'dist',
  inlineCss: true,
  skipThirdPartyRequests: true,
  concurrency: 1,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  puppeteerExecutablePath: chromePath,
}).catch((err) => {
  console.error('react-snap failed:', err);
  process.exit(1);
});
