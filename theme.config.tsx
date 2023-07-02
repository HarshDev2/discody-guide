import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Discody.js Guide</span>,
  project: {
    link: 'https://github.com/harshdev2/discody-guide',
  },

  chat: {
    link: 'https://discord.gg/qeM6uw55nK',
  },
  docsRepositoryBase: 'https://github.com/harshdev2/discody-guide/blob/main',
  footer: {
    text: 'Discody.js Guide',
  },
  useNextSeoProps(){
    return {
      titleTemplate: '%s – Discody.js Guide'
    }
  }
}

export default config
