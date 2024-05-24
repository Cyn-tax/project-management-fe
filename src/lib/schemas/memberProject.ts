import * as yup from 'yup';

export const MemberProjectSchema = yup.object({
    project_id: yup.string().trim().required('Project Id is required'),
    member_id: yup.string().trim().required('Member Id is required'),

})