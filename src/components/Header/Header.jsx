// import styles from "./Header.module.css"

import SearchBar from "../SearchBar/SearchBar"

const Header = ({onSearch}) => {
  return (
    <header>
    < SearchBar onSearch={onSearch}/>
  </header>
  
  )
}

export default Header
