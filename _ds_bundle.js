/* @ds-bundle: {"format":4,"namespace":"MumtozOilaDesignSystem_c96f62","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"AudioPlayer","sourcePath":"components/learning/AudioPlayer.jsx"},{"name":"ModuleNode","sourcePath":"components/learning/ModuleNode.jsx"},{"name":"ProgressJourney","sourcePath":"components/learning/ProgressJourney.jsx"},{"name":"QuizOption","sourcePath":"components/learning/QuizOption.jsx"},{"name":"StreakChip","sourcePath":"components/learning/StreakChip.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"9da07fe8ec8a","components/core/Button.jsx":"7e672a416230","components/core/Card.jsx":"bdb703d80743","components/core/IconButton.jsx":"78632e18c884","components/core/Tag.jsx":"f4791600cac8","components/feedback/Dialog.jsx":"36fc9d5f8fad","components/feedback/Toast.jsx":"b83f93ec1fbb","components/forms/Checkbox.jsx":"64c480bdc3f2","components/forms/Input.jsx":"1a5b4607bda8","components/forms/Radio.jsx":"399f52f17fc2","components/forms/Switch.jsx":"d4d0762710ab","components/learning/AudioPlayer.jsx":"ba8fd0413bce","components/learning/ModuleNode.jsx":"72cf1e052fe9","components/learning/ProgressJourney.jsx":"644fd57e35d3","components/learning/QuizOption.jsx":"1d8b23a9c7ed","components/learning/StreakChip.jsx":"1fe8332e0cdc","components/navigation/BottomNav.jsx":"d2dd80d93ef0","components/navigation/Tabs.jsx":"6f8909478cfa","ui_kits/mini-app/App.jsx":"6e74587ce8cf","ui_kits/mini-app/CoupleJournalScreen.jsx":"c06dfb134330","ui_kits/mini-app/DashboardScreen.jsx":"2b859a9cbfd4","ui_kits/mini-app/HomeScreen.jsx":"94224db86d26","ui_kits/mini-app/LessonScreen.jsx":"966ac8aa49c7","ui_kits/mini-app/MiniProfileScreen.jsx":"b5fe0d5af403","ui_kits/mini-app/QuizScreen.jsx":"2f768463794b","ui_kits/mini-app/ResultsScreen.jsx":"438ed9f80103","ui_kits/mini-app/data.js":"7dd4d2f0ba04","ui_kits/mini-app/ios-frame.jsx":"24642b887be3","ui_kits/mobile-app/AuthScreen.jsx":"6d84ebfbbdfc","ui_kits/mobile-app/MobileApp.jsx":"ccccfa679761","ui_kits/mobile-app/MobileHomeScreen.jsx":"c24fbafa84ab","ui_kits/mobile-app/ModuleScreen.jsx":"3453d550b44d","ui_kits/mobile-app/ProfileScreen.jsx":"367c3e596600","ui_kits/mobile-app/data.js":"d250c6a3456f","ui_kits/mobile-app/ios-frame.jsx":"24642b887be3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MumtozOilaDesignSystem_c96f62 = window.MumtozOilaDesignSystem_c96f62 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'neutral'
}) {
  const tones = {
    primary: {
      background: 'var(--color-primary-tint)',
      color: 'var(--color-primary)'
    },
    success: {
      background: 'var(--color-success-tint)',
      color: 'var(--color-success)'
    },
    danger: {
      background: 'var(--color-danger-tint)',
      color: 'var(--color-danger)'
    },
    gold: {
      background: 'var(--color-accent-gold-tint)',
      color: '#8A6112'
    },
    neutral: {
      background: 'var(--color-surface-sunken)',
      color: 'var(--color-text-secondary)'
    }
  };
  return React.createElement('span', {
    style: {
      ...tones[tone],
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  disabled = false,
  onClick
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-md)',
    transition: 'background .15s ease, transform .08s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.5 : 1
  };
  const sizes = {
    md: {
      padding: '10px 18px',
      fontSize: 'var(--text-sm)'
    },
    lg: {
      padding: '14px 22px',
      fontSize: 'var(--text-base)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-text-on-primary)'
    },
    secondary: {
      background: 'var(--color-surface)',
      color: 'var(--color-primary)',
      border: '1.5px solid var(--color-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)'
    },
    gold: {
      background: 'var(--color-accent-gold)',
      color: '#fff'
    }
  };
  const [pressed, setPressed] = React.useState(false);
  return React.createElement('button', {
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      transform: pressed ? 'scale(0.97)' : 'scale(1)'
    },
    disabled,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    onClick
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  interactive = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--color-border)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding: 'var(--space-4)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow .15s ease, transform .15s ease',
      transform: hover ? 'translateY(-2px)' : 'none'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  onClick
}) {
  const dim = size === 'sm' ? 32 : 44;
  const iconPx = size === 'sm' ? 16 : 20;
  const styles = {
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-primary)'
    },
    filled: {
      background: 'var(--color-surface-sunken)',
      color: 'var(--color-primary)'
    }
  };
  return React.createElement('button', {
    'aria-label': label,
    title: label,
    onClick,
    style: {
      ...styles[variant],
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('img', {
    src: `https://unpkg.com/lucide-static@latest/icons/${icon}.svg`,
    style: {
      width: iconPx,
      height: iconPx,
      filter: 'var(--icon-filter, none)'
    },
    alt: ''
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick
}) {
  return React.createElement('button', {
    onClick,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: selected ? '1.5px solid var(--color-primary)' : '1.5px solid var(--color-border)',
      background: selected ? 'var(--color-primary-tint)' : 'var(--color-surface)',
      color: selected ? 'var(--color-primary)' : 'var(--color-text-secondary)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return React.createElement('div', {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(42,30,26,.5)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      zIndex: 100
    }
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
      padding: 'var(--space-6)',
      width: '100%',
      maxWidth: 480,
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-xl)',
      color: 'var(--color-text-primary)',
      marginBottom: 12
    }
  }, title), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = 'default',
  onClose
}) {
  const tones = {
    default: {
      background: 'var(--ink-900)',
      color: '#fff'
    },
    success: {
      background: 'var(--color-success)',
      color: '#fff'
    },
    danger: {
      background: 'var(--color-danger)',
      color: '#fff'
    }
  };
  return React.createElement('div', {
    style: {
      ...tones[tone],
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      maxWidth: 360
    }
  }, React.createElement('span', {
    style: {
      flex: 1
    }
  }, message), onClose && React.createElement('button', {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      color: 'inherit',
      opacity: 0.7,
      cursor: 'pointer',
      fontSize: 16
    }
  }, '\u00d7'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-primary)'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1.5px solid ${checked ? 'var(--color-primary)' : 'var(--color-border-strong)'}`,
      background: checked ? 'var(--color-primary)' : 'var(--color-surface)'
    }
  }, checked && React.createElement('img', {
    src: 'https://unpkg.com/lucide-static@latest/icons/check.svg',
    style: {
      width: 14,
      height: 14,
      filter: 'brightness(0) invert(1)'
    },
    alt: ''
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  label,
  error
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--color-text-secondary)'
    }
  }, label), React.createElement('input', {
    value,
    type,
    placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => onChange && onChange(e.target.value),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${error ? 'var(--color-danger)' : focus ? 'var(--color-primary)' : 'var(--color-border)'}`,
      outline: 'none',
      background: 'var(--color-surface)',
      color: 'var(--color-text-primary)'
    }
  }), error && React.createElement('div', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  selected,
  onSelect,
  label
}) {
  return React.createElement('label', {
    onClick: onSelect,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${selected ? 'var(--color-primary)' : 'var(--color-border)'}`,
      background: selected ? 'var(--color-primary-tint)' : 'var(--color-surface)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-primary)'
    }
  }, React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `2px solid ${selected ? 'var(--color-primary)' : 'var(--color-border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, selected && React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange
}) {
  return React.createElement('button', {
    onClick: () => onChange && onChange(!checked),
    'aria-pressed': checked,
    style: {
      width: 46,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: checked ? 'var(--color-primary)' : 'var(--color-border-strong)',
      position: 'relative',
      transition: 'background .15s ease'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left .15s ease'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/learning/AudioPlayer.jsx
try { (() => {
function fmt(s) {
  const m = Math.floor(s / 60),
    sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
}
const SPEEDS = [1, 1.25, 1.5, 0.75];
function AudioPlayer({
  duration,
  currentTime,
  playing,
  onTogglePlay,
  onSeek,
  speed = 1,
  onSpeedChange
}) {
  const barRef = React.useRef(null);
  const pct = duration ? Math.min(100, currentTime / duration * 100) : 0;
  function handleSeek(e) {
    if (!onSeek || !barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const frac = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    onSeek(frac * duration);
  }
  function skip(delta) {
    onSeek && onSeek(Math.max(0, Math.min(duration, currentTime + delta)));
  }
  function cycleSpeed() {
    if (!onSpeedChange) return;
    const i = SPEEDS.indexOf(speed);
    onSpeedChange(SPEEDS[(i + 1) % SPEEDS.length]);
  }
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    ref: barRef,
    onClick: handleSeek,
    style: {
      height: 5,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-accent-gold-tint)',
      position: 'relative',
      cursor: 'pointer'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      width: `${pct}%`,
      background: 'var(--color-accent-gold)',
      borderRadius: 'var(--radius-pill)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      top: '50%',
      left: `${pct}%`,
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--color-accent-gold)',
      border: '2px solid var(--color-surface)',
      boxShadow: 'var(--shadow-sm)',
      transform: 'translate(-50%,-50%)'
    }
  })), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  }, React.createElement('span', {
    style: {
      fontSize: 10,
      color: 'var(--color-text-muted)',
      minWidth: 28
    }
  }, fmt(currentTime)), React.createElement('button', {
    onClick: () => skip(-15),
    title: '15 soniya orqaga',
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      border: 'none',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, React.createElement('img', {
    src: 'https://unpkg.com/lucide-static@latest/icons/rotate-ccw.svg',
    style: {
      width: 14,
      height: 14,
      opacity: 0.55
    },
    alt: ''
  })), React.createElement('button', {
    onClick: onTogglePlay,
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      flexShrink: 0,
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement('img', {
    src: `https://unpkg.com/lucide-static@latest/icons/${playing ? 'pause' : 'play'}.svg`,
    style: {
      width: 18,
      height: 18,
      filter: 'brightness(0) invert(1)',
      marginLeft: playing ? 0 : 1
    },
    alt: ''
  })), React.createElement('button', {
    onClick: () => skip(15),
    title: '15 soniya oldinga',
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      border: 'none',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, React.createElement('img', {
    src: 'https://unpkg.com/lucide-static@latest/icons/rotate-cw.svg',
    style: {
      width: 14,
      height: 14,
      opacity: 0.55
    },
    alt: ''
  })), React.createElement('span', {
    style: {
      fontSize: 10,
      color: 'var(--color-text-muted)',
      minWidth: 28
    }
  }, fmt(duration)), onSpeedChange && React.createElement('button', {
    onClick: cycleSpeed,
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--color-primary)',
      background: 'var(--color-primary-tint)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, `${speed}x`)));
}
Object.assign(__ds_scope, { AudioPlayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/AudioPlayer.jsx", error: String((e && e.message) || e) }); }

// components/learning/ModuleNode.jsx
try { (() => {
function ModuleNode({
  number,
  title,
  state,
  onClick
}) {
  const dim = state === 'active' ? 76 : state === 'complete' ? 56 : 44;
  const styles = {
    locked: {
      background: 'var(--color-surface-sunken)',
      color: 'var(--color-text-muted)',
      border: '2px dashed var(--color-border-strong)'
    },
    active: {
      background: 'var(--color-primary)',
      color: 'var(--color-text-on-primary)',
      border: '3px solid var(--color-accent-gold)',
      boxShadow: '0 0 0 6px var(--color-primary-tint), var(--shadow-md)'
    },
    complete: {
      background: 'var(--color-accent-gold)',
      color: '#fff',
      border: '2px solid var(--color-accent-gold)',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  return React.createElement('button', {
    onClick,
    disabled: state === 'locked',
    title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      background: 'transparent',
      border: 'none',
      cursor: state === 'locked' ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      width: 88
    }
  }, React.createElement('div', {
    style: {
      ...styles[state],
      width: dim,
      height: dim,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: state === 'active' ? 26 : 18,
      flexShrink: 0
    }
  }, state === 'locked' ? React.createElement('img', {
    src: 'https://unpkg.com/lucide-static@latest/icons/lock.svg',
    style: {
      width: 16,
      height: 16,
      opacity: 0.55
    },
    alt: ''
  }) : state === 'complete' ? React.createElement('img', {
    src: 'https://unpkg.com/lucide-static@latest/icons/check.svg',
    style: {
      width: 22,
      height: 22,
      filter: 'brightness(0) invert(1)'
    },
    alt: ''
  }) : number), React.createElement('span', {
    style: {
      fontSize: 12,
      fontWeight: 600,
      textAlign: 'center',
      color: state === 'locked' ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
      lineHeight: 1.25,
      maxWidth: 88
    }
  }, title));
}
Object.assign(__ds_scope, { ModuleNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/ModuleNode.jsx", error: String((e && e.message) || e) }); }

// components/learning/ProgressJourney.jsx
try { (() => {
const ROW_H = 122;
const X_PATTERN = [22, 50, 78, 50];
function ProgressJourney({
  modules,
  onSelect
}) {
  const points = modules.map((m, i) => ({
    x: X_PATTERN[i % X_PATTERN.length],
    y: i * ROW_H + 60
  }));
  const height = modules.length * ROW_H + 20;
  let pathD = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1],
      cur = points[i];
    const cx = (prev.x + cur.x) / 2;
    pathD += ` Q ${cx} ${prev.y} ${cur.x} ${cur.y}`;
  }
  return React.createElement('div', {
    style: {
      position: 'relative',
      width: '100%',
      height,
      padding: '10px 0'
    }
  }, React.createElement('svg', {
    viewBox: `0 0 100 ${height}`,
    preserveAspectRatio: 'none',
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, React.createElement('path', {
    d: pathD,
    fill: 'none',
    stroke: 'var(--color-border-strong)',
    strokeWidth: 3,
    strokeLinecap: 'round',
    strokeDasharray: '1 9',
    vectorEffect: 'non-scaling-stroke'
  })), modules.map((m, i) => React.createElement('div', {
    key: i,
    style: {
      position: 'absolute',
      left: `${points[i].x}%`,
      top: points[i].y,
      transform: 'translate(-50%,-50%)'
    }
  }, React.createElement(__ds_scope.ModuleNode, {
    ...m,
    onClick: () => onSelect && onSelect(i)
  }))));
}
Object.assign(__ds_scope, { ProgressJourney });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/ProgressJourney.jsx", error: String((e && e.message) || e) }); }

// components/learning/QuizOption.jsx
try { (() => {
function QuizOption({
  children,
  state = 'default',
  onClick
}) {
  const styles = {
    default: {
      border: '1.5px solid var(--color-border)',
      background: 'var(--color-surface)',
      color: 'var(--color-text-primary)'
    },
    selected: {
      border: '1.5px solid var(--color-primary)',
      background: 'var(--color-primary-tint)',
      color: 'var(--color-primary)'
    },
    correct: {
      border: '1.5px solid var(--color-success)',
      background: 'var(--color-success-tint)',
      color: 'var(--color-success)'
    },
    incorrect: {
      border: '1.5px solid var(--color-danger)',
      background: 'var(--color-danger-tint)',
      color: 'var(--color-danger)'
    }
  };
  const icon = state === 'correct' ? 'check-circle-2' : state === 'incorrect' ? 'x-circle' : null;
  return React.createElement('button', {
    onClick,
    style: {
      ...styles[state],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      width: '100%',
      textAlign: 'left',
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      cursor: 'pointer'
    }
  }, React.createElement('span', null, children), icon && React.createElement('img', {
    src: `https://unpkg.com/lucide-static@latest/icons/${icon}.svg`,
    style: {
      width: 20,
      height: 20
    },
    alt: ''
  }));
}
Object.assign(__ds_scope, { QuizOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/QuizOption.jsx", error: String((e && e.message) || e) }); }

// components/learning/StreakChip.jsx
try { (() => {
function StreakChip({
  days
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--color-accent-gold-tint)',
      color: '#8A6112',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, React.createElement('img', {
    src: 'https://unpkg.com/lucide-static@latest/icons/flame.svg',
    style: {
      width: 16,
      height: 16
    },
    alt: ''
  }), `${days} kun`);
}
Object.assign(__ds_scope, { StreakChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/StreakChip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function BottomNav({
  items,
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: '8px 4px',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => {
    const isActive = i === active;
    return React.createElement('button', {
      key: i,
      onClick: () => onChange(i),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 0',
        color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)'
      }
    }, React.createElement('img', {
      src: `https://unpkg.com/lucide-static@latest/icons/${it.icon}.svg`,
      style: {
        width: 22,
        height: 22,
        opacity: isActive ? 1 : 0.6
      },
      alt: ''
    }), React.createElement('span', {
      style: {
        fontSize: 11,
        fontWeight: isActive ? 600 : 500
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 4,
      background: 'var(--color-surface-sunken)',
      borderRadius: 'var(--radius-md)',
      padding: 4,
      fontFamily: 'var(--font-body)'
    }
  }, tabs.map((t, i) => React.createElement('button', {
    key: i,
    onClick: () => onChange(i),
    style: {
      flex: 1,
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      background: active === i ? 'var(--color-surface)' : 'transparent',
      color: active === i ? 'var(--color-primary)' : 'var(--color-text-secondary)',
      boxShadow: active === i ? 'var(--shadow-sm)' : 'none'
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mini-app/App.jsx
try { (() => {
function NoSessionScreen() {
  const {
    Button
  } = window.MumtozOilaDesignSystem_c96f62;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      gap: 14,
      padding: '0 32px',
      textAlign: 'center',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/link-2-off.svg",
    style: {
      width: 40,
      height: 40,
      opacity: 0.7
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18
    }
  }, "Sessiya topilmadi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)'
    }
  }, "Ilova botdan tashqarida ochilgan yoki sessiya eskirgan. Davom etish uchun botga qaytib, tugmani qaytadan bosing."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => {}
  }, "Botga qaytish"));
}
window.NoSessionScreen = NoSessionScreen;
function shuffleBatch() {
  return window.QUIZ_BANK.map(q => ({
    ...q,
    options: [...q.options]
  }));
}
function firstCurrentIdx(chapters, available, progress) {
  for (let i = 0; i < available; i++) if (!(progress[chapters[i].n] || {}).done) return i;
  return 0;
}
function DemoBar({
  mode,
  onMode
}) {
  const modes = [['flow', 'Oddiy holat'], ['empty', 'Boshlanish'], ['nosession', 'Sessiya yoʻq'], ['syncfail', 'Sinx. xato']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 16,
      fontFamily: 'var(--font-body)'
    }
  }, modes.map(([m, label]) => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => onMode(m),
    style: {
      fontSize: 12,
      fontWeight: 600,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid var(--color-border)',
      background: mode === m ? 'var(--color-primary)' : 'var(--color-surface)',
      color: mode === m ? '#fff' : 'var(--color-text-secondary)',
      cursor: 'pointer'
    }
  }, label)));
}
function MiniApp() {
  const {
    BottomNav
  } = window.MumtozOilaDesignSystem_c96f62;
  const [mode, setMode] = React.useState('flow');
  const [view, setView] = React.useState('home');
  const [tab, setTab] = React.useState(0);
  const [activeChapter, setActiveChapter] = React.useState(null);
  const [batch, setBatch] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [syncState, setSyncState] = React.useState(null);
  const [progress, setProgress] = React.useState({
    1: {
      done: true
    }
  });
  const [lockMsg, setLockMsg] = React.useState(null);
  const chapters = window.CHAPTERS;
  const available = window.CHAPTERS_AVAILABLE;
  const progressForMode = mode === 'empty' ? {} : progress;
  function openChapter(c) {
    setActiveChapter(c);
    setView('lesson');
  }
  function onLockedTap(kind) {
    setLockMsg(kind === 'prereq' ? 'Avval oldingi bobni yakunlang.' : 'Bu bob hali ochilmagan.');
    setTimeout(() => setLockMsg(null), 2400);
  }
  function startQuiz() {
    setBatch(shuffleBatch());
    setView('quiz');
  }
  function finishQuiz(r) {
    setResults(r);
    setSyncState(null);
    setView('results');
  }
  function retryQuiz() {
    setBatch(shuffleBatch());
    setResults([]);
    setView('quiz');
  }
  function continueResults() {
    setSyncState('syncing');
    setTimeout(() => {
      if (mode === 'syncfail') {
        setSyncState('failed');
      } else {
        setProgress(p => ({
          ...p,
          [activeChapter.n]: {
            done: true
          }
        }));
        setView('home');
      }
    }, 1100);
  }
  function retrySync() {
    setSyncState('syncing');
    setTimeout(() => {
      setProgress(p => ({
        ...p,
        [activeChapter.n]: {
          done: true
        }
      }));
      setSyncState(null);
      setView('home');
    }, 1000);
  }
  let screen;
  if (mode === 'nosession') screen = /*#__PURE__*/React.createElement(NoSessionScreen, null);else if (view === 'lesson') screen = /*#__PURE__*/React.createElement(LessonScreen, {
    chapter: activeChapter,
    retaking: !!(progressForMode[activeChapter.n] || {}).done,
    onBack: () => setView('home'),
    onStartQuiz: startQuiz
  });else if (view === 'quiz') screen = /*#__PURE__*/React.createElement(QuizScreen, {
    chapter: activeChapter,
    batch: batch,
    onFinish: finishQuiz,
    onBack: () => setView('home')
  });else if (view === 'results') screen = /*#__PURE__*/React.createElement(ResultsScreen, {
    chapter: activeChapter,
    results: results,
    syncState: syncState,
    onRetry: retryQuiz,
    onContinue: continueResults,
    onRetrySync: retrySync
  });else {
    const tabContent = tab === 0 ? /*#__PURE__*/React.createElement(DashboardScreen, {
      chapters: chapters,
      available: available,
      progress: progressForMode,
      streak: 12,
      onContinue: () => openChapter(chapters[firstCurrentIdx(chapters, available, progressForMode)])
    }) : tab === 1 ? /*#__PURE__*/React.createElement(JourneyScreen, {
      chapters: chapters,
      available: available,
      progress: progressForMode,
      onOpen: openChapter,
      onLockedTap: onLockedTap
    }) : tab === 2 ? /*#__PURE__*/React.createElement(CoupleJournalScreen, {
      chapters: chapters,
      available: available,
      progress: progressForMode
    }) : /*#__PURE__*/React.createElement(MiniProfileScreen, {
      chapters: chapters,
      available: available,
      progress: progressForMode,
      streak: 12,
      onOpenCouple: () => setTab(2)
    });
    screen = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        flex: 1,
        minHeight: 0
      }
    }, tabContent, lockMsg && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 16,
        background: 'var(--ink-900)',
        color: '#fff',
        fontSize: 13,
        fontWeight: 500,
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        textAlign: 'center'
      }
    }, lockMsg)), /*#__PURE__*/React.createElement(BottomNav, {
      items: [{
        icon: 'home',
        label: 'Bosh sahifa'
      }, {
        icon: 'map',
        label: 'Yoʻl'
      }, {
        icon: 'heart-handshake',
        label: 'Fikrlar'
      }, {
        icon: 'user',
        label: 'Profil'
      }],
      active: tab,
      onChange: setTab
    }));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DemoBar, {
    mode: mode,
    onMode: m => {
      setMode(m);
      setView('home');
      setSyncState(null);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 430,
      height: 900,
      borderRadius: 28,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      background: 'var(--color-bg)'
    }
  }, screen));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(MiniApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mini-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mini-app/CoupleJournalScreen.jsx
try { (() => {
function CoupleJournalScreen({
  chapters,
  available,
  progress
}) {
  const {
    Button
  } = window.MumtozOilaDesignSystem_c96f62;
  const [myReflections, setMyReflections] = React.useState(window.MY_REFLECTIONS);
  const [draft, setDraft] = React.useState('');
  const pending = chapters.slice(0, available).find(c => (progress[c.n] || {}).done && !myReflections.find(r => r.n === c.n));
  function submitDraft() {
    if (!draft.trim() || !pending) return;
    setMyReflections(r => [...r, {
      n: pending.n,
      text: draft.trim()
    }]);
    setDraft('');
  }
  const pairs = window.PARTNER_REFLECTIONS.map(p => ({
    n: p.n,
    partnerText: p.text,
    myText: myReflections.find(m => m.n === p.n)?.text,
    title: chapters.find(c => c.n === p.n)?.title
  })).filter(p => p.myText);
  const [i, setI] = React.useState(pairs.length - 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--color-text-primary)'
    }
  }, "Birgalikdagi fikrlar")), pending && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1.5px solid var(--color-primary)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--color-primary)',
      marginBottom: 6
    }
  }, pending.n, "-bob: ", pending.title, " \u2014 fikringizni yozing"), /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    placeholder: "Bu bob haqida fikringiz\u2026",
    style: {
      width: '100%',
      minHeight: 70,
      padding: 10,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-border)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      resize: 'vertical',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disabled: !draft.trim(),
    onClick: submitDraft,
    style: {
      marginTop: 8
    }
  }, "Yuborish"))), pairs.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 32px',
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "Hali birgalikda yakunlangan bob yo\u02BBq.") : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(i - 1),
    disabled: i === 0,
    "aria-label": "Oldingi",
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--color-surface-sunken)',
      cursor: i === 0 ? 'default' : 'pointer',
      opacity: i === 0 ? 0.35 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/chevron-left.svg",
    style: {
      width: 16,
      height: 16
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--color-text-primary)'
    }
  }, pairs[i].n, "-bob: ", pairs[i].title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-muted)',
      marginTop: 2
    }
  }, i + 1, " / ", pairs.length)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(i + 1),
    disabled: i === pairs.length - 1,
    "aria-label": "Keyingi",
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--color-surface-sunken)',
      cursor: i === pairs.length - 1 ? 'default' : 'pointer',
      opacity: i === pairs.length - 1 ? 0.35 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/chevron-right.svg",
    style: {
      width: 16,
      height: 16
    },
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.03em',
      color: 'var(--color-text-muted)',
      textTransform: 'uppercase',
      marginBottom: 6
    }
  }, "Siz"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--color-text-primary)',
      lineHeight: 1.55
    }
  }, pairs[i].myText)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-accent-gold-tint)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.03em',
      color: '#8A6112',
      textTransform: 'uppercase',
      marginBottom: 6
    }
  }, "Turmush o\u02BBrtog\u02BBingiz"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: '#6B4A10',
      lineHeight: 1.55
    }
  }, pairs[i].partnerText))));
}
window.CoupleJournalScreen = CoupleJournalScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mini-app/CoupleJournalScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mini-app/DashboardScreen.jsx
try { (() => {
const UZ_DAYS = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];
const UZ_MONTHS = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
function WeekActivity() {
  const seed = React.useMemo(() => {
    let s = 7;
    return () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
  }, []);
  const today = new Date();
  const todayIdx = (today.getDay() + 6) % 7;
  const days = React.useMemo(() => UZ_DAYS.map((label, i) => ({
    label,
    active: i <= todayIdx ? seed() < 0.7 : false,
    isToday: i === todayIdx,
    isFuture: i > todayIdx
  })), [seed, todayIdx]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 14px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: d.active ? 'var(--color-accent-gold)' : 'var(--color-surface-sunken)',
      border: d.isToday ? '2px solid var(--color-primary)' : 'none',
      opacity: d.isFuture ? 0.4 : 1
    }
  }, d.active && /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/check.svg",
    style: {
      width: 14,
      height: 14,
      filter: 'brightness(0) invert(1)'
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: d.isToday ? 700 : 500,
      color: d.isToday ? 'var(--color-primary)' : 'var(--color-text-muted)'
    }
  }, d.label))));
}
window.WeekActivity = WeekActivity;
function MonthActivity({
  offset,
  onOffset
}) {
  const seed = React.useMemo(() => {
    let s = 13 + offset * 97;
    return () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
  }, [offset]);
  const today = new Date();
  const viewDate = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  const year = viewDate.getFullYear(),
    month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const leadingBlanks = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const isCurrentMonth = offset === 0;
  const cells = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < leadingBlanks; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const isFuture = offset > 0 || isCurrentMonth && d > today.getDate();
      arr.push({
        day: d,
        active: !isFuture && seed() < 0.65,
        isToday: isCurrentMonth && d === today.getDate(),
        isFuture
      });
    }
    return arr;
  }, [seed]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onOffset(offset - 1),
    "aria-label": "Oldingi oy",
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--color-surface-sunken)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/chevron-left.svg",
    style: {
      width: 14,
      height: 14
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, UZ_MONTHS[month], " ", year), /*#__PURE__*/React.createElement("button", {
    onClick: () => offset < 0 && onOffset(offset + 1),
    "aria-label": "Keyingi oy",
    disabled: offset >= 0,
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--color-surface-sunken)',
      cursor: offset >= 0 ? 'default' : 'pointer',
      opacity: offset >= 0 ? 0.35 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/chevron-right.svg",
    style: {
      width: 14,
      height: 14
    },
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 5,
      marginBottom: 8
    }
  }, UZ_DAYS.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'var(--color-text-muted)',
      textAlign: 'center'
    }
  }, d[0]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 5
    }
  }, cells.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      aspectRatio: '1',
      borderRadius: 6,
      background: c ? c.active ? 'var(--color-accent-gold)' : 'var(--color-surface-sunken)' : 'transparent',
      outline: c && c.isToday ? '2px solid var(--color-primary)' : 'none',
      outlineOffset: 1,
      opacity: c && c.isFuture ? 0.45 : 1
    }
  }, c && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: 4,
      fontSize: 9,
      fontWeight: 600,
      color: c.active ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)'
    }
  }, c.day)))));
}
window.MonthActivity = MonthActivity;
function DashboardScreen({
  chapters,
  available,
  progress,
  streak,
  onContinue
}) {
  const [activityView, setActivityView] = React.useState(0);
  const [monthOffset, setMonthOffset] = React.useState(0);
  const {
    Badge,
    Button
  } = window.MumtozOilaDesignSystem_c96f62;
  const doneCount = chapters.slice(0, available).filter(c => (progress[c.n] || {}).done).length;
  const current = chapters.find(c => !(progress[c.n] || {}).done) || chapters[0];
  const lastDone = [...chapters].reverse().find(c => (progress[c.n] || {}).done);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--color-text-primary)'
    }
  }, "Assalomu alaykum!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      marginTop: 2
    }
  }, "Bugungi safarni davom ettiring.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--color-primary)',
      borderRadius: 'var(--radius-xl)',
      padding: '22px 20px',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    style: {
      position: 'absolute',
      top: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "64,0 64,64 0,0",
    fill: "rgba(253,249,242,0.08)"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(253,249,242,0.4)",
    strokeWidth: "1.4",
    fill: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "0",
    x2: "64",
    y2: "56"
  }), [10, 20, 30, 40, 50].map((d, i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: 54 - d * 0.62,
    y: 2 + d * 0.62,
    width: "6",
    height: "6",
    transform: `rotate(45 ${57 - d * 0.62} ${5 + d * 0.62})`
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      color: 'rgba(253,249,242,0.75)',
      textTransform: 'uppercase'
    }
  }, "Kun hikmati"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--cream-50)',
      marginTop: 6,
      lineHeight: 1.45
    }
  }, window.GOLDEN_SENTENCE)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/flame.svg",
    style: {
      width: 20,
      height: 20,
      color: 'var(--color-accent-gold)'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--color-text-primary)',
      marginTop: 4
    }
  }, streak), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)'
    }
  }, "kunlik izchillik")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/book-open.svg",
    style: {
      width: 20,
      height: 20,
      color: 'var(--color-primary)'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--color-text-primary)',
      marginTop: 4
    }
  }, doneCount, "/", available), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-secondary)'
    }
  }, "bob yakunlandi")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-secondary)'
    }
  }, "Faollik"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--color-surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      padding: 2
    }
  }, ['Hafta', 'Oy'].map((label, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActivityView(i),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 12,
      fontWeight: 600,
      background: activityView === i ? 'var(--color-surface)' : 'transparent',
      color: activityView === i ? 'var(--color-primary)' : 'var(--color-text-muted)',
      boxShadow: activityView === i ? 'var(--shadow-sm)' : 'none'
    }
  }, label)))), activityView === 0 ? /*#__PURE__*/React.createElement(WeekActivity, null) : /*#__PURE__*/React.createElement(MonthActivity, {
    offset: monthOffset,
    onOffset: setMonthOffset
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-secondary)',
      marginBottom: 8
    }
  }, "So\u02BBnggi faoliyat"), lastDone ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      flexShrink: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/brand/badges/${window.BADGE_ART[(lastDone.n - 1) % window.BADGE_ART.length]}.png`,
    style: {
      width: '100%',
      height: '100%'
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-primary)',
      fontWeight: 500
    }
  }, lastDone.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-muted)'
    }
  }, "Yakunlandi"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "Hali faoliyat yo\u02BBq \u2014 birinchi bobni boshlang.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 24px',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onContinue
  }, current.n, "-bobni davom ettirish")));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mini-app/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mini-app/HomeScreen.jsx
try { (() => {
function BadgeDialog({
  chapter,
  onClose
}) {
  if (!chapter) return null;
  const info = window.BADGE_INFO[(chapter.n - 1) % window.BADGE_INFO.length];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(42,30,26,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: '28px 24px',
      maxWidth: 320,
      width: '100%',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/brand/badges/${window.BADGE_ART[(chapter.n - 1) % window.BADGE_ART.length]}.png`,
    style: {
      width: 104,
      height: 104,
      borderRadius: '50%'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--color-text-primary)',
      textAlign: 'center'
    }
  }, info.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-muted)'
    }
  }, chapter.n, "-bob: ", chapter.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      textAlign: 'center',
      lineHeight: 1.5
    }
  }, info.desc)));
}
function BadgeStrip({
  chapters,
  progress
}) {
  const [open, setOpen] = React.useState(null);
  const earned = chapters.filter(c => (progress[c.n] || {}).done);
  if (earned.length === 0) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      paddingBottom: 2
    }
  }, earned.map(c => /*#__PURE__*/React.createElement("img", {
    key: c.n,
    onClick: () => setOpen(c),
    src: `../../assets/brand/badges/${window.BADGE_ART[(c.n - 1) % window.BADGE_ART.length]}.png`,
    title: c.title,
    style: {
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: '50%',
      cursor: 'pointer'
    },
    alt: c.title
  }))), /*#__PURE__*/React.createElement(BadgeDialog, {
    chapter: open,
    onClose: () => setOpen(null)
  }));
}
function ChapterRow({
  number,
  title,
  state,
  onClick
}) {
  const iconSrc = state === 'locked' ? 'lock' : state === 'complete' ? 'check' : 'play';
  const dot = {
    locked: 'var(--color-surface-sunken)',
    active: 'var(--color-primary)',
    complete: 'var(--color-accent-gold)'
  }[state];
  const fg = state === 'locked' ? 'var(--color-text-muted)' : '#fff';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      textAlign: 'left',
      background: 'var(--color-surface)',
      border: state === 'active' ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      cursor: state === 'locked' ? 'not-allowed' : 'pointer',
      boxShadow: state === 'active' ? 'var(--shadow-sm)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: dot,
      color: fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, state === 'active' ? number : /*#__PURE__*/React.createElement("img", {
    src: `https://unpkg.com/lucide-static@latest/icons/${iconSrc}.svg`,
    style: {
      width: 16,
      height: 16,
      filter: state === 'locked' ? 'none' : 'brightness(0) invert(1)',
      opacity: state === 'locked' ? 0.5 : 1
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.03em',
      color: 'var(--color-text-muted)',
      textTransform: 'uppercase'
    }
  }, number, "-bob"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: state === 'locked' ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
      marginTop: 2
    }
  }, title)), state !== 'locked' && /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/chevron-right.svg",
    style: {
      width: 18,
      height: 18,
      opacity: 0.4,
      flexShrink: 0
    },
    alt: ""
  }));
}
function JourneyScreen({
  chapters,
  available,
  progress,
  onOpen,
  onLockedTap
}) {
  function firstCurrent() {
    for (let i = 0; i < available; i++) if (!(progress[chapters[i].n] || {}).done) return chapters[i].n;
    return null;
  }
  const current = firstCurrent();
  const doneCount = chapters.slice(0, available).filter(c => (progress[c.n] || {}).done).length;
  const pct = Math.round(doneCount / available * 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--color-primary)',
      borderRadius: 'var(--radius-xl)',
      padding: '20px 20px 22px',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/ikat-corner.jpg",
    style: {
      position: 'absolute',
      top: -14,
      right: -14,
      width: 74,
      height: 74,
      borderRadius: '50%',
      opacity: 0.35,
      objectFit: 'cover'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--cream-50)'
    }
  }, "Oila yo\u02BBli"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(253,249,242,0.75)',
      marginTop: 2
    }
  }, doneCount, " / ", available, " bob \xB7 ", pct, "%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '18px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, chapters.map((c, i) => {
    const done = (progress[c.n] || {}).done;
    const state = done ? 'complete' : c.n === current ? 'active' : 'locked';
    return /*#__PURE__*/React.createElement(ChapterRow, {
      key: c.n,
      number: c.n,
      title: c.title,
      state: state,
      onClick: () => {
        if (done || c.n === current) onOpen(c);else onLockedTap(i < available ? 'prereq' : 'unreleased');
      }
    });
  }))));
}
window.JourneyScreen = JourneyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mini-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mini-app/LessonScreen.jsx
try { (() => {
function LessonScreen({
  chapter,
  retaking,
  onBack,
  onStartQuiz
}) {
  const {
    IconButton,
    Button,
    AudioPlayer,
    Badge
  } = window.MumtozOilaDesignSystem_c96f62;
  const DURATION = 186;
  const [t, setT] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [speed, setSpeed] = React.useState(1);
  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT(v => Math.min(DURATION, v + 1)), 1000);
    return () => clearInterval(id);
  }, [playing]);
  React.useEffect(() => {
    if (t >= DURATION) setPlaying(false);
  }, [t]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '20px 12px 4px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Orqaga",
    onClick: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--color-text-primary)'
    }
  }, chapter.n, "-bob: ", chapter.title)), retaking && /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "Qayta o\u02BBtish")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      lineHeight: 1.6,
      color: 'var(--color-text-primary)',
      margin: 0
    }
  }, "Bugun ko\u02BBpchilik ota-onalik maqomini yengillashtirib, farzandiga xo\u02BBjayin emas, xizmatkor bo\u02BBlib qolmoqda. \"Mumtoz oila\" bu holatni o\u02BBzgartirishni taklif qiladi: ota-ona \u2014 yo\u02BBnalish beruvchi, farzand esa uni hurmat qiladigan tomon."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-accent-gold-tint)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 15,
      color: '#6B4A10'
    }
  }, window.GOLDEN_SENTENCE), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1.5px solid var(--color-accent-gold)',
      borderRadius: 'var(--radius-xl)',
      padding: '16px 20px',
      boxShadow: 'var(--shadow-md)',
      position: 'sticky',
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(AudioPlayer, {
    duration: DURATION,
    currentTime: t,
    playing: playing,
    onTogglePlay: () => setPlaying(p => !p),
    onSeek: setT,
    speed: speed,
    onSpeedChange: setSpeed
  })), t >= DURATION && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-success)',
      textAlign: 'center',
      fontWeight: 600
    }
  }, "Audio yakunlandi")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 24px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onStartQuiz
  }, "Testni boshlash")));
}
window.LessonScreen = LessonScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mini-app/LessonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mini-app/MiniProfileScreen.jsx
try { (() => {
function ConnectDialog({
  code,
  connected,
  onClose,
  onCopy,
  onConfirm
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(42,30,26,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: '28px 24px',
      maxWidth: 320,
      width: '100%',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-body)',
      textAlign: 'center'
    }
  }, connected ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--color-success-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/check.svg",
    style: {
      width: 26,
      height: 26,
      color: 'var(--color-success)'
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--color-text-primary)'
    }
  }, "Bog\u02BBlandi!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.5
    }
  }, "Endi Fikrlash vazifalarini turmush o\u02BBrtog\u02BBingiz bilan birga bajarishingiz mumkin.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--color-text-primary)'
    }
  }, "Turmush o\u02BBrtog\u02BBingizni ulang"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.5
    }
  }, "Ushbu buyruqni turmush o\u02BBrtog\u02BBingizga yuboring \u2014 u botda shu buyruqni yozishi kifoya."), /*#__PURE__*/React.createElement("div", {
    onClick: onCopy,
    title: "Nusxalash uchun bosing",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--color-surface-sunken)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      cursor: 'pointer',
      width: '100%',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'monospace',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--color-primary)',
      letterSpacing: '0.02em'
    }
  }, "/connect ", code), /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/copy.svg",
    style: {
      width: 16,
      height: 16,
      opacity: 0.6
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-muted)'
    }
  }, "Kod 24 soat amal qiladi."), /*#__PURE__*/React.createElement("button", {
    onClick: onConfirm,
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--color-primary)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      padding: '4px 0'
    }
  }, "Ulanganini bilaman \u2014 davom etish"))));
}
function MiniProfileScreen({
  chapters,
  available,
  progress,
  streak,
  onOpenCouple
}) {
  const {
    Card,
    Badge,
    Switch,
    Button
  } = window.MumtozOilaDesignSystem_c96f62;
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
  const doneCount = chapters.slice(0, available).filter(c => (progress[c.n] || {}).done).length;
  const allDone = doneCount === chapters.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--color-text-primary)'
    }
  }, "Profil")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '12px 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--color-primary)',
      color: 'var(--cream-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22
    }
  }, "MO"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17,
      color: 'var(--color-text-primary)'
    }
  }, "Foydalanuvchi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 2,
      fontSize: 13,
      color: 'var(--color-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/flame.svg",
    style: {
      width: 14,
      height: 14
    },
    alt: ""
  }), streak, " kunlik izchillik"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--color-text-primary)',
      whiteSpace: 'nowrap'
    }
  }, doneCount, " / ", chapters.length, " bob"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      marginTop: 2
    }
  }, "yakunlandi")), /*#__PURE__*/React.createElement(Badge, {
    tone: allDone ? 'gold' : 'primary'
  }, allDone ? 'Sertifikat tayyor' : `${Math.round(doneCount / chapters.length * 100)}%`))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-secondary)',
      marginBottom: 10
    }
  }, "Nishonlar"), chapters.some(c => (progress[c.n] || {}).done) ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 10
    }
  }, chapters.filter(c => (progress[c.n] || {}).done).map(c => /*#__PURE__*/React.createElement("img", {
    key: c.n,
    onClick: () => setOpenBadge(c),
    src: `../../assets/brand/badges/${window.BADGE_ART[(c.n - 1) % window.BADGE_ART.length]}.png`,
    title: c.title,
    style: {
      width: '100%',
      aspectRatio: '1',
      borderRadius: '50%',
      cursor: 'pointer'
    },
    alt: c.title
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-muted)'
    }
  }, "Birinchi bobni yakunlab, nishon qo\u02BBlga kiriting.")), /*#__PURE__*/React.createElement(BadgeDialog, {
    chapter: openBadge,
    onClose: () => setOpenBadge(null)
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-primary)'
    }
  }, "Kunlik hikmat bildirishnomasi"), /*#__PURE__*/React.createElement(Switch, {
    checked: notif,
    onChange: setNotif
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-border)',
      margin: '10px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-primary)'
    }
  }, "Fikrlash javoblarini turmush o\u02BBrtoq bilan ulashish"), /*#__PURE__*/React.createElement(Switch, {
    checked: shareCouple,
    onChange: setShareCouple
  }))), allDone && /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "gold"
  }, "Sertifikatni yuklab olish")));
}
window.MiniProfileScreen = MiniProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mini-app/MiniProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mini-app/QuizScreen.jsx
try { (() => {
function QuizScreen({
  chapter,
  batch,
  onFinish,
  onBack
}) {
  const {
    IconButton,
    QuizOption,
    Button,
    Badge
  } = window.MumtozOilaDesignSystem_c96f62;
  const [i, setI] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const [results, setResults] = React.useState([]);
  const q = batch[i];
  const correctIndex = q.options.findIndex(o => o.correct);
  function next() {
    const record = {
      q: q.q,
      pickedText: q.options[picked].text,
      correctText: q.options[correctIndex].text,
      correct: picked === correctIndex,
      explain: q.explain
    };
    const nr = [...results, record];
    if (i + 1 < batch.length) {
      setResults(nr);
      setI(i + 1);
      setPicked(null);
    } else onFinish(nr);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '20px 12px 4px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Orqaga",
    onClick: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16
    }
  }, chapter.n, "-bob: Sinov"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-secondary)'
    }
  }, i + 1, " / ", batch.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-primary)',
      width: `${i / batch.length * 100}%`,
      transition: 'width .2s ease'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      lineHeight: 1.4
    }
  }, q.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, q.options.map((o, oi) => /*#__PURE__*/React.createElement(QuizOption, {
    key: oi,
    state: picked === null ? 'default' : oi === picked ? o.correct ? 'correct' : 'incorrect' : oi === correctIndex ? 'correct' : 'default',
    onClick: () => picked === null && setPicked(oi)
  }, o.text))), picked !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: picked === correctIndex ? 'success' : 'danger'
  }, picked === correctIndex ? 'Toʻgʻri javob!' : 'Notoʻgʻri javob'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.5
    }
  }, q.explain))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 24px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disabled: picked === null,
    onClick: next
  }, "Keyingisi")));
}
window.QuizScreen = QuizScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mini-app/QuizScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mini-app/ResultsScreen.jsx
try { (() => {
function stars(pct) {
  return pct === 100 ? 3 : pct >= 70 ? 2 : 1;
}
function scoreMessage(pct) {
  if (pct === 100) return 'Ajoyib! Barcha savollarga toʻgʻri javob berdingiz.';
  if (pct >= 70) return 'Yaxshi natija! Bir-ikki joyni birga koʻrib chiqamiz.';
  return 'Muhim emas — xato javoblar orqali ham oʻrganamiz. Pastda koʻrib chiqing.';
}
function ScoreRing({
  pct
}) {
  const r = 58,
    c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 140,
      height: 140
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "140",
    height: "140",
    viewBox: "0 0 140 140",
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "70",
    r: r,
    fill: "none",
    stroke: "var(--color-surface-sunken)",
    strokeWidth: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "70",
    r: r,
    fill: "none",
    stroke: "var(--color-accent-gold)",
    strokeWidth: "10",
    strokeLinecap: "round",
    strokeDasharray: `${c * pct / 100} ${c}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 32,
      color: 'var(--color-primary)'
    }
  }, pct, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--color-text-muted)',
      marginTop: 2
    }
  }, "to\u02BBg\u02BBri")));
}
function PerfectReveal({
  chapterN
}) {
  const [flipped, setFlipped] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setFlipped(true), 350);
    return () => clearTimeout(t);
  }, []);
  const art = window.BADGE_ART[(chapterN - 1) % window.BADGE_ART.length];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 150,
      height: 150,
      perspective: 600
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      position: 'relative',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.9s cubic-bezier(.34,1.56,.64,1)',
      transform: flipped ? 'rotateY(360deg) scale(1)' : 'rotateY(0deg) scale(0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'var(--color-surface-sunken)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backfaceVisibility: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 32,
      color: 'var(--color-text-muted)'
    }
  }, "?")), /*#__PURE__*/React.createElement("img", {
    src: `../../assets/brand/badges/${art}.png`,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      boxShadow: 'var(--shadow-lg)',
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)'
    },
    alt: ""
  })));
}
function ResultsScreen({
  chapter,
  results,
  syncState,
  onRetry,
  onContinue,
  onRetrySync
}) {
  const {
    Button,
    Badge
  } = window.MumtozOilaDesignSystem_c96f62;
  const [expanded, setExpanded] = React.useState(false);
  const correctCount = results.filter(r => r.correct).length;
  const pct = Math.round(correctCount / results.length * 100);
  const missed = results.filter(r => !r.correct);
  if (syncState === 'syncing') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: 14,
        background: 'var(--color-bg)',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        border: '3px solid var(--color-border)',
        borderTopColor: 'var(--color-primary)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--color-text-secondary)'
      }
    }, "Natija saqlanmoqda\u2026"), /*#__PURE__*/React.createElement("style", null, '@keyframes spin{to{transform:rotate(360deg)}}'));
  }
  if (syncState === 'failed') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: 14,
        padding: '0 32px',
        textAlign: 'center',
        background: 'var(--color-bg)',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://unpkg.com/lucide-static@latest/icons/wifi-off.svg",
      style: {
        width: 40,
        height: 40,
        opacity: 0.7
      },
      alt: ""
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 18
      }
    }, "Natijani yuborib bo\u02BBlmadi"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--color-text-secondary)'
      }
    }, "Internet aloqasini tekshirib, qayta urinib ko\u02BBring. Fikrlash bosqichi natija saqlangandan keyin ochiladi."), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: onRetrySync
    }, "Qayta urinish"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '32px 24px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: pct === 100 ? 'gold' : 'primary'
  }, chapter.n, "-bob: ", chapter.title), pct === 100 ? /*#__PURE__*/React.createElement(PerfectReveal, {
    chapterN: chapter.n
  }) : /*#__PURE__*/React.createElement(ScoreRing, {
    pct: pct
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--color-text-primary)',
      fontWeight: 500,
      maxWidth: 280,
      lineHeight: 1.5
    }
  }, scoreMessage(pct)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)'
    }
  }, correctCount, " / ", results.length, " to\u02BBg\u02BBri javob"), missed.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: 6,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setExpanded(e => !e),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Xato javoblarni ko\u02BBrish (", missed.length, ")"), /*#__PURE__*/React.createElement("img", {
    src: `https://unpkg.com/lucide-static@latest/icons/chevron-${expanded ? 'up' : 'down'}.svg`,
    style: {
      width: 16,
      height: 16
    },
    alt: ""
  })), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 10
    }
  }, missed.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, r.q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      background: 'var(--color-danger-tint)',
      borderRadius: 'var(--radius-md)',
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/x-circle.svg",
    style: {
      width: 15,
      height: 15,
      flexShrink: 0,
      marginTop: 1
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-danger)',
      lineHeight: 1.4
    }
  }, r.pickedText)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      background: 'var(--color-success-tint)',
      borderRadius: 'var(--radius-md)',
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@latest/icons/check-circle-2.svg",
    style: {
      width: 15,
      height: 15,
      flexShrink: 0,
      marginTop: 1
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-success)',
      lineHeight: 1.4
    }
  }, r.correctText)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)',
      lineHeight: 1.5
    }
  }, r.explain)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    onClick: onRetry
  }, "Qayta urinish"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onContinue
  }, "Davom etish")));
}
window.ResultsScreen = ResultsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mini-app/ResultsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mini-app/data.js
try { (() => {
window.CHAPTERS = [{
  n: 1,
  title: 'Ota-ona maqomi'
}, {
  n: 2,
  title: 'Ibodat va ruhiyat'
}, {
  n: 3,
  title: 'Oila iqtisodi'
}, {
  n: 4,
  title: 'Bola tarbiyasi'
}, {
  n: 5,
  title: 'Mehmondorchilik'
}, {
  n: 6,
  title: 'Er-xotin munosabati'
}, {
  n: 7,
  title: 'Oilaviy vazifalar'
}, {
  n: 8,
  title: 'Sabr va kechirim'
}, {
  n: 9,
  title: 'Farzand tanlovi'
}, {
  n: 10,
  title: 'Qarindoshlik'
}, {
  n: 11,
  title: 'Vaqt boshqaruvi'
}, {
  n: 12,
  title: 'Ota hurmati'
}, {
  n: 13,
  title: 'Ona mehri'
}, {
  n: 14,
  title: 'Nikoh maʼnosi'
}, {
  n: 15,
  title: 'Oilaviy inqiroz'
}, {
  n: 16,
  title: 'Moliyaviy odob'
}, {
  n: 17,
  title: 'Farzand tarbiyasi-2'
}, {
  n: 18,
  title: 'Qoʻshnichilik'
}, {
  n: 19,
  title: 'Motam odobi'
}, {
  n: 20,
  title: 'Oilaviy anʼana'
}, {
  n: 21,
  title: 'Yakuniy sinov'
}];
window.CHAPTERS_AVAILABLE = 6;
window.BADGE_ART = ['badge-parenthood', 'badge-faith', 'badge-economics', 'badge-child-rearing', 'badge-hospitality', 'badge-marriage'];
window.BADGE_INFO = [{
  name: 'Ota-onalik nishoni',
  desc: 'Ota-ona maqomi va oilada yoʻnalish beruvchi boʻlish mavzusidagi bobni yakunlaganingiz uchun.'
}, {
  name: 'Ibodat nishoni',
  desc: 'Ruhiyat va ibodat orqali oilaviy barakani mustahkamlash mavzusidagi bobni yakunlaganingiz uchun.'
}, {
  name: 'Iqtisod nishoni',
  desc: 'Oila iqtisodi va isrofgarchilikdan saqlanish mavzusidagi bobni yakunlaganingiz uchun.'
}, {
  name: 'Tarbiya nishoni',
  desc: 'Bola tarbiyasida namuna boʻlish mavzusidagi bobni yakunlaganingiz uchun.'
}, {
  name: 'Mehmondorchilik nishoni',
  desc: 'Mehmon kutish odobi mavzusidagi bobni yakunlaganingiz uchun.'
}, {
  name: 'Nikoh nishoni',
  desc: 'Er-xotin munosabatlari va sabr-toqat mavzusidagi bobni yakunlaganingiz uchun.'
}];
window.GOLDEN_SENTENCE = '"Oila — bir kunda qurilmaydi, lekin bir soʻz bilan yiqilishi mumkin."';
window.MY_REFLECTIONS = [{
  n: 1,
  text: 'Otam bilan uzoq gaplashib, uning bizga koʻrsatgan sabrini yangicha angladim.'
}, {
  n: 2,
  text: 'Bugun ibodatdan keyin oilam uchun ham duo qilishga harakat qildim.'
}, {
  n: 3,
  text: 'Har hafta xarajatlarni yozib borishni boshladik.'
}, {
  n: 4,
  text: 'Farzandim oldida ovozimni koʻtarmaslikka harakat qildim.'
}, {
  n: 5,
  text: 'Mehmonni kutib olishda unga koʻproq vaqt ajratdim.'
}, {
  n: 6,
  text: 'Kelishmovchilikda darrov javob qaytarmasdan, avval tinglashga harakat qildim.'
}];
window.PARTNER_REFLECTIONS = [{
  n: 1,
  text: 'Otamning yoshligidagi qiyinchiliklarini eshitib, unga boʻlgan hurmatim yanada oshdi.'
}, {
  n: 2,
  text: 'Har kuni oilamiz uchun ham duo qilishni odat qildim.'
}, {
  n: 3,
  text: 'Xarajatlarimizni birga rejalashtirib, keraksiz sarflarni kamaytirdik.'
}, {
  n: 4,
  text: 'Farzandimga soʻz bilan emas, oʻz xatti-harakatim bilan namuna boʻlishga harakat qildim.'
}, {
  n: 5,
  text: 'Mehmon kelganida koʻproq eʼtibor va samimiyat koʻrsatishga eʼtibor berdim.'
}, {
  n: 6,
  text: 'Kelishmovchilik boʻlganda darrov gapirmasdan, avval sabr qilishni oʻrgandim.'
}];
window.QUIZ_BANK = [{
  q: '"Mumtoz oila" talqinicha, ota oilada eng avvalo nima?',
  options: [{
    text: 'Oilaning maʼnaviy ustuni va yoʻnalish beruvchisi',
    correct: true
  }, {
    text: 'Faqat moddiy taʼminotchi',
    correct: false
  }],
  explain: 'Ota — moddiy taʼminotdan tashqari, oilaga yoʻnalish va maʼnaviy tayanch beruvchi shaxs sifatida qaraladi.'
}, {
  q: 'Oila iqtisodida risola qaysi tamoyilni birinchi oʻringa qoʻyadi?',
  options: [{
    text: 'Daromaddan tashqari isrofgarchilikdan saqlanish',
    correct: true
  }, {
    text: 'Faqat daromadni koʻpaytirish',
    correct: false
  }],
  explain: 'Barakali oila iqtisodi isrofgarchilikni oldini olishdan boshlanadi, daromad yolgʻiz omil emas.'
}, {
  q: 'Mehmon kutish odobida eng muhim narsa nima?',
  options: [{
    text: 'Мehmonga koʻrsatilgan hurmat, taomning miqdori emas',
    correct: true
  }, {
    text: 'Iloji boricha koʻp taom tayyorlash',
    correct: false
  }],
  explain: 'Risola mehmon oldida hurmat va samimiyatni taom miqdoridan ustun qoʻyadi.'
}, {
  q: 'Bola tarbiyasida ota-onaning birinchi vazifasi nima?',
  options: [{
    text: 'Namuna boʻlish',
    correct: true
  }, {
    text: 'Faqat nasihat qilish',
    correct: false
  }],
  explain: 'Bolalar koʻproq koʻrganini takrorlaydi — soʻzdan koʻra namuna kuchliroq taʼsir qiladi.'
}, {
  q: 'Er-xotin orasidagi kelishmovchiliklarga qanday yondashuv tavsiya etiladi?',
  options: [{
    text: 'Sabr va oʻzaro kechirim',
    correct: true
  }, {
    text: 'Uchinchi shaxslarni darrov aralashtirish',
    correct: false
  }],
  explain: 'Risola avvalo ikki tomon orasida sabr bilan hal qilishni, keyin kerak boʻlsa kattalar maslahatini tavsiya qiladi.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mini-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/mini-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mini-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/AuthScreen.jsx
try { (() => {
function AuthScreen({
  onDone
}) {
  const {
    Button,
    Input
  } = window.MumtozOilaDesignSystem_c96f62;
  const [step, setStep] = React.useState('phone');
  const [phone, setPhone] = React.useState('');
  const [code, setCode] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '32px 20px',
      boxSizing: 'border-box',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/pomegranate-motif.jpg",
    style: {
      width: 120,
      height: 100,
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      margin: '0 auto 20px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      textAlign: 'center',
      color: 'var(--color-primary)'
    }
  }, "Mumtoz oila"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      textAlign: 'center',
      color: 'var(--color-text-secondary)',
      marginTop: 6,
      marginBottom: 32
    }
  }, "Oila yo\u02BBlingizni boshlang"), step === 'phone' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "tel",
    label: "Telefon raqami",
    placeholder: "+998 __ ___ __ __",
    value: phone,
    onChange: setPhone
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setStep('code')
  }, "SMS kod olish")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: `${phone || '+998 90 123 45 67'} raqamiga yuborilgan kod`,
    placeholder: "- - - -",
    value: code,
    onChange: setCode
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onDone
  }, "Kirish")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      fontSize: 12,
      color: 'var(--color-text-muted)',
      textAlign: 'center'
    }
  }, "Parol kerak emas \u2014 faqat telefon raqamingiz."));
}
window.AuthScreen = AuthScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/AuthScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/MobileApp.jsx
try { (() => {
function JournalScreen({
  modules,
  progress,
  reflections,
  tab,
  onTab
}) {
  const {
    BottomNav,
    Card
  } = window.MumtozOilaDesignSystem_c96f62;
  const entries = modules.filter(m => reflections[m.n]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 20px 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--color-text-primary)'
    }
  }, "Fikrlash kundaligi"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, entries.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-muted)',
      textAlign: 'center',
      marginTop: 40
    }
  }, "Hali fikrlash javobi yo\u02BBq. Bo\u02BBlimni yakunlaganingizda shu yerda saqlanadi."), entries.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 4
    }
  }, m.n, "-bob: ", m.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)'
    }
  }, reflections[m.n])))), /*#__PURE__*/React.createElement(BottomNav, {
    items: [{
      icon: 'map',
      label: 'Yoʻl'
    }, {
      icon: 'book-open',
      label: 'Kundalik'
    }, {
      icon: 'user',
      label: 'Profil'
    }],
    active: tab,
    onChange: onTab
  }));
}
function MobileApp() {
  const {
    IOSDevice
  } = window;
  const [authed, setAuthed] = React.useState(false);
  const [view, setView] = React.useState('home');
  const [tab, setTab] = React.useState(0);
  const [activeModule, setActiveModule] = React.useState(null);
  const [progress, setProgress] = React.useState({
    1: {
      explainDone: true,
      testDone: true,
      reflectDone: true
    },
    2: {
      explainDone: true,
      testDone: true,
      reflectDone: true
    }
  });
  const [reflections, setReflections] = React.useState({
    1: 'Bugun otam bilan gaplashib, uning yoshligida qanday qiyinchiliklarni yengganini bilib oldim.',
    2: 'Har kuni namozdan keyin oilam uchun ham duo qilishga harakat qildim.'
  });
  function updateProgress(n, patch) {
    setProgress(p => ({
      ...p,
      [n]: {
        ...p[n],
        ...patch
      }
    }));
    if (patch.reflectDone) setReflections(r => ({
      ...r,
      [n]: 'Ushbu bobda oilam bilan qisqa suhbat qurdim va koʻp narsani angladim.'
    }));
  }
  function onTab(i) {
    setTab(i);
    setView(i === 0 ? 'home' : i === 1 ? 'journal' : 'profile');
  }
  if (!authed) return /*#__PURE__*/React.createElement(IOSDevice, {
    title: "Mumtoz oila"
  }, /*#__PURE__*/React.createElement(AuthScreen, {
    onDone: () => setAuthed(true)
  }));
  let screen;
  if (activeModule) {
    screen = /*#__PURE__*/React.createElement(ModuleScreen, {
      module: activeModule,
      progress: progress,
      onUpdate: updateProgress,
      onBack: () => setActiveModule(null)
    });
  } else if (view === 'home') {
    screen = /*#__PURE__*/React.createElement(MobileHomeScreen, {
      modules: window.MODULES,
      progress: progress,
      onOpenModule: setActiveModule,
      tab: tab,
      onTab: onTab
    });
  } else if (view === 'journal') {
    screen = /*#__PURE__*/React.createElement(JournalScreen, {
      modules: window.MODULES,
      progress: progress,
      reflections: reflections,
      tab: tab,
      onTab: onTab
    });
  } else {
    screen = /*#__PURE__*/React.createElement(ProfileScreen, {
      modules: window.MODULES,
      progress: progress,
      tab: tab,
      onTab: onTab
    });
  }
  return /*#__PURE__*/React.createElement(IOSDevice, {
    title: "Mumtoz oila"
  }, screen);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(MobileApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/MobileHomeScreen.jsx
try { (() => {
function MobileHomeScreen({
  modules,
  progress,
  onOpenModule,
  tab,
  onTab
}) {
  const {
    ProgressJourney,
    StreakChip,
    BottomNav
  } = window.MumtozOilaDesignSystem_c96f62;
  const nodes = modules.map(m => {
    const p = progress[m.n] || {};
    const state = p.reflectDone ? 'complete' : m.n === firstUnlocked(modules, progress) ? 'active' : m.n < firstUnlocked(modules, progress) ? 'complete' : 'locked';
    return {
      number: m.n,
      title: m.title,
      state
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 20px 8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--color-text-primary)',
      whiteSpace: 'nowrap'
    }
  }, "Oila yo\u02BBli"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)',
      marginTop: 4
    }
  }, "21 bo\u02BBlim")), /*#__PURE__*/React.createElement(StreakChip, {
    days: 12
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement(ProgressJourney, {
    modules: nodes,
    onSelect: i => nodes[i].state !== 'locked' && onOpenModule(modules[i])
  })), /*#__PURE__*/React.createElement(BottomNav, {
    items: [{
      icon: 'map',
      label: 'Yoʻl'
    }, {
      icon: 'book-open',
      label: 'Kundalik'
    }, {
      icon: 'user',
      label: 'Profil'
    }],
    active: tab,
    onChange: onTab
  }));
}
function firstUnlocked(modules, progress) {
  for (const m of modules) if (!(progress[m.n] || {}).reflectDone) return m.n;
  return modules.length + 1;
}
window.MobileHomeScreen = MobileHomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/MobileHomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ModuleScreen.jsx
try { (() => {
function ModuleScreen({
  module,
  progress,
  onUpdate,
  onBack
}) {
  const {
    IconButton,
    Tabs,
    Button,
    Badge,
    QuizOption,
    Dialog
  } = window.MumtozOilaDesignSystem_c96f62;
  const p = progress[module.n] || {};
  const [stage, setStage] = React.useState(p.testDone ? p.reflectDone ? 2 : 2 : p.explainDone ? 1 : 0);
  const [picked, setPicked] = React.useState(null);
  const [reflection, setReflection] = React.useState('');
  const [celebrate, setCelebrate] = React.useState(false);
  const correctIndex = window.QUIZ.options.findIndex(o => o.correct);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '20px 12px 8px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Orqaga",
    onClick: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--color-text-primary)'
    }
  }, module.n, "-bob: ", module.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 12px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Tushuntirish', 'Sinov', 'Fikrlash'],
    active: stage,
    onChange: i => (i === 0 || p.explainDone || i <= stage) && setStage(i)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, stage === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--color-text-primary)',
      margin: 0
    }
  }, "Bugun ko\u02BBpchilik ota-onalik maqomini yengillashtirib, farzandiga xo\u02BBjayin emas, xizmatkor bo\u02BBlib qolmoqda. \"Mumtoz oila\" bu holatni o\u02BBzgartirishni taklif qiladi: ota-ona \u2014 yo\u02BBnalish beruvchi, farzand esa uni hurmat qiladigan tomon."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-accent-gold-tint)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 16,
      color: '#6B4A10'
    }
  }, window.GOLDEN_SENTENCE), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => {
      onUpdate(module.n, {
        explainDone: true
      });
      setStage(1);
    }
  }, "Testni boshlash")), stage === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, window.QUIZ.question), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, window.QUIZ.options.map((o, i) => /*#__PURE__*/React.createElement(QuizOption, {
    key: i,
    state: picked === null ? 'default' : i === picked ? o.correct ? 'correct' : 'incorrect' : i === correctIndex ? 'correct' : 'default',
    onClick: () => picked === null && setPicked(i)
  }, o.text))), picked !== null && /*#__PURE__*/React.createElement(Badge, {
    tone: picked === correctIndex ? 'success' : 'danger'
  }, picked === correctIndex ? 'Toʻgʻri javob!' : 'Notoʻgʻri — toʻgʻri javob belgilandi'), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disabled: picked === null,
    onClick: () => {
      onUpdate(module.n, {
        testDone: true
      });
      setStage(2);
    }
  }, "Davom etish")), stage === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, "Oilangizda sinab ko\u02BBring: bugun farzandingiz (yoki turmush o\u02BBrtoqingiz) bilan shu mavzuda 5 daqiqa gaplashing. Nima his qildingiz?"), /*#__PURE__*/React.createElement("textarea", {
    value: reflection,
    onChange: e => setReflection(e.target.value),
    placeholder: "Fikringizni yozing\u2026",
    style: {
      minHeight: 120,
      padding: 14,
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--color-border)',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      resize: 'vertical'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-muted)'
    }
  }, "Bu qism baholanmaydi \u2014 shaxsiy kundalik sifatida saqlanadi."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disabled: !reflection.trim(),
    onClick: () => {
      onUpdate(module.n, {
        reflectDone: true
      });
      setCelebrate(true);
    }
  }, "Yakunlash"))), /*#__PURE__*/React.createElement(Dialog, {
    open: celebrate,
    title: "Bo\u02BBlim yakunlandi!",
    onClose: () => {
      setCelebrate(false);
      onBack();
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--color-text-secondary)',
      margin: '0 0 16px'
    }
  }, "\"", module.title, "\" nishonini qo\u02BBlga kiritdingiz. Keyingi bo\u02BBlim ochildi."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "gold",
    onClick: () => {
      setCelebrate(false);
      onBack();
    }
  }, "Yo\u02BBlga qaytish")));
}
window.ModuleScreen = ModuleScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ModuleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ProfileScreen.jsx
try { (() => {
function ProfileScreen({
  modules,
  progress,
  tab,
  onTab
}) {
  const {
    BottomNav,
    Badge,
    Switch,
    Card
  } = window.MumtozOilaDesignSystem_c96f62;
  const [notif, setNotif] = React.useState(true);
  const [shareCouple, setShareCouple] = React.useState(false);
  const done = modules.filter(m => (progress[m.n] || {}).reflectDone).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 20px 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--color-text-primary)'
    }
  }, "Profil"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18
    }
  }, done, " / ", modules.length, " bo\u02BBlim"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-text-secondary)'
    }
  }, "yakunlandi")), /*#__PURE__*/React.createElement(Badge, {
    tone: done === modules.length ? 'gold' : 'primary'
  }, done === modules.length ? 'Sertifikat tayyor' : `${Math.round(done / modules.length * 100)}%`))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 8
    }
  }, modules.map(m => {
    const earned = (progress[m.n] || {}).reflectDone;
    return /*#__PURE__*/React.createElement("div", {
      key: m.n,
      title: m.title,
      style: {
        aspectRatio: '1',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        background: earned ? 'var(--color-accent-gold)' : 'var(--color-surface-sunken)',
        color: earned ? '#fff' : 'var(--color-text-muted)'
      }
    }, m.n);
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, "Kunlik hikmat bildirishnomasi"), /*#__PURE__*/React.createElement(Switch, {
    checked: notif,
    onChange: setNotif
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-border)',
      margin: '10px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, "Fikrlash javoblarini turmush o\u02BBrtoq bilan ulashish"), /*#__PURE__*/React.createElement(Switch, {
    checked: shareCouple,
    onChange: setShareCouple
  })))), /*#__PURE__*/React.createElement(BottomNav, {
    items: [{
      icon: 'map',
      label: 'Yoʻl'
    }, {
      icon: 'book-open',
      label: 'Kundalik'
    }, {
      icon: 'user',
      label: 'Profil'
    }],
    active: tab,
    onChange: onTab
  }));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/data.js
