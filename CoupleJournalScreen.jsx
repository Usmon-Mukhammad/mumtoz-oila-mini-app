function CoupleJournalScreen({ chapters, available, progress }) {
  const { Button } = window.MumtozOilaDesignSystem_c96f62;
  const [myReflections, setMyReflections] = React.useState(window.MY_REFLECTIONS);
  const [draft, setDraft] = React.useState('');
  const pending = chapters.slice(0, available).find(c => (progress[c.n]||{}).done && !myReflections.find(r => r.n === c.n));
  function submitDraft() {
    if (!draft.trim() || !pending) return;
    setMyReflections(r => [...r, { n: pending.n, text: draft.trim() }]);
    setDraft('');
  }
  const pairs = window.PARTNER_REFLECTIONS
    .map(p => ({ n: p.n, partnerText: p.text, myText: myReflections.find(m => m.n === p.n)?.text, title: chapters.find(c => c.n === p.n)?.title }))
    .filter(p => p.myText);
  const [i, setI] = React.useState(pairs.length - 1);
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', background:'var(--color-bg)', fontFamily:'var(--font-body)' }}>
      <div style={{ padding:'20px 20px 4px' }}>
        <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:20, color:'var(--color-text-primary)' }}>Birgalikdagi fikrlar</div>
      </div>
      {pending && (
        <div style={{ padding:'12px 20px 0' }}>
          <div style={{ background:'var(--color-surface)', border:'1.5px solid var(--color-primary)', borderRadius:'var(--radius-lg)', padding:'14px' }}>
            <div style={{ fontSize:12, fontWeight:700, color:'var(--color-primary)', marginBottom:6 }}>{pending.n}-bob: {pending.title} — fikringizni yozing</div>
            <textarea value={draft} onChange={e => setDraft(e.target.value)} placeholder="Bu bob haqida fikringiz…" style={{ width:'100%', minHeight:70, padding:10, borderRadius:'var(--radius-md)', border:'1px solid var(--color-border)', fontFamily:'var(--font-body)', fontSize:14, resize:'vertical', boxSizing:'border-box' }}></textarea>
            <Button fullWidth disabled={!draft.trim()} onClick={submitDraft} style={{ marginTop:8 }}>Yuborish</Button>
          </div>
        </div>
      )}
      {pairs.length === 0 ? (
        <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'0 32px', textAlign:'center', fontSize:13, color:'var(--color-text-muted)' }}>Hali birgalikda yakunlangan bob yoʻq.</div>
      ) : (
        <div style={{ flex:1, overflowY:'auto', padding:'16px 20px 24px', display:'flex', flexDirection:'column', gap:16 }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <button onClick={() => setI(i - 1)} disabled={i === 0} aria-label="Oldingi" style={{ width:32, height:32, borderRadius:'50%', border:'none', background:'var(--color-surface-sunken)', cursor: i===0 ? 'default' : 'pointer', opacity: i===0 ? 0.35 : 1, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img src="https://unpkg.com/lucide-static@latest/icons/chevron-left.svg" style={{ width:16, height:16 }} alt="" />
            </button>
            <div style={{ textAlign:'center' }}>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:16, color:'var(--color-text-primary)' }}>{pairs[i].n}-bob: {pairs[i].title}</div>
              <div style={{ fontSize:11, color:'var(--color-text-muted)', marginTop:2 }}>{i+1} / {pairs.length}</div>
            </div>
            <button onClick={() => setI(i + 1)} disabled={i === pairs.length - 1} aria-label="Keyingi" style={{ width:32, height:32, borderRadius:'50%', border:'none', background:'var(--color-surface-sunken)', cursor: i===pairs.length-1 ? 'default' : 'pointer', opacity: i===pairs.length-1 ? 0.35 : 1, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img src="https://unpkg.com/lucide-static@latest/icons/chevron-right.svg" style={{ width:16, height:16 }} alt="" />
            </button>
          </div>
          <div style={{ background:'var(--color-surface)', border:'1px solid var(--color-border)', borderRadius:'var(--radius-lg)', padding:'16px' }}>
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:'0.03em', color:'var(--color-text-muted)', textTransform:'uppercase', marginBottom:6 }}>Siz</div>
            <div style={{ fontSize:15, color:'var(--color-text-primary)', lineHeight:1.55 }}>{pairs[i].myText}</div>
          </div>
          <div style={{ background:'var(--color-accent-gold-tint)', borderRadius:'var(--radius-lg)', padding:'16px' }}>
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:'0.03em', color:'#8A6112', textTransform:'uppercase', marginBottom:6 }}>Turmush oʻrtogʻingiz</div>
            <div style={{ fontSize:15, color:'#6B4A10', lineHeight:1.55 }}>{pairs[i].partnerText}</div>
          </div>
        </div>
      )}
    </div>
  );
}
window.CoupleJournalScreen = CoupleJournalScreen;
