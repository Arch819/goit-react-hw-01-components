import PropTypes from 'prop-types';

export const Statistics = (props) => {
  return (
    <section className="statistics" data>
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {props.map(({id, label, percentage}) => (
            <li className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};