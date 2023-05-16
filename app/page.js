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
    <div class="mx-auto max-w-xl">
      <h1 class="p-5 text-3xl font-bold text-center tracking-widest">
        近くのバス停🚌
      </h1>
      <form method="post" action={writeCookieAndRedirect}>
        <div class="text-center">
          <Submit />
        </div>
        <input type="hidden" name="latitude" value="" required />
        <input type="hidden" name="longitude" required />
        <input type="hidden" name="now" required />
      </form>
    </div>
  );
}
