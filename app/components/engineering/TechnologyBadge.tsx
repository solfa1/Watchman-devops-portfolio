type TechnologyBadgeProps = {
  name: string;
};

export default function TechnologyBadge({ name }: TechnologyBadgeProps) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
      {name}
    </span>
  );
}