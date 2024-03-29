import React from "react";
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector() {
  const [value, setValue] = useState("");
  const options: any = useMemo(() => countryList().getData(), []);

  const changeHandler = (value: any) => {
    setValue(value);
  };

  return (
    <Select
      options={options}
      value={value}
      className={"form-control"}
      onChange={changeHandler}
    />
  );
}

export default CountrySelector;
