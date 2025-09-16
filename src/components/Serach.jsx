import { useState } from "react";
const Search = () => {
  const [query, setQuery] = useState("")
  const handelChange = (e) => {
    setQuery(e.target.value)
  }
  return (
    <div>
      <input
        onChange={handelChange}
        value={query}
        type="text" />
    </div>
  )
}
export default Search;