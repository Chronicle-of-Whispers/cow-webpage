const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function sitePath(path = '/') {
  const normalizedPath = path.replace(/^\//, '');
  return normalizedPath ? `${base}/${normalizedPath}` : `${base}/`;
}
