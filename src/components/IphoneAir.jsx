import Iphoneair from '../img/hero_iphone_air__0gxyavihpiqu_large.jpg';
import LearnmoreLG from './LearnmoreLG';
import BuyLg from './BuyLg';
function IphoneAir() {
  return (
    <>
      <section className="relative w-screen h-[calc(580px+44px)] min-h-[calc(580px+44px)] flex justify-center items-center mb-2.5">
        <div className="w-full h-full flex justify-center items-center overflow-hidden">
          <img className="w-full h-full object-cover" src={Iphoneair} />
        </div>
        <div className="absolute z-10 top-20 flex flex-col justify-center items-center gap-2">
          <h1 className="text-6xl font-bold  leading-[1.1] text-gray-900">
            iPhone Air
          </h1>
          <h1 className="text-2xl font-medium leading-[1.2] text-balance text-center text-gray-500">
            Feature packed at a better value <br /> with a power pro inside.
          </h1>
          <div className="flex justify-center items-center gap-3 mt-1">
            <LearnmoreLG />
            <BuyLg />
          </div>
        </div>
      </section>
    </>
  );
}
export default IphoneAir;
