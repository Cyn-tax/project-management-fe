import * as yup from 'yup';

export const TeamSchema = yup.object({
    name: yup.string().trim().required('Team Name is required'),
})