import "../Filter.css";

const NameFilter = (props) => {
  return (
    <div className="name__filter">
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.handleSearchTerm}
        className="name__filter__input"
      />
    </div>
  );
};

export default NameFilter;
