import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((promises) => {
      const result = [];
      promises.forEach((promise) => {
        result.push({
          status: promise.status,
          value: promise.status === 'fulfilled' ? promise.value : `${promise.reason}`,
        });
      });
      return result;
    });
}
