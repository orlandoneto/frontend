export default {
  isKey: (object, key) => {
    return object ? hasOwnProperty.call(object, key) : false;
  },

  generateUniqueKey: () => {
    return `_${Date.now().toString(36) + Math.random().toString(36).substr(2)}`;
  },

  capitalize: str => {
    if (str === undefined) return '';
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },

  removeSpaceString: value => {
    if (!value) return '';
    return value.replace(/\s/g, '');
  },

  zipCodeClear: zipCode => {
    if (!zipCode) return '';
    return zipCode.replace('-', '');
  },

  hidePartCard: numberCard => {
    if (!numberCard) return '';
    return `*****${numberCard.split(' ')[3]}`;
  },

  showLastDigitsCard: numberCard => {
    if (!numberCard) return '';
    return `${numberCard.split(' ')[3]}`;
  },

  extractIdOfName: name => {
    try {
      const id = name.split('(')[1];
      return id.split(')')[0];
    } catch (error) {
      return null;
    }
  },

  extractIdOfString: id => {
    try {
      return id.split('_')[1];
    } catch (error) {
      return null;
    }
  },

  isNull: (value, attribute) => {
    if (value === null || value === undefined) {
      return '';
    }
    return value[`${attribute}`];
  },

  isNullIndex: (value, attribute, index) => {
    if (value === null || value === undefined) {
      return '';
    }
    return value[`${attribute}`][index];
  },

  isObjectEmpty: object => {
    if (JSON.stringify(object) === '{}') {
      return false;
    }

    if (Object.values(object).every(attribute => attribute === null || attribute === '')) {
      return false;
    }

    return true;
  },

  unitConversionKm: distance => {
    if (distance !== undefined) {
      return String(Math.floor(Number(distance) * 100) / 100).replace('.', ',');
    }

    return '0,0';
  },

  unitConversionMm: distance => {
    if (distance !== undefined) {
      return String(Number(distance) * 100).replace('.', ',');
    }

    return '0,0';
  },

  getBusinessOpen: () => {
    return getBusinessOpen();
  },

  dayOfWeek: () => {
    let week = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    let day = new Date();
    return week[day.getDay()];
  },

  dayNameOfWeek: () => new Date().getDay(),

  formatoMoeda: num => {
    if (num !== undefined) {
      if (num === 0 || num === '0') return '0,00';
      if (String(Math.floor(Number(num))).length < 4) {
        return num
          ?.toFixed(2)
          ?.replace('.', ',')
          ?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      } else {
        return num
          ?.toFixed(2)
          ?.replace('.', ',')
          ?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          ?.replace(',', '.');
      }
    }
    return '0,00';
  },

  formatarTempoEntrega: num => {
    if (num !== undefined) {
      if (num.indexOf('bd') != -1) {
        const dia = num.replace('bd', '');
        if (dia != 1) {
          return `${dia} dias úteis`;
        } else {
          return `${dia} dia útil`;
        }
      }

      if (num.indexOf('d') != -1) {
        const dia = num.replace('d', '');
        if (dia != 1) {
          return `${dia} dias`;
        } else {
          return `${dia} dia`;
        }
      }

      if (num.indexOf('h') != -1) {
        const hora = num.replace('h', '');
        if (hora != 1) {
          return `${hora} horas`;
        } else {
          return `${hora} hora`;
        }
      }

      if (num === '60m') {
        return '1 hora';
      }
    }
    return num;
  },

  dataAtualFormatada: () => {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length == 1 ? '0' + mes : mes,
      anoF = data.getFullYear();
    return diaF + '/' + mesF + '/' + anoF;
  },

  dataFormatada: data => {
    var dia = data.getUTCDate().toString(),
      diaF = dia.length == 1 ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length == 1 ? '0' + mes : mes,
      anoF = data.getFullYear();
    return diaF + '/' + mesF + '/' + anoF;
  },

  accentsRemove: s => {
    let r = s.toLowerCase();
    return r.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  },

  findNameCard: cardName => {
    switch (cardName) {
      case 'americanExpress':
        return 'American Express';

      case 'visa':
        return 'Visa';

      case 'diners':
        return 'Diners';

      case 'mastercard':
        return 'Mastercard';

      case 'discover':
        return 'Discover';

      case 'aura':
        return 'Aura';

      case 'hipercard':
        return 'Hipercard';

      case 'elo':
        return 'Elo';

      case 'visaElectron':
        return 'Visa Electron';

      case 'jbc':
        return 'JCB';

      case 'maestro':
        return 'Maestro';

      case 'cartaoDebitoVirtualCaixa':
        return 'Cartão de débito virtual Caixa';

      case 'vale':
        return 'Vale';

      default:
        break;
    }
  },

  getDistanceByRaio: (Latitude1, Longitude1, Latitude2, Longitude2) => {
    let RaioTerraEmML = 3963.1;
    let RaioTerraEmKM = 6377.99121;
    let PI = Math.PI;

    let lat1Radians;
    let long1Radians;
    let lat2Radians;
    let long2Radians;

    lat1Radians = (Latitude1 * PI) / 180;
    long1Radians = (Longitude1 * PI) / 180;
    lat2Radians = (Latitude2 * PI) / 180;
    long2Radians = (Longitude2 * PI) / 180;

    return (
      Math.acos(
        Math.cos(lat1Radians) * Math.cos(long1Radians) * Math.cos(lat2Radians) * Math.cos(long2Radians) +
          Math.cos(lat1Radians) * Math.sin(long1Radians) * Math.cos(lat2Radians) * Math.sin(long2Radians) +
          Math.sin(lat1Radians) * Math.sin(lat2Radians)
      ) * RaioTerraEmKM
    );
  },

  getDistance: (lat1, lon1, lat2, lon2) => {
    let R = 6371; // km
    let dLat = toRad(lat2 - lat1);
    let dLon = toRad(lon2 - lon1);
    let lat = toRad(lat1);
    let log = toRad(lat2);

    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat) * Math.cos(log);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    function toRad(Value) {
      return (Value * Math.PI) / 180;
    }

    return d;
  },
};

function getBusinessOpen() {
  // Establish Open/Closed Variable
  let currentStatus = 'Fechado';
  // Establish Day of Week
  const date = new Date();

  function getWeekDay(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }
  const day = date.getDate();
  const weekdate = getWeekDay(date);
  const year = date.getFullYear();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours() - 7; // set your offset from Greenwich Mean Time here, Arizona is 7 hours

  // variables for business
  const days = {
    Sunday: {
      openTime: 7,
      closeTime: 21,
    },
    Monday: {
      openTime: 7,
      closeTime: 21,
    },
    Tuesday: {
      openTime: 7,
      closeTime: 21,
    },
    Wednesday: {
      openTime: 7,
      closeTime: 21,
    },
    Thursday: {
      openTime: 7,
      closeTime: 21,
    },
    Friday: {
      openTime: 7,
      closeTime: 21,
    },
    Saturday: {
      openTime: 7,
      closeTime: 21,
    },
  };
  const theDay = days[weekdate];
  const theTime = date.getHours();

  console.log('VALOR', hours >= theDay.openTime && hours < theDay.closeTime);

  // function statement
  if (hours >= theDay.openTime && hours < theDay.closeTime) currentStatus = 'Aberto';

  return currentStatus;
}
