import React from "react";
import Image from "next/image";
import { ArrowDropDown } from "@mui/icons-material";
import style from "../../layouts/header/header.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import PropTypes from "prop-types";
import styles from "../dropDown/DropDown.module.css";
import Filtericon from "../../../public/image/filtericon.svg"
import { OutlinedInput, Select, SelectChangeEvent, Theme, useTheme } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const DropDown = (props: any) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const onChange = (e: any) => {
    console.log(e.target.value, "<<-- dropdownchange value");
    // let value = e.target.value;
    // let newValue = value.replace(/^\s+/g, "");
    // e.target.value = newValue;

    // if (props.name) {
    //   props.handleChange(e.target.name, e.target.value);
    // } else {
      props.handleChange(e);
    // }
  };

  return (
    <>
      <div
        className={`DropDown textfieldinput flex flex-col ${props.extracls && props.extracls}`}
      >
        <label className={` ${props.olabelcls && props.olabelcls}`}>{props.olabel}</label>

        <FormControl className={`bg-white ${props.DropDownCls}`}>
          {props.icon && (
            <div className={`${styles.filtericon}`}>
              <Image src={Filtericon} height={15} width={17} />
            </div>
          )}

          <InputLabel id="demo-multiple-name-label" className="items-center">
            <div className={`${props.inputname && props.inputname}`}>
              {props.name}
            </div>
          </InputLabel>
          <Select
            labelId={props.labelId}
            id={props.id}
            // multiple
            className={props.selectCls}
            name={props.name}
            // displayEmpty
            onChange={(e: any) => {
              onChange(e);
            }}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
            error={props.error}
          >
            {props.selectOption &&
              props.selectOption.map((item: any, idx: number) => (
                <MenuItem
                  value={item.value}
                  key={idx}
                  style={getStyles(item, personName, theme)}
                >
                  {item.name}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText>{props.helperText}</FormHelperText>
        </FormControl>
      </div>
    </>
  );
};
DropDown.prototype = {
  labelId: PropTypes.string,
  inputLabel: PropTypes.string,
  selectOption: PropTypes.string,
  olabelcls: PropTypes.string,
  extracls: PropTypes.string,
  DropDownCls: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  error: PropTypes.bool,
  fullwidthState: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  required: PropTypes.bool,
  value: PropTypes.string,
  clickEnter: PropTypes.func,
  startAdorment: PropTypes.node,
  helperText: PropTypes.string,
  startIcon: PropTypes.string,
  olabel: PropTypes.string,
  type: PropTypes.string,
  dataCy: PropTypes.string,
};

export default DropDown;
