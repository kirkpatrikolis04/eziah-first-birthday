const ErrorPage = () => {
    return (
        <main className="min-h-screen bg-[#f8e6e4] flex items-center justify-center px-4">
            <div className="max-w-md text-center space-y-6">
                <p className="inline-flex rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    404 Error
                </p>
                <h1 className="text-4xl font-bold text-[#000000]">
                    Oops, we couldn’t find that page
                </h1>
                <p className="text-black">
                    The link might be broken and the ID is not valid. or the page may have moved.
                </p>
                {/* <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-md bg-pink-500 px-5 py-3 text-sm font-semibold text-[#000000] shadow-lg shadow-pink-500/30 transition hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
                    >
                        Back to Home
                    </a>
                    <a
                        href="mailto:info@example.com"
                        className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:text-pink-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                    >
                        Contact Support
                    </a>
                </div> */}
            </div>
        </main>
    );
};

export default ErrorPage;