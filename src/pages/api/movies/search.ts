import type { NextApiRequest, NextApiResponse } from 'next'
import movies from '../../../consts/movies';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ message: 'Se requiere el parámetro "search"' });
  }

  const results = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase()) ||
    movie.year.toString().includes(search) ||
    movie.genre.toLowerCase().includes(search.toLowerCase())
  );

  if (results.length === 0) {
    return res.status(404).json({ message: 'No se encontraron coincidencias' });
  }

  res.status(200).json(results);
}
