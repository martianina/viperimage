import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Mock data for development when Supabase is not configured
export const mockListings = [
  {
    id: 1,
    title: '1996 Dodge Viper GTS',
    price: 85000,
    year: 1996,
    mileage: 45000,
    location: 'California',
    image: '/images/1996/1996.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: '2008 Dodge Viper SRT-10',
    price: 95000,
    year: 2008,
    mileage: 32000,
    location: 'Texas',
    image: '/images/2008/2008.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    title: '2015 Dodge Viper SRT',
    price: 125000,
    year: 2015,
    mileage: 18000,
    location: 'Florida',
    image: '/images/2015/2015.jpg',
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    title: '2017 Dodge Viper ACR',
    price: 185000,
    year: 2017,
    mileage: 8500,
    location: 'Arizona',
    image: '/images/2017/2017.jpg',
    created_at: new Date().toISOString()
  }
]
