/* eslint-disable @typescript-eslint/no-var-requires */
const { PHASE_PRODUCTION_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      ...defaultConfig,
    };
  }

  return defaultConfig;
};
