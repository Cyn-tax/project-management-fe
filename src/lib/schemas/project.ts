import * as yup from 'yup';

export const ProjectSchema = yup.object({
    name: yup.string().trim().required('Project Name is required'),
})