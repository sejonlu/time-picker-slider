import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useMenuProps } from "../../hooks/useMenuProps";

type RangePickerProps = {
  options: string[];
  setRange: (range: string) => void;
};

export const RangePicker: FC<RangePickerProps> = ({ options, setRange }) => {
  const { anchorEl, open, handleClick, handleClose } = useMenuProps();

  const handleSelect = (option: string) => {
    setRange(option);
    handleClose();
  };

  return (
    <>
      <IconButton size="small" onClick={handleClick}>
        <ExpandMoreIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
