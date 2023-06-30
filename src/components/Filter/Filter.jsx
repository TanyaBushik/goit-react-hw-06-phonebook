import { useDispatch, useSelector } from 'react-redux';
import { Label, Input, Wrapper } from './Filter.styled.js';
import { getContactFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactFilter);

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </Wrapper>
  );
};
