import { Typography } from 'antd';
import useProjectAsphaltLots from './query'
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface AsphaltLotsProps {}

/**
 * TODO communicate the loading state of the query
 */
const AsphaltLots: React.FC<AsphaltLotsProps> = () => {
  let data = useProjectAsphaltLots()
  let lots = []

  if (data.data) {
    lots = data.data.project.asphaltLots
  }

  return (
    <>
      <Typography.Title>Asphalt Lots</Typography.Title>
      {}
    </>
  );
};

export default AsphaltLots;
