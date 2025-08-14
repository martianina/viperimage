'use client';
import { IoDocuments } from 'react-icons/io5';
import { FaUserPlus, FaClipboardList, FaChartBar, FaFlask, FaShieldAlt, FaBoxes, FaDatabase } from 'react-icons/fa';

import Widget from '@/components/widget/Widget';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Link href="/enrollment">
          <Widget
            icon={<FaUserPlus className="h-7 w-7" />}
            title={'Get Free Samples. Help Us Crack the Ginger Code.'}
            subtitle={'Join Research'}
          />
        </Link>
        <Link href="/review">
          <Widget
            icon={<FaClipboardList className="h-6 w-6" />}
            title={'Try Stuff. Tell Us What Works.'}
            subtitle={'Rate Products'}
          />
        </Link>
        <Link href="/survey">
          <Widget
            icon={<FaChartBar className="h-7 w-7" />}
            title={'Real Talk from Real Redheads.'}
            subtitle={'Share Feedback'}
          />
        </Link>
        <Link href="/admin/research">
          <Widget
            icon={<FaFlask className="h-6 w-6" />}
            title={'What We\'ve Learned So Far'}
            subtitle={'Study Data'}
          />
        </Link>
        <Link href="/protocol">
          <Widget
            icon={<IoDocuments className="h-7 w-7" />}
            title={'Yes, It\'s Real Science.'}
            subtitle={'Study Methods'}
          />
        </Link>
        <Link href="/regulatory">
          <Widget
            icon={<FaShieldAlt className="h-6 w-6" />}
            title={'Your Data. Your Control.'}
            subtitle={'Compliance Info'}
          />
        </Link>
        <Link href="/products">
          <Widget
            icon={<FaBoxes className="h-6 w-6" />}
            title={'Redhead-Tested Products. Curated by Gingers.'}
            subtitle={'Product Database'}
          />
        </Link>
        <Link href="/mc1r">
          <Widget
            icon={<FaDatabase className="h-6 w-6" />}
            title={'By Redheads, for Redheads.'}
            subtitle={'The MC1R Foundation'}
          />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
