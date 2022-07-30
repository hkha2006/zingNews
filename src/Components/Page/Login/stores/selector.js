import { createSelector } from "reselect";
import { INIT_STATE_LOGIN } from "./state";

const selectMyStudents = (state) => state.studentsReducers || INIT_STATE_LOGIN
const selectLoading = createSelector(selectMyStudents, (state) => state.isLoading)
const selectInfoUser = createSelector(selectMyStudents, (state) => state.infoUser)
export { selectLoading, selectInfoUser }