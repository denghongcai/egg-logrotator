'use strict';

const path = require('path');

module.exports = appInfo => {
  const exports = {
    logrotator: {
      filesRotateByHour: [
        path.join(appInfo.baseDir, `logs/${appInfo.name}/egg-web.log`),
        path.join(appInfo.baseDir, `logs/${appInfo.name}/egg-web.log`),
        // ignore unexist file
        path.join(appInfo.baseDir, `logs/${appInfo.name}/no-exist.log`),
      ],
    },
  };
  return exports;
};
