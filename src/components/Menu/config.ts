import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.gadexswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.gadexswap.finance/farms'
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: 'https://www.gadexswap.finance/nests'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xd538142dca6d06c8807a008513fe08cc774a60da',
      },
      {
        label: 'CoinGecko',
        href: '#',
      },
      {
        label: 'CoinMarketCap',
        href: '#',
      },
      {
        label: 'AstroTools',
        href: '#',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Whitepaper",
        href: "#",
      },
      {
        label: "Github",
        href: "https://github.com/goosedefi/",
      },
      {
        label: "Docs",
        href: "#",
      },
      {
        label: "Blog",
        href: "https://gadexswap.medium.com/",
      },
    ],
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://www.gadexswap.finance/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  },
]

export default config
