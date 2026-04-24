'use client';

import { useEffect, useState } from 'react';

const EYE_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export default function ViewCounter({ slug }) {
  const [views, setViews] = useState(null);

  useEffect(() => {
    if (!slug) return;
    // Incrementeaza si afiseaza
    fetch(`/api/views/${slug}`, { method: 'POST' })
      .then(r => r.json())
      .then(d => setViews(d.views))
      .catch(() => setViews(null));
  }, [slug]);

  if (views === null) return null;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: 'Barlow Condensed, sans-serif',
      fontSize: '.58rem',
      letterSpacing: '.06em',
      color: '#999',
    }}>
      {EYE_ICON}
      {views.toLocaleString()}
    </span>
  );
}
