import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input, Wrapper } from './Filter.styled.js';
import { setContactFilter } from '../../redux/filterSlice.js';
import { getContactFilter } from 'redux/selector.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactFilter);

  const handleFilter = e => dispatch(setContactFilter(e.currentTarget.value));

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input type="text" name="filter" value={filter} onChange={handleFilter} />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
