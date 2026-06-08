type NewRecordButtonProps = {
  onClick: () => void;
};

export default function NewRecordButton({
  onClick,
}: NewRecordButtonProps) {
  return (
    <button
  onClick={onClick}
  className="mb-6 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow hover:bg-blue-700"
>
  + New Record
</button>
  );
}