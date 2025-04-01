'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/navadata') // API Call
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <header className='bg-black shadow-lg drop-shadow-[0_5px_10px_#18c5c5] mb-[100px]'>
			<div className='container mx-auto'>
			<div className='flex justify-between items-center shadow-lg drop-shadow-[0_5px_10px_#18c5c5]'>
			<div class="font-bold text-3xl text-[#18c5c5] py-4">Kruti</div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ul className="flex ">
              {data.map((item) => (
                <li key={item.id} className="py-6 px-3 hover:shadow-xl hover:shadow-[#18c5c5]  transition-all duration-300 ease-in-out">
                  <Link  href={item.path} className='py-6 px-3 text-xl text-[#18c5c5] '>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
			</div>
			</div>
    </header>
  );
}
