import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const formatValue = value =>
  new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
