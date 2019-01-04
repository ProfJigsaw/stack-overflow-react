import axios from 'axios';
import { getToken } from './auth';

export const postQuestion = ({ title, body }) => {
  return axios.post('https://nvc-stackqa.herokuapp.com/api/v1/questions',
    {
      title,
      question: body
    }, {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    });
};

export const addAnswer = (qid, { answer }) => {
  return axios.post(
    `https://nvc-stackqa.herokuapp.com/api/v1/questions/${qid}/answers`,
    {
      answer
    }, {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    }
  );
};

export const postComment = (qid, aid, comment) => {
  return axios.post(
    `https://nvc-stackqa.herokuapp.com/api/v1/questions/${qid}/answers/${aid}/comments`,
    comment,
    {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    }
  );
};

export const upVoteAnswer = (qid, aid) => {
  return axios.put(
    `https://nvc-stackqa.herokuapp.com/api/v1/questions/${qid}/${aid}/upvote`,
    {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    }
  );
};

export const downVoteAnswer = (qid, aid) => {
  return axios.put(
    `https://nvc-stackqa.herokuapp.com/api/v1/questions/${qid}/${aid}/downvote`,
    {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    }
  );
};

export const accAnswer = (qid, aid) => {
  return axios.put(
    `https://nvc-stackqa.herokuapp.com/api/v1/questions/${qid}/answers/${aid}`,
    {}, {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    }
  );
};
