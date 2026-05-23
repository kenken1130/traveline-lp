// ============================================================
// Traveline LP — Root App
// ============================================================

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "photo",
  "lang": "en"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const i18n = window.LP_I18N[t.lang] || window.LP_I18N.en;

  const onLangToggle = () => setTweak("lang", t.lang === "en" ? "jp" : "en");

  let Hero;
  if (t.hero === "type")        Hero = window.HeroType;
  else if (t.hero === "split")  Hero = window.HeroSplit;
  else                          Hero = window.HeroPhoto;

  return (
    <React.Fragment>
      <Hero t={i18n} lang={t.lang} onLangToggle={onLangToggle} />
      <window.ProblemSection t={i18n} />
      <window.PillarsSection t={i18n} />
      <window.RoutesSection  t={i18n} />
      <window.FooterSection  t={i18n} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero variation"/>
        <TweakRadio
          label="Style"
          value={t.hero}
          options={[
            { value:"photo", label:"Photo" },
            { value:"type",  label:"Type"  },
            { value:"split", label:"Split" },
          ]}
          onChange={(v)=>setTweak("hero", v)}/>

        <TweakSection label="Language"/>
        <TweakRadio
          label="Display"
          value={t.lang}
          options={[
            { value:"en", label:"English" },
            { value:"jp", label:"日本語" },
          ]}
          onChange={(v)=>setTweak("lang", v)}/>
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
