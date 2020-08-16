export const getPathWithPreservedParams = (path: string, url=window.location.href) => {
    const currParams = new URL(url).search;
    return `${path}${currParams ?? ''}`;
}