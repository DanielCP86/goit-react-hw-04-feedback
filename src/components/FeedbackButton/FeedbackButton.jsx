import PropTypes from 'prop-types';
import './FeedbackButton.module.css';

export const FeedbackButton = ({ option, onFeedbackButtonClick }) => {
  return (
    <button
      key={option}
      type="button"
      name={option}
      onClick={() => onFeedbackButtonClick(option)}
    >
      {option}
    </button>
  );
};

FeedbackButton.propTypes = {
  option: PropTypes.string,
  onFeedbackButtonClick: PropTypes.func,
};
