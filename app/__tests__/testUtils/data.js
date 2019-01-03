export const questions = [
  {
    title: 'dummy title',
    userid: 7
  },
  {
    title: 'second title',
    userid: 7
  }
];

export const answers = [
  {
    title: 'dummy title',
    userid: 7,
    state: true,
    answer: 'dummy',
    questionid: 3,
    answerid: 2
  },
  {
    title: 'second title',
    userid: 7,
    answer: 'dummy',
    questionid: 3,
    answerid: 2
  }
];

export const comments = [
  {
    comment: 'dummy comment',
    userid: 7,
    questionid: 4,
    answerid: 3,
    answer: 'dummy'
  },
  {
    comment: 'second comment',
    userid: 7,
    questionid: 4,
    answerid: 3,
  }
];

export const question = {
  questionid: 5,
  userid: 1,
  title: 'dummy',
  question: 'dummy'
};

export const threadQuestions = {
  questions: {
    questions: null
  },
  topQuestion: {
    question: null,
    loading: true
  },
  questionThread: {
    question: null,
    comments
  }
};

export const finalThread = {
  questions: {
    questions
  },
  topQuestion: {
    question,
    loading: false
  },
  questionThread: {
    question: [question],
    answers,
    comments,
    getTopQuestion: jest.fn()
  }
};

export const finalThread2 = {
  questions: {
    questions
  },
  topQuestion: {
    question,
    loading: false,
    answerCount: 1
  },
  questionThread: {
    question: [question],
    answers: [answers[0]],
    getTopQuestion: jest.fn(),
    count: 1
  },
  count: 1
};

export const props = {
  match: {
    url: 'fake-url',
    params: {
      id: 7
    }
  },
  history: {
    push: jest.fn()
  },
  addAnswerToStore: jest.fn(),
  aid: 3,
  qid: 5,
  score: 1,
  comments
};
