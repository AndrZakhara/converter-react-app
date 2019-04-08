// export default () => ({
//   weatherWrapper: {
// width: '500px',
// background: '#fff',
// borderRadius: '5px',
// display: 'flex',
// justifyContent: 'space-between',
// alignItems: 'center',
// flexDirection: 'column',
//   },
//   weatherTitle: {
// width: '100%',
// display: 'flex',
// justifyContent: 'space-around',
// alignItems: 'center',
// background: '#3f51b5',
// borderRadius: '5px 5px 0 0',
// color: '#fff',
// marginBottom: '20px',
//   },
//   weatherContent: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//     flexWrap: 'wrap',
//     width: '100%',
//     height: '210px',
//     padding: '20px 10px',
//     position: 'relative',
//   },
//   weatherContentTemp: {
//     fontSize: '95px',
//     margin: '0',
//     position: 'absolute',
//     top: '15px',
//     left: '35px',
//   },
//   weatherContentShortInfo: {
//     width: '100%',
//     fontSize: '15px',
//     margin: '0',
//     paddingRight: '10px',
//     listStyle: 'none',
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   weatherContentImg: {
//     position: 'absolute',
//     top: '5px',
//     right: '35px',
//     width: '30%',
//     height: 'auto',
//   },
// });

import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  width: 500px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const WeatherTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.theme.main};
  border-radius: 5px 5px 0 0;
  color: #fff;
  margin-bottom: 20px;
`;

export const WeatherContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 100%;
  height: 210px;
  padding: 20px 10px;
  position: relative;
`;

export const WeatherContentTemp = styled.div`
  font-size: 95px;
  margin: 0;
  position: absolute;
  top: 15px;
  left: 35px;
`;

export const WeatherContentImg = styled.img`
  position: absolute;
  top: 5px;
  right: 35px;
  width: 30%;
  height: auto;
`;

export const WeatherContentShortInfo = styled.ul`
  width: 100%;
  font-size: 15px;
  margin: 0;
  padding-right: 10px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
