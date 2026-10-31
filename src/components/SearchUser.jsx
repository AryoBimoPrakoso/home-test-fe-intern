

export default function SearchUser({ value, onChange }) {
  return (
    <div className="w-full flex items-end m-7">
      <input
        type="text"
        placeholder="Search name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-xs px-3 py-2 text-sm text-neutral-800 placeholder:text-neutral-400 bg-transparent border border-neutral-200 rounded-lg outline-none transition-colors focus:border-neutral-800"
      />
    </div>
  );
}