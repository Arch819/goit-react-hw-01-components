import { getRandomHexColor } from 'js/RandomColor';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li style={{ background: getRandomHexColor() }}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
