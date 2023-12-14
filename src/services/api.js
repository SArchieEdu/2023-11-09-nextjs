export async function getHeadphones() {
  const result = await fetch("http://localhost:3001/api/products/", {
    next: { tags: ["headphones"] },
  });

  return result.json();
}

export async function getHeadphone(headphoneId) {
  const result = await fetch(
    `http://localhost:3001/api/product/${headphoneId}`
  );

  return result.json();
}

export async function getCodecs() {
  const result = await fetch(`http://localhost:3001/api/codecs`, {
    next: { revalidate: 5 },
  });

  return result.json();
}
