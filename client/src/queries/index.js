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

export const UPDATE_USER_EDUCATION_0 = gql`
    mutation($_id: String!, $schoolName: String, $degree: String, $field: String, $from: String, $to: String) {
        updateUserEducation0(_id: $_id, schoolName: $schoolName, degree: $degree, field: $field, from: $from, to: $to)
    }
`;

export const UPDATE_USER_EDUCATION_1 = gql`
    mutation($_id: String!, $schoolName: String, $degree: String, $field: String, $from: String, $to: String) {
        updateUserEducation1(_id: $_id, schoolName: $schoolName, degree: $degree, field: $field, from: $from, to: $to)
    }
`;

export const UPDATE_USER_EDUCATION_2 = gql`
    mutation($_id: String!, $schoolName: String, $degree: String, $field: String, $from: String, $to: String) {
        updateUserEducation2(_id: $_id, schoolName: $schoolName, degree: $degree, field: $field, from: $from, to: $to)
    }
`;



