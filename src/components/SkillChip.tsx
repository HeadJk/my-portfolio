import StorageIcon from '@mui/icons-material/Storage';
import Chip from '@mui/material/Chip';
import type { OverwriteProps } from '@/types/global';

export type SkillChipPropTypes = OverwriteProps<(typeof Chip), {

}>

/**
 *
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const SkillChip = ({ ...props }: SkillChipPropTypes) => {
  return (
    <Chip
      { ...props }
      label="SQL Databases"
      clickable
      icon={<StorageIcon />}
    />
  );
};

export default SkillChip;