import gql from 'graphql-tag'
/* eslint-disable */
export const Dramas_QUERY = gql`
      query{
        dramas {
          id
          createdAt
          updatedAt
          cut
          gooddrama
          poster
          day
          title
          text
          studio
          name
          link
          fulllink
          youtube
          about
        }
      }
    `

export const Drama_QUERY = gql `
      query{
       drama(
         where: {
           id: "cjwm2t21xuz0q0b12w2k9lz1y"
         }
       ) {
         id
         createdAt
         updatedAt
         cut
         gooddrama
         poster
         day
         title
         text
         studio
         name
         link
         fulllink
         youtube
         about
         type
       }
      }
    `

export const Drama_ROMANCE_QUERY = gql `
      query {
        dramas(
          where: {
            type: "로맨스"
          }
        ) {
          id
          title
          type
          day
          name
          studio
          link
          gooddrama
          cut
          createdAt
          updatedAt
        }
      }
    `

    export const Drama_COMEDY_QUERY = gql `
      query {
        dramas(
          where: {
            type: "코미디"
          }
        ) {
          id
          title
          type
          day
          name
          studio
          link
          gooddrama
          cut
          createdAt
          updatedAt
        }
      }
    `

      export const Drama_THRILLER_QUERY = gql `
      query {
        dramas(
          where: {
            type: "스릴러"
          }
        ) {
          id
          title
          type
          day
          name
          studio
          link
          gooddrama
          cut
          createdAt
          updatedAt
        }
      }
    `

export const Drama_gooddrama_QUERY = gql `
     query {
       dramas(
         where: {
           gooddrama: true
         }
       ) {
          id
          title
          type
          day
          name
          studio
          link
          gooddrama
          cut
          createdAt
          updatedAt
       }
     }
    `

export const Drama_detail_QUERY = gql `
      query($id: ID!) {
        drama(
          where: {
            id: $id
          }) {
          id
          createdAt
          updatedAt
          cut
          gooddrama
          poster
          day
          title
          text
          studio
          name
          link
          fulllink
          youtube
          about
          type
        }
      }
    `