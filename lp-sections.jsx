// ============================================================
// Traveline LP — Body sections: Problem, Pillars, Routes, Footer
// ============================================================

const { useState: useState_s, useEffect: useEffect_s, useRef: useRef_s } = React;

// =============================================================
// PROBLEM — dots vs line
// =============================================================
function ProblemSection({ t }) {
  const isMobile = window.useIsMobile();
  return (
    <section id="manifesto" style={{
      background:"#F4F1EA", color:"#14110E",
      padding: isMobile ? "80px 20px 100px" : "160px 80px 200px",
      position:"relative",
    }}>
      {/* eyebrow + heading */}
      <div style={{ maxWidth: 1400, margin:"0 auto" }}>
        <div style={{
          fontFamily:"Inter", fontSize:13, letterSpacing:".32em", textTransform:"uppercase",
          color:"#C04A2B", fontWeight:500, display:"flex", gap:24, alignItems:"center",
        }}>
          <span style={{ width:32, height:1, background:"#C04A2B" }}/>
          {t.problem.eyebrow}
        </div>

        <h2 style={{
          margin:"36px 0 0", fontFamily:"'Noto Serif JP', serif", fontWeight:500,
          fontSize:"clamp(48px, 6vw, 96px)", lineHeight:1.08, letterSpacing:"-.01em",
          maxWidth: 1180,
        }}>
          {t.problem.h}<br/>
          <span style={{ color:"#C04A2B" }}>{t.problem.h2}</span>
        </h2>

        <p style={{
          marginTop: isMobile ? 32 : 64, maxWidth: 820,
          fontFamily:"'Noto Sans JP', Inter, sans-serif",
          fontSize: isMobile ? 16 : 20, lineHeight:1.75,
          color:"#3A352E", fontWeight:400,
        }}>{t.problem.lead}</p>

        {/* dots vs line cards */}
        <div style={{
          marginTop: isMobile ? 60 : 120, display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 20 : 32,
        }}>
          {/* dots card */}
          <div style={{
            background:"#EDE7DB",
            padding: isMobile ? 28 : 48,
            position:"relative",
            minHeight: isMobile ? 420 : 520, overflow:"hidden",
          }}>
            <div style={{ display:"flex", justifyContent:"space-between" }}>
              <div style={{ fontFamily:"Inter", fontSize:12, letterSpacing:".24em", textTransform:"uppercase", color:"#6C645A" }}>
                {t.problem.todayLabel}
              </div>
              <div style={{ fontFamily:"Inter", fontSize:11, letterSpacing:".18em", color:"#8A8275", textTransform:"uppercase" }}>
                Map.app · TripAdvisor · Google
              </div>
            </div>
            <h3 style={{ margin:"24px 0 0", fontFamily:"'Noto Sans JP', sans-serif", fontWeight:600,
                         fontSize:32, color:"#14110E" }}>
              {t.problem.todayCap}
            </h3>
            {/* scatter dots */}
            <svg viewBox="0 0 540 380" style={{ position:"absolute", left:0, right:0, bottom:48, width:"100%", height:380 }}>
              <g fill="none" stroke="#D6CDB8" strokeWidth="1" strokeDasharray="2 6">
                <path d="M 20 80 Q 120 50, 240 100 T 520 80"/>
                <path d="M 20 200 Q 140 240, 280 210 T 520 230"/>
                <path d="M 20 320 Q 160 290, 320 340 T 520 320"/>
              </g>
              <g fill="#14110E">
                {[[80,90],[180,140],[280,90],[380,150],[460,110],[120,200],[260,260],[380,220],[480,260],[80,300],[200,330],[340,300],[460,340]].map((p,i)=>(
                  <circle key={i} cx={p[0]} cy={p[1]} r="4"/>
                ))}
              </g>
              <g fontFamily="Inter" fontSize="10" fill="#6C645A">
                <text x="92" y="85">★ Onsen</text>
                <text x="192" y="135">★ Sushi</text>
                <text x="292" y="85">★ Shrine</text>
                <text x="132" y="195">★ Cafe</text>
                <text x="272" y="255">★ Market</text>
                <text x="392" y="215">★ View</text>
                <text x="92" y="295">★ Brewery</text>
                <text x="352" y="295">★ Beach</text>
              </g>
            </svg>
          </div>

          {/* line card */}
          <div style={{
            background:"#0B0A08", color:"#F4F1EA",
            padding: isMobile ? 28 : 48,
            position:"relative",
            minHeight: isMobile ? 420 : 520, overflow:"hidden",
          }}>
            <div style={{ display:"flex", justifyContent:"space-between" }}>
              <div style={{ fontFamily:"Inter", fontSize:12, letterSpacing:".24em", textTransform:"uppercase", color:"#C04A2B" }}>
                {t.problem.lineLabel}
              </div>
              <div style={{ fontFamily:"Inter", fontSize:11, letterSpacing:".18em", color:"#8A8275", textTransform:"uppercase" }}>
                Mark's Izu Seven · ★ 4.8
              </div>
            </div>
            <h3 style={{ margin:"24px 0 0", fontFamily:"'Noto Sans JP', sans-serif", fontWeight:600,
                         fontSize:32, color:"#F4F1EA" }}>
              {t.problem.lineCap}
            </h3>
            {/* the line through points */}
            <svg viewBox="0 0 540 380" style={{ position:"absolute", left:0, right:0, bottom:48, width:"100%", height:380 }}>
              <g fill="none" stroke="#2B2722" strokeWidth="1" strokeDasharray="2 6">
                <path d="M 20 80 Q 120 50, 240 100 T 520 80"/>
                <path d="M 20 200 Q 140 240, 280 210 T 520 230"/>
                <path d="M 20 320 Q 160 290, 320 340 T 520 320"/>
              </g>
              <path d="M 60 120 Q 160 100, 240 160 T 380 240 Q 320 320, 220 320 T 80 280"
                    fill="none" stroke="#C04A2B" strokeWidth="3" strokeLinecap="round"/>
              <g fill="#F4F1EA" stroke="#C04A2B" strokeWidth="2">
                <circle cx="60" cy="120" r="7"/>
                <circle cx="240" cy="160" r="7"/>
                <circle cx="380" cy="240" r="7"/>
                <circle cx="220" cy="320" r="7"/>
                <circle cx="80" cy="280" r="7"/>
              </g>
              <g fontFamily="Inter" fontSize="10" fill="#C9C2B5" fontWeight="600">
                {t.problem.dayLabels.slice(0,5).map((d,i) => {
                  const pos = [[72,118],[252,158],[392,238],[232,318],[92,278]][i];
                  return <text key={i} x={pos[0]} y={pos[1]-10}>{d}</text>;
                })}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// PILLARS — 4 columns
// =============================================================
function PillarsSection({ t }) {
  const isMobile = window.useIsMobile();
  return (
    <section id="product" style={{
      background:"#0B0A08", color:"#F4F1EA",
      padding: isMobile ? "80px 20px 100px" : "160px 80px 200px",
      position:"relative",
    }}>
      <div style={{ maxWidth: 1640, margin:"0 auto" }}>
        <div style={{
          fontFamily:"Inter", fontSize:13, letterSpacing:".32em", textTransform:"uppercase",
          color:"#C04A2B", fontWeight:500, display:"flex", gap:24, alignItems:"center",
        }}>
          <span style={{ width:32, height:1, background:"#C04A2B" }}/>
          {t.pillars.eyebrow}
        </div>

        <h2 style={{
          margin:"36px 0 0", fontFamily:"'Noto Serif JP', serif", fontWeight:500,
          fontSize:"clamp(48px, 6vw, 88px)", lineHeight:1.1, letterSpacing:"-.01em",
        }}>
          {t.pillars.h}
        </h2>

        {/* 4 pillar grid */}
        <div style={{
          marginTop: isMobile ? 60 : 120, display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap:0,
          borderTop:"1px solid #2B2722",
        }}>
          {t.pillars.items.map((p, i) => (
            <article key={i} style={{
              padding: isMobile ? "40px 0 32px" : "56px 36px 48px 0",
              marginRight: isMobile ? 0 : (i<3 ? 36 : 0),
              borderRight: isMobile ? "none" : (i<3 ? "1px solid #2B2722" : "none"),
              borderBottom: isMobile && i<3 ? "1px solid #2B2722" : "none",
              position:"relative",
            }}>
              <div style={{
                fontFamily:"Inter", fontSize:12, letterSpacing:".24em", textTransform:"uppercase",
                color: i===0 ? "#C04A2B" : "#8A8275", fontWeight:500,
              }}>{p.tag}</div>

              <h3 style={{
                margin:"24px 0 0", fontFamily:"'Noto Serif JP', serif", fontWeight:500,
                fontSize: isMobile ? 28 : 36, color:"#F4F1EA", lineHeight:1.15,
                minHeight: isMobile ? "auto" : 88,
              }}>{p.title}</h3>

              {/* visual */}
              <div style={{ marginTop:32, height:180, position:"relative" }}>
                <PillarVisual idx={i}/>
              </div>

              <p style={{
                marginTop:32, fontFamily:"'Noto Sans JP', Inter, sans-serif", fontSize:15,
                lineHeight:1.7, color:"#C9C2B5",
              }}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarVisual({ idx }) {
  // 4 simple line-art visuals matching each pillar
  if (idx === 0) {
    // route line
    return (
      <svg viewBox="0 0 240 180" style={{ width:"100%", height:"100%" }}>
        <g fill="none" stroke="#2B2722" strokeWidth="1" strokeDasharray="2 6">
          <path d="M 0 40 Q 60 30, 120 50 T 240 40"/>
          <path d="M 0 120 Q 80 140, 160 110 T 240 130"/>
        </g>
        <path d="M 20 50 Q 60 30, 100 80 T 180 130 Q 200 150, 220 130"
              fill="none" stroke="#C04A2B" strokeWidth="2.5" strokeLinecap="round"/>
        <g fill="#F4F1EA" stroke="#C04A2B" strokeWidth="1.8">
          <circle cx="20" cy="50" r="5"/>
          <circle cx="100" cy="80" r="5"/>
          <circle cx="180" cy="130" r="5"/>
          <circle cx="220" cy="130" r="5"/>
        </g>
      </svg>
    );
  }
  if (idx === 1) {
    // camper van
    return (
      <svg viewBox="0 0 240 180" style={{ width:"100%", height:"100%" }}>
        <g stroke="#3A352E" strokeWidth="1.5" fill="none">
          <line x1="0" y1="140" x2="240" y2="140"/>
        </g>
        <g fill="none" stroke="#F4F1EA" strokeWidth="1.5">
          <path d="M 30 140 L 30 90 L 60 70 L 160 70 L 180 100 L 210 100 L 210 140"/>
          <circle cx="60" cy="140" r="14"/>
          <circle cx="180" cy="140" r="14"/>
          <line x1="80" y1="80" x2="80" y2="105"/>
          <line x1="80" y1="105" x2="140" y2="105"/>
          <line x1="140" y1="80" x2="140" y2="105"/>
        </g>
        <g fill="#C04A2B"><circle cx="60" cy="140" r="3"/><circle cx="180" cy="140" r="3"/></g>
        <text x="0" y="170" fontFamily="Inter" fontSize="9" fill="#8A8275" letterSpacing="2">173,000 · 99.7% IDLE</text>
      </svg>
    );
  }
  if (idx === 2) {
    // booking flow
    return (
      <svg viewBox="0 0 240 180" style={{ width:"100%", height:"100%" }}>
        <g stroke="#3A352E" strokeWidth="1" fill="none">
          <line x1="20" y1="90" x2="220" y2="90" strokeDasharray="3 5"/>
        </g>
        <g fill="none" stroke="#F4F1EA" strokeWidth="1.5">
          <circle cx="40" cy="90" r="14"/>
          <circle cx="120" cy="90" r="14"/>
          <circle cx="200" cy="90" r="14"/>
        </g>
        <circle cx="120" cy="90" r="18" fill="none" stroke="#C04A2B" strokeWidth="1.5"/>
        <g fontFamily="Inter" fontSize="9" fill="#8A8275" textAnchor="middle">
          <text x="40" y="124">SELECT</text>
          <text x="120" y="124" fill="#C04A2B">PREPAY</text>
          <text x="200" y="124">DINE</text>
        </g>
        <g fontFamily="Inter" fontSize="10" fill="#F4F1EA" textAnchor="middle" fontWeight="600">
          <text x="40" y="94">01</text>
          <text x="120" y="94">02</text>
          <text x="200" y="94">03</text>
        </g>
      </svg>
    );
  }
  // idx 3 — curated routes (star)
  return (
    <svg viewBox="0 0 240 180" style={{ width:"100%", height:"100%" }}>
      <g fill="none" stroke="#2B2722" strokeWidth="1">
        <path d="M 0 60 Q 80 40, 160 70 T 240 60"/>
        <path d="M 0 110 Q 80 130, 160 110 T 240 130"/>
      </g>
      <g fill="none" stroke="#F4F1EA" strokeWidth="1.5" opacity="0.35">
        <path d="M 20 50 Q 80 80, 140 60 T 220 100"/>
        <path d="M 30 120 Q 110 100, 180 130 T 230 150"/>
      </g>
      <path d="M 20 80 Q 70 60, 120 110 T 220 90"
            fill="none" stroke="#C04A2B" strokeWidth="2.5" strokeLinecap="round"/>
      <g fill="#F4F1EA" stroke="#C04A2B" strokeWidth="1.8">
        <circle cx="20" cy="80" r="5"/>
        <circle cx="120" cy="110" r="5"/>
        <circle cx="220" cy="90" r="5"/>
      </g>
      <g fill="#C04A2B" fontFamily="Inter" fontSize="11" fontWeight="600">
        <text x="0" y="20">★ EDITOR'S PICK</text>
      </g>
    </svg>
  );
}

// =============================================================
// ROUTES — hover preview gallery
// =============================================================
function RoutesSection({ t }) {
  const isMobile = window.useIsMobile();
  const [activeId, setActiveId] = useState_s(t.routes.list[0].id);
  const active = t.routes.list.find(r => r.id === activeId);
  const geom = window.LP_ROUTES_GEOM[activeId];

  return (
    <section id="routes" style={{
      background:"#F4F1EA", color:"#14110E",
      padding: isMobile ? "80px 20px 100px" : "160px 80px 200px",
      position:"relative",
    }}>
      <div style={{ maxWidth: 1640, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:32 }}>
          <div>
            <div style={{
              fontFamily:"Inter", fontSize:13, letterSpacing:".32em", textTransform:"uppercase",
              color:"#C04A2B", fontWeight:500, display:"flex", gap:24, alignItems:"center",
            }}>
              <span style={{ width:32, height:1, background:"#C04A2B" }}/>
              {t.routes.eyebrow}
            </div>
            <h2 style={{
              margin:"36px 0 0", fontFamily:"'Noto Serif JP', serif", fontWeight:500,
              fontSize:"clamp(48px, 6vw, 88px)", lineHeight:1.1, letterSpacing:"-.01em",
            }}>
              {t.routes.h}
            </h2>
          </div>
          <p style={{
            fontFamily:"'Noto Sans JP', Inter, sans-serif", fontSize:17,
            color:"#6C645A", maxWidth:420, lineHeight:1.7,
          }}>{t.routes.sub}</p>
        </div>

        <div style={{
          marginTop: isMobile ? 48 : 96, display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.1fr",
          gap: isMobile ? 40 : 64, alignItems:"stretch",
        }}>
          {/* left — route list */}
          <div style={{ borderTop:"1px solid #D6CDB8" }}>
            {t.routes.list.map((r) => {
              const isActive = r.id === activeId;
              return (
                <button key={r.id}
                  onMouseEnter={()=>setActiveId(r.id)}
                  onFocus={()=>setActiveId(r.id)}
                  onClick={()=>setActiveId(r.id)}
                  style={{
                    width:"100%", display:"flex",
                    flexWrap: isMobile ? "wrap" : "nowrap",
                    alignItems: isMobile ? "flex-start" : "center",
                    gap: isMobile ? 12 : 24,
                    padding: isMobile ? "20px 0" : "28px 0",
                    textAlign:"left", background:"transparent",
                    border:"none", borderBottom:"1px solid #D6CDB8", cursor:"pointer",
                    transition:"padding 280ms cubic-bezier(.65,.05,.36,1), color 280ms",
                    paddingLeft: isActive && !isMobile ? 24 : 0,
                  }}>
                  <span style={{
                    width: isActive ? 32 : 8, height:2, background: isActive ? "#C04A2B" : "#D6CDB8",
                    transition:"width 280ms cubic-bezier(.65,.05,.36,1), background 200ms",
                    flexShrink:0,
                  }}/>
                  <div style={{ flex:1, minWidth: isMobile ? "70%" : "auto" }}>
                    <div style={{
                      fontFamily:"'Noto Serif JP', serif", fontWeight:500,
                      fontSize: isMobile ? 22 : 28,
                      color: isActive ? "#14110E" : "#6C645A", transition:"color 200ms",
                      lineHeight:1.2,
                    }}>{r.name}</div>
                    <div style={{
                      marginTop:6, fontFamily:"Inter", fontSize:12,
                      letterSpacing:".14em", textTransform:"uppercase",
                      color: isActive ? "#C04A2B" : "#8A8275", transition:"color 200ms",
                    }}>
                      {r.by} · {r.region}
                    </div>
                  </div>
                  <div style={{
                    display:"flex",
                    gap: isMobile ? 14 : 24,
                    fontFamily:"Inter", fontSize: isMobile ? 12 : 14,
                    color:"#6C645A",
                    textAlign: isMobile ? "left" : "right",
                    flexBasis: isMobile ? "100%" : "auto",
                    paddingLeft: isMobile ? 0 : 0,
                  }}>
                    <div><b style={{ color:"#14110E", fontWeight:500 }}>{r.days}</b><span style={{ color:"#8A8275", fontSize:11, marginLeft:4 }}>{t.routes.days}</span></div>
                    <div><b style={{ color:"#14110E", fontWeight:500 }}>{r.stops}</b><span style={{ color:"#8A8275", fontSize:11, marginLeft:4 }}>{t.routes.stops}</span></div>
                    <div><b style={{ color:"#14110E", fontWeight:500 }}>{r.followers}</b><span style={{ color:"#8A8275", fontSize:11, marginLeft:4 }}>{t.routes.followers}</span></div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* right — preview map */}
          <div style={{ position:"relative", minHeight: isMobile ? 480 : 600 }}>
            <RoutePreview activeId={activeId} active={active} t={t} isMobile={isMobile}/>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoutePreview({ activeId, active, t, isMobile }) {
  return (
    <div style={{
      position: isMobile ? "relative" : "sticky", top: isMobile ? 0 : 64,
      background:"#0B0A08", color:"#F4F1EA",
      height: isMobile ? 480 : 680,
      overflow:"hidden",
    }}>
      {/* map background */}
      <svg viewBox="0 0 800 680" preserveAspectRatio="xMidYMid slice"
           style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}>
        <g fill="none" stroke="#2B2722" strokeWidth="1">
          {Array.from({length:10}).map((_,i)=>(
            <path key={i} d={`M -20 ${60+i*70} Q 200 ${40+i*70}, 400 ${80+i*70} T 820 ${60+i*70}`}/>
          ))}
        </g>
      </svg>

      {/* route line — keyed by id so it re-animates */}
      <RouteMap key={activeId} points={window.LP_ROUTES_GEOM[activeId].points} width={800} height={680}/>

      {/* overlay info */}
      <div style={{
        position:"absolute",
        left: isMobile ? 20 : 32, top: isMobile ? 20 : 32, right: isMobile ? 20 : 32,
        display:"flex", justifyContent:"space-between", gap: 12,
      }}>
        <div>
          <div style={{ fontFamily:"Inter", fontSize:11, letterSpacing:".24em",
                        textTransform:"uppercase", color:"#C04A2B" }}>★ LIVE PREVIEW</div>
          <div style={{ marginTop:12, fontFamily:"'Noto Serif JP', serif", fontWeight:500,
                        fontSize: isMobile ? 22 : 28, color:"#F4F1EA" }}>{active.name}</div>
          <div style={{ marginTop:6, fontFamily:"Inter", fontSize:12,
                        letterSpacing:".14em", textTransform:"uppercase", color:"rgba(244,241,234,.5)" }}>
            {window.LP_ROUTES_GEOM[activeId].bbox}
          </div>
        </div>
        <div style={{
          padding:"8px 14px", border:"1px solid rgba(244,241,234,.2)",
          color:"#F4F1EA", fontFamily:"Inter", fontSize:11, letterSpacing:".14em", textTransform:"uppercase",
          height:"fit-content",
        }}>★ {active.followers} · Follow →</div>
      </div>

      {/* bottom stats */}
      <div style={{
        position:"absolute",
        left: isMobile ? 20 : 32, bottom: isMobile ? 20 : 32, right: isMobile ? 20 : 32,
        display:"grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: isMobile ? "16px 12px" : 0,
        borderTop:"1px solid #2B2722", paddingTop: isMobile ? 16 : 24,
      }}>
        <div>
          <div style={{ fontFamily:"Inter", fontSize:10, letterSpacing:".24em",
                        textTransform:"uppercase", color:"rgba(244,241,234,.5)" }}>Days</div>
          <div style={{ marginTop:8, fontFamily:"Inter", fontSize: isMobile ? 26 : 36, fontWeight:300,
                        letterSpacing:"-.03em", color:"#F4F1EA" }}>{active.days}</div>
        </div>
        <div>
          <div style={{ fontFamily:"Inter", fontSize:10, letterSpacing:".24em",
                        textTransform:"uppercase", color:"rgba(244,241,234,.5)" }}>Distance</div>
          <div style={{ marginTop:8, fontFamily:"Inter", fontSize: isMobile ? 26 : 36, fontWeight:300,
                        letterSpacing:"-.03em", color:"#F4F1EA" }}>{active.km}<span style={{ fontSize:18, color:"rgba(244,241,234,.5)", marginLeft:4 }}>km</span></div>
        </div>
        <div>
          <div style={{ fontFamily:"Inter", fontSize:10, letterSpacing:".24em",
                        textTransform:"uppercase", color:"rgba(244,241,234,.5)" }}>Stops</div>
          <div style={{ marginTop:8, fontFamily:"Inter", fontSize: isMobile ? 26 : 36, fontWeight:300,
                        letterSpacing:"-.03em", color:"#F4F1EA" }}>{active.stops}</div>
        </div>
        <div>
          <div style={{ fontFamily:"Inter", fontSize:10, letterSpacing:".24em",
                        textTransform:"uppercase", color:"rgba(244,241,234,.5)" }}>{t.routes.followers}</div>
          <div style={{ marginTop:8, fontFamily:"Inter", fontSize: isMobile ? 26 : 36, fontWeight:300,
                        letterSpacing:"-.03em", color:"#C04A2B" }}>{active.followers}</div>
        </div>
      </div>
    </div>
  );
}

function RouteMap({ points, width, height }) {
  const d = window.LP_pointsToPath(points, width, height);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice"
         style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}>
      <path d={d} fill="none" stroke="#C04A2B" strokeWidth="3" strokeLinecap="round" />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]*width/100} cy={p[1]*height/100} r="6"
                fill={i===0 || i===points.length-1 ? "#C04A2B" : "#F4F1EA"}
                stroke="#C04A2B" strokeWidth="2"/>
      ))}
    </svg>
  );
}

// =============================================================
// FOOTER — waitlist + owner CTA + legal
// =============================================================
function FooterSection({ t }) {
  const isMobile = window.useIsMobile();
  return (
    <section id="waitlist" style={{
      background:"#0B0A08", color:"#F4F1EA",
      padding: isMobile ? "100px 20px 60px" : "180px 80px 80px",
      position:"relative", overflow:"hidden",
    }}>
      {/* ambient line */}
      <svg viewBox="0 0 1920 600" preserveAspectRatio="none"
           style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:.6, pointerEvents:"none" }}>
        <defs>
          <linearGradient id="footerLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#C04A2B" stopOpacity="0"/>
            <stop offset=".3" stopColor="#C04A2B" stopOpacity=".8"/>
            <stop offset=".9" stopColor="#F4F1EA" stopOpacity=".4"/>
            <stop offset="1" stopColor="#F4F1EA" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M -50 500 C 280 500, 460 320, 760 280 S 1180 220, 1380 140 S 1820 80, 2000 60"
              fill="none" stroke="url(#footerLine)" strokeWidth="2"/>
      </svg>

      <div style={{ maxWidth: 1640, margin:"0 auto", position:"relative", zIndex:2 }}>
        <div style={{
          fontFamily:"Inter", fontSize:13, letterSpacing:".32em", textTransform:"uppercase",
          color:"#C04A2B", fontWeight:500, display:"flex", gap:24, alignItems:"center",
        }}>
          <span style={{ width:32, height:1, background:"#C04A2B" }}/>
          {t.footer.eyebrow}
        </div>

        <h2 style={{
          margin:"36px 0 0", fontFamily:"'Noto Serif JP', serif", fontWeight:500,
          fontSize:"clamp(56px, 7vw, 120px)", lineHeight:1.05, letterSpacing:"-.02em",
          maxWidth: 1280,
        }}>
          {t.footer.h}
        </h2>

        <div style={{
          marginTop: isMobile ? 48 : 80, display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr",
          gap: isMobile ? 40 : 80, alignItems:"end",
        }}>
          <div>
            <p style={{
              maxWidth: 620, fontFamily:"'Noto Sans JP', Inter, sans-serif",
              fontSize:18, lineHeight:1.75, color:"rgba(244,241,234,.75)",
            }}>{t.footer.sub}</p>

            <div style={{ marginTop:40 }}>
              <WaitlistInline t={{...t, hero:{...t.hero, placeholder:t.footer.placeholder, submit:t.footer.submit}}} dark/>
            </div>
          </div>

          {/* owners card */}
          <a id="owners" href="#owners" style={{
            display:"block", padding:36, background:"rgba(244,241,234,.05)",
            border:"1px solid rgba(244,241,234,.15)", textDecoration:"none", color:"inherit",
            transition:"all 200ms",
          }}>
            <div style={{
              fontFamily:"Inter", fontSize:11, letterSpacing:".24em", textTransform:"uppercase",
              color:"#C04A2B", fontWeight:500,
            }}>FOR OWNERS</div>
            <div style={{
              marginTop:16, fontFamily:"'Noto Serif JP', serif", fontWeight:500,
              fontSize:28, color:"#F4F1EA", lineHeight:1.3,
            }}>{t.footer.ownerCta}</div>
            <div style={{
              marginTop:24, fontFamily:"Inter", fontSize:13, letterSpacing:".14em",
              textTransform:"uppercase", color:"#F4F1EA", display:"flex", alignItems:"center", gap:10,
            }}>
              Learn more <span>→</span>
            </div>
          </a>
        </div>

        {/* bottom — legal */}
        <div style={{
          marginTop: isMobile ? 80 : 140, paddingTop:32, borderTop:"1px solid #2B2722",
          display:"flex", justifyContent:"space-between", alignItems:"flex-end", gap:32, flexWrap:"wrap",
        }}>
          <div>
            <div style={{
              fontFamily:"'Noto Serif JP', serif", fontWeight:500, fontSize:32, color:"#F4F1EA",
              letterSpacing:"-.01em",
            }}>
              Trave<span style={{ position:"relative" }}>line<span style={{
                position:"absolute", left:0, right:-4, bottom:4, height:2, background:"#C04A2B"
              }}/></span>
            </div>
            <div style={{
              marginTop:8, fontFamily:"Inter", fontSize:13, letterSpacing:".08em",
              color:"rgba(244,241,234,.5)",
            }}>{t.footer.tagline}</div>
          </div>
          <div style={{
            fontFamily:"Inter", fontSize:11, letterSpacing:".14em",
            color:"rgba(244,241,234,.4)", textTransform:"uppercase",
          }}>{t.footer.legal}</div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProblemSection, PillarsSection, RoutesSection, FooterSection });
