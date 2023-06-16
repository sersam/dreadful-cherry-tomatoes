import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const theme = {
  display: 'flex',
  backgroundColor: 'white',
  width: '100%',
  maxWidth: '90vw',
  margin: '1vw 0',
};

type InputFieldProps = {
  filterText: string;
  setFilterText: (text: string) => void;
};

export const InputField = ({ filterText, setFilterText }: InputFieldProps) => {
  return (
    <TextField
      id='input-with-icon-textfield'
      sx={theme}
      value={filterText}
      onChange={(event) => setFilterText(event.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant='standard'
      placeholder='Filter'
    />
  );
};
