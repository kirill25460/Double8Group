import Select from 'react-select';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import { updateSearchType } from 'redux/search/searchSlice';

import { SearchForm,  } from './Selector.styled';
// Text
const options = [
  { value: 'Book us', label: 'Book Us' },
  { value: 'Description of service', label: 'Description of service' },
  { value: 'Picture', label: 'Picture' },
  { value: 'Option to book online', label: 'Option to book online' },
  // { value: 'Air duct cleaning', label: 'Air duct cleaning' },
  // { value: 'Dryer vent cleaning', label: 'Dryer vent cleaning' },
  // { value: 'Bathroom fan cleaning', label: 'Bathroom fan cleaning' },
  // { value: 'Chimney cleaning', label: 'Chimney cleaning' },
  // { value: 'Comercial air duct cleaning', label: 'Comercial air duct cleaning' },
 
];

const portal = document.body;

export const BookUsSelector = () => {
//   const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    // dispatch(updateSearchType(selectedOption.value));
  };

  return (
    <SearchForm>
      {/* <Text>Book us</Text> */}
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Select options"
        menuPosition="absolute"
        menuPortalTarget={portal}
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: 'none',
            borderRadius: '6px',
            backgroundColor: 'transparent',
            
            borderStyle: 'none',
            outline: 'none',
            borderColor: state.isFocused ? 'none' : provided.borderColor,
            boxShadow: state.isFocused ? 'none' : provided.boxShadow,
            color: '#F8821E',
            width: '146px',
            height: '24px',
            '&:hover': {
              backgroundColor: 'transparent',
              borderStyle: 'none',
              borderColor: 'none',
              border: 'none',
              outline: 'none',
              
            },
            '@media (min-width: 768px)': {
              width: '175px',
              height: '24px',
            },
            '@media (min-width: 1440px)': {
              width: '198px',
              height: '24px',
            },
          }),dropdownIndicator: (base, state) => ({
            ...base,
            color: '#F8821E',
           
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          input: (provided, state) => ({
            ...provided,
            marginBottom: '0',
            color: 'transparent',
            font: '14',
            lineHeight: '1.5',
          }),
          menu: () => ({
            border: 'none',
          }),

          menuList: (provided, state) => ({
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '8px',
            height: "144px",
            overflow: 'auto',
            marginBottom: '10px',
            paddingBottom: '5px',
            font: '12px',
            lineHeight: '18px',
            color: '#F8821E',
            backgroundColor: '#ffffff',
            borderRadius: '6px',
            border: 'none',
            outline: 'none',
            borderStyle: 'none',
            borderColor: 'none',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#ffffff',
              borderStyle: 'none',
              borderColor: 'none',
              boxShadow: 'none',
              border: 'none',
              outline: 'none',
            },
            '&:focus': {
              backgroundColor: '#ffffff',
              borderStyle: 'none',
              borderColor: 'none',
              boxShadow: 'none',
              border: 'none',
              outline: 'none',
            },

            width: '132px',

            '@media (min-width: 768px)': {
              width: '175px',

              font: '14px',
              lineHeight: '21px',
            },
            '@media (min-width: 1440px)': {
              width: '198px',
            },
          }),
          option: (provided, state) => ({
            border: 'none',
            paddingLeft: '14px',
            color: '#F8821E',
            opacity: '0.5',
            padding: '8px',
            cursor: 'pointer',

            '&:hover': {
              color: '#222021',
              opacity: '0.75',
              backgroundColor: '#f2ecec',
            },
            '&:focus': {
              backgroundColor: 'transparent',
            },
          }),
        }}
      />
    </SearchForm>
  );
};
