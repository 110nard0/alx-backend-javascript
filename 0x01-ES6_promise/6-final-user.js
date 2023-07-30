import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);
  const promises = [userPromise, photoPromise];

  const resultArray = [];
  return Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        resultArray.push({
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : result.reason,
        });
      });
      return resultArray;
    });
}
