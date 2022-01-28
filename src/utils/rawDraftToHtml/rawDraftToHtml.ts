import draftToHtml from 'draftjs-to-html';

/**
 * Converts a draftJS object to an HTML string
 */

const rawDraftToHtml = (content: any, columns: number): string => {
  const html = draftToHtml(content, {}, false, ({ type, data }) => {
    const { src, alt, height, width } = data;

    if (type === 'IMAGE') {
      const alignment = data.alignment || 'center';
      const textAlign = alignment === 'none' ? 'center' : alignment;

      const paramWidth = width !== 'auto' ? `width=${width.substring(0, width.length - 2)}` : '';
      const paramHeight =
        height !== 'auto' ? `height=${height.substring(0, height.length - 2)}` : '';
      const joinParams = !!paramWidth && !!paramHeight ? '&' : '';

      const params = `${paramWidth}${joinParams}${paramHeight}`;
      const imgUrl = `${src}${params !== '' ? `?${params}` : ''}`;

      const figure = `
      <figure style="text-align:${textAlign};">
      <img src="${imgUrl}" style="max-width: 100%" />
      </figure>
      `;

      return alt ? `<a href="${alt}" target="_blank">${figure}</a> ` : figure;
    }
  });

  return `<div style='-webkit-column-count: ${columns};-moz-column-count: ${columns}; column-count: ${columns}'>${html}</div>`;
};

export default rawDraftToHtml;
