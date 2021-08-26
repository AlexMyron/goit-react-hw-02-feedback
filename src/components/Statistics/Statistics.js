import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  const total = totalFeedback();

  return (
    <div className="box">
      <div className={s.spanWrapper}>
        <span className={s.output}>good: {good}</span>
        <span className={s.output}>neutral: {neutral}</span>
        <span className={s.output}>bad: {bad}</span>
        <span className={s.total}>total: {total}</span>
        <span className={s.total}>
          positive feedbacks:{" "}
          {isNaN(positivePercentage()) ? "0" : positivePercentage()}%
        </span>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.func,
  persentage: PropTypes.func,
};
export default Statistics;
