// import React from 'react'
// import './../common/static/css/y_loom.css'
// import { useNavigate } from 'react-router-dom';
// const Y_loom = () => {
//   const navigate = useNavigate();

//   const handleloomnameClick = () => {
//     navigate('../yloom-chat');
//   };

//   return (
//     <div style={{height:'100vh'}} className='y-loomcontainer'>
//     <div className='Y-loom_cards-container' style={{display:'grid',gridTemplateColumns:'repeat(10,1fr)',gridTemplateRows:'repeat(10 ,1fr)'}}>
// <div onClick={handleloomnameClick} style={{border:'2px solid blue',cursor:'pointer'}}>
//   <p>
//     Loom:-ABC
//   </p>
// </div>
// <div style={{border:'2px solid blue'}}></div>
// <div style={{border:'2px solid blue'}}></div>
// <div style={{border:'2px solid blue'}}></div>
// <div style={{border:'2px solid blue'}}></div>
// <div style={{border:'2px solid blue'}}></div>


// <div style={{border:'2px solid blue'}}></div>
// <div style={{border:'2px solid blue'}}></div>
// <div style={{border:'2px solid blue'}}></div>
// <div style={{border:'2px solid blue'}}></div>
// <div style={{border:'2px solid blue'}}></div>
// <div style={{border:'2px solid blue'}}></div>
//     </div>
//     </div>
//   )
// }

// export default Y_loom





import React from 'react';
import './../common/static/css/y_loom.css';
import { useNavigate } from 'react-router-dom';

const Y_loom = () => {
  const navigate = useNavigate();

  const handleloomnameClick = () => {
    navigate('../yloom-chat');
  };

  const looms = [
    { id: 1, name: 'Loom:-ABC' },
    { id: 2, name: 'Loom:-ABC' },
    { id: 3, name: '' },
    { id: 4, name: '' },
    { id: 5, name: '' },
    { id: 6, name: '' },
    { id: 7, name: '' },
    { id: 8, name: '' },
    { id: 9, name: '' },
    { id: 10, name: '' },
    { id: 11, name: '' },
    { id: 12, name: '' },



  ];

  return (
    <div  className="y-loomcontainer">
      <div
        className="Y-loom_cards-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gridTemplateRows: 'repeat(10, 1fr)',
        }}
      >
        {looms.map((loom, index) => (
          <div className='yloom-cards'
            key={loom.id}
            onClick={handleloomnameClick }
            style={{
       
              cursor: loom.name ? 'pointer' : 'default',
            }}
          >
            <p>{loom.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Y_loom;





// import React from 'react';
// import './../common/static/css/y_loom.css';

// const Y_loom = () => {
//   const gridItems = Array.from({ length: 100 }).map((_, index) => (
//     <div key={index} style={{ border: '2px solid blue' }}>
//       {index === 0 && <p>Loom:-LU00529</p>}
//       {index === 1 && <p>Loom:-LU00529</p>}
//       {index === 2 && <p>Loom:-LU00529</p>}
//       {index === 3 && <p>Loom:-LU00529</p>}
//       {index === 4 && <p>Loom:-LU00529</p>}
//       {index === 5 && <p>Loom:-LU00529</p>}
//       {index === 6 && <p>Loom:-LU00529</p>}
//       {index === 7 && <p>Loom:-LU00529</p>}
//       {index === 8 && <p>Loom:-LU00529</p>}
//     </div>
//   ));

//   return (
//     <div style={{ height: '100vh' }} className='y-loomcontainer'>
//       <div
//         className='Y-loom_cards-container'
//         // style={{
//         //   display: 'grid',
//         //   gridTemplateColumns: 'repeat(10, 1fr)',
//         //   // gridTemplateRows: 'repeat(5, 1fr)'
//         // }}
//       >
//         {gridItems}
//       </div>
//     </div>
//   );
// };

// export default Y_loom;
