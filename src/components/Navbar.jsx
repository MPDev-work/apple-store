function Navbar() {
  return (
    <>
      <nav className="fixed z-[999] inset-x-0 top-0 h-11 flex justify-center items-center bg-[#1d1d1fcc] backdrop-blur-2xl">
        <ul className="flex justify-center items-center gap-8.5">
          <li>
            <i className="bi bi-apple text-sm text-gray-200"></i>
          </li>
          <li className="capitalize text-xs text-gray-200 font-light tracking-wide">
            store
          </li>
          <li className="capitalize text-xs text-gray-200 font-light tracking-wide">
            mac
          </li>
          <li className="text-xs text-gray-200 font-light tracking-wide">
            iPad
          </li>
          <li className=" text-xs text-gray-200 font-light tracking-wide">
            iPhone
          </li>
          <li className="capitalize text-xs text-gray-200 font-light tracking-wide">
            watch
          </li>
          <li className="capitalize text-xs text-gray-200 font-light tracking-wide">
            Vision
          </li>
          <li className="capitalize text-xs text-gray-200 font-light tracking-wide">
            airPods
          </li>
          <li className="capitalize text-xs text-gray-200 font-light tracking-wide">
            TV & Home
          </li>
          <li className="capitalize text-xs text-gray-200 font-light tracking-wide">
            entertainment
          </li>
          <li className="capitalize text-xs text-gray-200 font-light tracking-wide">
            accessories
          </li>
          <li className="capitalize text-xs text-gray-200 font-light tracking-wide">
            support
          </li>
          <li>
            <i className="bi bi-search text-sm text-gray-200"></i>
          </li>
          <li>
            <i className="bi bi-bag text-sm text-gray-200"></i>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
