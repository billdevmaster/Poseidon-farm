import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Image } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
  .title {
    font-size: 35px;
    margin: 10px 0;
  }
  .logo {
    div {
      padding: 60px;
      img {
        height: 120px;
      }
    }
  }
`

const ComingSoon = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <div className="logo">
          <Image src="/images/egg/homepage_logo.png" width={230} height={150} responsive />
        </div>
        <Heading size="lg" color="primary" className="title">Coming Soon</Heading>
        <Button as="a" href="/" size="sm" className="bg-blue">
          {TranslateString(999, 'Back Home')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default ComingSoon
