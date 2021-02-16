import React, { Fragment, useState } from 'react';
import { SearchOutline, XOutline, ArrowLeftOutline, ArrowRightOutline } from 'heroicons-react';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import Tabs from '../Components/tailwindUI/Tabs';
import SlideOver from '../Components/tailwindUI/SlideOver';
import trips from '../fakeData.json';

const tabs = [
  'Chill Adventure',
  'Spooky Times',
  'Desert Madness',
  'Out in the wild',
];
export default function HomePage(props) {

  const [currentTrip, setCurrentTrip] = useState(0);
  const [activeTab, setActiveTab] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const onClickNext = () => {
    if (currentTrip + 1 < trips.length) {
      setCurrentTrip(currentTrip + 1);
    }
  }
  const onClickBack = () => {
    if (currentTrip > 0) {
      setCurrentTrip(currentTrip - 1);
    }
  }
  return (
    <Fragment>

      <div className="bg-ganapathy-kumar bg-cover h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12">
          <div className="flex justify-between">
            <span className="text-white font-playfair font-bold text-4xl">NT.</span>
            <div className="flex items-center space-x-4">
              <SearchOutline className="text-white h-4 w-4" />
              <button onClick={() => setIsOpen(true)} type="button" className="inline-flex items-center cursor-pointer uppercase px-6 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                menu
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-center mt-14 sm:mt-36 md:mt-32 lg:mt-36 text-white">
            <h1 className="font-Noe text-6xl sm:text-8xl">Night Trips</h1>
            <div className="font-larsseit font-bold text-sm my-7">WE GOT TRIPS FOR THE TRIPPSTER IN YOU</div>
            <div className="text-xs font-larsseit w-5/12 md:text-justify">
              Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida sed quis congue. Vel risus, arcu a viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper.
          </div>
          </div>
          <div className="flex justify-between pt-10 sm:py-10 md:py-20">
            <div className="flex flex-col justify-center items-center space-y-7">
              <span className="uppercase inline-block font-larsseit transform -rotate-90 text-white text-xs">scroll</span>
              <div className="bg-cyan-600 w-px h-12 bg-gradient-cyan" />
            </div>
            <ul className="list-none space-y-3 mr-5 sm:mr-0">
              <li><img src={twitter} alt="Twitter" width="15" /></li>
              <li><img src={instagram} alt="Instagram" width="15" /></li>
              <li><img src={facebook} alt="Facebook" width="15" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-dark">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-14 pt-12">
          <div className="flex items-center space-x-6">
            <h1 className="text-white font-Noe font-bold text-3xl md:text-5xl lg:text-6xl">Pick your trip</h1>
            <XOutline className="text-cyan-300 h-4 w-4 cursor-pointer" />
            <p className="font-larsseit font-normal text-sm text-white">
              Our team put together some trips to you to discover,<br />
            feel free to discover each of them.
          </p>
          </div>
          <Tabs
            tabs={tabs}
            getActiveTab={(activeTab) => setActiveTab(activeTab)}
          />
          <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
            <li className="sm:py-8">
              <div className="space-y-4 sm:grid sm:grid-cols-2 sm:items-start sm:gap-10 md:gap-16 lg:gap-24 sm:space-y-0">
                <div className="relative px-2 sm:px-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-5 sm:aspect-h-5 relative">
                    <img className="shadow-lg rounded-lg" src={trips[currentTrip].image} alt="trip" />
                  </div>
                  <div className="absolute top-1/4 sm:top-2/4 left-1 md:-left-2 lg:-left-11 w-40">
                    <div className="border-t-2 border-l-2 h-4 border-cyan-brightcyan" />
                    <span className="text-cyan-brightcyan inline-block font-bold font-larsseit text-lg relative top-1">{trips[currentTrip].id < 10 ? `0${trips[currentTrip].id + 1}` : trips[currentTrip].id + 1}.</span>
                    <p className="font-larsseit text-white uppercase tracking-widest font-bold text-lg mt-3">{trips[currentTrip].name}</p>
                  </div>
                  <div className="absolute flex right-0 bottom-0">
                    <div className="bg-blue-dark p-3 mr-px rounded-tl-md cursor-pointer" onClick={onClickBack}><ArrowLeftOutline className="text-white h-4 w-4" /></div>
                    <div className="bg-blue-dark p-3 cursor-pointer" onClick={onClickNext}><ArrowRightOutline className="text-white h-4 w-4" /></div>
                  </div>
                </div>
                <div className="px-4 sm:px-0">
                  <div className="space-y-8 mt-5 sm:mt-3 lg:mt-14">
                    <h2 className="text-white font-Noe font-bold text-3xl sm:text-4xl lg:text-5xl">{tabs.find((tab, i) => i === activeTab)}</h2>
                    <div className="font-larsseit text-white text-base sm:pr-14  whitespace-pre-wrap">{trips[currentTrip].description}</div>
                    <button style={{ boxShadow: '5px 15px 40px rgba(0, 201, 224, 0.2)' }} type="button" className="inline-flex items-center uppercase px-6 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                      SEE OUR LATEST OFFER
                    </button>
                    <div className="text-right">
                      <div className="inline-block text-left">
                        <span className="text-white font-larsseit text-xs tracking-widest font-bold">SHARE IT:</span>
                        <div className="flex space-x-2 p-3 border-b border-r border-cyan-400">
                          <img src={instagram} alt={'instagram'} width="15" />
                          <img src={facebook} alt={'facebook'} width="15" />
                          <img src={twitter} alt={'twitter'} width="15" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <SlideOver isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </Fragment>
  )
}