
// import React from 'react';
// import './../common/static/css/ytrader.css';
// import { useNavigate } from 'react-router-dom';

// const Y_trader = () => {
//   const navigate = useNavigate();

//   const handletradermnameClick = () => {
//     navigate('/sidebar/ytrader-chat');
//   };

//   const traders = [
//     { id: 1, name: 'Trader:-ABC' },
//     { id: 2, name: ''},
//     { id: 3, name: '' },
//     { id: 4, name: '' },
//     { id: 5, name: '' },
//     { id: 6, name: '' },
//     { id: 7, name: '' },
//     { id: 8, name: '' },
//     { id: 9, name: '' },
//     { id: 10, name: '' },
//     { id: 11, name: '' },
//     { id: 12, name: '' },



//   ];

//   return (
//     <div  className="y-tradercontainer">
//       <div
//         className="Y-trader_cards-container"
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(10, 1fr)',
//           gridTemplateRows: 'repeat(10, 1fr)',
//         }}
//       >
//         {traders.map((traders, index) => (
//           <div className='ytrader-cards'
//             key={traders.id}
//             onClick={traders.name ? handletradermnameClick : null}
//             style={{
       
//               cursor: traders.name ? 'pointer' : 'default',
//             }}
//           >
//             <p>{traders.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Y_trader;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../common/static/css/ytrader.css';

const Y_trader = () => {
  const navigate = useNavigate();

  const handletradermnameClick = () => {
    console.log('Trader clicked');
    navigate('/sidebar/ytrader-chat');
  };

  const traders = [
    { id: 1, name: 'Trader:-ABC' },
    { id: 2, name: 'Trader:-DEF' },
 
  ];

  return (
    <div className="y-tradercontainer">
      <div
        className="Y-trader_cards-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gridTemplateRows: 'repeat(10, 1fr)',
        }}
      >
        {traders.map((trader) => (
          <div
            className='ytrader-cards'
            key={trader.id}
            onClick={ handletradermnameClick }
            style={{
              cursor: trader.name ? 'pointer' : 'default',
            }}
          >
            <p>{trader.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Y_trader;

