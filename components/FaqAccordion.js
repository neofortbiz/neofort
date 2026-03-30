'use client';

import { useState } from 'react';

export default function FaqAccordion({ items, title }) {
  const [open, setOpen] = useState(null);
  if (!items || items.length === 0) return null;
  return (
    <section style={{ margin: '64px 0 0' }}>
      <h2 style={{
        fontSize: '1.25rem', fontWeight: 600, color: '#1a1a1a',
        marginBottom: '24px',
        fontFamily: "var(--font-condensed,'Arial Narrow',sans-serif)"
      }}>{title}</h2>
      <div>
        {items.map(([q, a], i) => (
          <div key={i} style={{ borderBottom: '1px solid #e8e8e4' }}>
            <button
              style={{
                width: '100%', textAlign: 'left', background: 'none',
                border: 'none', padding: '18px 0', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', gap: '16px'
              }}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span style={{ fontSize: '.92rem', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4 }}>{q}</span>
              <span style={{
                flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%',
                background: '#f0f0ec', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '.8rem', color: '#666',
                transition: 'transform .2s',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)'
              }} aria-hidden="true">+</span>
            </button>
            <div style={{
              overflow: 'hidden',
              maxHeight: open === i ? '400px' : '0px',
              transition: 'max-height .3s ease'
            }}>
              <p style={{ padding: '0 0 18px', fontSize: '.88rem', color: '#636363', lineHeight: 1.7 }}>{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
