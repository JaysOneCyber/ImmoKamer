const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages_admin');

const filesToConvert = [
    { html: 'immeubles.html', jsx: 'MesImmeubles.jsx', name: 'MesImmeubles' },
    { html: 'Locataires.html', jsx: 'Locataires.jsx', name: 'Locataires' },
    { html: 'DetailChambe.html', jsx: 'DetailChambre.jsx', name: 'DetailChambre' },
    { html: 'Paiement.html', jsx: 'Paiements.jsx', name: 'Paiements' },
    { html: 'Contrats.html', jsx: 'Contrats.jsx', name: 'Contrats' },
    { html: 'Rappels.html', jsx: 'Rappels.jsx', name: 'Rappels' },
    { html: 'Paramètres.html', jsx: 'Parametres.jsx', name: 'Parametres' }
];

function extractContent(html, filename) {
    let mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
    let rightPanelMatch = '';

    if (filename === 'Locataires.html') {
        const drawerMatch = html.match(/<div class="fixed inset-y-0 right-0[\s\S]*?<\/div>\n<\/div>\n<\/body>/i);
        if (drawerMatch) {
            let drawerContent = drawerMatch[0]
                .replace(/<\/body>/, "")
                .replace(/<\/html>/, "");
            rightPanelMatch = "\n{/* Drawer content removed as per user request to link to Detail Chambre instead */}\n";
        }
    }

    if (!mainMatch) return html;

    let content = mainMatch[0];

    // In immeubles.html, let's also take the header if it's outside main, but wait, DashP already has Aside, but no global header!
    // DashProprio has <main> containing its own <header>.
    // The provided HTML files have their own <header> inside <main> or sometimes outside.
    // Let's capture <header> if it exists before <main>
    const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
    let headerStr = '';
    if (headerMatch && (!mainMatch[0].includes(headerMatch[0]))) {
        headerStr = headerMatch[0];
    }

    return headerStr + "\n" + content;
}

function convertToJsx(htmlStr, componentName) {
    let jsx = htmlStr;

    // 1. Rename classes and properties
    jsx = jsx.replace(/class="/g, 'className="');
    jsx = jsx.replace(/for="/g, 'htmlFor="');

    // 2. Fix self closing tags
    jsx = jsx.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
    jsx = jsx.replace(/<img(.*?[^\/])>/g, '<img$1 />');
    // Also handling unclosed input that ends with "/>" without space, which is fine in react.
    // But some inputs in HTML might be strictly `<input ... >`

    // 3. Fix inline styles
    jsx = jsx.replace(/style="background-image: url\('([^']+)'\)"/g, 'style={{ backgroundImage: "url(\'$1\')" }}');
    jsx = jsx.replace(/style=""/g, ''); // empty styles
    // Some material icons have font-variation-settings:
    jsx = jsx.replace(/style="font-variation-settings: 'FILL' 1"/g, 'style={{ fontVariationSettings: `"\'FILL\' 1"` }}');

    // 4. Color harmonization! Replace old colors with standard ones
    // Replace custom tailwind classes with standard ones matching DashboardProprietaire.jsx
    jsx = jsx.replace(/bg-stone-card/g, 'bg-card-dark');
    jsx = jsx.replace(/bg-surface-dark/g, 'bg-card-dark');
    jsx = jsx.replace(/border-sienna-border/g, 'border-white/5');
    jsx = jsx.replace(/border-slate-800/g, 'border-white/5');
    jsx = jsx.replace(/border-slate-700/g, 'border-white/5');
    jsx = jsx.replace(/bg-slate-800/g, 'bg-white/5');
    jsx = jsx.replace(/bg-slate-900/g, 'bg-background-dark');

    jsx = jsx.replace(/text-secondary/g, 'text-accent');
    jsx = jsx.replace(/bg-secondary/g, 'bg-accent');
    jsx = jsx.replace(/border-secondary/g, 'border-accent');

    jsx = jsx.replace(/rounded-xl/g, 'rounded-2xl');
    jsx = jsx.replace(/rounded-lg/g, 'rounded-xl');

    // Make sure we wrap in a functional component
    return `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst ${componentName} = () => {\n  return (\n    <>\n${jsx}\n    </>\n  );\n};\n\nexport default ${componentName};\n`;
}

filesToConvert.forEach(file => {
    const htmlPath = path.join(srcDir, file.html);
    const jsxPath = path.join(srcDir, file.jsx);

    if (fs.existsSync(htmlPath)) {
        let htmlContent = fs.readFileSync(htmlPath, 'utf8');
        let extracted = extractContent(htmlContent, file.html);
        let jsxContent = convertToJsx(extracted, file.name);

        fs.writeFileSync(jsxPath, jsxContent);
        console.log(`Converted ${file.html} -> ${file.jsx}`);
    } else {
        console.log(`Missing ${file.html}`);
    }
});
