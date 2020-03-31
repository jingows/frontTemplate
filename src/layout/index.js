//---import the dependencies
import React, { useReducer } from 'react';

//---import the styles
import { Conteudo } from './styles';

//---import the store
import { Context } from '../store/context';
import { tomadaDecisao, estadoInicial } from '../store/reducer/reducer';

//---import components
import Routes from '../routes/routes';
import Header from './header';
import BarraLateral from './barraLateral';

const Layout = () => {
  const [state, decision] = useReducer(tomadaDecisao, estadoInicial);

  return (
    <>
      <Context.Provider value={{ state, decision }}>
        <Header />
        <BarraLateral />
        <Conteudo>
          <Routes />
        </Conteudo>
      </Context.Provider>
    </>
  );
};

export default Layout;
