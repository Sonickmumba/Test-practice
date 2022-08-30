function stringLength(str) {
  if (str.length > 1 && str.length < 10) {
    return 'Valid';
  }
  return 'Invalid';
}

// export default stringLength;
module.exports = stringLength;