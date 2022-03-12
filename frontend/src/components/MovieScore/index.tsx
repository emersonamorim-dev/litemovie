import MovieStars from 'components/MovieStars';
import './styles.css';

type Props = {
  score: number;
  count: number;
}

function MovieScore({ score, count } : Props) {


  return (
    <div className="ltmovie-score-container">
      <p className="ltmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars score={score} />
      <p className="ltmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
