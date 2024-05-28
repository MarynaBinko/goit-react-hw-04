// import styles from "./SearchBar.module.css"

const SearchBar = ({ onSearch, notify }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if (topic === "") {
      notify();
      return;
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="topic"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;


