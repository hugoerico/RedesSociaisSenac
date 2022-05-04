import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
mutation UPDATE_USER($id: uuid!, $image: String!, $name: String!) {
    update_user(where: {id: {_eq: $id}}, _set: {name: $name, image: $image}) {
      returning {
        id
        image
        name
        password
      }
    }
  }
  
`;