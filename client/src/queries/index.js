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

export const UPDATE_USER_PERSONAL_INFO = gql`
    mutation($_id: String!, $firstName: String, $lastName: String, $DOB: String, $state: String, $city: String, $avatar: String, $aboutYou: String) {
        updateUserPersonalInfo(_id: $_id, firstName: $firstName, lastName: $lastName, DOB: $DOB, state: $state, city: $city, avatar: $avatar, aboutYou: $aboutYou)
     }
`;



