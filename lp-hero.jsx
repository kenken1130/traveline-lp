// ============================================================
// Traveline LP — Hero (3 variations: photo / type / split)
// ============================================================

const { useState, useEffect, useRef } = React;

// -- Shared animated route line ------------------------------
function AnimatedRouteLine({ width=1600, height=900, color="#C04A2B", strokeWidth=2, points, delay=0, durationMs=2800 }) {
  const pathRef = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const total = path.getTotalLength();
    path.style.strokeDasharray = total;
    path.style.strokeDashoffset = total;
    let raf;
    const startAt = Date.now() + delay;
    const tick = () => {
      const now = Date.now();
      if (now < startAt) { raf = requestAnimationFrame(tick); return; }
      const t = Math.min(1, (now - startAt) / durationMs);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      path.style.strokeDashoffset = String(total * (1 - eased));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDrawn(true);
    };
    // also schedule via setTimeout as a fallback (iframe timeline edge case)
    const fallback = setTimeout(() => {
      path.style.strokeDashoffset = "0";
      setDrawn(true);
    }, delay + durationMs + 200);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(fallback); };
  }, []);

  const d = window.LP_pointsToPath(points, width, height);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none"
         style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}>
      <defs>
        <linearGradient id="heroLineGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"   stopColor={color} stopOpacity="0"/>
          <stop offset="10%"  stopColor={color} stopOpacity=".95"/>
          <stop offset="90%"  stopColor="#F4F1EA" stopOpacity=".85"/>
          <stop offset="100%" stopColor="#F4F1EA" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path ref={pathRef} d={d}
            fill="none" stroke="url(#heroLineGrad)" strokeWidth={strokeWidth}
            strokeLinecap="round"/>
      {/* waypoint dots */}
      {points && points.map((p, i) => (
        <circle key={i} cx={p[0]*width/100} cy={p[1]*height/100} r="5"
                fill={i===0 || i===points.length-1 ? color : "#F4F1EA"}
                stroke={color} strokeWidth="2" />
      ))}
    </svg>
  );
}

// -- Email signup --------------------------------------------
function WaitlistInline({ t, dark=false, compact=false }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); if (email.includes("@")) setSent(true); };
  const inputBg = dark ? "rgba(244,241,234,.07)" : "rgba(20,17,14,.03)";
  const inputBorder = dark ? "rgba(244,241,234,.18)" : "rgba(20,17,14,.14)";
  const inputColor = dark ? "#F4F1EA" : "#14110E";
  const btnBg = dark ? "#F4F1EA" : "#14110E";
  const btnColor = dark ? "#14110E" : "#F4F1EA";

  if (sent) {
    return (
      <div style={{
        display:"flex", alignItems:"center", gap:"12px",
        padding:"18px 22px", border:`1px solid ${dark ? "rgba(192,74,43,.5)" : "rgba(192,74,43,.4)"}`,
        background: dark ? "rgba(192,74,43,.12)" : "rgba(192,74,43,.06)",
        color: dark ? "#F4F1EA" : "#14110E",
        fontFamily:"'Noto Sans JP', Inter, sans-serif", fontSize:"15px",
      }}>
        <span style={{ width:18, height:18, borderRadius:"50%", background:"#C04A2B", display:"inline-flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11 }}>✓</span>
        {t.hero.submitted}
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display:"flex", gap:"8px", maxWidth: compact ? 460 : 520 }}>
      <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required
        placeholder={t.hero.placeholder}
        style={{
          flex:1, padding:"16px 18px", fontFamily:"Inter, 'Noto Sans JP', sans-serif",
          fontSize:"15px", border:`1px solid ${inputBorder}`, background: inputBg, color: inputColor,
          outline:"none", letterSpacing:".01em",
        }}/>
      <button type="submit" style={{
        padding:"16px 24px", background: btnBg, color: btnColor, border:"none",
        fontFamily:"Inter, 'Noto Sans JP', sans-serif", fontSize:"14px", fontWeight:600,
        letterSpacing:".08em", textTransform:"uppercase", cursor:"pointer", whiteSpace:"nowrap",
      }}>{t.hero.submit}</button>
    </form>
  );
}

