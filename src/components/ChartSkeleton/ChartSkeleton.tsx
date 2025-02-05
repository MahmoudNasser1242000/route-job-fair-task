
const ChartSkeleton = () => {
    return (
        <>
            <div role="status" className="h-fit w-[90%] mx-auto mt-12 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                <div className="flex items-baseline pt-4 pb-8">
                    <div className="w-[300px] bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700" />
                    <div className="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
                    <div className="w-[500px] bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700" />
                    <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700" />
                    <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700" />
                    <div className="w-[340px] bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700" />
                    <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700" />
                </div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5" />
                <div className="w-48 h-2.5 mb-10 bg-gray-200 rounded-full dark:bg-gray-700" />
                <span className="sr-only">Loading...</span>
            </div>
        </>
    )
}

export default ChartSkeleton