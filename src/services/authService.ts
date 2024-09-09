// src/services/authService.ts
import { InitiateAuthCommand, SignUpCommand } from '@aws-sdk/client-cognito-identity-provider'
import { cognitoClient } from '../config/cognito'

export const signUp = async (username: string, password: string, email: string) => {
    const command = new SignUpCommand({
        ClientId: process.env.COGNITO_CLIENT_ID,
        Username: username,
        Password: password,
        UserAttributes: [
            {
                Name: 'email',
                Value: email,
            },
        ],
    })

    try {
        const response = await cognitoClient.send(command)
        return response
    } catch (error) {
        console.error('Error signing up:', error)
        throw new Error('Sign up failed')
    }
}

export const login = async (username: string, password: string) => {
    const command = new InitiateAuthCommand({
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: process.env.COGNITO_CLIENT_ID,
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password,
        },
    })

    try {
        const response = await cognitoClient.send(command)
        return response.AuthenticationResult
    } catch (error) {
        console.error('Error logging in:', error)
        throw new Error('Login failed')
    }
}