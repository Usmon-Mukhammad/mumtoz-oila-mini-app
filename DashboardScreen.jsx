const UZ_DAYS = ['Du','Se','Ch','Pa','Ju','Sh','Ya'];
const UZ_MONTHS = ['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktabr','Noyabr','Dekabr'];

function WeekActivity() {
  const seed = React.useMemo(() => {
    let s = 7;
    return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  }, []);
  const today = new Date();
  const todayIdx = (today.getDay() + 6) % 7;
  const days = React.useMemo(() => UZ_DAYS.map((label, i) => ({
    label,
    active: i <= todayIdx ? seed() < 0.7 : false,
    isToday: i === todayIdx,
    isFuture: i > todayIdx,
  })), [seed, todayIdx]);
  return (
    <div style={{ background:'var(--color-surface)', border:'1px solid var(--color-border)', borderRadius:'var(--radius-lg)', padding:'16px 14px', display:'flex', justifyContent:'space-between' }}>
      {days.map((d, i) => (
        <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
          <div style={{
            width:30, height:30, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
            background: d.active ? 'var(--color-accent-gold)' : 'var(--color-surface-sunken)',
            border: d.isToday ? '2px solid var(--color-primary)' : 'none',
            opacity: d.isFuture ? 0.4 : 1,
          }}>
            {d.active && <img src="https://unpkg.com/lucide-static@latest/icons/check.svg" style={{ width:14, height:14, filter:'brightness(0) invert(1)' }} alt="" />}
          </div>
          <span style={{ fontSize:11, fontWeight: d.isToday ? 700 : 500, color: d.isToday ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}
window.WeekActivity = WeekActivity;

function MonthActivity({ offset, onOffset }) {
  const seed = React.useMemo(() => {
    let s = 13 + offset * 97;
    return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  }, [offset]);
  const today = new Date();
  const viewDate = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  const year = viewDate.getFullYear(), month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const leadingBlanks = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const isCurrentMonth = offset === 0;
  const cells = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < leadingBlanks; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const isFuture = offset > 0 || (isCurrentMonth && d > today.getDate());
      arr.push({ day: d, active: !isFuture && seed() < 0.65, isToday: isCurrentMonth && d === today.getDate(), isFuture });
    }
    return arr;
  }, [seed]);
  return (
    <div style={{ background:'var(--color-surface)', border:'1px solid var(--color-border)', borderRadius:'var(--radius-lg)', padding:'16px 14px' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
        <button onClick={() => onOffset(offset - 1)} aria-label="Oldingi oy" style={{ width:26, height:26, borderRadius:'50%', border:'none', background:'var(--color-surface-sunken)', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <img src="https://unpkg.com/lucide-static@latest/icons/chevron-left.svg" style={{ width:14, height:14 }} alt="" />
        </button>
        <div style={{ fontSize:13, fontWeight:600, color:'var(--color-text-primary)' }}>{UZ_MONTHS[month]} {year}</div>
        <button onClick={() => offset < 0 && onOffset(offset + 1)} aria-label="Keyingi oy" disabled={offset >= 0} style={{ width:26, height:26, borderRadius:'50%', border:'none', background:'var(--color-surface-sunken)', cursor: offset >= 0 ? 'default' : 'pointer', opacity: offset >= 0 ? 0.35 : 1, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <img src="https://unpkg.com/lucide-static@latest/icons/chevron-right.svg" style={{ width:14, height:14 }} alt="" />
        </button>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:5, marginBottom:8 }}>
        {UZ_DAYS.map(d => <div key={d} style={{ fontSize:10, fontWeight:600, color:'var(--color-text-muted)', textAlign:'center' }}>{d[0]}</div>)}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:5 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ position:'relative', aspectRatio:'1', borderRadius:6,
            background: c ? (c.active ? 'var(--color-accent-gold)' : 'var(--color-surface-sunken)') : 'transparent',
            outline: c && c.isToday ? '2px solid var(--color-primary)' : 'none', outlineOffset:1,
            opacity: c && c.isFuture ? 0.45 : 1,
          }}>
            {c && <span style={{ position:'absolute', top:2, left:4, fontSize:9, fontWeight:600, color: c.active ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)' }}>{c.day}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
window.MonthActivity = MonthActivity;

function DashboardScreen({ chapters, available, progress, streak, onContinue }) {
  const [activityView, setActivityView] = React.useState(0);
  const [monthOffset, setMonthOffset] = React.useState(0);
  const { Badge, Button } = window.MumtozOilaDesignSystem_c96f62;
  const doneCount = chapters.slice(0, available).filter(c => (progress[c.n]||{}).done).length;
  const current = chapters.find(c => !(progress[c.n]||{}).done) || chapters[0];
  const lastDone = [...chapters].reverse().find(c => (progress[c.n]||{}).done);
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', background:'var(--color-bg)', fontFamily:'var(--font-body)', overflowY:'auto' }}>
      <div style={{ padding:'24px 20px 4px' }}>
        <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:24, color:'var(--color-text-primary)' }}>Assalomu alaykum!</div>
        <div style={{ fontSize:13, color:'var(--color-text-secondary)', marginTop:2 }}>Bugungi safarni davom ettiring.</div>
      </div>
      <div style={{ padding:'16px 20px 0' }}>
        <div style={{ position:'relative', background:'var(--color-primary)', borderRadius:'var(--radius-xl)', padding:'22px 20px', boxShadow:'var(--shadow-md)', overflow:'hidden' }}>
          <svg width="76" height="76" viewBox="0 0 76 76" style={{ position:'absolute', top:0, right:0 }}>
            <defs>
              <pattern id="ikatStitch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(-45 0 0)">
                <g fill="rgba(253,249,242,0.55)">
                  <rect x="6" y="0" width="3" height="3" />
                  <rect x="3" y="3" width="3" height="3" /><rect x="6" y="3" width="3" height="3" /><rect x="9" y="3" width="3" height="3" />
                  <rect x="0" y="6" width="3" height="3" /><rect x="3" y="6" width="3" height="3" /><rect x="6" y="6" width="3" height="3" /><rect x="9" y="6" width="3" height="3" /><rect x="12" y="6" width="3" height="3" />
                  <rect x="3" y="9" width="3" height="3" /><rect x="6" y="9" width="3" height="3" /><rect x="9" y="9" width="3" height="3" />
                  <rect x="6" y="12" width="3" height="3" />
                </g>
              </pattern>
            </defs>
            <polygon points="76,0 76,76 0,0" fill="url(#ikatStitch)" />
            <line x1="0" y1="0" x2="76" y2="76" stroke="rgba(253,249,242,0.45)" strokeWidth="1.2" />
          </svg>
          <div style={{ position:'relative' }}>
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:'0.06em', color:'rgba(253,249,242,0.75)', textTransform:'uppercase' }}>Kun hikmati</div>
            <div style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontWeight:600, fontSize:19, color:'var(--cream-50)', marginTop:6, lineHeight:1.45 }}>{window.GOLDEN_SENTENCE}</div>
          </div>
        </div>
      </div>
      <div style={{ padding:'16px 20px 0' }}>
        <div style={{ display:'flex', gap:10 }}>
          <div style={{ flex:1, background:'var(--color-surface)', border:'1px solid var(--color-border)', borderRadius:'var(--radius-lg)', padding:'14px', textAlign:'center' }}>
            <img src="https://unpkg.com/lucide-static@latest/icons/flame.svg" style={{ width:20, height:20, color:'var(--color-accent-gold)' }} alt="" />
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'var(--color-text-primary)', marginTop:4 }}>{streak}</div>
            <div style={{ fontSize:11, color:'var(--color-text-secondary)' }}>kunlik izchillik</div>
          </div>
          <div style={{ flex:1, background:'var(--color-surface)', border:'1px solid var(--color-border)', borderRadius:'var(--radius-lg)', padding:'14px', textAlign:'center' }}>
            <img src="https://unpkg.com/lucide-static@latest/icons/book-open.svg" style={{ width:20, height:20, color:'var(--color-primary)' }} alt="" />
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'var(--color-text-primary)', marginTop:4 }}>{doneCount}/{available}</div>
            <div style={{ fontSize:11, color:'var(--color-text-secondary)' }}>bob yakunlandi</div>
          </div>
        </div>
      </div>
      <div style={{ padding:'16px 20px 0' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:8 }}>
          <div style={{ fontSize:13, fontWeight:600, color:'var(--color-text-secondary)' }}>Faollik</div>
          <div style={{ display:'flex', background:'var(--color-surface-sunken)', borderRadius:'var(--radius-pill)', padding:2 }}>
            {['Hafta','Oy'].map((label, i) => (
              <button key={i} onClick={() => setActivityView(i)} style={{ border:'none', cursor:'pointer', padding:'5px 12px', borderRadius:'var(--radius-pill)', fontSize:12, fontWeight:600, background: activityView===i ? 'var(--color-surface)' : 'transparent', color: activityView===i ? 'var(--color-primary)' : 'var(--color-text-muted)', boxShadow: activityView===i ? 'var(--shadow-sm)' : 'none' }}>{label}</button>
            ))}
          </div>
        </div>
        {activityView === 0 ? <WeekActivity /> : <MonthActivity offset={monthOffset} onOffset={setMonthOffset} />}
      </div>
      <div style={{ padding:'16px 20px 0' }}>
        <div style={{ fontSize:13, fontWeight:600, color:'var(--color-text-secondary)', marginBottom:8 }}>Soʻnggi faoliyat</div>
        {lastDone ? (
          <div style={{ display:'flex', alignItems:'center', gap:12, background:'var(--color-surface)', border:'1px solid var(--color-border)', borderRadius:'var(--radius-md)', padding:'12px 14px' }}>
            <div style={{ width:32, height:32, borderRadius:'50%', flexShrink:0, overflow:'hidden' }}>
              <img src={`../../assets/brand/badges/${window.BADGE_ART[(lastDone.n-1) % window.BADGE_ART.length]}.png`} style={{ width:'100%', height:'100%' }} alt="" />
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:14, color:'var(--color-text-primary)', fontWeight:500 }}>{lastDone.title}</div>
              <div style={{ fontSize:12, color:'var(--color-text-muted)' }}>Yakunlandi</div>
            </div>
          </div>
        ) : (
          <div style={{ fontSize:13, color:'var(--color-text-muted)' }}>Hali faoliyat yoʻq — birinchi bobni boshlang.</div>
        )}
      </div>
      <div style={{ padding:'20px 20px 24px', marginTop:'auto' }}>
        <Button fullWidth onClick={onContinue}>{current.n}-bobni davom ettirish</Button>
      </div>
    </div>
  );
}
window.DashboardScreen = DashboardScreen;
