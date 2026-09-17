function HandshakeScreen() {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, height:'100%', background:'var(--color-bg)', fontFamily:'var(--font-body)', textAlign:'center', padding:'0 40px' }}>
      <div style={{ width:34, height:34, borderRadius:'50%', border:'3px solid var(--color-border)', borderTopColor:'var(--color-primary)', animation:'mo-spin 800ms linear infinite' }} />
      <div style={{ fontSize:14, color:'var(--color-text-secondary)' }}>Telegram hisobingiz tekshirilmoqda…</div>
      <style>{`@keyframes mo-spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
window.HandshakeScreen = HandshakeScreen;

function WelcomeScreen({ user, onContinue }) {
  const { Button } = window.MumtozOilaDesignSystem_c96f62;
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', background:'var(--color-bg)', fontFamily:'var(--font-body)', overflowY:'auto' }}>
      <div style={{ height:210, flexShrink:0, position:'relative', overflow:'hidden' }}>
        <img src="assets/brand/book-cover-photo-raw.jpg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(253,249,242,0) 30%, rgba(253,249,242,0.6) 72%, #FDF9F2 96%)' }}></div>
      </div>
      <div style={{ padding:'0 24px', marginTop:4, textAlign:'center' }}>
        <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:26, color:'var(--color-primary)' }}>Mumtoz Oila</div>
        <div style={{ fontSize:14, color:'var(--color-text-secondary)', marginTop:6, lineHeight:1.5 }}>Akrom Malikning “Mumtoz oila” kitobi asosidagi 21 bobli oilaviy ta’lim safari.</div>
      </div>
      <div style={{ padding:'20px 24px 0' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, background:'var(--color-surface)', border:'1px solid var(--color-border)', borderRadius:'var(--radius-lg)', padding:'12px 14px' }}>
          <div style={{ width:40, height:40, flexShrink:0, borderRadius:'50%', background:'var(--color-primary)', color:'var(--cream-50)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:700, fontSize:16 }}>{user.initials}</div>
          <div style={{ minWidth:0, flex:1 }}>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:16, color:'var(--color-text-primary)' }}>{user.name}</div>
            <div style={{ fontSize:12, color:'var(--color-text-secondary)', marginTop:1 }}>Telegram orqali kirdingiz · {user.username}</div>
          </div>
          <img src="https://unpkg.com/lucide-static@latest/icons/check.svg" style={{ width:18, height:18, color:'var(--color-success)' }} alt="" />
        </div>
      </div>
      <div style={{ padding:'16px 24px 0', display:'flex', flexDirection:'column', gap:12 }}>
        {[
          ['lock', 'Fikrlash javoblaringiz shaxsiy qoladi. Xohlasangiz, turmush oʻrtogʻingizga ulashishingiz mumkin.'],
          ['users', 'Test natijalari faqat sizga koʻrinadi — reyting yoki ochiq taqqoslash yoʻq.'],
          ['bell', 'Har kuni bitta “kun hikmati” eslatmasi yuboriladi. Buni profilda oʻchirib qoʻyish mumkin.'],
        ].map(([icon, text], i) => (
          <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
            <img src={`https://unpkg.com/lucide-static@latest/icons/${icon}.svg`} style={{ width:16, height:16, marginTop:2, opacity:0.55 }} alt="" />
            <div style={{ fontSize:13, color:'var(--color-text-secondary)', lineHeight:1.5 }}>{text}</div>
          </div>
        ))}
      </div>
      <div style={{ padding:'20px 24px 24px', marginTop:'auto' }}>
        <Button fullWidth onClick={onContinue}>Davom etish</Button>
        <div style={{ fontSize:11, color:'var(--color-text-muted)', textAlign:'center', marginTop:10, lineHeight:1.5 }}>“Davom etish”ni bosish bilan foydalanish shartlari va maxfiylik siyosatiga rozilik bildirasiz.</div>
      </div>
    </div>
  );
}
window.WelcomeScreen = WelcomeScreen;
