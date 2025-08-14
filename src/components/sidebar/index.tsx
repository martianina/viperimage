/* eslint-disable */

import { HiX } from 'react-icons/hi';
import Links from './components/Links';

import SidebarCard from '@/components/sidebar/components/SidebarCard';
import { IRoute } from '@/types/navigation';

function SidebarHorizon(props: { routes: IRoute[]; [x: string]: any }) {
  const { routes, open, setOpen } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white shadow-2xl shadow-white/5 transition-all md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-96 xl:translate-x-0'
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={() => setOpen(false)}
      >
        <HiX />
      </span>

      {/* Scrollable Content */}
      <div className="flex flex-col h-screen overflow-y-auto">
        {/* Logo Card at Top */}
        <div className="flex justify-center mt-[30px]">
          <SidebarCard />
        </div>

        <div className="mb-4 mt-[38px] h-px bg-gray-300" />
        
        {/* Nav item */}
        <ul className="flex-1 pt-1 pb-10">
          <Links routes={routes} />
        </ul>
      </div>
    </div>
  );
}

export default SidebarHorizon;
