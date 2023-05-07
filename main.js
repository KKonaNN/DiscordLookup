const express = require('express');
const app = express();
const { USER_FLAGS } = require("./constant");
const fetch = require('node-fetch');
require('dotenv').config();

app.set('view engine', 'ejs');
app.disable('x-powered-by');

app.use(express.static('cdn'));

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,POST");
    res.append("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/', (req, res) => {
    res.status(200).render('index.ejs', { title: 'Home', found: false });
});

app.post('/fetch/user/:id', async (req, res) => {
    let id = req.params.id;

    try {
        const fRes = await fetch(`https://canary.discord.com/api/v10/users/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bot ${process.env.TOKEN}`,
            },
        })
        const json = await fRes.json()

        if (json.id == undefined) {
            let output = {
                id: id,
                created_at: snowflakeToUtc(id),
            }
            return res.status(200).render('index.ejs', { user: output, found: false });
        }

        let publicFlags = [];
        USER_FLAGS.forEach((flag) => {
            if (json.public_flags & flag.bitwise) {
                publicFlags.push(flag.id)
            };
        });

        let avatarLink = null;
        if (json.avatar) {
            avatarLink = `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`;
        }

        let bannerLink = null;
        if (json.banner) {
            bannerLink = `https://cdn.discordapp.com/banners/${json.id}/${json.banner}`;
        }

        let output = {
            id: json.id,
            created_at: snowflakeToUtc(json.id),
            tag: `${json.username}#${json.discriminator}`,
            badges: publicFlags,
            avatar: {
                id: json.avatar,
                link: avatarLink,
                is_animated: json.avatar != null && json.avatar.startsWith("a_") ? true : false,
            },
            banner: {
                id: json.banner,
                link: bannerLink,
                is_animated: json.banner != null && json.banner.startsWith("a_") ? true : false,
                color: json.banner_color,
            },
            bot: json.bot,
        }
        res.status(200).render('index.ejs', { title: `${json.username}#${json.discriminator}`, user: output, found: true });
    } catch (err) {
        console.log(err);
        res.status(404).render('index.ejs', { found : false, title: '404' });
    }
});

function snowflakeToUtc(snowflakeId) {
    const SNOWFLAKE_EPOCH = 1420070400000;
    const timestamp = (snowflakeId / 4194304) + SNOWFLAKE_EPOCH;
    const date = new Date(timestamp);
    return date.toUTCString();
}

app.get('/bot/:id', (req, res) => {
    let id = req.params.id;
    res.redirect(`https://discord.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=0`);
});

app.use((req, res) => {
    res.status(404).render('index.ejs', { found : false, title: '404' });
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});
