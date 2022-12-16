import {gql} from "@apollo/client";

const ADD_COMMENTS = gql`
    mutation createComments($comment: String! , $author: String!) {
        setComments(comment: $comment , author: $author) {
            id,
            author,
            comment,
            date
        }
    }
`

export {ADD_COMMENTS}