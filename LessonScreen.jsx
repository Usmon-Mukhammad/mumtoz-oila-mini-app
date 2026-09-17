function LessonScreen({ chapter, retaking, onBack, onStartQuiz }) {
  const { IconButton, Button, AudioPlayer, Badge } = window.MumtozOilaDesignSystem_c96f62;
  const DURATION = 186;
  const [t, setT] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [speed, setSpeed] = React.useState(1);
  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT(v => Math.min(DURATION, v + 1)), 1000);
    return () => clearInterval(id);
  }, [playing]);
  React.useEffect(() => { if (t >= DURATION) setPlaying(false); }, [t]);
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', background:'var(--color-bg)', fontFamily:'var(--font-body)' }}>
      <div style={{ display:'flex', alignItems:'center', gap:10, padding:'20px 12px 4px' }}>
        <IconButton icon="chevron-left" label="Orqaga" onClick={onBack} />
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:17, color:'var(--color-text-primary)' }}>{chapter.n}-bob: {chapter.title}</div>
        </div>
        {retaking && <Badge tone="gold">Qayta oʻtish</Badge>}
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'16px 20px 24px', display:'flex', flexDirection:'column', gap:18 }}>
        <p style={{ fontSize:22, lineHeight:1.6, color:'var(--color-text-primary)', margin:0 }}>
          Bugun koʻpchilik ota-onalik maqomini yengillashtirib, farzandiga xoʻjayin emas, xizmatkor boʻlib qolmoqda. "Mumtoz oila" bu holatni oʻzgartirishni taklif qiladi: ota-ona — yoʻnalish beruvchi, farzand esa uni hurmat qiladigan tomon.
        </p>
        <div style={{ background:'var(--color-accent-gold-tint)', borderRadius:'var(--radius-lg)', padding:16, fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:15, color:'#6B4A10' }}>{window.GOLDEN_SENTENCE}</div>
        <div style={{ background:'var(--color-surface)', border:'1.5px solid var(--color-accent-gold)', borderRadius:'var(--radius-xl)', padding:'16px 20px', boxShadow:'var(--shadow-md)', position:'sticky', bottom:0 }}>
          <AudioPlayer duration={DURATION} currentTime={t} playing={playing} onTogglePlay={() => setPlaying(p => !p)} onSeek={setT} speed={speed} onSpeedChange={setSpeed} />
        </div>
        {t >= DURATION && <div style={{ fontSize:13, color:'var(--color-success)', textAlign:'center', fontWeight:600 }}>Audio yakunlandi</div>}
      </div>
      <div style={{ padding:'0 20px 24px' }}>
        <Button fullWidth onClick={onStartQuiz}>Testni boshlash</Button>
      </div>
    </div>
  );
}
window.LessonScreen = LessonScreen;
