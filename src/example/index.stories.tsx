import { Story, Meta } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Example, IProps } from '.'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default {
  title: 'Example',
  component: Example,
} as Meta

const Template: Story<IProps> = (args) => (
  <Container>
    <Example {...args} />
  </Container>
)

export const Primary = Template.bind({})
Primary.args = {}
