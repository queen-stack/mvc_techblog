const {format_date} = require('../utils/helpers');

// creating test to format_date() that takes Date() objects & returns dates in MM/DD/YYYY format
test('format_date() returns a date string', () => {
    const date = new Date('2020-10-20 16:12:03');
  
    expect(format_date(date)).toBe('10/20/2020');
  });

const {format_plural} = require('../utils/helpers')

// plural point and comments
test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('lion', 2);
      const single = format_plural('tiger', 1);
      
      expect(plural).toBe('lions');
      expect(single).toBe('tiger');
});

