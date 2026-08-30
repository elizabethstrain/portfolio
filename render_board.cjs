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

const W = 1600;
const H = 3800;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#F8F6F2';
ctx.fillRect(0, 0, W, H);

// 1. Header Banner
const headerH = 460;
ctx.fillStyle = '#0E1B2E';
ctx.fillRect(0, 0, W, headerH);

// Gold Accent Rule under Header
ctx.fillStyle = '#C5A880';
ctx.fillRect(0, headerH - 3, W, 3);

// Header Texts
ctx.fillStyle = 'rgba(248, 246, 242, 0.7)';
ctx.font = '300 18px Inter, sans-serif';
ctx.textAlign = 'center';
ctx.letterSpacing = '6px';
ctx.fillText('ESTABLISHED 1991 · ATLANTA', W / 2, 130);

ctx.fillStyle = '#FFFFFF';
ctx.font = '500 78px Cormorant, serif';
ctx.letterSpacing = '10px';
ctx.fillText('HARRISON DESIGN', W / 2, 250);

ctx.fillStyle = '#C5A880';
ctx.font = '400 19px Inter, sans-serif';
ctx.letterSpacing = '8px';
ctx.fillText('B R A N D   B O O K', W / 2, 330);

ctx.fillStyle = 'rgba(248, 246, 242, 0.55)';
ctx.font = '300 16px Inter, sans-serif';
ctx.letterSpacing = '4px';
ctx.fillText('ATLANTA · LOS ANGELES · NAPLES · SANTA BARBARA · ST. SIMONS · WASHINGTON D.C.', W / 2, 400);

// Helper for section header
function drawSectionHeader(title, num, y) {
  ctx.textAlign = 'left';
  ctx.fillStyle = '#8C827A';
  ctx.font = '600 18px Inter, sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText(title.toUpperCase(), 120, y);

  ctx.textAlign = 'right';
  ctx.font = 'italic 24px Cormorant, serif';
  ctx.fillText(num, W - 120, y);

  ctx.fillStyle = 'rgba(140, 130, 122, 0.3)';
  ctx.fillRect(120, y + 16, W - 240, 1);
}

// SECTION 01: IDENTITY
let curY = 560;
drawSectionHeader('Identity', '01', curY);
curY += 50;

// Main Logo Box
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(120, curY, 650, 170);
ctx.strokeStyle = '#E2DBD2';
ctx.lineWidth = 1.5;
ctx.strokeRect(120, curY, 650, 170);

ctx.textAlign = 'center';
ctx.fillStyle = '#0E1B2E';
ctx.font = '500 44px Cormorant, serif';
ctx.letterSpacing = '6px';
ctx.fillText('HARRISON DESIGN', 120 + 325, curY + 85);

ctx.fillStyle = '#8C827A';
ctx.font = '400 13px Inter, sans-serif';
ctx.letterSpacing = '4px';
ctx.fillText('ARCHITECTURE · INTERIOR DESIGN · LANDSCAPE', 120 + 325, curY + 125);

// Stacked & Icon
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(120, curY + 195, 310, 160);
ctx.strokeRect(120, curY + 195, 310, 160);
ctx.fillStyle = '#0E1B2E';
ctx.font = '500 28px Cormorant, serif';
ctx.letterSpacing = '4px';
ctx.fillText('HARRISON', 120 + 155, curY + 265);
ctx.fillText('DESIGN', 120 + 155, curY + 300);
ctx.fillStyle = '#8C827A';
ctx.font = '400 11px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('STACKED', 120 + 155, curY + 335);

ctx.fillStyle = '#FFFFFF';
ctx.fillRect(460, curY + 195, 310, 160);
ctx.strokeRect(460, curY + 195, 310, 160);
ctx.fillStyle = '#0E1B2E';
ctx.font = '500 70px Cormorant, serif';
ctx.letterSpacing = '3px';
ctx.fillText('HH', 460 + 155, curY + 285);
ctx.fillStyle = '#8C827A';
ctx.font = '400 11px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('ICON · SOCIALS', 460 + 155, curY + 335);

