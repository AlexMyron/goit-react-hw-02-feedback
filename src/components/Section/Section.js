import PropTypes from "prop-types";
import s from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={s.wrapper}>
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
