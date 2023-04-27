import { Chip, Theme } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import { alpha } from '@mui/material';

export type CardPropTypes = {

}

/**
 * 
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const SkillChip = ({ }: CardPropTypes) => {
  return (
    <Chip
      label="SQL Databases"
      clickable
      icon={<StorageIcon />}
    />
  );
};

export default SkillChip;