# Proof of Humanity: SDK + poh-validators-react Integration

Proof of Humanity is a bot protection services SDK integrated with the HUMAN Protocol. Utilize our SDK for backend verification, then implement our [`poh-validators-react`](https://npmjs.com/package/poh-validators-react) package to effortlessly embed human verification components in your React frontend.

## 📚 SDK Documentation (Beta)

While we're perfecting our SDK documentation, you can delve into our current [Beta Documentation](https://poh-docs.netlify.app/).

## 🎥 Understanding the Integration (Coming Soon)

We're crafting a Loom video for a clearer insight into our integrated solution. Stay tuned! [Loom Video Explanation (In Progress)](https://loom.com/link-to-your-video).

## 📅 Our Journey

Peek into our hackathon memories, strategies, and deliberations in our [Compiled Virtual Meetings](https://drive.google.com/link-to-your-meetings-folder).

## 🏁 Getting Started with the SDK

### 🛠️ Setting Up the Backend

1. To set up the backend, you'll need to create an `.env` file in the root directory of your project. Here's an example structure of the `.env` file:
    
    ```
    VALIDATOR_WALLET_ADDRESS=<Your_Wallet_Address_Here>
    VALIDATOR_PRIVATE_KEY=<Your_Private_Key_Here>
    TELEGRAM_BOT_TOKEN=<Your_Telegram_Bot_Token_Here>
    PASSAGE_APP_ID=<Your_Passage_App_ID_Here>
    PASSAGE_API_KEY=<Your_Passage_API_Key_Here>
    WORLDCOIN_ACTION_NAME=<Your_Worldcoin_Action_Name_Here>
    WORLDCOIN_APP_ID=<Your_Worldcoin_App_ID_Here>
    DATABASE_URL=<Your_Database_URL_Here>
    ```
    
    Replace the placeholder values (`<...>`) with your own respective details.
    
    For contributors who already have a `.env` file provided by the team lead, you can skip this step.

2. Install the necessary dependencies:
   ```bash
   yarn install
   ```
3. Run tests to ensure correct setup (known issues of failing tests, but can be ignored):
   ```bash
   yarn test
   ```
3. Run development server:
   ```bash
   yarn dev
   ```

### 🤖 Running the Humangram Bot Module
To run the bot module and start using Humangram, follow these steps:

1. Make sure you created and obtained the Telegram bot token from [BotFather](https://t.me/botfather).
2. Open the .env file in your code editor.
3. Add 'TELEGRAM_BOT_TOKEN' environment variable with your actual Telegram bot token obtained from BotFather.
4. Save the changes.

Now, you are ready to run the bot module using the command:

```bash
node bot.js
```

The bot will start running, and you can interact with it on Telegram to perform the Proof of Humanity actions.

You can access our own Humangram bot [here](http://t.me/HumanityGuardBot).

## 🔌 Integrate with poh-validators-react in your Frontend

Once your backend is up and running with our SDK, enhance your frontend with our React components:

1. Install the `poh-validators-react` package:
   ```bash
   npm install poh-validators-react
   ```
   or
   ```bash
   yarn add poh-validators-react
   ```

2. Start using our human verification components, such as `BiometricsValidator` and `HumangramValidator`, in your React applications. Detailed usage can be found in the [`poh-validators-react` README](https://npmjs.com/package/poh-validators-react).

### 🚀 Contribute to the npm package

For those who want to contribute to the npm package, ensure your `.env` file also includes the following:

```
STORYBOOK_WORLDCOIN_APP_ID=<Your_Storybook_Worldcoin_App_ID_Here>
STORYBOOK_PASSAGE_APP_ID=<Your_Storybook_Passage_App_ID_Here>
STORYBOOK_WEBSOCKET_SERVER_URL=<Your_Websocket_Server_URL_Here>
```

Replace the placeholder values (`<...>`) with your own respective details.

## 🌟 Contribution Guidelines

To contribute to the project, please follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Vernyl/proof-of-humanity.git
   cd proof-of-humanity
   ```

2. Pull the latest changes from the `develop` branch to ensure you have the most up-to-date code:
   ```bash
   git checkout develop
   git pull origin develop
   ```

3. Create a new feature branch for your contribution. It's recommended to name the branch descriptively:
   ```bash
   git checkout -b feature/descriptive-branch-name
   ```

4. Make your changes and commit them to the feature branch:
   ```bash
   git add .
   git commit -m "Add your descriptive commit message here"
   ```

5. Push your feature branch to the remote repository on GitHub:
   ```bash
   git push origin feature/descriptive-branch-name
   ```

6. Go to the repository on GitHub and click on the "Compare & pull request" button for your feature branch.

7. Add a title and description for your pull request, outlining the changes you made and any relevant information.

8. Request a review from team members or the Team Lead by mentioning them in the pull request description using `@username`.

9. Once your pull request has been reviewed and approved, it will be merged into the `develop` branch.

10. Congratulations on your contribution! Your changes are now part of the project.

By following these steps, you can collaborate effectively and contribute to enhancing the Proof of Humanity SDK with the HUMAN Protocol. Happy coding!
