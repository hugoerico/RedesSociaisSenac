import { gql } from "@apollo/client";

export const ADD_POST = gql`
mutation ADD_POST($image: String!, $text: String!, $userId: uuid!) {
    insert_post(objects: {image: $image, text: $text, user_id: $userId}) {
      affected_rows
    }
  }
  `;

  export const LIKE = gql `
    mutation LIKES($id: uuid!, $like: Int!) {
        update_post(where: {id: {_eq: $id}}, _set: {like: $like}) {
        returning {
            id
            text
            like
            image
            user_id
        }
        }
    }
`;