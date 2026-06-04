import iPadair from '../img/promo_ipad_air_avail__6i02t7nujr62_small.jpg';
import iPadairLogo from '../img/promo_logo_ipad_air__dqdj4ni03quu_large_2x.png';
function IndexGrid() {
  return (
    <>
      <section className="w-screen h-max grid grid-cols-2 grid-flow-col px-2.5 gap-2.5">
        <div className="relative w-auto h-[580px] flex justify-center items-center overflow-hidden">
          <img className="w-auto h-full object-cover" src={iPadair} />
          <div className="absolute top-3.5 flex flex-row justify-center items-center">
            <img className="w-200px h-auto" src={iPadairLogo} />
          </div>
        </div>
        <div className="relative w-auto h-[580px] flex justify-center items-center">
          <img className="w-full h-full object-cover" src={iPadair} />
        </div>
      </section>
    </>
  );
}
export default IndexGrid;
