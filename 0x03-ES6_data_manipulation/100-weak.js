const weakMap = new WeakMap();
export { weakMap };

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    let counter = weakMap.get(endpoint);
    counter += 1;
    weakMap.set(endpoint, counter);

    if (counter >= 5) throw Error('Endpoint load is high');
  }
}
