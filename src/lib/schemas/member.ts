import * as yup from 'yup';

export const MemberSchema = yup.object({
    first_name: yup.string().trim().required('First Name is required'),
    last_name: yup.string().trim().required("Last Name is required"),
    city: yup.string().trim().required("City is required"),
    state: yup.string().trim().required("State is required"),
    country: yup.string().trim().required("Country is required"),
    team_id: yup.string().trim().required("Team is required")
})