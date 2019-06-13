import gql from 'graphql-tag'
/* eslint-disable */
  export const SIGNUP_MUTATION = gql`
      mutation SignupMutation($email: String!, $password: String!) {
        signup(email: $email, password: $password) {
          token
        }
      }
    `
    export const LOGIN_MUTATION = gql`
      mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `
    export const CREATE_thanks_MUTATION = gql`
      mutation(
        $weburl: String!
        $webname: String!
        $webemail: String!
      ) {
        createthank(
          data: {
            weburl: $weburl
            webname: $webname
            webemail: $webemail
          }
        ) {
          id
          weburl
          webname
          webemail
        }
      }
      `