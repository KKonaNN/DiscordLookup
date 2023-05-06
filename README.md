<h1>DiscordLookup</h1>

DiscordLookup is a web-based application that allows you to easily lookup Discord user IDs and retrieve information about Discord users. This is especially useful for Discord server owners and administrators who need to verify the identities of their members or for anyone who needs to quickly retrieve information about a particular Discord user.

In addition to the ID lookup feature, DiscordLookup also has a bot add feature. By navigating to /bot/<bot_id>, you will be redirected to the Discord bot invite page where you can easily add the bot to your server.

The website is built using Node.js and EJS, making it fast, efficient, and easy to use.

<br>

<a href="https://github.com/KKonaNN/discordlookup">
  <img src="https://img.shields.io/badge/DiscordLookup-Check%20out%20the%20project-brightgreen" alt="DiscordLookup">
</a>

<br>

<h2>Features</h2>

<ul>
  <li>Lookup Discord infos by user id</li>
  <li>Retrieve Discord user avatars</li>
  <li>View other relevant information about Discord users</li>
  <li>Fast and efficient</li>
  <li>Easy to use web interface</li>
  <li>Bot add feature for easy bot invites</li>
</ul>

<br>

<h2>Installation</h2>

<p>To use DiscordLookup, you need to have Node.js and npm installed on your system. You can then clone this repository and install the required dependencies using npm. Here's how:</p>

<pre><code>git clone https://github.com/KKonaNN/discordlookup.git
cd discordlookup
npm install express
npm install node-fetch
npm install ejs
</code></pre>

<p>Before starting the server, you need to set up your Discord bot token in the `.env` file. To do this, create a new file called `.env` in the root directory of the project, and add the following line:</p>

<pre><code>TOKEN=your_bot_token_here</code></pre>

<p>Replace `your_bot_token_here` with your actual Discord bot token. If you don't have a bot token yet, you can create one by following the instructions in the <a href="https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot">Discord.js guide</a>.</p>

<p>By default, the server will listen on port 3000. If you want to change the port number, you can set the `PORT` environment variable in the `.env` file. For example:</p>

<pre><code>PORT=8080</code></pre>

<p>This will start the server on port 8080 instead of the default port 3000.</p>

<br>

<h2>Usage</h2>

<p>Once you have installed the dependencies and set up the `.env` file, you can start the server using the following command:</p>

<pre><code>npm start
// or
node main.js
</code></pre>

<p>This will start the server on <code>http://localhost:3000/</code>. You can then visit the website in your browser to start using DiscordLookup.</p>

<p>To lookup a Discord user ID, simply enter the username or discriminator in the search bar and press enter. To add a bot to your Discord server, navigate to <code>/bot/&lt;bot_id&gt;</code> and you will be redirected to the Discord bot invite page.</p>

<br>

<h2>Contributing</h2>

<p>We welcome contributions from the community! If you have any ideas or suggestions for improving DiscordLookup, please feel free to submit a pull request.</p>

<br>

<h2>License</h2>

<p>DiscordLookup is licensed under the MIT License. See <a href="https://github.com/your-username/discordlookup/blob/main/LICENSE">LICENSE</a> for more information.</p>
