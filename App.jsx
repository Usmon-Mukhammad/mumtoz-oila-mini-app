function NoSessionScreen() {
  const { Button } = window.MumtozOilaDesignSystem_c96f62;
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', gap:14, padding:'0 32px', textAlign:'center', background:'var(--color-bg)', fontFamily:'var(--font-body)' }}>
      <img src="https://unpkg.com/lucide-static@latest/icons/link-2-off.svg" style={{ width:40, height:40, opacity:0.7 }} alt="" />
      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:18 }}>Sessiya topilmadi</div>
      <div style={{ fontSize:14, color:'var(--color-text-secondary)' }}>Ilova botdan tashqarida ochilgan yoki sessiya eskirgan. Davom etish uchun botga qaytib, tugmani qaytadan bosing.</div>
      <Button fullWidth onClick={() => {}}>Botga qaytish</Button>
    </div>
  );
}
window.NoSessionScreen = NoSessionScreen;

function shuffleBatch() {
  return window.QUIZ_BANK.map(q => ({ ...q, options: [...q.options] }));
}

function firstCurrentIdx(chapters, available, progress) {
  for (let i = 0; i < available; i++) if (!(progress[chapters[i].n]||{}).done) return i;
  return 0;
}

function DemoBar({ mode, onMode }) {
  const modes = [['flow','Oddiy holat'],['empty','Boshlanish'],['nosession','Sessiya yoʻq'],['syncfail','Sinx. xato']];
  return (
    <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:16, fontFamily:'var(--font-body)' }}>
      {modes.map(([m,label]) => (
        <button key={m} onClick={() => onMode(m)} style={{ fontSize:12, fontWeight:600, padding:'6px 12px', borderRadius:'var(--radius-pill)', border:'1.5px solid var(--color-border)', background: mode===m?'var(--color-primary)':'var(--color-surface)', color: mode===m?'#fff':'var(--color-text-secondary)', cursor:'pointer' }}>{label}</button>
      ))}
    </div>
  );
}

function MiniApp() {
  const { BottomNav } = window.MumtozOilaDesignSystem_c96f62;
  const [mode, setMode] = React.useState('flow');
  const [entryStage, setEntryStage] = React.useState('handshake');
  const [view, setView] = React.useState('home');
  const [tab, setTab] = React.useState(0);
  const [activeChapter, setActiveChapter] = React.useState(null);
  const [batch, setBatch] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [syncState, setSyncState] = React.useState(null);
  const [progress, setProgress] = React.useState({ 1:{done:true} });
  const [lockMsg, setLockMsg] = React.useState(null);

  const chapters = window.CHAPTERS;
  const available = window.CHAPTERS_AVAILABLE;
  const progressForMode = mode === 'empty' ? {} : progress;

  React.useEffect(() => {
    if (entryStage !== 'handshake') return;
    const t = setTimeout(() => setEntryStage('welcome'), 1400);
    return () => clearTimeout(t);
  }, [entryStage]);

  function openChapter(c) {
    setActiveChapter(c);
    setView('lesson');
  }
  function onLockedTap(kind) {
    setLockMsg(kind === 'prereq' ? 'Avval oldingi bobni yakunlang.' : 'Bu bob hali ochilmagan.');
    setTimeout(() => setLockMsg(null), 2400);
  }
  function startQuiz() { setBatch(shuffleBatch()); setView('quiz'); }
  function finishQuiz(r) { setResults(r); setSyncState(null); setView('results'); }
  function retryQuiz() { setBatch(shuffleBatch()); setResults([]); setView('quiz'); }
  function continueResults() {
    setSyncState('syncing');
    setTimeout(() => {
      if (mode === 'syncfail') { setSyncState('failed'); }
      else {
        setProgress(p => ({ ...p, [activeChapter.n]: { done: true } }));
        setView('home');
      }
    }, 1100);
  }
  function retrySync() {
    setSyncState('syncing');
    setTimeout(() => {
      setProgress(p => ({ ...p, [activeChapter.n]: { done: true } }));
      setSyncState(null);
      setView('home');
    }, 1000);
  }

  let screen;
  if (mode === 'nosession') screen = <NoSessionScreen />;
  else if (entryStage === 'handshake') screen = <HandshakeScreen />;
  else if (entryStage === 'welcome') screen = <WelcomeScreen user={window.CURRENT_USER} onContinue={() => setEntryStage('app')} />;
  else if (view === 'lesson') screen = <LessonScreen chapter={activeChapter} retaking={!!(progressForMode[activeChapter.n]||{}).done} onBack={() => setView('home')} onStartQuiz={startQuiz} />;
  else if (view === 'quiz') screen = <QuizScreen chapter={activeChapter} batch={batch} onFinish={finishQuiz} onBack={() => setView('home')} />;
  else if (view === 'results') screen = <ResultsScreen chapter={activeChapter} results={results} syncState={syncState} onRetry={retryQuiz} onContinue={continueResults} onRetrySync={retrySync} />;
  else {
    const tabContent = tab === 0
      ? <DashboardScreen chapters={chapters} available={available} progress={progressForMode} streak={12} onContinue={() => openChapter(chapters[firstCurrentIdx(chapters, available, progressForMode)])} />
      : tab === 1
      ? <JourneyScreen chapters={chapters} available={available} progress={progressForMode} onOpen={openChapter} onLockedTap={onLockedTap} />
      : tab === 2
      ? <CoupleJournalScreen chapters={chapters} available={available} progress={progressForMode} />
      : <MiniProfileScreen chapters={chapters} available={available} progress={progressForMode} streak={12} onOpenCouple={() => setTab(2)} />;
    screen = (
      <div style={{ display:'flex', flexDirection:'column', height:'100%' }}>
        <div style={{ position:'relative', flex:1, minHeight:0 }}>
          {tabContent}
          {lockMsg && <div style={{ position:'absolute', left:20, right:20, bottom:16, background:'var(--ink-900)', color:'#fff', fontSize:13, fontWeight:500, padding:'12px 16px', borderRadius:'var(--radius-md)', boxShadow:'var(--shadow-lg)', textAlign:'center' }}>{lockMsg}</div>}
        </div>
        <BottomNav items={[{icon:'home',label:'Bosh sahifa'},{icon:'map',label:'Yoʻl'},{icon:'heart-handshake',label:'Fikrlar'},{icon:'user',label:'Profil'}]} active={tab} onChange={setTab} />
      </div>
    );
  }

  return (
    <div>
      <DemoBar mode={mode} onMode={m => { setMode(m); setView('home'); setSyncState(null); }} />
      <div style={{ width:430, height:900, borderRadius:28, overflow:'hidden', boxShadow:'var(--shadow-lg)', background:'var(--color-bg)' }}>{screen}</div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<MiniApp />);
