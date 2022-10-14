import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'

import { SignIn } from "."

export default {
  title: 'Pages/Sign In',
  component: SignIn,

  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'contato@jfernandes.dev.br')
    userEvent.type(canvas.getByPlaceholderText('********'), '123456')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })  
  }
}