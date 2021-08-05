import styled from 'styled-components'
import Container from './Container'

const Page = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 16px;
  .bg-blue {
    background-color: #0598fb;
  }
  button.bg-blue:hover {
    background-color: #0583fb !important;
  }
  .color-blue {
    color: #0598fb;
  }
  [color=primary] {
    color: #0598fb;
    fill: #0598fb;
  }

  .homepage-title {
    display: flex;
    flex-direction: inherit;
    align-items: center;
    > div {
      width: 200px;
      height: 200px;
      padding-top: 0;
      margin-right: 20px;
    }
    h1 {
      text-transform: uppercase; 
      margin-bottom: 0;
    }
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

export default Page
