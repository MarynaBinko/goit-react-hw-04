// import styles from "./SearchBar.modules.css"

const SearchBar = () => {
  return (
    <div>
         <form>
      <input
        type="text"
        // autocomplete="off"
        // autofocus
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
    </div>
  )
}

export default SearchBar
