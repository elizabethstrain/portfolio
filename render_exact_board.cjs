const { createCanvas, GlobalFonts } = require('@napi-rs/canvas');
const fs = require('fs');

if (fs.existsSync('cormorant.ttf')) {
  GlobalFonts.registerFromPath('cormorant.ttf', 'Cormorant');
}
if (fs.existsSync('cormorant-italic.ttf')) {
  GlobalFonts.registerFromPath('cormorant-italic.ttf', 'CormorantItalic');
}
if (fs.existsSync('cormorant-med.ttf')) {
  GlobalFonts.registerFromPath('cormorant-med.ttf', 'CormorantMed');
}
if (fs.existsSync('inter.ttf')) {
  GlobalFonts.registerFromPath('inter.ttf', 'Inter');
}

// 1200 x 3600 canvas
const W = 1200;
const H = 3450;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// Canvas background
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 0, W, H);

// Board background (slightly off-white / plaster tone like the original)
const boardMarginX = 60;
const boardW = W - boardMarginX * 2; // 1080
ctx.fillStyle = '#FAF9F6';
ctx.fillRect(boardMarginX, 0, boardW, H);

// 1. Header Banner (Blueprint Blue #12284C)
const headerH = 340;
ctx.fillStyle = '#12284C';
ctx.fillRect(boardMarginX, 0, boardW, headerH);

// Thin accent or spacing
ctx.textAlign = 'center';

// ESTABLISHED 1991 - ATLANTA
ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
ctx.font = '300 13px Inter, sans-serif';
ctx.letterSpacing = '5px';
ctx.fillText('ESTABLISHED 1991 - ATLANTA', W / 2, 95);

// HARRISON DESIGN
ctx.fillStyle = '#FFFFFF';
ctx.font = '400 56px Cormorant, serif';
ctx.letterSpacing = '8px';
ctx.fillText('HARRISON DESIGN', W / 2, 185);

// BRAND BOOK
ctx.fillStyle = '#FFFFFF';
ctx.font = '300 13px Inter, sans-serif';
ctx.letterSpacing = '9px';
ctx.fillText('B R A N D   B O O K', W / 2, 245);

// OFFICES
ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
ctx.font = '300 11px Inter, sans-serif';
ctx.letterSpacing = '3px';
ctx.fillText('ATLANTA   LOS ANGELES   NAPLES   SANTA BARBARA   ST. SIMONS   WASHINGTON D.C.', W / 2, 298);

// Helper function to draw section header
function drawSectionHeader(title, num, y) {
  ctx.textAlign = 'left';
  ctx.fillStyle = '#968B83';
  ctx.font = '500 15px Inter, sans-serif';
  ctx.letterSpacing = '2px';
  ctx.fillText(title, boardMarginX + 40, y);

  ctx.textAlign = 'right';
  ctx.font = '300 15px Inter, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText(num, boardMarginX + boardW - 40, y);

  ctx.fillStyle = 'rgba(150, 139, 131, 0.25)';
  ctx.fillRect(boardMarginX + 40, y + 14, boardW - 80, 1);
}

// ----------------------------------------------------
// SECTION 01: IDENTITY
// ----------------------------------------------------
let curY = 405;
drawSectionHeader('Identity', '01', curY);
curY += 45;

const idLeftW = 460;
const idLeftX = boardMarginX + 40;
const idRightX = idLeftX + idLeftW + 40;

// Main Logo Box
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(idLeftX, curY, idLeftW, 115);
ctx.strokeStyle = '#E8E4E2';
ctx.lineWidth = 1;
ctx.strokeRect(idLeftX, curY, idLeftW, 115);

ctx.textAlign = 'center';
ctx.fillStyle = '#12284C';
ctx.font = '400 32px Cormorant, serif';
ctx.letterSpacing = '4px';
ctx.fillText('HARRISON DESIGN', idLeftX + idLeftW / 2, curY + 62);

