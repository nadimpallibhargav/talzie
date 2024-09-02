'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

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
    <section className='pt-[200px] min-h-100vh bg-white text-black'>
      <div className='container'>
        <div className='max-w-[768px] mx-auto'>
          <h1 className='text-6xl font-bold pb-[30px] font-Syne'>
            {blogData.title}
          </h1>
          <p className='text-2xl'>{blogData.content}</p>
        </div>
      </div>
    </section>
  );
}
