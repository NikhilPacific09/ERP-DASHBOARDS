export default function CuttingHeader() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm text-gray-500">
          Machine Name
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          CNC-01
        </h2>
      </div>

      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm text-gray-500">
          Shift
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          Morning
        </h2>
      </div>

      <div className="rounded-lg bg-white p-5 shadow">
        <p className="text-sm text-gray-500">
          Operator Name
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          John Doe
        </h2>
      </div>
    </div>
  );
}