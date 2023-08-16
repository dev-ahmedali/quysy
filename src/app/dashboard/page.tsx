import { getAuthSession } from '@/lib/nextauth';
import React from 'react'
import { redirect } from 'next/navigation';
import QuizyCard from '@/components/dashboard/QuizyCard';
import HistoryCard from '@/components/dashboard/HistoryCard';
import HotTopicsCard from '@/components/dashboard/HotTopicsCard';
import RecentActivities from '@/components/dashboard/RecentActivities';

type props = {};

export const metaData = {
    title: "Dashboard | Quysy"
 }

const Dashboard = async (props: Props) => {
    const session = await getAuthSession()
    if(!session?.user) {
        return redirect('/')
    }
  return (
    <main className='p-8 mx-auto max-w-7xl'>
        <div className='flex items-center'>
          <h2 className='text-3xl font-bold mr-2 tracking-tight'>Dashboard</h2>
        </div>
        <div className='grid gap-4 mt-4 md:grid-cols-2'>
          <QuizyCard/>
          <HistoryCard/>
        </div>
        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
          <HotTopicsCard/>
          <RecentActivities/>
        </div>
    </main>
  )
}

export default Dashboard

