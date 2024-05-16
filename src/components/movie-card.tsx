import React from 'react';
import { Button } from "@material-tailwind/react";
import Link from 'next/link';

interface MovieCardProps {
  id : string;
  title : string;
  year : string;
  genre : string;
  image : string;
}

export function MovieCard({ id, title, year, genre, image }: MovieCardProps) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img className="w-full h-img-movie object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">Año: {year}</p>
        <p className="text-gray-600 mb-2">Género: {genre}</p>
        
        <Link  href={`/movie/${id}`}>
          <Button color="gray" size="sm">
            Más información
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
