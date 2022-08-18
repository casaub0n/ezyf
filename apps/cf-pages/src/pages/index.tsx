import * as React from 'react'
import styled from 'styled-components'
import useSWR from 'swr'

import fetcher from '../lib/fetch'


type Props = {
  className: string
}

type SWRData = {
  description: string
}

const Component: React.FC<Props> = ({className}) => {
  const { data, error } = useSWR<SWRData>('https://api.github.com/repos/vercel/swr', fetcher)

  if (error) return (<div>An error has occurred.</div>);
  if (!data) return (<div>Loading...</div>);
  return (
    <div className={className}>
      <h1>Enjoy!</h1>
      <p>hello cloudflare</p>
      <p>{data.description}</p>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: grid;
  place-content: center;
`

export default StyledComponent
