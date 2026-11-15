# Codenames

Codenames with shared rooms. It has Classic and After Dark modes, 2 to 4 teams, and adjustable black tiles. It's a static site on Vercel, and Firebase Realtime Database keeps everyone in a room in sync.

| File | What it is |
|---|---|
| `index.html` | The whole game |
| `firebase-config.js` | Your Firebase project settings |
| `database.rules.json` | Rules to paste into Firebase |
| `README.md` | This guide |

## 1. Set up Firebase (one time)

1. Open https://console.firebase.google.com and pick **codenames-by-vedant**.
2. In the left menu, go to **Build → Realtime Database → Create Database**.
   - Pick the location closest to you.
   - Choose **Start in locked mode**, then **Enable**.
3. At the top of the **Data** tab you'll see the database URL. Compare it with the `databaseURL` line in `firebase-config.js`:
   - **US databases:** the URL is `https://codenames-by-vedant-default-rtdb.firebaseio.com`, which is already filled in.
   - **Any other region:** the URL ends in `.firebasedatabase.app`. Replace the line with your URL.
4. Open the **Rules** tab, delete what's there, paste in everything from `database.rules.json`, and click **Publish**.
   These rules let anyone with a room's link read and play in that room. They block everything else, including listing other rooms.

Firebase may email you that your rules allow public access. That's expected, because guests play without accounts.

## 2. Put the files on GitHub

1. Go to https://github.com/new, name the repository (for example `codenames`), and click **Create repository**.
2. On the new repo page, click **uploading an existing file**.
3. Drag in all four files and click **Commit changes**.

## 3. Deploy on Vercel

1. Go to https://vercel.com/new. Sign in with GitHub if asked, and let Vercel see your repositories.
2. Find the `codenames` repo and click **Import**.
3. Set **Framework Preset** to **Other**. Leave Build Command and Output Directory empty.
4. Click **Deploy**. After about 30 seconds you'll get a link like `https://codenames-xyz.vercel.app`.

To get a nicer address, open the project's **Settings → Domains** and edit the `.vercel.app` name.

Every time you change a file on GitHub, Vercel redeploys automatically.

## 4. Play

1. Open your Vercel link, pick Classic or After Dark, and tap **Create a room**.
2. Open **Invite friends**, copy the room link, and send it to everyone.
3. Each person picks **Player** or **Spymaster** on their own phone. Spymasters see the colored key.
4. Guesses, turns, undo and new boards sync to everyone instantly.

The starting team rotates every game. To change the mode, teams, black tiles or word packs, open **Game setup** and tap **Deal new board with these settings**. That changes the board for the whole room.

The dot next to the room name shows the connection:

| Dot | Meaning |
|---|---|
| Green "Live" | Connected and syncing |
| Red "Blocked by database rules" | Redo step 1.4 |
| Red "Can't reach the game server" | The `databaseURL` in `firebase-config.js` is probably wrong (step 1.3) |

## Testing without Firebase

Add `?local` to the address, for example `https://your-site.vercel.app/?local#test-room`. Rooms then live in that one browser only, so you can open two tabs and watch them sync.

## Changing the words

The word lists are near the top of the `<script type="module">` section in `index.html`:

| List | Holds |
|---|---|
| `WORDS` | After Dark packs |
| `GENERAL` | Classic categories |
| `GROUPS` | After Dark balancing themes |

Edit the file on GitHub (open the file, then the pencil icon) and commit. Vercel redeploys on its own.

## A note on fairness

The answer key is stored in the shared database, so someone who knows browser developer tools could peek at it. Most Codenames sites work the same way, and it's fine among friends.
