import {gql} from "@apollo/client";

const GET_ALL_COMMENTS = gql`
    query allComment {
        comments {
            id,
            date,
            author,
            comment
        }
    }
`;

export {GET_ALL_COMMENTS}