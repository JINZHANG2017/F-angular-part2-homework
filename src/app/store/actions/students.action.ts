import { createAction } from '@ngrx/store';

import { createAction } from '@ngrx/store';
import { Student } from '../../student';

export const setStudents = createAction('SET_STUDENTS',props<{students:Student[]}>());

// const actions = getStudent();
