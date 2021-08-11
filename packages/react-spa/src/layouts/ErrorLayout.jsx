import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';

import HomeLayout from './HomeLayout';

const ErrorLayout = ({ err }) => {
  const enumPhrases = {
    404: {
      title: '404',
      subtitle: 'Страница не найдена.',
    },
    'Loading chunk': {
      title: 'Ошибка загрузки',
      subtitle: 'При загрузке страницы произошла ошибка. Попробуйте обновить страницу.',
    },
  };

  let title = '';
  let subtitle = '';
  const message = get(err, 'response.data.message', '');
  const subMessage = get(err, 'message', '');
  if (message) title = message;
  if (subMessage) subtitle = subMessage;
  const enumKey = Object.keys(enumPhrases).find((key) => title.includes(key) || subtitle.includes(key));
  if (enumKey && enumPhrases[enumKey]) {
    const phrase = enumPhrases[enumKey];
    if (phrase.title) title = phrase.title;
    if (phrase.subtitle) subtitle = phrase.subtitle;
  }
  return (
    <HomeLayout>
      <div style={{ width: '100%', maxWidth: 340, padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 72 }}>🗿</div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </HomeLayout>
  );
};

ErrorLayout.propTypes = {
  err: PropTypes.objectOf(Object).isRequired,
};

export default ErrorLayout;
