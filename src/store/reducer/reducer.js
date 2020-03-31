export function tomadaDecisao(state, action) {
  switch (action.type) {
    case 'url': {
      const url = window.location.pathname.split('/');
      return { ...state, url: url };
    }

    default:
      break;
  }
}

export const estadoInicial = {
  url: [],
};
