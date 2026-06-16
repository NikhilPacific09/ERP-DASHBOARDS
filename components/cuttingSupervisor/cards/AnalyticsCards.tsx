interface AnalyticsCardsProps {
  completedJobs: number;

  fabricationJobs: number;
}

export default function AnalyticsCards({
  completedJobs,
  fabricationJobs,
}: AnalyticsCardsProps) {
  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2">

      <div className="rounded-2xl bg-linear-to-r from-green-500 to-green-700 p-6 text-white shadow-xl">
        <h3 className="text-lg">
          Completed Jobs
        </h3>

        <p className="mt-3 text-4xl font-bold">
          {completedJobs}
        </p>
      </div>

      <div className="rounded-2xl bg-linear-to-r from-purple-500 to-purple-700 p-6 text-white shadow-xl">
        <h3 className="text-lg">
          Sent To Fabrication
        </h3>

        <p className="mt-3 text-4xl font-bold">
          {fabricationJobs}
        </p>
      </div>

    </div>
  );
}