import MovieLayout from '@/app/MovieLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`/api/movies/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
          const storedComments = localStorage.getItem(`movie_${id}`);
          if (storedComments) {
            setComments(JSON.parse(storedComments));
          }
        })
        .catch((error) => {
          console.error('Error fetching movie:', error);
        });
    }
  }, [id]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (!newComment) return; // Handle empty comment submission

    // Create a new comment object with unique ID
    const newCommentWithId = { id: Date.now(), message: newComment };

    // Update comments state with the new comment
    const updatedComments = [...comments, newCommentWithId];
    setComments(updatedComments);

    // Save updated comments to local storage
    localStorage.setItem(`movie_${id}`, JSON.stringify(updatedComments));

    // Clear new comment input
    setNewComment('');
  };

  if (movie === null) {
    return <p>Cargando...</p>;
  }

  const renderComments = () => {
    return comments.length > 0 ? (
      <div className="mt-8">
        <h3>Comentarios ({comments.length})</h3>
        <ul className="list-none space-y-2">
          {comments.map((comment, index) => (
            <li key={index}>
              <p className="text-gray-700">{comment.message}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p className="text-gray-700">Aún no hay comentarios.</p>
    );
  };

  return (
    <MovieLayout>
      <div className="container mx-auto px-4 py-8">
        <Link href={'/'}>
          <Button color="gray" size="sm" className="mb-4">
            Regresar
          </Button>
        </Link>
        <div className="flex flex-col md:flex-row gap-4"> <div className="md:w-1/3 md:shrink-0">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <div className="flex items-center mb-2">
              <p className="text-gray-700 mr-2">Año: {movie.year}</p>
              <div className="inline-flex items-center text-sm text-gray-500">
                <span>{movie.genre}</span>
              </div>
            </div>
            <h3>Sinopsis</h3>
            <p className="text-gray-700 mb-4">{movie.sinopsis}</p>
            
            <div className='mt-4'>
              {renderComments()}

              <div className="mt-4">
                <h3>Agregar Comentario</h3>
                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    className="w-full rounded-md border border-gray-300 px-2 py-3 focus:outline-none focus:ring focus:ring-blue-500"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Escribe tu reseña..."
                  />
                  <Button type="submit" color="blue" size="sm" className="mt-4">
                    Agregar Comentario
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>


      </div>
    </MovieLayout>

  );
}

export default MovieDetail;
