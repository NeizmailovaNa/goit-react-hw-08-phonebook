import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactList } from 'redux/store';
import { selectFilter, setFilter } from '../../redux/filterSlice';
import { LabelStyled, InputStyled } from '../ContactForm/ContactForm.Styled';
import { SpanStyled } from './Filter.Styled';

const Filter = () => {
  const dispath = useDispatch();
  const filter = useSelector(selectFilter);
  const contactList = useSelector(selectContactList);

  return (
    <LabelStyled>
      {contactList.length === 0 ? (
        'Sorry, there is no contact,yet. Try to add some.'
      ) : (
        <>
          <SpanStyled>Find contacts by name:</SpanStyled>
          <InputStyled
            name="filter"
            value={filter}
            onChange={e => {
              dispath(setFilter(e.currentTarget.value));
            }}
          ></InputStyled>
        </>
      )}
    </LabelStyled>
  );
};

export default Filter;