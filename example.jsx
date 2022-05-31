function useGeoCoder(ymaps, addresses) {
  if (ymaps) {
    // addresses => [{geometry: [0, 0]}, {geometry: [0, 0]}]
    // return [{geometry: ...}, {geometry: ...}]
  }
}

function getGeometryByAddress(ymaps, address) {
  return ymaps.geocode(address).then(x => x.geoObjects.get(0).geometry);
}

function MyMap() {
  const [ymaps, setYMaps] = useState();
  const addresses = useSelector(store => store.addresses);
  const placemarks = useGeoCoder(ymaps, addresses);

  return <Map onLoad={(ymaps) => setYMaps(ymaps)}>
    {placemarks.map(placemark => <Placemark geometry={placemark.geometry} />)}
  </Map>;
}

