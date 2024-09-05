import { NextApiRequest, NextApiResponse } from 'next';

const blogData = [
  {
    id: '1',
    title: 'Blog 1',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
  },
  {
    id: '2',
    title: 'Blog 2',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const blog = blogData.find((b) => b.id === id);

  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
}
