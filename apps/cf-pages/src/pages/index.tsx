import * as React from 'react'
import styled from 'styled-components'


type Props = {
  className: string
}

const Component: React.FC<Props> = ({className}) =>
  (
    <div className={className}>
      <h1>Enjoy!</h1>
      <p>hello cloudflare</p>
    </div>
  )

const StyledComponent = styled(Component)`
  display: grid;
  place-content: center;
`

export default StyledComponent