// Identity Notes Right Column
ctx.textAlign = 'left';
const noteX = 820;
let noteY = curY + 35;

ctx.fillStyle = '#0E1B2E';
ctx.font = '600 16px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('MAIN', noteX, noteY);
ctx.fillStyle = '#4A5568';
ctx.font = '300 16px Inter, sans-serif';
ctx.letterSpacing = '0px';
ctx.fillText('Primary across print, signage, and primary brand', noteX, noteY + 28);
ctx.fillText('touchpoints. Disciplines sit beneath the wordmark in custom sizing.', noteX, noteY + 54);

noteY += 125;
ctx.fillStyle = '#0E1B2E';
ctx.font = '600 16px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('STACKED', noteX, noteY);
ctx.fillStyle = '#4A5568';
ctx.font = '300 16px Inter, sans-serif';
ctx.fillText('Reserved for narrow or constrained formats — signage, ad roots,', noteX, noteY + 28);
ctx.fillText('and collateral where the horizontal lockup would scale down too small.', noteX, noteY + 54);

noteY += 125;
ctx.fillStyle = '#0E1B2E';
ctx.font = '600 16px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('ICON', noteX, noteY);
ctx.fillStyle = '#4A5568';
ctx.font = '300 16px Inter, sans-serif';
ctx.fillText('The single-letter mark for profile imagery and social applications,', noteX, noteY + 28);
ctx.fillText('where the full wordmark would compete with the frame.', noteX, noteY + 54);

// SECTION 02: PALETTE
curY += 440;
drawSectionHeader('Palette', '02', curY);
curY += 50;

const swatches = [
  { name: 'HERITAGE NAVY', hex: '#0E1B2E', bg: '#0E1B2E', text: '#FFFFFF', sub: 'PRIMARY BRAND' },
  { name: 'WARM GRAY', hex: '#4A5868', bg: '#4A5868', text: '#FFFFFF', sub: 'SECONDARY / TEXT' },
  { name: 'OCHRE GOLD', hex: '#C5A880', bg: '#C5A880', text: '#FFFFFF', sub: 'ACCENT' },
  { name: 'LIMESTONE', hex: '#E2DBD2', bg: '#E2DBD2', text: '#1A202C', sub: 'BORDER / STONE' },
  { name: 'PARCHMENT', hex: '#F8F6F2', bg: '#F8F6F2', text: '#1A202C', sub: 'CANVAS / BG', border: true }
];

const swW = 250;
const swH = 140;
const swGap = (W - 240 - swW * 5) / 4;

swatches.forEach((sw, i) => {
  const sx = 120 + i * (swW + swGap);
  ctx.fillStyle = sw.bg;
  ctx.fillRect(sx, curY, swW, swH);
  if (sw.border) {
    ctx.strokeStyle = '#E2DBD2';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(sx, curY, swW, swH);
  }
  ctx.fillStyle = sw.text;
  ctx.textAlign = 'left';
  ctx.font = '600 14px Inter, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText(sw.name, sx + 20, curY + swH - 48);

  ctx.font = '300 12px Inter, sans-serif';
  ctx.letterSpacing = '0.5px';
  ctx.fillText(sw.hex + ' · ' + sw.sub, sx + 20, curY + swH - 24);
});

// SECTION 03: TYPOGRAPHY
curY += 230;
drawSectionHeader('Typography', '03', curY);
curY += 50;

ctx.fillStyle = '#FFFFFF';
ctx.fillRect(120, curY, W - 240, 240);
ctx.strokeStyle = '#E2DBD2';
ctx.strokeRect(120, curY, W - 240, 240);

ctx.textAlign = 'left';
// Row 1
ctx.fillStyle = '#8C827A';
ctx.font = '600 12px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('TITLE', 160, curY + 55);

ctx.fillStyle = '#0E1B2E';
ctx.font = '400 42px Cormorant, serif';
ctx.letterSpacing = '2px';
ctx.fillText('Design Rooted in Place', 260, curY + 60);

ctx.textAlign = 'right';
ctx.fillStyle = '#8C827A';
ctx.font = '300 13px Inter, sans-serif';
ctx.letterSpacing = '1px';
ctx.fillText('36 pt Serif · Cormorant / Roman Titles', W - 160, curY + 55);