ctx.fillStyle = '#968B83';
ctx.font = '400 9px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('MAIN LOGO - DISCIPLINES VARY BY OFFICE', idLeftX + idLeftW / 2, curY + 90);

// Stacked & Icon boxes
const halfW = (idLeftW - 16) / 2;
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(idLeftX, curY + 130, halfW, 105);
ctx.strokeRect(idLeftX, curY + 130, halfW, 105);

ctx.fillStyle = '#12284C';
ctx.font = '400 21px Cormorant, serif';
ctx.letterSpacing = '3px';
ctx.fillText('HARRISON', idLeftX + halfW / 2, curY + 175);
ctx.fillText('DESIGN', idLeftX + halfW / 2, curY + 200);

ctx.fillStyle = '#968B83';
ctx.font = '400 8.5px Inter, sans-serif';
ctx.letterSpacing = '1.5px';
ctx.fillText('STACKED', idLeftX + halfW / 2, curY + 223);

// Icon Box
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(idLeftX + halfW + 16, curY + 130, halfW, 105);
ctx.strokeRect(idLeftX + halfW + 16, curY + 130, halfW, 105);

ctx.fillStyle = '#12284C';
ctx.font = '400 44px Cormorant, serif';
ctx.letterSpacing = '2px';
ctx.fillText('H', idLeftX + halfW + 16 + halfW / 2, curY + 185);

ctx.fillStyle = '#968B83';
ctx.font = '400 8.5px Inter, sans-serif';
ctx.letterSpacing = '1.5px';
ctx.fillText('ICON - SOCIALS', idLeftX + halfW + 16 + halfW / 2, curY + 223);

// Right text annotations
ctx.textAlign = 'left';
let noteY = curY + 22;

function drawIdentityNote(title, desc, y) {
  ctx.fillStyle = '#12284C';
  ctx.font = '600 13px Inter, sans-serif';
  ctx.letterSpacing = '0.5px';
  ctx.fillText(title, idRightX, y);

  ctx.fillStyle = '#5A5652';
  ctx.font = '300 12.5px Inter, sans-serif';
  ctx.letterSpacing = '0.1px';
  
  const words = desc.split(' ');
  let line = '';
  let ly = y + 20;
  const maxW = boardMarginX + boardW - 40 - idRightX;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxW && n > 0) {
      ctx.fillText(line, idRightX, ly);
      line = words[n] + ' ';
      ly += 19;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, idRightX, ly);
  return ly + 32;
}

noteY = drawIdentityNote('Main', 'Used across print, signage, and primary brand touchpoints. Disciplines set beneath the wordmark vary by studio and service offering.', noteY);
noteY = drawIdentityNote('Stacked', 'Reserved for narrow or constrained formats — signage, ad units, and collateral where the horizontal lockup won\'t read cleanly.', noteY);
noteY = drawIdentityNote('Icon', 'The single-letter mark for profile imagery and social applications, where the full wordmark would compete with the frame.', noteY);

// ----------------------------------------------------
// SECTION 02: PALETTE
// ----------------------------------------------------
curY += 280;
drawSectionHeader('Palette', '02', curY);
curY += 45;

const swW = (boardW - 80 - 48) / 5;
const swH = 110;

const palette = [
  { name: 'BLUEPRINT BLUE', pms: 'PMS 2767 C', hex: '#12284C', bg: '#12284C', text: '#FFFFFF' },
  { name: 'WARM GRAY', pms: 'PMS Warm Gray 7', hex: '#968B83', bg: '#968B83', text: '#FFFFFF' },
  { name: 'WHITE', pms: '#FFFFFF', hex: '', bg: '#FFFFFF', text: '#12284C', border: true },
  { name: 'STONE', pms: '#E8E4E2', hex: '', bg: '#E8E4E2', text: '#12284C' },
  { name: 'PLASTER', pms: '#F8F6F5', hex: '', bg: '#F8F6F5', text: '#12284C', border: true }
];

