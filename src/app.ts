import { APIGatewayEvent } from 'aws-lambda'

export const hello = async (event: APIGatewayEvent) => {
  return {
    body: 'Hello, world!'
  }
}
