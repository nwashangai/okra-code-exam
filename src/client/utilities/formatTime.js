export default time =>
  new Date(time).toLocaleString('br', {
    day: '2-digit',
    month: 'short',
    year: '2-digit',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  });
