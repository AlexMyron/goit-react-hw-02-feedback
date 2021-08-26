import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={s.boxWrapper}>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback("good")}
      >
        good
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback("neutral")}
      >
        neutral
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback("bad")}
      >
        bad
      </button>
    </div>
  );
};

FeedbackOptions.prototypes = {
  onAddFeedback: PropTypes.func,
};

export default FeedbackOptions;
