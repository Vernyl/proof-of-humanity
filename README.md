# Proof of Humanity

Proof of Humanity is a bot protection services SDK integrated with the HUMAN Protocol.

## How to Start Contributing

1. Ask the Team Lead for the `.env file` to set up your development environment.
2. Install the necessary dependencies by running the following command:
   ```bash
   yarn install
   ```
3. Run the tests to ensure everything is working as expected:
   ```bash
   yarn test
   ```

## Running the Humangram Bot Module
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

## Contribution Guidelines

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
