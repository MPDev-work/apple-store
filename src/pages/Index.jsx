import Navbar from '../components/Navbar';
import WWDCimg from '../img/wwdc.jpg';
import Iphone17Pro from '../img/hero_iphone_17_pro__bknyzxfk2agi_large.jpg';
import iPhone17 from '../img/iphonefamily.jpg';
import Iphoneair from '../img/hero_iphone_air__0gxyavihpiqu_large.jpg';
import iPadair from '../img/promo_ipad_air_avail__6i02t7nujr62_small.jpg';
import iPadairLogo from '../img/promo_logo_ipad_air__dqdj4ni03quu_large_2x.png';
import LearnmoreLG from '../components/LearnmoreLG.jsx';
import BuyLg from '../components/BuyLg.jsx';

function WWDC() {
  return (
    <>
      <section className="relative w-screen h-[calc(580px+44px)] min-h-[calc(580px+44px)] flex justify-center items-center mb-2.5">
        <div className="w-full h-full flex justify-center items-center overflow-hidden">
          <img className="w-full h-full object-cover" src={WWDCimg} />
        </div>
        <div className="absolute z-10 bottom-16 flex flex-col justify-center items-center gap-2">
          <h1 className="capitalize text-3xl font-medium leading-[1.2] text-balance text-center text-white">
            apple world developer conference. <br />
            join us online 8-12.
          </h1>
          <a
            className="h-12 px-6 rounded-full bg-[dodgerblue] text-white flex justify-center items-center"
            href="#"
          >
            Add to calendar
          </a>
        </div>
      </section>
    </>
  );
}

function Iphon17pro() {
  return (
    <>
      <section className="relative w-screen h-[calc(580px+44px)] min-h-[calc(580px+44px)] flex justify-center items-center mb-2.5">
        <div className="w-full h-full flex justify-center items-center overflow-hidden">
          <img className="w-full h-full object-cover" src={Iphone17Pro} />
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

function Iphone17() {
  return (
    <section className="relative w-screen h-[calc(580px+44px)] min-h-[calc(580px+44px)] flex justify-center items-center mb-2.5">
      <div className="w-full h-full flex justify-center items-center overflow-hidden">
        <img className="w-full h-full object-cover" src={iPhone17} />
      </div>
      <div className="absolute z-10 top-12 flex flex-col justify-center items-center gap-2">
        <h1 className="text-6xl font-bold text-black leading-[1.1]">
          iPhone 17
        </h1>
        <h1 className="text-3xl font-medium text-black leading-[1.2]">
          Magichromatic.
        </h1>
        <div className="flex justify-center items-center gap-3 mt-1">
          <LearnmoreLG />
          <BuyLg />
        </div>
      </div>
    </section>
  );
}

function IphoneAir() {
  return (
    <>
      <section className="relative w-screen h-[calc(580px+44px)] min-h-[calc(580px+44px)] flex justify-center items-center mb-2.5">
        <div className="w-full h-full flex justify-center items-center overflow-hidden">
          <img className="w-auto h-full object-cover" src={Iphoneair} />
        </div>
        <div className="absolute z-10 top-20 flex flex-col justify-center items-center gap-2">
          <h1 className="text-6xl font-bold  leading-[1.1] text-gray-900">
            iPhone Air
          </h1>
          <h1 className="text-[22px] font-medium leading-[1.2] text-balance text-center text-gray-700">
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
function ApplePromo() {
  return (
    <>
      <section className="w-[100vw] h-max grid grid-cols-2 gap-2.5 overflow-hidden">
        <div className="relative h-[580px] flex justify-center items-center pl-2.5">
          <img className="w-auto h-full object-cover" src={iPadair} />
          <div className="absolute top-3.5 flex flex-row justify-center items-center">
            <img className="w-200px h-auto" src={iPadairLogo} />
          </div>
        </div>
        <div className="relative h-[580px] flex justify-center items-center pr-2.5">
          <img className="w-full h-full object-cover" src={iPadair} />
        </div>
      </section>
    </>
  );
}
function Index() {
  return (
    <>
      <Navbar />
      <WWDC />
      <Iphon17pro />
      <Iphone17 />
      <IphoneAir />
      <ApplePromo />
    </>
  );
}
export default Index;
