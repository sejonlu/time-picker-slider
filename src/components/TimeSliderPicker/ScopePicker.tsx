import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useMenuProps } from "../../hooks/useMenuProps";
import { ScopeType } from "../../types/ScopeType";

type ScopePickerProps = {
  options: Record<string, ScopeType>;
  setScope: (scope: ScopeType) => void;
};

export const ScopePicker: FC<ScopePickerProps> = ({ options, setScope }) => {
  const { anchorEl, open, handleClick, handleClose } = useMenuProps();

  const handleSelect = (option: ScopeType) => {
    setScope(option);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <ExpandMoreIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {Object.entries(options).map(([key, value]) => (
          <MenuItem key={key} onClick={() => handleSelect(value)}>
            {value}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
