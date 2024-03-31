
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from '../../store/filter/selector';
import { updateFilterAction } from '../../store/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);

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
