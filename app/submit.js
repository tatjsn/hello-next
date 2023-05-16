'use client';

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function handleSearch(event) {
  event.preventDefault();
  const form = event.currentTarget.closest('form');
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      form.latitude.value = pos.coords.latitude;
      form.longitude.value = pos.coords.longitude;
      form.now.value = Date.now();
      form.requestSubmit();
    },
    (err) => {
      console.log('Geo error:', error);
    },
    options
  );
}

export default function Submit() {
  return (
    <button
      onClick={handleSearch}
      class="inline-block px-8 py-5 bg-green-500 active:bg-green-700 font-bold"
      type="submit"
      id="proceed"
    >
      GPSでバス停を探す→
    </button>
  );
}
