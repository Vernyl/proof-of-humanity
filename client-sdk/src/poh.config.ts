const config = {
    validators: {
      biometrics: {
        // @ts-expect-error
        app_id: import.meta.env.STORYBOOK_PASSAGE_APP_ID,
        // @ts-expect-error
        url: import.meta.env.STORYBOOK_BIOMETRICS_VALIDATOR_URL,
      },
      humangram: {
        // @ts-expect-error
        websocket: import.meta.env.STORYBOOK_WEBSOCKET_SERVER_URL,
      },
      worldcoin: {
        // @ts-expect-error
        app_id: import.meta.env.STORYBOOK_WORLDCOIN_APP_ID,
        // @ts-expect-error
        action: import.meta.env.STORYBOOK_WORLDCOIN_ACTION_NAME,
        // @ts-expect-error
        url: import.meta.env.STORYBOOK_WORLDCOIN_VALIDATOR_URL,
      },
      // Add any other validators here
    }
  };

export default config;
