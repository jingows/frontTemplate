//---import the dependencies
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//---import the store
import { Context } from '../../store/context';

const BarraLateral = () => {
  const { state, decision } = useContext(Context);

  return (
    <div
      onClick={() => {
        decision({ type: 'url' });
      }}
    >
      <ul>
        <Link to="/app/" className={state.url[1] === '' ? 'selecionado' : ''}>
          <li>opção 1</li>
        </Link>
      </ul>
    </div>
  );
};

export default BarraLateral;
