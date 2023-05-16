import { cookies } from 'next/headers';

async function getPosition() {
  'use server';
  const latitude = cookies().get('latitude').value;
  const longitude = cookies().get('longitude').value;

  return [latitude, longitude];
}

export default async function Hoge() {
  const [latitude, longitude] = await getPosition();

  return (
    <div>
      lat={latitude} lon={longitude}
    </div>
  );
}
