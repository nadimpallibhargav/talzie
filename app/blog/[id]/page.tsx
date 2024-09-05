'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/organisms/navbar/Navbar';
import Link from 'next/link';

const aData = [
  {
    id: '1',
    title: 'Blog 1',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
  },
  {
    id: '2',
    title: 'Blog 2',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    if (typeof id === 'string') {
      const data = aData.find((item) => item.id === id);
      if (data) {
        setBlogData(data);
      }
    }
  }, [id]);

  if (!blogData) return <div>Loading...</div>;

  return (
    <>
      <Navbar />

      <main>
        <section className='pt-[100px] min-h-100vh bg-white text-black'>
          <div className='container'>
            <div className='max-w-[700px] mx-auto'>
              <div className='pb-[20px]'>
                <Link className='text-2xl underline' href='/'>
                  Back
                </Link>
              </div>
              <h1 className='text-6xl font-bold pb-[30px] font-Syne'>
                {blogData.title}
              </h1>
              <p className='text-3xl leading-10'>{blogData.content}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
