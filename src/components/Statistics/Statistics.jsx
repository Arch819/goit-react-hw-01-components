import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import { StatisticsContainer, StatisticsList } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsContainer>
      {title && <h2>{title}</h2>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
