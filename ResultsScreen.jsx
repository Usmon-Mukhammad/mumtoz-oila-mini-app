function stars(pct) { return pct === 100 ? 3 : pct >= 70 ? 2 : 1; }
function scoreMessage(pct) {
  if (pct === 100) return 'Ajoyib! Barcha savollarga toʻgʻri javob berdingiz.';
  if (pct >= 70) return 'Yaxshi natija! Bir-ikki joyni birga koʻrib chiqamiz.';
  return 'Muhim emas — xato javoblar orqali ham oʻrganamiz. Pastda koʻrib chiqing.';
}

function ScoreRing({ pct }) {
  const r = 58, c = 2 * Math.PI * r;
  return (
    <div style={{ position:'relative', width:140, height:140 }}>
      <svg width="140" height="140" viewBox="0 0 140 140" style={{ transform:'rotate(-90deg)' }}>
        <circle cx="70" cy="70" r={r} fill="none" stroke="var(--color-surface-sunken)" strokeWidth="10" />
        <circle cx="70" cy="70" r={r} fill="none" stroke="var(--color-accent-gold)" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${c * pct / 100} ${c}`} />
      </svg>
      <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
        <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:32, color:'var(--color-primary)' }}>{pct}%</div>
        <div style={{ fontSize:11, color:'var(--color-text-muted)', marginTop:2 }}>toʻgʻri</div>
      </div>
    </div>
  );
}

function PerfectReveal({ chapterN }) {
  const [flipped, setFlipped] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setFlipped(true), 350); return () => clearTimeout(t); }, []);
  const art = window.BADGE_ART[(chapterN - 1) % window.BADGE_ART.length];
  return (
    <div style={{ position:'relative', width:150, height:150, perspective:600 }}>
      <div style={{
        width:'100%', height:'100%', borderRadius:'50%', position:'relative', transformStyle:'preserve-3d',
        transition:'transform 0.9s cubic-bezier(.34,1.56,.64,1)', transform: flipped ? 'rotateY(360deg) scale(1)' : 'rotateY(0deg) scale(0.4)',
      }}>
        <div style={{ position:'absolute', inset:0, borderRadius:'50%', background:'var(--color-surface-sunken)', display:'flex', alignItems:'center', justifyContent:'center', backfaceVisibility:'hidden' }}>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:32, color:'var(--color-text-muted)' }}>?</div>
        </div>
        <img src={`assets/brand/badges/${art}.png`} style={{ position:'absolute', inset:0, width:'100%', height:'100%', borderRadius:'50%', boxShadow:'var(--shadow-lg)', backfaceVisibility:'hidden', transform:'rotateY(180deg)' }} alt="" />
      </div>
    </div>
  );
}

function ResultsScreen({ chapter, results, syncState, onRetry, onContinue, onRetrySync }) {
  const { Button, Badge } = window.MumtozOilaDesignSystem_c96f62;
  const [expanded, setExpanded] = React.useState(false);
  const correctCount = results.filter(r => r.correct).length;
  const pct = Math.round((correctCount / results.length) * 100);
  const missed = results.filter(r => !r.correct);

  if (syncState === 'syncing') {
    return (
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', gap:14, background:'var(--color-bg)', fontFamily:'var(--font-body)' }}>
        <div style={{ width:36, height:36, border:'3px solid var(--color-border)', borderTopColor:'var(--color-primary)', borderRadius:'50%', animation:'spin 0.8s linear infinite' }}></div>
        <div style={{ fontSize:14, color:'var(--color-text-secondary)' }}>Natija saqlanmoqda…</div>
        <style>{'@keyframes spin{to{transform:rotate(360deg)}}'}</style>
      </div>
    );
  }
  if (syncState === 'failed') {
    return (
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', gap:14, padding:'0 32px', textAlign:'center', background:'var(--color-bg)', fontFamily:'var(--font-body)' }}>
        <img src="https://unpkg.com/lucide-static@latest/icons/wifi-off.svg" style={{ width:40, height:40, opacity:0.7 }} alt="" />
        <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:18 }}>Natijani yuborib boʻlmadi</div>
        <div style={{ fontSize:14, color:'var(--color-text-secondary)' }}>Internet aloqasini tekshirib, qayta urinib koʻring. Fikrlash bosqichi natija saqlangandan keyin ochiladi.</div>
        <Button fullWidth onClick={onRetrySync}>Qayta urinish</Button>
      </div>
    );
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', background:'var(--color-bg)', fontFamily:'var(--font-body)' }}>
      <div style={{ flex:1, overflowY:'auto', padding:'32px 24px 20px', display:'flex', flexDirection:'column', alignItems:'center', gap:16, textAlign:'center' }}>
        <Badge tone={pct === 100 ? 'gold' : 'primary'}>{chapter.n}-bob: {chapter.title}</Badge>
        {pct === 100 ? <PerfectReveal chapterN={chapter.n} /> : <ScoreRing pct={pct} />}
        <div style={{ fontSize:15, color:'var(--color-text-primary)', fontWeight:500, maxWidth:280, lineHeight:1.5 }}>{scoreMessage(pct)}</div>
        <div style={{ fontSize:13, color:'var(--color-text-secondary)' }}>{correctCount} / {results.length} toʻgʻri javob</div>
        {missed.length > 0 && (
          <div style={{ width:'100%', marginTop:6, textAlign:'left' }}>
            <button onClick={() => setExpanded(e => !e)} style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', background:'var(--color-surface)', border:'1px solid var(--color-border)', borderRadius:'var(--radius-md)', cursor:'pointer', fontSize:14, fontWeight:600, color:'var(--color-text-primary)', padding:'12px 14px' }}>
              <span>Xato javoblarni koʻrish ({missed.length})</span>
              <img src={`https://unpkg.com/lucide-static@latest/icons/chevron-${expanded?'up':'down'}.svg`} style={{ width:16, height:16 }} alt="" />
            </button>
            {expanded && (
              <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:10 }}>
                {missed.map((r, i) => (
                  <div key={i} style={{ background:'var(--color-surface)', border:'1px solid var(--color-border)', borderRadius:'var(--radius-lg)', padding:16, display:'flex', flexDirection:'column', gap:10 }}>
                    <div style={{ fontSize:14, fontWeight:600, color:'var(--color-text-primary)' }}>{r.q}</div>
                    <div style={{ display:'flex', alignItems:'flex-start', gap:8, background:'var(--color-danger-tint)', borderRadius:'var(--radius-md)', padding:'8px 10px' }}>
                      <img src="https://unpkg.com/lucide-static@latest/icons/x-circle.svg" style={{ width:15, height:15, flexShrink:0, marginTop:1 }} alt="" />
                      <div style={{ fontSize:13, color:'var(--color-danger)', lineHeight:1.4 }}>{r.pickedText}</div>
                    </div>
                    <div style={{ display:'flex', alignItems:'flex-start', gap:8, background:'var(--color-success-tint)', borderRadius:'var(--radius-md)', padding:'8px 10px' }}>
                      <img src="https://unpkg.com/lucide-static@latest/icons/check-circle-2.svg" style={{ width:15, height:15, flexShrink:0, marginTop:1 }} alt="" />
                      <div style={{ fontSize:13, color:'var(--color-success)', lineHeight:1.4 }}>{r.correctText}</div>
                    </div>
                    <div style={{ fontSize:12, color:'var(--color-text-secondary)', lineHeight:1.5 }}>{r.explain}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div style={{ padding:'0 20px 24px', display:'flex', flexDirection:'column', gap:10 }}>
        <Button fullWidth variant="secondary" onClick={onRetry}>Qayta urinish</Button>
        <Button fullWidth onClick={onContinue}>Davom etish</Button>
      </div>
    </div>
  );
}
window.ResultsScreen = ResultsScreen;
