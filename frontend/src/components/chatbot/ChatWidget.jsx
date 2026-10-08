import { useState } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat-widget" style={{ position: 'fixed', zIndex: 100 }}>
      {open && (
        <div
          className="chat-widget-panel"
          style={{
            background: '#fff',
            border: '1px solid var(--color-card-border)',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-card)',
            marginBottom: 'var(--space-3)',
            padding: 'var(--space-3)',
          }}
        >
          <strong>Misorium Assistant</strong>
          {/* TODO: message list, quick-reply chips, booking flow per ui.md §6.7 */}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--color-primary)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        💬
      </button>
    </div>
  );
}
