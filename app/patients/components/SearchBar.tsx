'use client';

const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <input
      type="text"
      placeholder="Search patients..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="bg-black/5 rounded-lg py-2 px-4 mb-4"
    />
  );
};
export default SearchBar;
