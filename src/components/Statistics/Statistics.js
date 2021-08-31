import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ totalFeedback, positivePercentage, feedbackOptions }) => {
  const total = totalFeedback();
  const { good, neutral, bad } = feedbackOptions;

  return (
    <div className="box">
      <div className={s.spanWrapper}>
        <span className={s.output}>good: {good}</span>
        <span className={s.output}>neutral: {neutral}</span>
        <span className={s.output}>bad: {bad}</span>
        <span className={s.total}>total: {total}</span>
        <span className={s.total}>
          positive feedbacks:{" "}
          {isNaN(positivePercentage) ? "0" : positivePercentage}%
        </span>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  totalFeedback: PropTypes.func,
  persentage: PropTypes.number,
  feedbackOptions: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
export default Statistics;
