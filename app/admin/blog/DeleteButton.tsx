'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteButton({ postId, postTitle }: { postId: string; postTitle: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      `Ești sigur că vrei să ștergi articolul:\n"${postTitle}"?\n\nAceastă acțiune nu poate fi anulată.`
    );
    if (!confirmed) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/admin/blog/${postId}`, { method: 'DELETE' });
      if (res.ok) {
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.error || 'Eroare la ștergere');
      }
    } catch {
      alert('Eroare de conexiune');
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      style={{
        padding: '0.375rem 0.75rem',
        background: loading ? '#fecaca' : '#fff1f2',
        color: '#dc2626',
        border: '1px solid #fecaca',
        borderRadius: '6px',
        fontSize: '0.8125rem',
        fontWeight: '500',
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'all 0.15s',
      }}
    >
      {loading ? '...' : 'Șterge'}
    </button>
  );
}
