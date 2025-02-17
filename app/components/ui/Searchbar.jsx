// components/ui/SearchBar.js
const SearchBar = () => {
    return (
      <div className="flex items-center bg-gray-800 p-2 rounded-lg w-1/3">
        <Search className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search for psychologists or students" 
          className="bg-transparent text-white w-full outline-none" 
        />
      </div>
    );
  };
  
  export default SearchBar;
  