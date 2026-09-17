function BadgeDialog({ chapter, onClose }) {
  if (!chapter) return null;
  const info = window.BADGE_INFO[(chapter.n-1) % window.BADGE_INFO.length];
  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(42,30,26,0.5)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100, padding:24 }}>
      <div onClick={e => e.stopPropagation()} style={{ background:'var(--color-surface)', borderRadius:'var(--radius-xl)', padding:'28px 24px', maxWidth:320, width:'100%', boxShadow:'var(--shadow-lg)', display:'flex', flexDirection:'column', alignItems:'center', gap:14, fontFamily:'var(--font-body)' }}>
        <img src={`../../assets/brand/badges/${window.BADGE_ART[(chapter.n-1) % window.BADGE_ART.length]}.png`} style={{ width:104, height:104, borderRadius:'50%' }} alt="" />
        <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:19, color:'var(--color-text-primary)', textAlign:'center' }}>{info.name}</div>
        <div style={{ fontSize:13, fontWeight:600, color:'var(--color-text-muted)' }}>{chapter.n}-bob: {chapter.title}</div>
        <div style={{ fontSize:14, color:'var(--color-text-secondary)', textAlign:'center', lineHeight:1.5 }}>{info.desc}</div>
      </div>
    </div>
  );
}

function BadgeStrip({ chapters, progress }) {
  const [open, setOpen] = React.useState(null);
  const earned = chapters.filter(c => (progress[c.n]||{}).done);
  if (earned.length === 0) return null;
  return (
    <React.Fragment>
      <div style={{ display:'flex', gap:10, overflowX:'auto', paddingBottom:2 }}>
        {earned.map(c => (
          <img key={c.n} onClick={() => setOpen(c)} src={`../../assets/brand/badges/${window.BADGE_ART[(c.n-1) % window.BADGE_ART.length]}.png`} title={c.title} style={{ flexShrink:0, width:44, height:44, borderRadius:'50%', cursor:'pointer' }} alt={c.title} />
        ))}
      </div>
      <BadgeDialog chapter={open} onClose={() => setOpen(null)} />
    </React.Fragment>
  );
}

function ChapterRow({ number, title, state, onClick }) {
  const iconSrc = state === 'locked' ? 'lock' : state === 'complete' ? 'check' : 'play';
  const dot = { locked: 'var(--color-surface-sunken)', active: 'var(--color-primary)', complete: 'var(--color-accent-gold)' }[state];
  const fg = state === 'locked' ? 'var(--color-text-muted)' : '#fff';
  return (
    <button onClick={onClick} style={{ display:'flex', alignItems:'center', gap:14, width:'100%', textAlign:'left', background:'var(--color-surface)', border: state==='active' ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)', borderRadius:'var(--radius-lg)', padding:'14px 16px', cursor: state==='locked' ? 'not-allowed' : 'pointer', boxShadow: state==='active' ? 'var(--shadow-sm)' : 'none' }}>
      <div style={{ flexShrink:0, width:40, height:40, borderRadius:'50%', background:dot, color:fg, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:700, fontSize:15 }}>
        {state === 'active' ? number : <img src={`https://unpkg.com/lucide-static@latest/icons/${iconSrc}.svg`} style={{ width:16, height:16, filter: state==='locked' ? 'none' : 'brightness(0) invert(1)', opacity: state==='locked' ? 0.5 : 1 }} alt="" />}
      </div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:'0.03em', color:'var(--color-text-muted)', textTransform:'uppercase' }}>{number}-bob</div>
        <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:15, color: state==='locked' ? 'var(--color-text-muted)' : 'var(--color-text-primary)', marginTop:2 }}>{title}</div>
      </div>
      {state !== 'locked' && <img src="https://unpkg.com/lucide-static@latest/icons/chevron-right.svg" style={{ width:18, height:18, opacity:0.4, flexShrink:0 }} alt="" />}
    </button>
  );
}

function JourneyScreen({ chapters, available, progress, onOpen, onLockedTap }) {
  function firstCurrent() {
    for (let i = 0; i < available; i++) if (!(progress[chapters[i].n]||{}).done) return chapters[i].n;
    return null;
  }
  const current = firstCurrent();
  const doneCount = chapters.slice(0, available).filter(c => (progress[c.n]||{}).done).length;
  const pct = Math.round((doneCount / available) * 100);
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', background:'var(--color-bg)', fontFamily:'var(--font-body)' }}>
      <div style={{ padding:'20px 16px 0' }}>
        <div style={{ position:'relative', background:'var(--color-primary)', borderRadius:'var(--radius-xl)', padding:'20px 20px 22px', overflow:'hidden', boxShadow:'var(--shadow-md)' }}>
          <img src="../../assets/brand/ikat-corner.jpg" style={{ position:'absolute', top:-14, right:-14, width:74, height:74, borderRadius:'50%', opacity:0.35, objectFit:'cover' }} alt="" />
          <div style={{ position:'relative' }}>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:24, color:'var(--cream-50)' }}>Oila yoʻli</div>
            <div style={{ fontSize:13, color:'rgba(253,249,242,0.75)', marginTop:2 }}>{doneCount} / {available} bob · {pct}%</div>
          </div>
        </div>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'18px 20px 20px', display:'flex', flexDirection:'column', gap:14 }}>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {chapters.map((c, i) => {
            const done = (progress[c.n]||{}).done;
            const state = done ? 'complete' : (c.n === current ? 'active' : 'locked');
            return <ChapterRow key={c.n} number={c.n} title={c.title} state={state} onClick={() => {
              if (done || c.n === current) onOpen(c);
              else onLockedTap(i < available ? 'prereq' : 'unreleased');
            }} />;
          })}
        </div>
      </div>
    </div>
  );
}
window.JourneyScreen = JourneyScreen;
