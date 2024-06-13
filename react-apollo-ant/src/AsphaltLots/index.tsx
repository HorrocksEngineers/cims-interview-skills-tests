import { Typography } from 'antd';
import useProjectAsphaltLots from './useProjectAsphaltLots';

interface AsphaltLotsProps {}

/**
 * TODO communicate the loading state of the query
 */
const AsphaltLots: React.FC<AsphaltLotsProps> = () => {
  const response = useProjectAsphaltLots();
  return (
    <>
      <Typography.Title>Asphalt Lots</Typography.Title>
    </>
  );
};

export default AsphaltLots;
