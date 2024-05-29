import styles from "./Header.module.css"
import SearchBar from "../SearchBar/SearchBar";


const Header = ({onSearch, notify}) => {
  return (
    <header className={styles.header}>
      <SearchBar onSearch={onSearch} notify={notify} />
            
    </header>
  )
}

export default Header;