palette.forEach((sw, i) => {
  const sx = boardMarginX + 40 + i * (swW + 12);
  ctx.fillStyle = sw.bg;
  ctx.fillRect(sx, curY, swW, swH);
  if (sw.border) {
    ctx.strokeStyle = '#E8E4E2';
    ctx.lineWidth = 1;
    ctx.strokeRect(sx, curY, swW, swH);
  }

  ctx.fillStyle = sw.text;
  ctx.textAlign = 'left';
  ctx.font = '600 11px Inter, sans-serif';
  ctx.letterSpacing = '0.5px';
  ctx.fillText(sw.name, sx + 14, curY + swH - 36);

  ctx.font = '300 10.5px Inter, sans-serif';
  ctx.fillText(sw.pms, sx + 14, curY + swH - 20);

  if (sw.hex) {
    ctx.font = '300 10.5px Inter, sans-serif';
    ctx.fillText(sw.hex, sx + 14, curY + swH - 6);
  }
});

// Palette Subtitle
ctx.textAlign = 'left';
ctx.fillStyle = '#968B83';
ctx.font = '400 10px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('PRIMARY - NAVY, WARM GRAY, WHITE', boardMarginX + 40, curY + swH + 28);
ctx.textAlign = 'right';
ctx.fillText('SECONDARY - STONE, PLASTER', boardMarginX + boardW - 40, curY + swH + 28);

// ----------------------------------------------------
// SECTION 03: TYPOGRAPHY
// ----------------------------------------------------
curY += 195;
drawSectionHeader('Typography', '03', curY);
curY += 45;

const typeBoxW = boardW - 80;
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(boardMarginX + 40, curY, typeBoxW, 190);
ctx.strokeStyle = '#E8E4E2';
ctx.strokeRect(boardMarginX + 40, curY, typeBoxW, 190);

// Row 1
ctx.textAlign = 'left';
ctx.fillStyle = '#968B83';
ctx.font = '600 10.5px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('TITLE', boardMarginX + 65, curY + 45);

ctx.fillStyle = '#12284C';
ctx.font = '400 32px Cormorant, serif';
ctx.letterSpacing = '1px';
ctx.fillText('Design Rooted in Place', boardMarginX + 160, curY + 48);

ctx.textAlign = 'right';
ctx.fillStyle = '#968B83';
ctx.font = '300 11px Inter, sans-serif';
ctx.letterSpacing = '0.5px';
ctx.fillText('HTF Didot—wordmark & hero titles', boardMarginX + boardW - 65, curY + 45);

// Divider
ctx.fillStyle = 'rgba(232, 228, 226, 0.7)';
ctx.fillRect(boardMarginX + 65, curY + 68, typeBoxW - 50, 1);

// Row 2
ctx.textAlign = 'left';
ctx.fillStyle = '#968B83';
ctx.font = '600 10.5px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('SUBTITLE', boardMarginX + 65, curY + 105);

ctx.fillStyle = '#12284C';
ctx.font = '500 15px Inter, sans-serif';
ctx.letterSpacing = '3px';
ctx.fillText('CLASSICAL, WARM & PRECISE', boardMarginX + 160, curY + 105);

ctx.textAlign = 'right';
ctx.fillStyle = '#968B83';
ctx.font = '300 11px Inter, sans-serif';
ctx.letterSpacing = '0.5px';
ctx.fillText('Whitney—body copy, labels, eyebrows', boardMarginX + boardW - 65, curY + 105);

// Divider
ctx.fillStyle = 'rgba(232, 228, 226, 0.7)';
ctx.fillRect(boardMarginX + 65, curY + 128, typeBoxW - 50, 1);

// Row 3
ctx.textAlign = 'left';
ctx.fillStyle = '#968B83';
ctx.font = '600 10.5px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('HEADING', boardMarginX + 65, curY + 165);

