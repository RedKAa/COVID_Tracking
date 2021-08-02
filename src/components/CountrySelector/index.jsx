import React from 'react';
import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';

const CountrySelector = ({ value, handleOnChange, countries }) => {

  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink>Quốc gia</InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: 'country',
          id: 'country-selector'
        }}
      >
        {
          countries.map((country) => <option value={country.ISO2} key={country.ISO2}>
            {country.Country}
          </option>)
        }
      </NativeSelect>
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  )
}

export default CountrySelector
