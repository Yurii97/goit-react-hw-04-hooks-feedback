import { SectionFeedback } from './Sectoin.styled';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <SectionFeedback>
      {title && <h2>{title}</h2>}
      {children}
    </SectionFeedback>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