ctx.fillStyle = '#12284C';
ctx.font = 'italic 18px Cormorant, serif';
ctx.letterSpacing = '0.5px';
ctx.fillText('Section heads & pull quotes', boardMarginX + 160, curY + 165);

ctx.textAlign = 'right';
ctx.fillStyle = '#968B83';
ctx.font = '300 11px Inter, sans-serif';
ctx.letterSpacing = '0.5px';
ctx.fillText('Cormorant Garamond—section heads, subtitles', boardMarginX + boardW - 65, curY + 165);

// ----------------------------------------------------
// SECTION 04: WHO WE ARE
// ----------------------------------------------------
curY += 245;
drawSectionHeader('Who We Are', '04', curY);
curY += 45;

const whoW = boardW - 80;
const whoH = 265;
ctx.fillStyle = '#12284C';
ctx.fillRect(boardMarginX + 40, curY, whoW, whoH);

// Left Quote Column
ctx.textAlign = 'left';
ctx.fillStyle = '#FFFFFF';
ctx.font = 'italic 25px Cormorant, serif';
ctx.letterSpacing = '0.5px';
ctx.fillText('Design rooted in', boardMarginX + 75, curY + 70);
ctx.fillText('classical principles,', boardMarginX + 75, curY + 105);
ctx.fillText('responsive to place,', boardMarginX + 75, curY + 140);
ctx.fillText('and built to endure.', boardMarginX + 75, curY + 175);

// Vertical Divider
ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
ctx.fillRect(boardMarginX + 380, curY + 35, 1, whoH - 70);

// Right Narrative Paragraphs
const rightNarrativeX = boardMarginX + 415;
const rightNarrativeW = whoW - 375 - 40;

function drawParagraph(text, y) {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.font = '300 12px Inter, sans-serif';
  ctx.letterSpacing = '0.2px';
  
  const words = text.split(' ');
  let line = '';
  let ly = y;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > rightNarrativeW && n > 0) {
      ctx.fillText(line, rightNarrativeX, ly);
      line = words[n] + ' ';
      ly += 18;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, rightNarrativeX, ly);
  return ly + 22;
}

let ny = curY + 50;
ny = drawParagraph('Founded in Atlanta in 1991, Harrison Design is one of the most acclaimed full-service design firms in the United States. With six offices across the country, the firm combines the depth of a national practice with the attentiveness of a studio deeply invested in each client\'s vision.', ny);
ny = drawParagraph('A comprehensive firm in the truest sense, Harrison Design offers architecture, interior design, and landscape architecture under one roof—from ground-up residential commissions and historic renovations to sacred architecture and bespoke interiors.', ny);
ny = drawParagraph('The firm\'s body of work spans the full spectrum of scale and style, from intimate residences to sweeping estates, from coastal retreats to urban townhouses. Each project reflects the same conviction: that great architecture serves the life it shelters.', ny);

// ----------------------------------------------------
// SECTION 05: WHAT WE DO
// ----------------------------------------------------
curY += 310;
drawSectionHeader('What We Do', '05', curY);
curY += 45;

const colW = (boardW - 80 - 40) / 3;
const whatCols = [
  {
    num: 'i.',
    title: 'Architecture',
    body: 'High-end residential design is the core of the practice, spanning single-family residences, estates, and large-scale renovations, from classical to contemporary—extending to commercial commissions, hospitality, multi-family developments, and sacred architecture.'
  },
  {
    num: 'ii.',
    title: 'Interiors',
    body: 'The interior studios create environments tailored to each client\'s lifestyle — space planning, custom finishing, furnishing, and accessorizing — interpreting each project\'s architectural parameters to produce interiors that are balanced, warm, and personal.'
  },
  {
    num: 'iii.',
    title: 'Landscapes',
    body: 'The landscape studio takes a holistic approach to every site, designing gardens, pools, and entertaining spaces with sensitivity to environment and sustainability — connecting architecture seamlessly to the land.'
  }
];

