const fs = require('fs');
const path = require('path');

// Fix DetailChambre.jsx
let detailP = path.join(__dirname, 'src', 'pages_admin', 'DetailChambre.jsx');
if (fs.existsSync(detailP)) {
    let content = fs.readFileSync(detailP, 'utf8');

    content = content.replace(/bg-white\s+dark:bg-\[#111a22\]/g, 'bg-card-dark');
    content = content.replace(/bg-white\s+dark:bg-white\/5\/50/g, 'bg-card-dark');
    content = content.replace(/bg-dark\/5\/50/g, 'bg-card-dark');
    content = content.replace(/bg-slate-50\s+dark:bg-slate-900\/50/g, 'bg-background-dark');
    content = content.replace(/text-slate-900\s+dark:text-white/g, 'text-white');
    content = content.replace(/text-slate-600\s+dark:text-slate-400/g, 'text-slate-400');
    content = content.replace(/text-slate-500\s+dark:text-slate-500/g, 'text-slate-500');
    content = content.replace(/text-slate-500\s+dark:text-slate-400/g, 'text-slate-400');
    content = content.replace(/border-slate-200\s+dark:border-white\/5/g, 'border-white/5');

    fs.writeFileSync(detailP, content, 'utf8');
}

// Convert MesImmeubles.html to MesImmeubles.jsx
let htmlP = path.join(__dirname, 'src', 'pages_admin', 'MesImmeubles.html');
if (fs.existsSync(htmlP)) {
    let htmlContent = fs.readFileSync(htmlP, 'utf8');

    // Remove HTML comments
    htmlContent = htmlContent.replace(/<!--[\s\S]*?-->/g, '');
    htmlContent = htmlContent.replace(/class=/g, 'className=');
    htmlContent = htmlContent.replace(/for=/g, 'htmlFor=');

    // Self-close tags
    htmlContent = htmlContent.replace(/<img(.*?)>/g, (match) => { if (match.endsWith('/>')) return match; return match.replace(/>$/, ' />'); });
    htmlContent = htmlContent.replace(/<input(.*?)>/g, (match) => { if (match.endsWith('/>')) return match; return match.replace(/>$/, ' />'); });
    htmlContent = htmlContent.replace(/<br>/g, '<br />');
    htmlContent = htmlContent.replace(/<hr(.*?)>/g, (match) => { if (match.endsWith('/>')) return match; return match.replace(/>$/, ' />'); });

    // Apply exact same themes
    htmlContent = htmlContent.replace(/bg-white\s+dark:bg-\[#111a22\]/g, 'bg-card-dark');
    htmlContent = htmlContent.replace(/bg-white\s+dark:bg-white\/5\/50/g, 'bg-card-dark');
    htmlContent = htmlContent.replace(/bg-slate-50\s+dark:bg-slate-900\/50/g, 'bg-background-dark');
    htmlContent = htmlContent.replace(/text-slate-900\s+dark:text-white/g, 'text-white');
    htmlContent = htmlContent.replace(/text-slate-600\s+dark:text-slate-400/g, 'text-slate-400');
    htmlContent = htmlContent.replace(/text-slate-500\s+dark:text-slate-400/g, 'text-slate-400');
    htmlContent = htmlContent.replace(/border-slate-200\s+dark:border-white\/5/g, 'border-white/5');

    let mainMatch = htmlContent.match(/<main[\s\S]*?<\/main>/);
    let finalContent = htmlContent;
    if (mainMatch) {
        finalContent = mainMatch[0];
    }

    let jsx = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst MesImmeubles = () => {\n  return (\n    <>\n${finalContent}\n    </>\n  );\n};\n\nexport default MesImmeubles;\n`;

    let jsxP = path.join(__dirname, 'src', 'pages_admin', 'MesImmeubles.jsx');
    fs.writeFileSync(jsxP, jsx, 'utf8');
}