// Divider
ctx.fillStyle = 'rgba(226, 219, 210, 0.7)';
ctx.fillRect(160, curY + 85, W - 320, 1);

// Row 2
ctx.textAlign = 'left';
ctx.fillStyle = '#8C827A';
ctx.font = '600 12px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('SUBTITLE', 160, curY + 130);

ctx.fillStyle = '#0E1B2E';
ctx.font = '500 18px Inter, sans-serif';
ctx.letterSpacing = '4px';
ctx.fillText('CLASSICAL, WARM & PRECISE', 260, curY + 130);

ctx.textAlign = 'right';
ctx.fillStyle = '#8C827A';
ctx.font = '300 13px Inter, sans-serif';
ctx.letterSpacing = '1px';
ctx.fillText('Uppercase Sans · 0.22em tracking', W - 160, curY + 130);

// Divider
ctx.fillStyle = 'rgba(226, 219, 210, 0.7)';
ctx.fillRect(160, curY + 155, W - 320, 1);

// Row 3
ctx.textAlign = 'left';
ctx.fillStyle = '#8C827A';
ctx.font = '600 12px Inter, sans-serif';
ctx.letterSpacing = '2px';
ctx.fillText('HEADING', 160, curY + 200);

ctx.fillStyle = '#0E1B2E';
ctx.font = 'italic 22px Cormorant, serif';
ctx.letterSpacing = '1px';
ctx.fillText('Section heads & pull quotes set with classical proportions', 260, curY + 200);

ctx.textAlign = 'right';
ctx.fillStyle = '#8C827A';
ctx.font = '300 13px Inter, sans-serif';
ctx.letterSpacing = '1px';
ctx.fillText('Cormorant Garamond Italic / Refined Body', W - 160, curY + 200);

// SECTION 04: WHO WE ARE
curY += 320;
drawSectionHeader('Who We Are', '04', curY);
curY += 50;

ctx.fillStyle = '#0E1B2E';
ctx.fillRect(120, curY, W - 240, 270);

// Left Quote Column
ctx.textAlign = 'left';
ctx.fillStyle = '#FFFFFF';
ctx.font = 'italic 34px Cormorant, serif';
ctx.letterSpacing = '1px';
ctx.fillText('"Design rooted in', 170, curY + 75);
ctx.fillText('classical principles,', 170, curY + 120);
ctx.fillText('responsive to place,', 170, curY + 165);
ctx.fillText('and built to endure."', 170, curY + 210);

// Vertical Divider
ctx.fillStyle = 'rgba(197, 168, 128, 0.4)';
ctx.fillRect(560, curY + 40, 1, 190);

// Right Narrative Paragraphs
ctx.fillStyle = 'rgba(248, 246, 242, 0.88)';
ctx.font = '300 16px Inter, sans-serif';
ctx.letterSpacing = '0.3px';
const bodyX = 600;
let by = curY + 60;
ctx.fillText('Founded in Atlanta in 1991, Harrison Design is one of the nation\'s premier full-service design firms.', bodyX, by);
ctx.fillText('With six offices across the country, the firm combines the depth of a national practice with the', bodyX, by + 28);
ctx.fillText('attentiveness of a studio deeply rooted in each region\'s architectural heritage.', bodyX, by + 56);

by += 96;
ctx.fillText('A comprehensive multi-disciplinary practice, Harrison Design offers architecture, interior design, and', bodyX, by);
ctx.fillText('landscape architecture under one roof. The firm\'s body of work spans the spectrum of classical to modern,', bodyX, by + 28);
ctx.fillText('united by the belief that great architecture serves life as it unfolds.', bodyX, by + 56);

// SECTION 05: WHAT WE DO
curY += 350;
drawSectionHeader('What We Do', '05', curY);
curY += 50;

