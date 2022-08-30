function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

test('Capitalize', () => {
  expect(capitalize('sonick')).toBe('Sonick');
})