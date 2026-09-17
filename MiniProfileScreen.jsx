function ConnectDialog({ code, connected, onClose, onCopy, onConfirm }) {
  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(42,30,26,0.5)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100, padding:24 }}>
      <div onClick={e => e.stopPropagation()} style={{ background:'var(--color-surface)', borderRadius:'var(--radius-xl)', padding:'28px 24px', maxWidth:320, width:'100%', boxShadow:'var(--shadow-lg)', display:'flex', flexDirection:'column', alignItems:'center', gap:14, fontFamily:'var(--font-body)', textAlign:'center' }}>
        {connected ? (
          <React.Fragment>
            <div style={{ width:56, height:56, borderRadius:'50%', background:'var(--color-success-tint)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img src="https://unpkg.com/lucide-static@latest/icons/check.svg" style={{ width:26, height:26, color:'var(--color-success)' }} alt="" />
            </div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:18, color:'var(--color-text-primary)' }}>Bogʻlandi!</div>
            <div style={{ fontSize:13, color:'var(--color-text-secondary)', lineHeight:1.5 }}>Endi Fikrlash vazifalarini turmush oʻrtogʻingiz bilan birga bajarishingiz mumkin.</div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:18, color:'var(--color-text-primary)' }}>Turmush oʻrtogʻingizni ulang</div>
            <div style={{ fontSize:13, color:'var(--color-text-secondary)', lineHeight:1.5 }}>Ushbu buyruqni turmush oʻrtogʻingizga yuboring — u botda shu buyruqni yozishi kifoya.</div>
            <div onClick={onCopy} title="Nusxalash uchun bosing" style={{ display:'flex', alignItems:'center', gap:10, background:'var(--color-surface-sunken)', border:'1px solid var(--color-border)', borderRadius:'var(--radius-md)', padding:'12px 16px', cursor:'pointer', width:'100%', justifyContent:'center' }}>
              <span style={{ fontFamily:'monospace', fontSize:16, fontWeight:600, color:'var(--color-primary)', letterSpacing:'0.02em' }}>/connect {code}</span>
              <img src="https://unpkg.com/lucide-static@latest/icons/copy.svg" style={{ width:16, height:16, opacity:0.6 }} alt="" />
            </div>
            <div style={{ fontSize:12, color:'var(--color-text-muted)' }}>Kod 24 soat amal qiladi.</div>
            <button onClick={onConfirm} style={{ background:'transparent', border:'none', color:'var(--color-primary)', fontSize:13, fontWeight:600, cursor:'pointer', padding:'4px 0' }}>Ulanganini bilaman — davom etish</button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function MiniProfileScreen({ chapters, available, progress, streak, onOpenCouple }) {
  const { Card, Badge, Switch, Button } = window.MumtozOilaDesignSystem_c96f62;
  const [notif, setNotif] = React.useState(true);
  const [shareCouple, setShareCouple] = React.useState(false);
  const [openBadge, setOpenBadge] = React.useState(null);
  const [connectOpen, setConnectOpen] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const [code] = React.useState(() => Math.random().toString(36).slice(2, 8).toUpperCase());
  function copyCode() {
    if (navigator.clipboard) navigator.clipboard.writeText(`/connect ${code}`);
  }
  function confirmConnected() {
    setConnected(true);
    setShareCouple(true);
    setTimeout(() => setConnectOpen(false), 1400);
  }
  const doneCount = chapters.slice(0, available).filter(c => (progress[c.n]||{}).done).length;
  const allDone = doneCount === chapters.length;
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', background:'var(--color-bg)', fontFamily:'var(--font-body)' }}>
      <div style={{ padding:'20px 20px 4px' }}>
        <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:20, color:'var(--color-text-primary)' }}>Profil</div>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'12px 20px 24px', display:'flex', flexDirection:'column', gap:16 }}>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <div style={{ width:56, height:56, borderRadius:'50%', background:'var(--color-primary)', color:'var(--cream-50)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:700, fontSize:22 }}>MO</div>
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:17, color:'var(--color-text-primary)' }}>Foydalanuvchi</div>
            <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:2, fontSize:13, color:'var(--color-text-secondary)' }}>
              <img src="https://unpkg.com/lucide-static@latest/icons/flame.svg" style={{ width:14, height:14 }} alt="" />{streak} kunlik izchillik
            </div>
          </div>
        </div>
        <Card>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:10 }}>
            <div style={{ minWidth:0 }}>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:18, color:'var(--color-text-primary)', whiteSpace:'nowrap' }}>{doneCount} / {chapters.length} bob</div>
              <div style={{ fontSize:13, color:'var(--color-text-secondary)', marginTop:2 }}>yakunlandi</div>
            </div>
            <Badge tone={allDone ? 'gold' : 'primary'}>{allDone ? 'Sertifikat tayyor' : `${Math.round((doneCount/chapters.length)*100)}%`}</Badge>
          </div>
        </Card>
        <div>
          <div style={{ fontSize:13, fontWeight:600, color:'var(--color-text-secondary)', marginBottom:10 }}>Nishonlar</div>
          {chapters.some(c => (progress[c.n]||{}).done) ? (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:10 }}>
              {chapters.filter(c => (progress[c.n]||{}).done).map(c => (
                <img key={c.n} onClick={() => setOpenBadge(c)} src={`assets/brand/badges/${window.BADGE_ART[(c.n-1) % window.BADGE_ART.length]}.png`} title={c.title} style={{ width:'100%', aspectRatio:'1', borderRadius:'50%', cursor:'pointer' }} alt={c.title} />
              ))}
            </div>
          ) : (
            <div style={{ fontSize:13, color:'var(--color-text-muted)' }}>Birinchi bobni yakunlab, nishon qoʻlga kiriting.</div>
          )}
        </div>
        <BadgeDialog chapter={openBadge} onClose={() => setOpenBadge(null)} />
        <Card>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'4px 0' }}>
            <span style={{ fontSize:14, color:'var(--color-text-primary)' }}>Kunlik hikmat bildirishnomasi</span>
            <Switch checked={notif} onChange={setNotif} />
          </div>
          <div style={{ height:1, background:'var(--color-border)', margin:'10px 0' }}></div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'4px 0' }}>
            <span style={{ fontSize:14, color:'var(--color-text-primary)' }}>Fikrlash javoblarini turmush oʻrtoq bilan ulashish</span>
            <Switch checked={shareCouple} onChange={setShareCouple} />
          </div>
        </Card>
        {allDone && <Button fullWidth variant="gold">Sertifikatni yuklab olish</Button>}
      </div>
    </div>
  );
}
window.MiniProfileScreen = MiniProfileScreen;
