import * as types from '../actions/actionTypes';

const initalStates = {
    questions: []
};

const questionReducer = (state = initalStates, action) => {
    switch(action.type) {
        case types.GET_ALL_QUESTIONS_SUCCESS:
            state = {
                questions: action.questions
            };
        break;
        case types.GET_ALL_QUESTIONS_FAILURE:
            state = {
                questions: []
            };
        break;
        case types.GET_SINGLE_QUESTION_SUCCESS:
            state = {
                questions: action.questions
            };
        break;
        case types.GET_SINGLE_QUESTION_FAILURE:
            state = {
                questions: []
            };
        break;
    }
    return state;
}

export default questionReducer;
