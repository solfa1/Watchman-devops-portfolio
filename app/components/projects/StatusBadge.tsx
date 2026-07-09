type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isCompleted = status === "Completed";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        isCompleted
          ? "bg-green-400/10 text-green-400"
          : "bg-yellow-400/10 text-yellow-300"
      }`}
    >
      {status}
    </span>
  );
}