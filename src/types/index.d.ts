export interface Team {
    id?:  number;
    name: string;
}

export interface Member {
    first_name: string;
    last_name: string;
    city: string;
    state: string;
    country: string;
    team_id: string;
}