whatCols.forEach((c, i) => {
  const cx = boardMarginX + 40 + i * (colW + 20);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(cx, curY, colW, 235);
  ctx.strokeStyle = '#E8E4E2';
  ctx.strokeRect(cx, curY, colW, 235);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#12284C';
  ctx.font = '600 18px Cormorant, serif';
  ctx.letterSpacing = '0.5px';
  ctx.fillText(c.title, cx + 22, curY + 42);

  ctx.textAlign = 'right';
  ctx.fillStyle = '#968B83';
  ctx.font = 'italic 14px Cormorant, serif';
  ctx.fillText(c.num, cx + colW - 22, curY + 42);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#5A5652';
  ctx.font = '300 11.5px Inter, sans-serif';
  ctx.letterSpacing = '0.1px';

  const words = c.body.split(' ');
  let line = '';
  let ly = curY + 75;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > colW - 44 && n > 0) {
      ctx.fillText(line, cx + 22, ly);
      line = words[n] + ' ';
      ly += 18;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, cx + 22, ly);
});

// ----------------------------------------------------
// SECTION 06: TONE & VOICE
// ----------------------------------------------------
curY += 285;
drawSectionHeader('Tone & Voice', '06', curY);
curY += 45;

const toneCols = [
  {
    title: 'Authoritative',
    body: 'Thirty years of demonstrated expertise across architecture, interiors, and landscape. Statements are measured, grounded in craft, and never boastful—let the work speak.'
  },
  {
    title: 'Warm & Client-Centered',
    body: 'Every project begins with listening. Copy reflects deep investment in each client\'s way of life — collaborative, personal, and never transactional.'
  },
  {
    title: 'Classical',
    body: 'Drawing on history without being imprisoned by it. Language names things precisely — masonry, stucco, patina, grain — so the architecture feels inevitable where it stands.'
  }
];

toneCols.forEach((c, i) => {
  const cx = boardMarginX + 40 + i * (colW + 20);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(cx, curY, colW, 210);
  ctx.strokeStyle = '#E8E4E2';
  ctx.strokeRect(cx, curY, colW, 210);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#12284C';
  ctx.font = '600 17px Cormorant, serif';
  ctx.letterSpacing = '0.5px';
  ctx.fillText(c.title, cx + 22, curY + 40);

  ctx.fillStyle = '#5A5652';
  ctx.font = '300 11.5px Inter, sans-serif';
  ctx.letterSpacing = '0.1px';

  const words = c.body.split(' ');
  let line = '';
  let ly = curY + 72;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > colW - 44 && n > 0) {
      ctx.fillText(line, cx + 22, ly);
      line = words[n] + ' ';
      ly += 18;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, cx + 22, ly);
});

// ----------------------------------------------------
// FOOTER
// ----------------------------------------------------
curY += 255;
const footerH = 150;
ctx.fillStyle = '#12284C';
ctx.fillRect(boardMarginX, curY, boardW, footerH);

ctx.textAlign = 'center';
ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
ctx.font = '300 11.5px Inter, sans-serif';
ctx.letterSpacing = '1px';
ctx.fillText('Honored with ten Shutze Awards, two Addison Mizner Awards, and two Palladio Awards — with', W / 2, curY + 55);
ctx.fillText('features in Architectural Digest, Veranda, and House Beautiful.', W / 2, curY + 75);

ctx.fillStyle = '#FFFFFF';
ctx.font = '400 11px Inter, sans-serif';
ctx.letterSpacing = '3px';
ctx.fillText('HARRISON DESIGN - EST. 1991', W / 2, curY + 115);

// Save outputs
const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
fs.writeFileSync('images/Harrison Design - Brand Board.jpg', buffer);
fs.writeFileSync('Harrison Design - Brand Board.jpg', buffer);
console.log('Saved Harrison Design - Brand Board.jpg, size:', buffer.length);
