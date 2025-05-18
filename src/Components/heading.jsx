export function Heading({ biggerHeading, smallerHeading, children }) {
  return (
    <div className="locationHeading w-[80%] max-w-[1200px] mx-auto my-16 px-4 sm:px-6 lg:px-0">
      <p className="text-lg sm:text-xl text-gray-500 pl-1">{smallerHeading}</p>
      <div
        id="incredibleContainer"
        className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-2"
      >
        <span className="text-4xl lg:text-[72px]  md:text-6xl font-semibold">
          {biggerHeading}
        </span>
        <span className="hidden sm:block text-base sm:text-lg md:text-xl lg:text-lg pt-4 sm:pt-0 max-w-sm sm:max-w-md">
          {children}
        </span>
      </div>
    </div>
  );
}
