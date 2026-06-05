type CapabilityListProps = {
  items: string[];
};

export default function CapabilityList({ items }: CapabilityListProps) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          {item}
        </li>
      ))}
    </ul>
  );
}