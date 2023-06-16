import logo from '../../assets/logo/deadful cherry tomatoes.svg';
import styles from './Header.module.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export function Header({ filterText, setFilterText }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoHeader}>
        <img src={logo} className={styles.dreadfulLogo} alt='Logo' />
      </div>
      <div className={styles.filterHeader}>
        <TextField
          id='input-with-icon-textfield'
          placeholder='Filter'
          className={styles.inputFilter}
          value={filterText}
          onChange={(event) => setFilterText(event.target.value)}
          variant='standard'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </header>
  );
}
