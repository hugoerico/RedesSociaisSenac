import { gql } from "@apollo/client";


export const ADD_USER =gql`
mutation ADD_LIKE($post_id: uuid!, $user_id: uuid!) {
    insert_likes(objects: {post_id: $post_id, user_id: $user_id}) {
      returning {
        id
        post_id
        user_id
      }
    }
  }`;




  