import wiki from 'wikijs';

const start = async (title: string) => {
  const page = await wiki().page(title);
  const summary = await page.summary();

  console.info(summary);
};

start('Steve Jobs');
