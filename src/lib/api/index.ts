import type { Team, Member, Project } from '@/types';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
      'Accept': 'application/json'
    }
});

// Team APIs
export const getTeams = () => api.get('/teams');
export const getTeamMembers = (teamId: string) => api.get(`/teams/${teamId}/members`);
export const createTeam = (team: Team) => api.post('/teams', team);

// Member APIs
export const createMember = (member: Member) => api.post('/members', member);