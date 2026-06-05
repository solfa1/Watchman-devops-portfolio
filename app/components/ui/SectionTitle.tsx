type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mb-14">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}