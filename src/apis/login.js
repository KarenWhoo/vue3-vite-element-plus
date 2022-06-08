import { post } from '@/request';

export const loginApi = (params) => post('/login', params);
