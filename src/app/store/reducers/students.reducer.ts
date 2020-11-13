import { createReducer, on} from '@ngrx/store';
import { Student } from '../../student';
import { getStudents } from '../actions/students.action';

const initState: Student[] =[];

const studentReducer = createReducer{
    initState,
    on(setStudents,((state,props) =>props.students))
}