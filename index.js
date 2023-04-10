import metaObjects from "./metaobject/metaobject.js";
import graphQL from './graphql.js';
import fs from 'fs';

const shopGraphQl = "https://vtopo.myshopify.com/admin/api/2023-01/graphql.json"; // VTOPO
const accessToken = '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'; // VTOPO


const handleArr = [];

metaObjects.forEach((item, ind, obj) => {
    if (ind == 1693) return;
    const fields = new Map();
    item.metaobject.fields.forEach((field, index, arr) => {
        if (field.value == 'NC') arr[index].value = "";
        if (field.value == 'NS') arr[index].value = "";
        if (field.value == '.') arr[index].value = "";
        if (field.key == 'distance') {
            const splitArr = field.value.split('/');
            if (splitArr.length > 0) {
                arr[index].value = splitArr[0];
            }
        }
        if (field.key == 'denivelee_positive') {
          const splitArr = field.value.split('/');
          if (splitArr.length > 0) {
              arr[index].value = splitArr[0];
          }
        }
        if (field.key != 'profil') {
          field.value = field.value.replace(`\"]`, '');
          field.value = field.value.replace(`[]`, '');
          arr[index].value = field.value.replace(`[\"`, '');
        } else {
          field.value = JSON.parse(field.value);
          arr[index].value = field.value;
        }
    });
    item.metaobject.fields.map(field => {
        fields.set(field.key, field.value);
    });
    handleArr.push({
        handle:             item.metaobject.handle,
        titre:              fields.get('titre'),
        departement:        fields.get('departement'),
        difficulte:         fields.get('difficulte'),
        distance:           fields.get('distance'),
        denivelee_positive: fields.get('denivelee_positive'),
        denivelee_negative: fields.get('denivelee_negative'),
        horaire:            fields.get('horaire'),
        niveau:             fields.get('niveau'),
        profil:             fields.get('profil'),
        discipline:         fields.get('discipline'),
        pays:               fields.get('pays'),
        region:             fields.get('region')
    });
});


const countTime = (arg) => {
  arg = String(arg);
  arg = arg.padStart(4,0);
  let hours = parseInt(arg.slice(0,2));
  let mins = parseInt(arg.slice(2,4));
  return mins + hours * 60;
}

const badgeColor = (arg) => {
  let color = 'expert';
  switch (arg) {
    case "Initiés":
      color = 'init';
      break;
    case "Famille et Initiation":
      color = 'famille';
      break;
    default:
      break;
  }
  return color;
}



const metaobjectData = [];
handleArr.map(itineraire => {
  metaobjectData.push([
    {
      html: `<a class="niveau niveau-${badgeColor(itineraire.niveau)}" href='/pages/itineraire/${itineraire.handle}'>${itineraire.titre}</a>`,
      value: `${itineraire.titre}`
    },
    {
      html: `${itineraire.departement}`,
      value: `${itineraire.departement}`
    },
    {
      html: `${itineraire.difficulte}`,
      value: `${itineraire.difficulte}`
    },
    {
      html: `${itineraire.distance ? itineraire.distance + 'km': ''}`,
      value: `${itineraire.distance}`
    },
    {
      html: `${itineraire.denivelee_positive ? itineraire.denivelee_positive + 'm': ''}`,
      value: `${itineraire.denivelee_positive}`
    },
    {
      html: `${itineraire.denivelee_negative ? itineraire.denivelee_negative + 'm': ''}`,
      value: `${itineraire.denivelee_negative}`
    },
    {
      html: `${(itineraire.horaire == "00:00" ? "" : itineraire.horaire)}`,
      value: `${countTime((itineraire.horaire == "00:00" ? "" : itineraire.horaire).replace(':',''))}`
    },
    {
      html: ``,
      value: `${itineraire.niveau}`
    },
    {
      html: ``,
      value: itineraire.profil
    },
    {
      html: ``,
      value: `${itineraire.discipline}`
    },
    {
      html: ``,
      value: `${itineraire.pays}`
    },
    {
      html: ``,
      value: `${itineraire.region}`
    }
  ]);
});

var stream = fs.createWriteStream("metaobjects.txt");

// delete metaobjectData[1693];

stream.once('open', function(fd) {
    stream.write(`${JSON.stringify(metaobjectData)}`);
    stream.end();
});
