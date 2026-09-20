const ComingSoon = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
            />
          </svg>
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold text-gray-900">
          Coming Soon
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          We’re working on this feature right now. Check back soon to see
          what’s new.
        </p>

        {/* Status */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
          <span className="h-2 w-2 animate-pulse rounded-full bg-slate-500" />
          Under development
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
