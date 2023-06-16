import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import ScreenPagination from '../Pagination/Pagination';
import { Card } from '../Card/Card';

const LIMIT = 10;

export function Home({ data, total }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [data]);

  return (
    <div className={styles.home}>
      <div className={styles.showList}>
        {data.slice((page - 1) * LIMIT, LIMIT * page).map((movie, index) => {
          return (
            <Card
              key={`${movie.title}-${index}`}
              title={movie.title}
              description={movie.description}
              releaseYear={movie.releaseYear}
              imageUrl={movie.images.posterArt.url}
            />
          );
        })}
      </div>
      <ScreenPagination
        totalPages={Math.ceil(total / LIMIT)}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
