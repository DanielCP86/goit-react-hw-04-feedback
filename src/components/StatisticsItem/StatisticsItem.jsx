import PropTypes from 'prop-types';
import './StatisticsItem.module.css';

export const StatisticsItem = ({ statisticsName, statisticsValue }) => {
  return (
    <li>
      {statisticsName}: {statisticsValue}
    </li>
  );
};

StatisticsItem.propTypes = {
  statisticsName: PropTypes.string,
  statisticsValue: PropTypes.string,
};
