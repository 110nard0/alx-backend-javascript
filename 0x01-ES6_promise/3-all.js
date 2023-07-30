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