const cardW = (W - 240 - 60) / 3;
const pillars = [
  {
    title: 'Architecture',
    body: 'High-end residential design is the core of the practice. Rooted in classical principles, each residence responds to its surroundings, climate, and personal traditions — built with timeless materials and exacting proportion.'
  },
  {
    title: 'Interiors',
    body: 'Our interior designers create custom environments that seamlessly integrate architectural details, bespoke furnishings, finish palettes, and curated art — ensuring a harmonious experience throughout.'
  },
  {
    title: 'Landscape',
    body: 'Site-sensitive landscape architecture uniting structure with terrain. From grand formal gardens to intimate courtyards, our landscape studio designs outdoor spaces that mature with grace.'
  }
];

pillars.forEach((p, i) => {
  const cx = 120 + i * (cardW + 30);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(cx, curY, cardW, 230);
  ctx.strokeStyle = '#E2DBD2';
  ctx.strokeRect(cx, curY, cardW, 230);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#0E1B2E';
  ctx.font = '600 28px Cormorant, serif';
  ctx.letterSpacing = '1px';
  ctx.fillText(p.title, cx + 30, curY + 60);

  ctx.fillStyle = '#4A5568';
  ctx.font = '300 15px Inter, sans-serif';
  ctx.letterSpacing = '0.2px';
  
  // Wrap text
  const words = p.body.split(' ');
  let line = '';
  let ly = curY + 105;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > cardW - 60 && n > 0) {
      ctx.fillText(line, cx + 30, ly);
      line = words[n] + ' ';
      ly += 26;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, cx + 30, ly);
});

// SECTION 06: TONE & VOICE
curY += 310;
drawSectionHeader('Tone & Voice', '06', curY);
curY += 50;

const tones = [
  {
    title: 'Authoritative',
    body: 'Thirty years of demonstrated expertise across residential architecture, interior design, and landscapes. Statements are understated, grounded in craft, and retain humble confidence.'
  },
  {
    title: 'Warm & Client-Centered',
    body: 'Every project begins with listening. Copy reflects deep respect for client visions, way of life, and collaboration. Language is inviting, personal, and never overly clinical.'
  },
  {
    title: 'Classical',
    body: 'Drawing on architectural history without being bound by it. Language conveys longevity, craftsmanship, and the enduring standard of classical residential architecture.'
  }
];

tones.forEach((p, i) => {
  const cx = 120 + i * (cardW + 30);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(cx, curY, cardW, 230);
  ctx.strokeStyle = '#E2DBD2';
  ctx.strokeRect(cx, curY, cardW, 230);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#0E1B2E';
  ctx.font = '600 28px Cormorant, serif';
  ctx.letterSpacing = '1px';
  ctx.fillText(p.title, cx + 30, curY + 60);

  ctx.fillStyle = '#4A5568';
  ctx.font = '300 15px Inter, sans-serif';
  ctx.letterSpacing = '0.2px';
  
  const words = p.body.split(' ');
  let line = '';
  let ly = curY + 105;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > cardW - 60 && n > 0) {
      ctx.fillText(line, cx + 30, ly);
      line = words[n] + ' ';
      ly += 26;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, cx + 30, ly);
});

// FOOTER
curY += 310;
const footerH = 200;
ctx.fillStyle = '#0E1B2E';
ctx.fillRect(0, H - footerH, W, footerH);

ctx.fillStyle = 'rgba(197, 168, 128, 0.4)';
ctx.fillRect(0, H - footerH, W, 1);

ctx.textAlign = 'center';
ctx.fillStyle = 'rgba(248, 246, 242, 0.65)';
ctx.font = '300 14px Inter, sans-serif';
ctx.letterSpacing = '3px';
ctx.fillText('HONORED WITH OVER 50 DESIGN AWARDS · TWO PALLADIO AWARDS · ARTHUR ROSS AWARD', W / 2, H - 110);

ctx.fillStyle = '#C5A880';
ctx.font = 'italic 20px Cormorant, serif';
ctx.letterSpacing = '2px';
ctx.fillText('Harrison Design · Est. 1991', W / 2, H - 65);

// Output JPEG
const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
fs.writeFileSync('images/Harrison Design - Brand Board.jpg', buffer);
console.log('Saved images/Harrison Design - Brand Board.jpg, size:', buffer.length);
