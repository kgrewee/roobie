# Themes
Roobie themes can be found in `dist/themes`. Themes are required for Roobie to function as expected. All classes in Roobie rely on theme variables. The main goal of Roobie is to reuse theme variables and CSS classes instead of writing custom code for each component. To effectively build with roobie, you should be aware of the CSS variables available and use them. You should never write custom colors or CSS variables in any component. Using theme variables gives you the power to customize your entire website by changing a theme.

## Theme files
Create copies of `root.css`, `light.css` and `dark.css` from your install directory. Include them in your project instead of using the defaults to persist your themes. If you want to use the default themes, we recommend using the bundle distribution that includes the themes. You can use custom themes with any distribution.

## Root Styles
Root styles are always active. Most classes and variables in `root.css` are theme independent. You can use theme variables in root styles.  Modify them to change all themes.

* Root styles and the active theme have a bi-directional relationship. `root.css` and a `theme.css` file must be always be included. 
```css
:root {
    --animation-duration: 1.5s;
    --path-divider: '/';
    /*Font Family*/
    --fntf1: 'Ubuntu', sans-serif;
    --fntf2: 'Open Sans', sans-serif;
    --fntf3: 'PT Sans', sans-serif;
    --fntf4: 'American Typewriter', serif;
    --fntf5: 'American Typewriter', serif;
    --fntf6: 'American Typewriter', serif;
    /*Font Weight*/
    --fntw1: 200;
    --fntw2: 300;
    --fntw3: 400;
    --fntw4: 700;
    --fntw5: 800;
    --fntw6: 900;
    /*Transition*/
    --trn1: '1s ease';
    --trn2: '1s ease';
    --trn3: '1s ease';
    --trn4: '1s ease';
    --trn5: '1s ease';
    --trn6: '1s ease';
    /*Border Radius*/
    --br1: 2px;
    --br2: 4px;
    --br3: 6px;
    --br4: 8px;
    --br5: 10px;
    --br6: 15px;
    /*Padding*/
    --pad1: 3px;
    --pad2: 5px;
    --pad3: 10px;
    --pad4: 15px;
    --pad5: 20px;
    --pad6: 30px;
    /*Margin*/
    --mrg1: 5px;
    --mrg2: 10px;
    --mrg3: 15px;
    --mrg4: 20px;
    --mrg5: 30px;
    --mrg6: 40px;
    /*Font Size*/
    --fnts1: .5em;
    --fnts2: .8em;
    --fnts3: 1em;
    --fnts4: 1.25em;
    --fnts5: 1.5em;
    --fnts6: 2em;
    /*Line Height */
    --lht1: .8em;
    --lht2: 1em;
    --lht3: 1.5em;
    --lht4: 2em;
    --lht5: 2.5em;
    --lht6: 3em;
    --drp-min-width: 160px;
}

html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: var(--bg1);
    font-family: var(--fntf1);
}

h1 {
    color: var(--h1);
}

h2 {
    color: var(--h2);
}

h3 {
    color: var(--h3);
}

h4 {
    color: var(--h4);
}

h5 {
    color: var(--h5);
}

h6 {
    color: var(--h6);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: var(--mrg2) 0 !important;
}

span,
p {
    color: var(--t3);
}
```

