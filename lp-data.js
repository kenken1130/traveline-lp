// ============================================================
// Traveline LP — i18n strings + curated route data
// ============================================================

window.LP_I18N = {
  en: {
    // ---------- Nav ----------
    nav: {
      manifesto: "Manifesto",
      product:   "Product",
      routes:    "Routes",
      owners:    "For Owners",
      cta:       "Join the waitlist",
    },

    // ---------- Hero ----------
    hero: {
      eyebrow:    "Currently in private alpha",
      tagline:    "Travel is a line,",
      tagline2:   "not a dot.",
      jpKicker:   "旅は、点ではない。線である。",
      sub:        "Traveline is the first platform where the world's road-tripping travelers share the routes they've actually driven. Follow a line that someone real has run — through onsen, mountains, market streets, and the kind of Japan you don't find on a list of stops.",
      placeholder:"your@email.com",
      submit:     "Get early access",
      tinytrust:  "1,240 travelers on the list · No spam, ever",
      submitted:  "You're in. Watch your inbox.",
    },

    // ---------- Problem ----------
    problem: {
      eyebrow: "The insight",
      h:       "Everyone shares the stops.",
      h2:      "We share the journey between them.",
      lead:    "Maps, blogs, review sites — every travel tool today gives you points on a map. The pin, the rating, the photo. But the soul of a trip lives between those pins: the order, the timing, the way one place flows into the next. That's the line nobody is sharing.",
      todayLabel: "Today",
      todayCap:   "Points scattered on a map. You're left to connect them.",
      lineLabel:  "Traveline",
      lineCap:    "A real route someone drove — followable, one tap.",
      dayLabels: ["D1 · Tokyo","D2 · Atami","D3 · Izu","D4 · Hakone","D5 · Kamakura","D6 · Return"],
    },

    // ---------- Pillars ----------
    pillars: {
      eyebrow:  "How it works",
      h:        "Four pillars. One flywheel.",
      items: [
        { tag: "01 · Core",   title: "Route sharing",     body: "Travelers record their road trips with GPS and share them as a route others can follow, tap by tap." },
        { tag: "02",          title: "P2P camper share",  body: "Japan owns 173,000 campervans — 99.7% sit idle. We unlock that fleet through long-term leases with private owners." },
        { tag: "03",          title: "Omakase booking",   body: "Prepay restaurants and onsen in your own language. No phone calls, no day-of cash, no no-shows for the shop." },
        { tag: "04",          title: "Curated routes",    body: "Hand-picked journeys from our editors — for travelers who want a starting line, not a blank map." },
      ],
    },

    // ---------- Routes ----------
    routes: {
      eyebrow: "Lines, not lists",
      h:       "Lines you can follow.",
      sub:     "Each one driven, photographed, and annotated by someone who's been there. Hover or tap to preview.",
      followers: "followers",
      days:      "days",
      stops:     "stops",
      list: [
        { id:"izu",     name:"Mark's Izu Seven",        days:7, stops:14, followers:312, km:412, region:"Izu Peninsula",  by:"Mark · US"   },
        { id:"tohoku",  name:"Yuko's Tohoku Onsen",     days:9, stops:18, followers:228, km:684, region:"Tohoku",         by:"Yuko · JP"   },
        { id:"kyushu",  name:"Alex's Kyushu Volcanos",  days:8, stops:16, followers:194, km:740, region:"Kyushu",         by:"Alex · AU"   },
        { id:"noto",    name:"Anya's Noto Coast",       days:5, stops:11, followers:156, km:328, region:"Noto Peninsula", by:"Anya · DE"   },
      ],
    },

    // ---------- Footer ----------
    footer: {
      eyebrow: "What's next",
      h:       "Be the first line on the map.",
      sub:     "We're onboarding the first 50 travelers and 10 camper owners in Spring 2026. Join the list and we'll reach out when your turn comes up.",
      placeholder: "your@email.com",
      submit:  "Join the waitlist",
      ownerCta:"Own a campervan? Earn ¥6–12万 / month",
      tagline: "Travel is a line, not a dot.",
      legal:   "© 2026 Traveline. Working name — pending trademark review.",
    },
  },

  jp: {
    nav: {
      manifesto: "コンセプト",
      product:   "プロダクト",
      routes:    "ルート",
      owners:    "オーナーの方へ",
      cta:       "ウェイティングリスト",
    },

    hero: {
      eyebrow:    "現在プライベートα版",
      tagline:    "旅は、点ではない。",
      tagline2:   "線である。",
      jpKicker:   "Travel is a line, not a dot.",
      sub:        "Travelineは、世界中の旅人が実際に走った「線」を共有する、はじめてのプラットフォーム。リスト化された観光地ではなく、温泉・山・市場の路地——本物の日本へ続く、誰かが本当に辿った一本の線を、なぞる旅。",
      placeholder:"メールアドレス",
      submit:     "先行登録する",
      tinytrust:  "現在1,240名が登録中 · スパムは送りません",
      submitted:  "登録完了。受信箱でお待ちください。",
    },

    problem: {
      eyebrow: "コア洞察",
      h:       "世界は、点を共有してきた。",
      h2:      "私たちは、線を共有する。",
      lead:    "地図、ブログ、レビューサイト——既存の旅サービスはすべて「点」を提供する。ピン、星評価、写真。けれど旅の本質は、その点と点のあいだにある。順序、タイミング、一つの場所が次の場所へつながっていく流れ。それが、誰も共有していない「線」。",
      todayLabel: "現状",
      todayCap:   "地図に散らばる点。どう繋ぐかは、あなた次第。",
      lineLabel:  "Traveline",
      lineCap:    "誰かが実際に走った線を、ワンタップでなぞる。",
      dayLabels: ["1日目 · 東京","2日目 · 熱海","3日目 · 伊豆","4日目 · 箱根","5日目 · 鎌倉","6日目 · 帰京"],
    },

    pillars: {
      eyebrow:  "サービスの構成",
      h:        "4本の柱が、互いを強化する。",
      items: [
        { tag: "01 · コア",   title: "ルート共有",       body: "旅人がGPSで自動記録した旅を、誰でも辿れる「線」として公開できる。タップひとつで、そのまま自分の旅に。" },
        { tag: "02",          title: "P2Pキャンピングカー", body: "国内17.3万台のうち99.7%が遊休資産。個人オーナーから長期リースで車両を集約する。" },
        { tag: "03",          title: "Omakase予約",      body: "言語不要・当日決済不要で、温泉と店を事前予約。店舗側はノーショーゼロ・売上保証。" },
        { tag: "04",          title: "キュレーションルート", body: "編集部が厳選した、走るに値する線。「白地図」ではなく、最初の起点を渡す。" },
      ],
    },

    routes: {
      eyebrow: "Lines, not lists",
      h:       "辿れる、線。",
      sub:     "実際に走った人が、撮り、書いた一本の線。ホバーまたはタップでプレビュー。",
      followers: "フォロー",
      days:      "日間",
      stops:     "stops",
      list: [
        { id:"izu",     name:"Markの伊豆 七日間",       days:7, stops:14, followers:312, km:412, region:"伊豆半島",     by:"Mark · 米国"   },
        { id:"tohoku",  name:"Yukoの東北 温泉旅",        days:9, stops:18, followers:228, km:684, region:"東北",          by:"Yuko · 日本"   },
        { id:"kyushu",  name:"Alexの九州 火山ルート",     days:8, stops:16, followers:194, km:740, region:"九州",          by:"Alex · 豪州"   },
        { id:"noto",    name:"Anyaの能登海岸線",         days:5, stops:11, followers:156, km:328, region:"能登半島",     by:"Anya · 独国"   },
      ],
    },

    footer: {
      eyebrow: "Next",
      h:       "最初の一本の線に、なってほしい。",
      sub:     "2026年春、最初の旅人50名・オーナー10名を迎えます。リストに登録いただいた方から順にご案内します。",
      placeholder: "メールアドレス",
      submit:  "ウェイティングリストへ",
      ownerCta:"キャンピングカーをお持ちの方 — 月¥6〜12万",
      tagline: "旅は、点ではない。線である。",
      legal:   "© 2026 Traveline. 仮称 — 商標調査中。",
    },
  },
};

