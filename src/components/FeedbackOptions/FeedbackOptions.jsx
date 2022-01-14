import { BtnList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <BtnList>
        {Object.keys(options).map(e => (
          <li key={e}>
            <button type="button" onClick={() => onLeaveFeedback(e)}>
              {e}
            </button>
          </li>
        ))}
      </BtnList>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