## Example theme
Example of the Roobie light theme. You can edit these variables and make it your own. You can also create custom themes.
```css
[theme="light"] {
    /*Base*/
    --primary: rgba(51, 192, 173, 0.7);
    --secondary: var(--bg4);
    /*Status*/
    --success: rgba(81, 190, 73, 0.7);
    --warning: rgba(235, 119, 42, .7);
    --danger: rgba(248, 62, 52, .7);
    --info: rgba(152, 217, 243, .7);
    /*Shade 1*/
    --white: rgb(240, 240, 240);
    --black: rgb(20, 20, 20);
    --grey: rgb(199, 199, 199);
    --red: rgb(167, 32, 32);
    --orange: rgb(243, 162, 11);
    --yellow: rgb(221, 221, 25);
    --green: rgb(19, 172, 82);
    --blue: rgb(23, 23, 192);
    --indigo: rgb(117, 13, 117);
    --violet: rgb(184, 88, 184);
    /* Shade 2*/
    --white2: rgba(240, 240, 240, .7);
    --black2: rgba(20, 20, 20, .7);
    --grey2: rgba(199, 199, 199, .7);
    --red2: rgb(182, 26, 26, .7);
    --orange2: rgba(243, 162, 11, .7);
    --yellow2: rgba(221, 221, 25, .7);
    --green2: rgba(19, 172, 82, .7);
    --blue2: rgba(23, 23, 192, .7);
    --indigo2: rgba(117, 13, 117, .7);
    --violet2: rgba(184, 88, 184, .7);
    /* Shade 3*/
    --white3: rgba(240, 240, 240, .5);
    --black3: rgba(20, 20, 20, .5);
    --grey3: rgba(199, 199, 199, .5);
    --red3: rgba(182, 26, 26, .5);
    --orange3: rgba(243, 162, 11, .5);
    --yellow3: rgba(221, 221, 25, .5);
    --green3: rgba(19, 172, 82, .5);
    --blue3: rgba(23, 23, 192, .5);
    --indigo3: rgba(117, 13, 117, .5);
    --violet3: rgba(184, 88, 184, .5);
    /*Text*/
    --t1: rgb(20, 20, 20);
    --t2: rgb(35, 35, 35);
    --t3: rgb(50, 50, 50);
    --t4: rgb(65, 65, 65);
    --t5: rgb(80, 80, 80);
    --t6: rgb(95, 95, 95);
    /*Background*/
    --bg1: rgb(240, 240, 240);
    --bg2: rgb(230, 230, 230);
    --bg3: rgb(220, 220, 220);
    --bg4: rgb(210, 210, 210);
    --bg5: rgb(200, 200, 200);
    --bg6: rgb(190, 190, 190);
    /*Heading*/
    --h1: var(--t1);
    --h2: var(--t1);
    --h3: var(--t2);
    --h4: var(--t2);
    --h5: var(--t5);
    --h6: var(--t5);
    /*Link*/
    --a1: var(--red2);
    --a2: white;
    --a3: white;
    --a4: white;
    --a5: white;
    --a6: white;
    /*Paragraph*/
    --p1: var(--t2);
    --p2: var(--t2);
    --p3: var(--t2);
    --p4: var(--t2);
    --p5: var(--t2);
    --p6: var(--t2);
    /*Border*/
    --bdr1: .5px solid var(--bg5);
    --bdr2: 1px solid var(--bg5);
    --bdr3: 2px solid var(--bg5);
    --bdr4: 3px solid var(--bg5);
    --bdr5: 5px solid var(--bg5);
    --bdr6: 7px solid var(--bg5);
    /*Inset*/
    --in1: inset 0px 0px 1px 1px rgb(17, 17, 17, .1);
    --in2: inset 0px 0px 2px 2px rgb(17, 17, 17, .2);
    --in3: inset 0px 0px 3px 3px rgb(17, 17, 17, .2);
    --in4: inset 0px 0px 3px 3px rgb(17, 17, 17, .3);
    --in5: inset 0px 0px 3px 3px rgb(17, 17, 17, .3);
    --in6: inset 0px 0px 3px 3px rgb(17, 17, 17, .3);
    /*Box Shadow*/
    --box1: 0 0 1px 1px rgb(17, 17, 17, .1);
    --box2: 0 0 2px 2px rgb(17, 17, 17, .2);
    --box3: 0 0 3px 3px rgb(17, 17, 17, .2);
    --box4: 0 0 3px 3px rgb(17, 17, 17, .3);
    --box5: 0 0 4px 4px rgb(17, 17, 17, .3);
    --box6: 0 0 5px 5px rgb(17, 17, 17, .3);
}
```