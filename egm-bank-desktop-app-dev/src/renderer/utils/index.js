export function getEpochSecondsFromTimestamp(timestamp) {
  const date = new Date(timestamp); // Parse the timestamp string
  const epochMilliseconds = date.getTime(); // Get milliseconds since epoch

  if (isNaN(epochMilliseconds)) {
    return 60;
  }

  const epochSeconds = Math.floor(epochMilliseconds / 1000); // Convert to seconds (optional)
  return epochSeconds; // or epochMilliseconds if you need milliseconds
}
export function getEpochMinutesFromTimestamp(timestamp) {
  const date = new Date(timestamp); // Parse the timestamp string
  const epochMilliseconds = date.getTime(); // Get milliseconds since epoch

  if (isNaN(epochMilliseconds)) {
    return 1;
  }

  const epochSeconds = Math.floor(epochMilliseconds / 1000); // Convert to seconds (optional)
  const epochMinutes = Math.floor(epochSeconds / 60); // Convert to minutes (optional)
  return epochMinutes; // or epochMilliseconds if you need milliseconds
}
export function getEpochHoursFromTimestamp(timestamp) {
  const date = new Date(timestamp); // Parse the timestamp string
  const epochMilliseconds = date.getTime(); // Get milliseconds since epoch

  if (isNaN(epochMilliseconds)) {
    return 1;
  }

  const epochSeconds = Math.floor(epochMilliseconds / 1000); // Convert to seconds (optional)
  const epochMinutes = Math.floor(epochSeconds / 60); // Convert to Minutes (optional)
  const epochHours = parseFloat((epochMinutes / 60).toFixed(2));
  return epochHours; // or epochMilliseconds if you need milliseconds
}

export function formatToIndianCurrency(amount) {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(amount);
}

export const convertUTCToTimeStamp = (utcDate) => {
  if (!utcDate) {
    return '';
  }
  const year = utcDate.getFullYear().toString();
  const month = String(utcDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(utcDate.getDate()).padStart(2, '0');
  const hours = String(utcDate.getHours()).padStart(2, '0');
  const minutes = String(utcDate.getMinutes()).padStart(2, '0');
  const seconds = String(utcDate.getSeconds()).padStart(2, '0');
  const milliseconds = String(utcDate.getMilliseconds()).padStart(3, '0');
  const timestamp = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  return timestamp;
};
