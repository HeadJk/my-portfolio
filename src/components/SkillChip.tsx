import StorageIcon from '@mui/icons-material/Storage';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import type { OverwriteProps } from '@/types/global';

// import * as MUIcon from "@mui/icons-material";
// interface IconProps {
//    icon?: keyof typeof MUIcon;
// }
// const IconComp: React.FC<IconProps> = ({
//   icon,
// }) => {
//     const Icon = icon && MUIcon[icon];
//     return ({Icon && <Icon />})
// }

export type SkillChipPropTypes = OverwriteProps<(typeof Chip), {
  name: string
}>

/**
 *
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const SkillChip = ({ name, ...props }: SkillChipPropTypes) => {
  return (
    <Chip
      { ...props }
      label="SQL Databases"
      clickable
      icon={<Icon>{name}</Icon>}
    />
  );
};

export default SkillChip;