import FormControl from '@material-ui/core/FormControl';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 650px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${props => props.theme.main};
  border-radius: 5px;
  background: #fff;
  padding-bottom: 30px;
`;

export const ConverterTitle = styled.div`
  background: ${props => props.theme.main};
  color: #fff;
  border-radius: 5px 5px 0 0;
  width: 100%;
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 50px;
`;

export const Heading = styled.h2`
  margin: 0;
`;
export const CurrencyLine = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const StyledFormControl = styled(FormControl)`
  width: 220px;
  text-align: center;
`;

export const FeeWrapper = styled(FormControl)`
  width: 50%;
  display: flex;
  justify-content: space-around !important;
  align-items: center !important;
  flex-direction: row !important;
`;

export const TextField = styled.p`
  font-size: 23px;
  text-transform: capitalize;
`;

export const Select = styled(Field)`
  width: 220px;
  border: 1px solid #797979;
  border-radius: 5px;
  padding: 10px 5px;
  font-size: 18px;
  text-indent: 7px;
  cursor: pointer;
`;

export const InputAmount = styled(Field)`
  width: 209px;
  border: 1px solid #797979;
  border-radius: 5px;
  padding: 10px 5px;
  font-size: 18px;
  text-indent: 7px;
`;

export const FeeSelect = styled(Field)`
  width: 50px;
  border: 1px solid #797979;
  border-radius: 5px;
  padding: 10px 5px;
  font-size: 18px;
  text-indent: 7px;
  cursor: pointer;
`;

export const BottomBtnsWrap = styled.div`
  width: 50%;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`;

export const WrapperBuyBtn = styled.div`
  position: relative;
`;

export const BuyBtn = styled(Button)`
  width: 150;
  font-size: 20;
  background: ${props => props.theme.main} !important;
  margin-bottom: 5px !important;
`;

export const ButtonProgress = styled(CircularProgress)`
  position: absolute;
  top: 25%;
  left: 45%;
`;
