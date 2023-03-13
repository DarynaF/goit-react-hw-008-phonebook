import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { HStack, Input } from '@chakra-ui/react';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const searchContactId = nanoid();

    const filterInput = evt => {
        const { value } = evt.target;
        dispatch(setFilter(value));
    }

    return (
        <HStack>
            <Input
                type="text"
                name="filter"
                value={filter}
                id={searchContactId}
                onChange={filterInput}
                placeholder='Search'
            />
        </HStack>
    )
};
