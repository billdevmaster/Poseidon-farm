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
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xf6FE434396cc2D34B1Aa2eFfa5E1B939ea9bb0A9',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xf6FE434396cc2D34B1Aa2eFfa5E1B939ea9bb0A9',
      },
    ],
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
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/comingsoon',
  },
  // {
  //   label: 'Telegram',
  //   icon: 'NftIcon',
  //   href: '/https://t.me/PoseidonFinance',
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
        href: '/comingsoon',
      },
      {
        label: 'Quickchart',
        href: '/comingsoon',
      },
      {
        label: 'Coingecko',
        href: '/comingsoon',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: '/comingsoon',
      },
      {
        label: 'Docs',
        href: '/comingsoon',
      },
      {
        label: 'Blog',
        href: '/comingsoon',
      },
    ],
  },
  {
    label: 'Partnerships',
    icon: 'GooseIcon',
    href: '/comingsoon',
  },
  
]

export default config
