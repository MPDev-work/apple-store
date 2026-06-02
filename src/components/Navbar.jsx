function Navbar() {
  return (
    <>
      <nav className="fixed z-[999] inset-x-0 top-0 h-11 flex justify-center items-center bg-[#1d1d1fcc] backdrop-blur-2xl">
        <ul className="flex justify-center items-center gap-9">
          <li>
            <i className="bi bi-apple text-sm text-white"></i>
          </li>
          <li className="capitalize text-xs text-white font-thin">store</li>
          <li className="capitalize text-xs text-white font-thin">mac</li>
          <li className="text-xs text-white font-thin">iPad</li>
          <li className=" text-xs text-white font-thin">iPhone</li>
          <li className="capitalize text-xs text-white font-thin">watch</li>
          <li className="capitalize text-xs text-white font-thin">Vision</li>
          <li className="capitalize text-xs text-white font-thin">airPods</li>
          <li className="capitalize text-xs text-white font-thin">TV & Home</li>
          <li className="capitalize text-xs text-white font-thin">
            entertainment
          </li>
          <li className="capitalize text-xs text-white font-thin">
            accessories
          </li>
          <li className="capitalize text-xs text-white font-thin">support</li>
          <li>
            <i className="bi bi-search text-sm text-white"></i>
          </li>
          <li>
            <i className="bi bi-bag text-sm text-white"></i>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
