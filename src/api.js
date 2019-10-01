import * as r from 'ramda';

import { _getQuestions, _getUsers, _saveQuestion } from './_DATA';

const mapApiQuestionVotesToAppPollAnswers = (option, votes) =>
  r.fromPairs(votes.map(v => [v, option]));

const mapApiQuestionToAppPoll = ({
  id,
  author,
  optionOne,
  optionTwo,
  timestamp
}) => ({
  id,
  createdBy: author,
  options: [optionOne.text, optionTwo.text],
  creationDate: timestamp,
  answers: r.mergeDeepRight(
    mapApiQuestionVotesToAppPollAnswers(0, optionOne.votes),
    mapApiQuestionVotesToAppPollAnswers(1, optionTwo.votes)
  )
});

export const addNewPoll = async ({ authorId, options: [option1, option2] }) =>
  _saveQuestion({
    author: authorId,
    optionOneText: option1,
    optionTwoText: option2
  }).then(mapApiQuestionToAppPoll);

export const getPolls = async () =>
  _getQuestions()
    .then(r.values)
    .then(r.map(mapApiQuestionToAppPoll))
    .then(r.map(p => [p.id, p]))
    .then(r.fromPairs);

const mapApiUserToAppUserProfile = ({ id, name, avatarURL }) => ({
  id,
  playerName: name,
  playerPicture: avatarURL
});

export const getUserProfiles = async () =>
  _getUsers().then(r.map(mapApiUserToAppUserProfile));