try { (() => {
window.MODULES = [{
  n: 1,
  title: 'Ota-ona maqomi'
}, {
  n: 2,
  title: 'Ibodat va ruhiyat'
}, {
  n: 3,
  title: 'Oila iqtisodi'
}, {
  n: 4,
  title: 'Bola tarbiyasi'
}, {
  n: 5,
  title: 'Mehmondorchilik'
}, {
  n: 6,
  title: 'Er-xotin munosabati'
}, {
  n: 7,
  title: 'Oilaviy vazifalar'
}, {
  n: 8,
  title: 'Sabr va kechirim'
}, {
  n: 9,
  title: 'Farzand tanlovi'
}, {
  n: 10,
  title: 'Qarindoshlik'
}, {
  n: 11,
  title: 'Vaqt boshqaruvi'
}, {
  n: 12,
  title: 'Ota hurmati'
}, {
  n: 13,
  title: 'Ona mehri'
}, {
  n: 14,
  title: 'Nikoh maʼnosi'
}, {
  n: 15,
  title: 'Oilaviy inqiroz'
}, {
  n: 16,
  title: 'Moliyaviy odob'
}, {
  n: 17,
  title: 'Farzand tarbiyasi-2'
}, {
  n: 18,
  title: 'Qoʻshnichilik'
}, {
  n: 19,
  title: 'Motam odobi'
}, {
  n: 20,
  title: 'Oilaviy anʼana'
}, {
  n: 21,
  title: 'Yakuniy sinov'
}];
window.QUIZ = {
  question: '"Mumtoz oila" talqinicha, ota oilada eng avvalo nima?',
  options: [{
    text: 'Oilaning maʼnaviy ustuni va yoʻnalish beruvchisi',
    correct: true
  }, {
    text: 'Faqat moddiy taʼminotchi',
    correct: false
  }, {
    text: 'Farzandlar bilan kamdan-kam gaplashuvchi shaxs',
    correct: false
  }]
};
window.GOLDEN_SENTENCE = '"Oila — bir kechada qurilmaydi, lekin bir soʻz bilan buzilishi mumkin."';
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.AudioPlayer = __ds_scope.AudioPlayer;

__ds_ns.ModuleNode = __ds_scope.ModuleNode;

__ds_ns.ProgressJourney = __ds_scope.ProgressJourney;

__ds_ns.QuizOption = __ds_scope.QuizOption;

__ds_ns.StreakChip = __ds_scope.StreakChip;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
