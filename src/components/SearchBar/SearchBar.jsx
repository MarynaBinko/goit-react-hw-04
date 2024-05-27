// import styles from "./SearchBar.module.css"

const SearchBar = ({ onSearch }) => {

	const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
const topic = form.elements.topic.value;
    if(form.elements.topic.value.trim() === "") {
			alert("Please enter search term!")
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
        // autocomplete="off"
        // autofocus
        name="topic"
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
    </div>
  )
}

export default SearchBar
