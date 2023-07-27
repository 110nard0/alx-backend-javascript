export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomInt = Date.now();
      const value = randomInt % 10;

      if (value > 5) {
        resolve(value);
      } else {
        reject(Error(`Too small: ${value}`));
      }
    }, 500);
  });
}
