import * as r from 'ramda';

import { ANSWER_POLL_SUCCESS } from '../actionTypes';

const INITIAL = [];

export default function answersReducer(state = INITIAL, action) {
  switch (action.type) {
    case ANSWER_POLL_SUCCESS:
      const { userId, poll, selectedOption } = action.payload;
      const [option1, option2] = poll.options;
      const [selected, notSelected] =
        selectedOption === 0 ? [option1, option2] : [option2, option1];
      const answer = ["I'd rather", selected, 'over', notSelected].join(' ');
      console.log(option1, option2);
      console.log(selected, notSelected);
      console.log(selectedOption);
      console.log(answer);

      return r.pipe(
        r.append({ userId, answer, creationDate: Date.now() }),
        r.sortBy(r.prop('creationDate'))
      )(state);
    default:
      return state;
  }
}
