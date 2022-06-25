import React from 'react';

const YouTube = ({ url, title }) => {
  return (
    <div
      class="relative h-0 overflow-hidden max-w-full w-full"
      style={{ paddingBottom: '56.25%' }}
    >
      <iframe
        src={url}
        frameborder="0"
        title={title}
        allowfullscreen
        class="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default YouTube;
