import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const value = [];

  return uploadPhoto()
    .then((result) => value.push(result.body))
    .then(() => createUser())
    .then((response) => {
      value.push(response.firstName);
      value.push(response.lastName);
      console.log(value.join(' '));
    })
    .catch(() => console.log('Signup system offline'));
}

/*
export default async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    console.log(photo.body, user.firstName, user.lastName);
  } catch (e) {
    console.log('Signup system offline');
  }
}
*/
