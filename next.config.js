const withPWA = require('next-pwa')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

// If compile phase is production-build then create PWA infrastructure
module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return withPWA({
      pwa: { dest: 'public' },
    })
  }
  return {
    env: [],
  }
}
