import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [currency, setCurrency] = React.useState('USD');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="USD"
          onChange={handleChange}
        >
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'Rial'}>Rial</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}