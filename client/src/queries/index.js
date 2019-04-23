import { gql } from 'apollo-boost';

/*User mutations */
export const SIGNUP_USER = gql`

    mutation($username: String!, $password: String!, $email: String!, $role: String) {
        signupUser(username: $username, password: $password, email: $email, role: $role) {
        token
        uid
        }
    }

`;

export const UPLOAD_FILE= gql`

    mutation($file: Upload!) {
        uploadFile(file: $file)
    }

`;