// -----------------------------------------------------------------
// HERO 01 · Cinematic photo + drawn line + minimal type
// -----------------------------------------------------------------
function HeroPhoto({ t, lang, onLangToggle }) {
  // izu route points reused for visual
  const pts = [[5,72],[18,68],[32,58],[48,52],[62,46],[74,38],[88,30],[100,22]];
  return (
    <section style={{
      position:"relative", height:"100vh", minHeight: 820, color:"#F4F1EA",
      background:"#0B0A08", overflow:"hidden",
    }}>
      {/* photo */}
      <image-slot id="lp-hero-photo"
        placeholder="Japanese countryside road · dusk · cinematic"
        style={{
          position:"absolute", inset:0, width:"100%", height:"100%",
          "--slot-bg":"#14110E", "--slot-fg":"#8A8275", "--slot-border":"#2B2722",
        }} />
      {/* gradient overlays */}
      <div style={{
        position:"absolute", inset:0, zIndex:1,
        background:`linear-gradient(180deg, rgba(11,10,8,.55) 0%, rgba(11,10,8,.15) 35%, rgba(11,10,8,.85) 100%),
                    linear-gradient(90deg, rgba(11,10,8,.7) 0%, rgba(11,10,8,.1) 50%, rgba(11,10,8,.3) 100%)`,
      }}/>
      {/* drawn line */}
      <AnimatedRouteLine points={pts} width={1920} height={1080} delay={500} durationMs={3200}/>

      {/* nav */}
      <LpNav lang={lang} onLangToggle={onLangToggle} t={t} dark />

      {/* content */}
      <div style={{
        position:"absolute", inset:0, zIndex:3, display:"flex", flexDirection:"column",
        justifyContent:"flex-end", padding:"0 80px 120px",
      }}>
        <div style={{ maxWidth: 1240 }}>
          <div style={{
            fontFamily:"Inter", fontSize:13, letterSpacing:".32em", textTransform:"uppercase",
            color:"#C04A2B", fontWeight:500,
          }}>{t.hero.eyebrow}</div>

          <h1 style={{
            margin:"32px 0 0", fontFamily:"'Noto Serif JP', serif", fontWeight:500,
            fontSize:"clamp(60px, 9vw, 156px)", lineHeight:1.02, letterSpacing:"-.015em",
            color:"#F4F1EA",
          }}>
            {t.hero.tagline}<br/>
            <span style={{ color:"#C04A2B" }}>{t.hero.tagline2}</span>
          </h1>

          <div style={{
            marginTop:48, fontFamily:"Inter", fontSize:18, fontWeight:300, color:"rgba(244,241,234,.7)",
            letterSpacing:".02em",
          }}>{t.hero.jpKicker}</div>

          <p style={{
            marginTop:48, maxWidth:680, fontFamily:"'Noto Sans JP', Inter, sans-serif",
            fontSize:17, lineHeight:1.7, color:"rgba(244,241,234,.78)", fontWeight:300,
          }}>{t.hero.sub}</p>

          <div style={{ marginTop:48 }}>
            <WaitlistInline t={t} dark/>
            <div style={{ marginTop:14, fontFamily:"Inter", fontSize:12, letterSpacing:".14em",
                          textTransform:"uppercase", color:"rgba(244,241,234,.45)" }}>
              {t.hero.tinytrust}
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div style={{ position:"absolute", right:80, bottom:80, display:"flex",
                      alignItems:"center", gap:12, color:"rgba(244,241,234,.5)",
                      fontFamily:"Inter", fontSize:11, letterSpacing:".24em", textTransform:"uppercase" }}>
          <span>Scroll</span>
          <div style={{ width:32, height:1, background:"rgba(244,241,234,.4)" }}/>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------
// HERO 02 · Type-forward — huge 線 with photo as accent
// -----------------------------------------------------------------
function HeroType({ t, lang, onLangToggle }) {
  return (
    <section style={{
      position:"relative", minHeight:"100vh", background:"#F4F1EA", color:"#14110E",
      overflow:"hidden",
    }}>
      <LpNav lang={lang} onLangToggle={onLangToggle} t={t} />

      <div style={{
        display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:80,
        padding:"180px 80px 120px", minHeight:"100vh", alignItems:"center",
      }}>
        {/* left */}
        <div>
          <div style={{
            fontFamily:"Inter", fontSize:13, letterSpacing:".32em", textTransform:"uppercase",
            color:"#C04A2B", fontWeight:500,
          }}>{t.hero.eyebrow}</div>

          <h1 style={{
            margin:"32px 0 0", fontFamily:"'Noto Serif JP', serif", fontWeight:500,
            fontSize:"clamp(64px, 10vw, 180px)", lineHeight:.98, letterSpacing:"-.02em",
          }}>
            {t.hero.tagline}<br/>
            <span style={{ position:"relative", display:"inline-block" }}>
              <span style={{ color:"#C04A2B" }}>{t.hero.tagline2}</span>
              <svg viewBox="0 0 600 30" style={{ position:"absolute", left:0, right:0, bottom:-12, width:"100%", height:24, pointerEvents:"none" }}>
                <path d="M 8 18 Q 150 4, 300 14 T 592 8"
                      fill="none" stroke="#C04A2B" strokeWidth="3"
                      strokeDasharray="900" strokeDashoffset="900"
                      style={{ animation:"underdraw 1800ms cubic-bezier(.65,.05,.36,1) 600ms forwards" }}/>
              </svg>
            </span>
          </h1>

          <div style={{
            marginTop:64, fontFamily:"Inter", fontSize:20, fontWeight:300, color:"#6C645A",
            letterSpacing:".02em",
          }}>{t.hero.jpKicker}</div>

          <p style={{
            marginTop:40, maxWidth:560, fontFamily:"'Noto Sans JP', Inter, sans-serif",
            fontSize:17, lineHeight:1.75, color:"#3A352E", fontWeight:400,
          }}>{t.hero.sub}</p>

          <div style={{ marginTop:48 }}>
            <WaitlistInline t={t}/>
            <div style={{ marginTop:14, fontFamily:"Inter", fontSize:12, letterSpacing:".14em",
                          textTransform:"uppercase", color:"#8A8275" }}>
              {t.hero.tinytrust}
            </div>
          </div>
        </div>

        {/* right — photo column with overlaid mini map */}
        <div style={{ position:"relative", height:"min(78vh, 760px)" }}>
          <image-slot id="lp-hero-photo-side"
            placeholder="Mountain pass or coastal road · vertical"
            style={{
              position:"absolute", inset:0, width:"100%", height:"100%",
              "--slot-bg":"#EDE7DB", "--slot-fg":"#8A8275", "--slot-border":"#D6CDB8",
            }} />
          {/* line trail overlaid */}
          <div style={{ position:"absolute", inset:0 }}>
            <AnimatedRouteLine
              points={[[10,82],[28,72],[48,62],[62,50],[78,36],[92,18]]}
              width={500} height={760} delay={400} durationMs={2400} strokeWidth={2.5}/>
          </div>
          {/* corner caption */}
          <div style={{
            position:"absolute", left:20, bottom:20, padding:"10px 14px",
            background:"rgba(11,10,8,.72)", backdropFilter:"blur(4px)",
            color:"#F4F1EA", fontFamily:"Inter", fontSize:11,
            letterSpacing:".18em", textTransform:"uppercase",
          }}>★ One line · Izu peninsula</div>
        </div>
      </div>

      <style>{`@keyframes underdraw { to { stroke-dashoffset: 0; } }`}</style>
    </section>
  );
}

// -----------------------------------------------------------------
// HERO 03 · Split — left type, right an animated map of multiple lines
// -----------------------------------------------------------------
function HeroSplit({ t, lang, onLangToggle }) {
  const routes = [
    { points: window.LP_ROUTES_GEOM.izu.points,    delay: 400  },
    { points: window.LP_ROUTES_GEOM.tohoku.points, delay: 900  },
    { points: window.LP_ROUTES_GEOM.kyushu.points, delay: 1400 },
    { points: window.LP_ROUTES_GEOM.noto.points,   delay: 1900 },
  ];
  return (
    <section style={{
      position:"relative", minHeight:"100vh", background:"#F4F1EA", color:"#14110E",
      overflow:"hidden",
    }}>
      <LpNav lang={lang} onLangToggle={onLangToggle} t={t} />

      <div style={{
        display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"100vh",
      }}>
        {/* left */}
        <div style={{ padding:"180px 64px 120px 80px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
          <div style={{
            fontFamily:"Inter", fontSize:13, letterSpacing:".32em", textTransform:"uppercase",
            color:"#C04A2B", fontWeight:500,
          }}>{t.hero.eyebrow}</div>

          <h1 style={{
            margin:"32px 0 0", fontFamily:"'Noto Serif JP', serif", fontWeight:500,
            fontSize:"clamp(56px, 7vw, 124px)", lineHeight:1.04, letterSpacing:"-.015em",
          }}>
            {t.hero.tagline}<br/>
            <span style={{ color:"#C04A2B" }}>{t.hero.tagline2}</span>
          </h1>

          <div style={{
            marginTop:36, fontFamily:"Inter", fontSize:18, fontWeight:300, color:"#6C645A",
          }}>{t.hero.jpKicker}</div>

          <p style={{
            marginTop:36, maxWidth:520, fontFamily:"'Noto Sans JP', Inter, sans-serif",
            fontSize:16, lineHeight:1.75, color:"#3A352E",
          }}>{t.hero.sub}</p>

          <div style={{ marginTop:40 }}>
            <WaitlistInline t={t} compact/>
            <div style={{ marginTop:14, fontFamily:"Inter", fontSize:12, letterSpacing:".14em",
                          textTransform:"uppercase", color:"#8A8275" }}>
              {t.hero.tinytrust}
            </div>
          </div>
        </div>

        {/* right — map of japan-ish with lines drawing */}
        <div style={{ position:"relative", background:"#0B0A08", overflow:"hidden" }}>
          {/* faint topography */}
          <svg viewBox="0 0 800 1080" preserveAspectRatio="xMidYMid slice"
               style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:.4 }}>
            <g fill="none" stroke="#3A352E" strokeWidth="1">
              {Array.from({length:14}).map((_,i)=>(
                <path key={i} d={`M -20 ${80+i*70} Q 200 ${60+i*70}, 400 ${100+i*70} T 820 ${80+i*70}`} />
              ))}
            </g>
            {/* scatter pins for "today" */}
            <g fill="#3A352E">
              {[[120,140],[280,210],[440,180],[600,260],[200,380],[520,420],[360,520],[660,560],[140,640],[420,720],[600,780],[260,860],[500,900],[700,940]].map((p,i)=>(
                <circle key={i} cx={p[0]} cy={p[1]} r="2"/>
              ))}
            </g>
          </svg>

          {/* the lines */}
          {routes.map((r, i) => (
            <div key={i} style={{ position:"absolute", inset:0 }}>
              <AnimatedRouteLine points={r.points} delay={r.delay} durationMs={2400}
                                 width={800} height={1080} strokeWidth={2.5}/>
            </div>
          ))}

          {/* counter overlay */}
          <div style={{
            position:"absolute", left:48, bottom:48, color:"#F4F1EA",
            fontFamily:"Inter",
          }}>
            <div style={{ fontSize:11, letterSpacing:".24em", textTransform:"uppercase", color:"rgba(244,241,234,.5)" }}>Lines on the platform</div>
            <div style={{ marginTop:8, fontSize:64, fontWeight:300, letterSpacing:"-.04em" }}>1,247</div>
            <div style={{ marginTop:8, fontSize:13, color:"rgba(244,241,234,.6)" }}>and counting · by real travelers</div>
          </div>
          <div style={{
            position:"absolute", right:48, top:160, color:"#F4F1EA",
            fontFamily:"Inter", textAlign:"right",
          }}>
            <div style={{ fontSize:11, letterSpacing:".24em", textTransform:"uppercase", color:"#C04A2B" }}>★ Live</div>
            <div style={{ marginTop:6, fontSize:13, color:"rgba(244,241,234,.7)" }}>4 routes being followed right now</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------
// Top nav (used by all hero variants)
// -----------------------------------------------------------------
function LpNav({ t, lang, onLangToggle, dark=false }) {
  const fg = dark ? "#F4F1EA" : "#14110E";
  const subFg = dark ? "rgba(244,241,234,.6)" : "#6C645A";
  return (
    <nav style={{
      position:"absolute", top:0, left:0, right:0, zIndex:10,
      padding:"32px 80px", display:"flex", alignItems:"center", justifyContent:"space-between",
    }}>
      {/* logo */}
      <a href="#" style={{
        textDecoration:"none", color:fg, display:"flex", alignItems:"center", gap:12,
        fontFamily:"Inter", fontWeight:500, fontSize:18, letterSpacing:"-.01em", whiteSpace:"nowrap",
      }}>
        <span style={{ width:6, height:6, background:"#C04A2B", borderRadius:"50%", flexShrink:0 }}/>
        <span style={{ position:"relative", display:"inline-block" }}>
          Trave<span style={{ color:fg }}>line</span>
          <span style={{
            position:"absolute", left:"calc(4ch + 1px)", right:0, bottom:2,
            height:1.5, background:"#C04A2B"
          }}/>
        </span>
      </a>

      {/* center links */}
      <div style={{
        display:"flex", gap:36, fontFamily:"Inter", fontSize:13,
        letterSpacing:".08em", color:subFg, fontWeight:500, whiteSpace:"nowrap",
      }}>
        <a href="#manifesto" style={{ color:"inherit", textDecoration:"none" }}>{t.nav.manifesto}</a>
        <a href="#product"   style={{ color:"inherit", textDecoration:"none" }}>{t.nav.product}</a>
        <a href="#routes"    style={{ color:"inherit", textDecoration:"none" }}>{t.nav.routes}</a>
        <a href="#owners"    style={{ color:"inherit", textDecoration:"none" }}>{t.nav.owners}</a>
      </div>

      {/* right: lang + cta */}
      <div style={{ display:"flex", alignItems:"center", gap:24, whiteSpace:"nowrap" }}>
        <button onClick={onLangToggle} style={{
          background:"transparent", border:`1px solid ${dark ? "rgba(244,241,234,.2)" : "rgba(20,17,14,.15)"}`,
          color:fg, padding:"8px 14px", fontFamily:"Inter", fontSize:12,
          letterSpacing:".14em", cursor:"pointer", fontWeight:500, display:"flex", gap:8, alignItems:"center",
        }}>
          <span style={{ opacity: lang==="en" ? 1 : .4 }}>EN</span>
          <span style={{ opacity:.3 }}>/</span>
          <span style={{ opacity: lang==="jp" ? 1 : .4 }}>JP</span>
        </button>
        <a href="#waitlist" style={{
          padding:"10px 18px", background:"#C04A2B", color:"#fff",
          fontFamily:"Inter", fontSize:13, fontWeight:500, letterSpacing:".06em",
          textDecoration:"none", whiteSpace:"nowrap",
        }}>{t.nav.cta}</a>
      </div>
    </nav>
  );
}

// expose
Object.assign(window, { HeroPhoto, HeroType, HeroSplit, LpNav, WaitlistInline, AnimatedRouteLine });
