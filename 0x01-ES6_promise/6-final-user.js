import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

  const resultArray = [
    { status: userResult.status, value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason },
    { status: photoResult.status, value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason },
  ];

  return resultArray;
}

/*
export default function handleProfileSignup(firstName, lastName, fileName) {
  return signUpUser(firstName, lastName)
    .then(() => uploadPhoto(fileName))
    .catch((err) => err);
}
*/
