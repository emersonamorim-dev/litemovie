import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import { MoviePage } from 'types/movie';
import './styles.css';

type Props = {
  page : MoviePage;
  onChange : Function;
}

function Pagination({ page, onChange } : Props) {

  return (
    <div className="ltmovie-pagination-container">
      <div className="ltmovie-pagination-box">
        <button className="ltmovie-pagination-button" 
        disabled={page.first} onClick={() => onChange(page.number - 1)}>
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button className="ltmovie-pagination-button" 
        disabled={page.last} onClick={() => onChange(page.number + 1)}>
          <Arrow className="ltmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}
export default Pagination;
