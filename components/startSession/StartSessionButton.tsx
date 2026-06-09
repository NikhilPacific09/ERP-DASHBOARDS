type StartSessionButtonProps = {
  onClick: () => void;
};

export default function StartSessionButton({
  onClick,
}: StartSessionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
    >
      Start Session
    </button>
  );
}