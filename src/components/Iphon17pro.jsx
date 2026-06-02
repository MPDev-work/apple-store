import Iphone17 from '../img/hero_iphone_17_pro__bknyzxfk2agi_large.jpg';
import LearnmoreLG from './LearnmoreLG.jsx';
import BuyLg from './BuyLg.jsx';
function Iphon17pro() {
  return (
    <>
      <section className="relative w-screen h-[calc(580px+44px)] min-h-[calc(580px+44px)] flex justify-center items-center mb-2.5">
        <div className="w-full h-full flex justify-center items-center overflow-hidden">
          <img className="w-full h-full object-cover" src={Iphone17} />
        </div>
        <div className="absolute z-10 top-20 flex flex-col justify-center items-center gap-2">
          <h1 className="text-6xl font-bold text-white leading-[1.1]">
            iPhone 17 Pro
          </h1>
          <h1 className="text-3xl font-medium text-white leading-[1.2]">
            All out pro
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
export default Iphon17pro;
