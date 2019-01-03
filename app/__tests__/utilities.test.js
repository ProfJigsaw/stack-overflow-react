import mode from '../utilities/mode';
import {
  postQuestion,
  addAnswer,
  postComment,
  upVoteAnswer,
  downVoteAnswer,
  accAnswer
} from '../utilities/questions';
import { question, answers } from './testUtils/data';

const array = [1, 2, 1];

describe('Mode function:', () => {
  it('should return the most occuring item in an array', () => {
    expect(mode(array)).toBe(1);
  });
});

describe('Axios calls:', () => {
  it('should make API requests', () => {
    expect(postQuestion(question)).toEqual(Promise.resolve({ data: {} }));
    expect(addAnswer(9, answers[0])).toEqual(Promise.resolve({ data: {} }));
    expect(postComment(9, 2, {})).toEqual(Promise.resolve({ data: {} }));
    expect(upVoteAnswer(9, 4)).toEqual(Promise.resolve({ data: {} }));
    expect(downVoteAnswer(9, 4)).toEqual(Promise.resolve({ data: {} }));
    expect(accAnswer(9, 5)).toEqual(Promise.resolve({ data: {} }));
  });
});
