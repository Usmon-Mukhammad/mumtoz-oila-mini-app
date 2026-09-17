function QuizScreen({ chapter, batch, onFinish, onBack }) {
  const { IconButton, QuizOption, Button, Badge } = window.MumtozOilaDesignSystem_c96f62;
  const [i, setI] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const [results, setResults] = React.useState([]);
  const q = batch[i];
  const correctIndex = q.options.findIndex(o => o.correct);
  function next() {
    const record = { q: q.q, pickedText: q.options[picked].text, correctText: q.options[correctIndex].text, correct: picked === correctIndex, explain: q.explain };
    const nr = [...results, record];
    if (i + 1 < batch.length) { setResults(nr); setI(i + 1); setPicked(null); }
    else onFinish(nr);
  }
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', background:'var(--color-bg)', fontFamily:'var(--font-body)' }}>
      <div style={{ display:'flex', alignItems:'center', gap:10, padding:'20px 12px 4px' }}>
        <IconButton icon="chevron-left" label="Orqaga" onClick={onBack} />
        <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:16 }}>{chapter.n}-bob: Sinov</div>
        <div style={{ marginLeft:'auto', fontSize:13, fontWeight:600, color:'var(--color-text-secondary)' }}>{i+1} / {batch.length}</div>
      </div>
      <div style={{ padding:'0 20px' }}>
        <div style={{ height:4, borderRadius:'var(--radius-pill)', background:'var(--color-surface-sunken)' }}>
          <div style={{ height:4, borderRadius:'var(--radius-pill)', background:'var(--color-primary)', width:`${((i)/batch.length)*100}%`, transition:'width .2s ease' }}></div>
        </div>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'20px 20px', display:'flex', flexDirection:'column', gap:16 }}>
        <div style={{ fontSize:17, fontWeight:600, color:'var(--color-text-primary)', lineHeight:1.4 }}>{q.q}</div>
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {q.options.map((o, oi) => (
            <QuizOption key={oi} state={picked===null?'default':(oi===picked?(o.correct?'correct':'incorrect'):(oi===correctIndex?'correct':'default'))} onClick={() => picked===null && setPicked(oi)}>{o.text}</QuizOption>
          ))}
        </div>
        {picked !== null && (
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            <Badge tone={picked===correctIndex?'success':'danger'}>{picked===correctIndex?'Toʻgʻri javob!':'Notoʻgʻri javob'}</Badge>
            <div style={{ fontSize:14, color:'var(--color-text-secondary)', lineHeight:1.5 }}>{q.explain}</div>
          </div>
        )}
      </div>
      <div style={{ padding:'0 20px 24px' }}>
        <Button fullWidth disabled={picked===null} onClick={next}>Keyingisi</Button>
      </div>
    </div>
  );
}
window.QuizScreen = QuizScreen;
