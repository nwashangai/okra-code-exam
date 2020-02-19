export default time =>
  new Date(time).toLocaleString('br', {
    day: '2-digit',
    month: 'long',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
