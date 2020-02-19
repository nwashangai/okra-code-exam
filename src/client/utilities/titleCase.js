export default sentence =>
  sentence.replace(/(^|\s)[a-z]/g, sentence => sentence.toUpperCase());
