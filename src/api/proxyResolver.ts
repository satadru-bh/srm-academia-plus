/**
 * Resolves incoming /api/* requests to either CampusWeb upstream or SRM PYQ API upstream.
 */
export function resolveProxyTarget(pathname: string, search: string = ''): {
  targetUrl: string;
  isPyq: boolean;
} {
  const cleanPath = pathname.replace(/^\//, '');

  if (cleanPath.startsWith('api/pyq')) {
    const pyqSub = cleanPath.replace(/^api\/pyq\/?/, '');
    return {
      targetUrl: `https://srm-pyq-api.onrender.com/${pyqSub}${search}`,
      isPyq: true,
    };
  }

  return {
    targetUrl: `https://api.campusweb.in/${cleanPath}${search}`,
    isPyq: false,
  };
}
