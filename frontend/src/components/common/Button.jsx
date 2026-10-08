export default function Button({ variant = 'primary', children, ...props }) {
  const styles = {
    primary: { background: 'var(--color-primary)', color: '#fff', border: 'none' },
    secondary: { background: '#fff', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' },
    accent: { background: 'var(--color-accent)', color: '#fff', border: 'none' },
  };

  return (
    <button
      {...props}
      style={{
        ...styles[variant],
        borderRadius: 'var(--radius-button)',
        padding: '10px 20px',
        fontWeight: 600,
        cursor: 'pointer',
        ...props.style,
      }}
    >
      {children}
    </button>
  );
}
