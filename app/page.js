import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Submit from './submit';

async function writeCookieAndRedirect(formData) {
  'use server';

  const options = {
    secure: true,
    httpOnly: true,
  };

  cookies().set({
    name: 'latitude',
    value: formData.get('latitude'),
    ...options,
  });
  cookies().set({
    name: 'longitude',
    value: formData.get('longitude'),
    ...options,
  });

  redirect('/hoge');
}

export default function Home() {
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="p-5 text-3xl font-bold text-center tracking-widest">
        近くのバス停🚌
      </h1>
      <form action={writeCookieAndRedirect}>
        <div className="text-center">
          <Submit />
        </div>
        <input type="hidden" name="latitude" value="" required />
        <input type="hidden" name="longitude" required />
        <input type="hidden" name="now" required />
      </form>
    </div>
  );
}
