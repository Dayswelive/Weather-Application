export default function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const options = { weekday: "short", day: "numeric", month: "short" };
  return date.toLocaleDateString(undefined, options);
}
