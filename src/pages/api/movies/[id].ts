import type { NextApiRequest, NextApiResponse } from 'next'

import movies from '../../../consts/movies'

export default function handlerhandler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case 'GET':
            const movie = movies.find(movie => movie.id === parseInt(id));
            if (movie) {
                res.status(200).json(movie);
            } else {
                res.status(404).json({ message: 'Película no encontrada' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Método ${method} No Permitido`);
    }
}