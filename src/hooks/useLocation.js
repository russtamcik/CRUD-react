export function useLocation() {
  const { hash, pathname, port, search } = window.location;

  return { hash, pathname, port, search };
}
