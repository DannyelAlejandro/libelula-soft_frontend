import type { NextApiRequest, NextApiResponse } from 'next'
import movies from '../../../consts/movies';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        res.status(200).json(movies)
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
