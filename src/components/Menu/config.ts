import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    href: '/quickswap',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Abyssal Pools',
    icon: 'PoolIcon',
    href: '/comingsoon',
  },
  {
    label: 'lottery',
    icon: 'PoolIcon',
    href: '/comingsoon',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Poocoin',
        href: '/',
      },
      {
        label: 'Quickchart',
        href: '/',
      },
      {
        label: 'Coingecko',
        href: '/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: '/',
      },
      {
        label: 'Docs',
        href: '/',
      },
      {
        label: 'Blog',
        href: '/',
      },
    ],
  },
  {
    label: 'Partnerships',
    icon: 'GooseIcon',
    href: '/',
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
