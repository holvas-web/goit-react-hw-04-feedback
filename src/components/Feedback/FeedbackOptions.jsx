import React from 'react';
import PropTypes from 'prop-types';
import { Wrap, Button } from '../Feedback/FeedbackOptions.styled.js'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrap>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Wrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};