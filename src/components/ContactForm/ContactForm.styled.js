import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

// export const Form = styled.form`
//   padding: 10px;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: flex-start;
// `;

export const Container = styled(Form)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
  width: 200px;
  height: 20px;
  padding: 7px 15px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 7px;
  color: red;
`;

export const Btn = styled.button`
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid;
  background-color: white;

  &:hover {
    color: white;
    background-color: blue;
  }
`;

// export const NameInput = styled.input`
// margin-top: 10px;
// margin-bottom: 10px;
// font-size: 15px;
// font-weight: 400;
// border-radius: 5px;
// outline: none;
// border: 1px solid black;
// width: 200px;
// height: 20px;
// padding: 7px 15px;
// `;

// export const NumberInput = styled.input`
//   margin-top: 10px;
//   margin-bottom: 10px;
//   font-size: 15px;
//   font-weight: 400;
//   border-radius: 5px;
//   outline: none;
//   border: 1px solid black;
//   width: 200px;
//   height: 20px;
//   padding: 7px 15px;
// `;

// export const LabelName = styled.label`
// font-size: 16px;
// font-weight: 400;
// display: flex;
// flex-direction: column;
// `;

// export const LabelNumber = styled.label`
//   font-size: 16px;
//   font-weight: 400;
//   display: flex;
//   flex-direction: column;
// `;

// export const AddBtn = styled.button`
// border-radius: 10px;
// padding: 5px 10px;
// font-size: 16px;
// font-weight: 400;
// border: 1px solid;
// background-color: white;

// &:hover {
//   color: white;
//   background-color: blue;
// }
// `;
