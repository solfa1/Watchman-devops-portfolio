type TechnologyBadgeProps = {
  name: string;
};

export default function TechnologyBadge({ name }: TechnologyBadgeProps) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-cyan-300">
      {name}
    </span>
  );
}