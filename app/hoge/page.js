import { cookies } from 'next/headers';

export default function Hoge() {
  const latitude = cookies().get('latitude').value;
  const longitude = cookies().get('longitude').value;

  return (
    <div>
      lat={latitude} lon={longitude}
    </div>
  );
}
