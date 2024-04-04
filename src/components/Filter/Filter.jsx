
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { updateFilterAction } from '../../redux/filters/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = e => {
    dispatch(updateFilterAction(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
