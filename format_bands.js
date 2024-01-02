let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function formatName(name) {
  let formatName = name.replace(/\./, '');
  return formatName.split(' ').map(function(ele) {
    return ele[0].toUpperCase() + ele.slice(1);
  }).join(' ');
}

function processBands(data) {
  let bands = data.map(function(band) {
    band['country'] = 'Canada';
    band['name'] = formatName(band['name']);
    return band;
  });

  return bands;
}


console.log(processBands(bands));