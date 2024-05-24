export interface Team {
    id?:  number;
    name: string;
}

export interface Project {
    id?:  number;
    name: string;
}

export interface MemberProject {
    id?:  number;
    member_id: string;
    project_id: string;
}

export interface Member {
    id?: string;
    first_name: string;
    last_name: string;
    city: string;
    state: string;
    country: string;
    team_id: string;
}