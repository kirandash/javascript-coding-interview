// Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end.

const loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
];

const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

// [{config_key: 100, location_key: 32, autoassign: 1}, {config_key: 100, location_key: 22, autoassign: 1}]
const result = loc
  .map((location, idx) =>
    location.location_key.map((key) => {
      return {
        config_key: bulkConfig[idx],
        location_key: key,
        autoassign: location.autoassign,
      };
    })
  ) // Nested map will return array of arrays
  // .reduce((arr, acc) => arr.concat(acc), []);
  .flat();

console.log(result);