// ============================================================
// Map waypoints (used by hero animation + route preview)
// ============================================================
// Each route has a list of [x, y] points in a 0..100 box.
window.LP_ROUTES_GEOM = {
  izu: {
    color: "#C04A2B",
    points: [[10,42],[24,38],[40,46],[58,42],[72,58],[80,72],[68,82],[48,84],[34,72],[22,62]],
    bbox:   "Izu loop · 412 km",
  },
  tohoku: {
    color: "#C04A2B",
    points: [[22,82],[28,68],[38,58],[44,46],[56,38],[68,28],[74,18],[82,12]],
    bbox:   "Tohoku · 684 km",
  },
  kyushu: {
    color: "#C04A2B",
    points: [[16,28],[28,36],[36,50],[30,66],[42,78],[58,72],[68,58],[78,46],[84,32]],
    bbox:   "Kyushu volcanic · 740 km",
  },
  noto: {
    color: "#C04A2B",
    points: [[20,30],[30,22],[44,18],[58,22],[68,32],[72,46],[64,58],[50,62],[36,58]],
    bbox:   "Noto coast · 328 km",
  },
};

// Convert points → smooth SVG path (Catmull-Rom → Bezier)
window.LP_pointsToPath = function(points, w, h) {
  if (!points || points.length === 0) return "";
  const p = points.map(pt => [pt[0] * w / 100, pt[1] * h / 100]);
  if (p.length === 1) return `M ${p[0][0]} ${p[0][1]}`;
  let d = `M ${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i === 0 ? 0 : i - 1];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2 < p.length ? i + 2 : i + 1];
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
};
