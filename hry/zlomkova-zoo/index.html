import { useState, useEffect, useCallback, useRef } from "react";

// ─── Shared invariants ────────────────────────────────────────────────────────
const DARK   = "#0E1F2B";
const LIGHT  = "#F7FDFF";
const CORRECT_COLOR = "#22C55E";
const WRONG_COLOR   = "#EF4444";

// Per-environment palettes – tropická paleta 🌴
const ENV_PALETTES = [
  { primary:"#FF5733", secondary:"#FF8C66", soft:"#FFD6CB", bg:"#FFF4F1", muted:"#CC3A1A", hint:"#E02020" }, // 🍕 Koláč       – korálová
  { primary:"#0094C6", secondary:"#00C9F0", soft:"#B3EEF9", bg:"#EDFBFF", muted:"#006F94", hint:"#005F8A" }, // 📏 Osa         – azurová
  { primary:"#8B00CC", secondary:"#CC66FF", soft:"#ECC6FF", bg:"#F9EEFF", muted:"#6600AA", hint:"#AA00EE" }, // ⚖️ Porovnávání – fuchsiová
  { primary:"#00A86B", secondary:"#2DDD99", soft:"#A3F5D8", bg:"#EDFFF7", muted:"#007A4D", hint:"#009955" }, // 🟧 Mřížka      – smaragdová
  { primary:"#FF9900", secondary:"#FFCC00", soft:"#FFF0A3", bg:"#FFFCE8", muted:"#CC7700", hint:"#E68A00" }, // 📐 Pásek       – tropická žlutá
  { primary:"#00B4A0", secondary:"#00E5CC", soft:"#A3F5EE", bg:"#EDFFFE", muted:"#007A6E", hint:"#009985" }, // 🏠 Apartmány   – tyrkys
  { primary:"#FF2D8A", secondary:"#FF70B8", soft:"#FFB8DE", bg:"#FFF0F7", muted:"#CC1A6A", hint:"#E0006A" }, // 🕐 Hodiny      – tropická růžová
  { primary:"#6200EE", secondary:"#9C55FF", soft:"#DDB8FF", bg:"#F4EEFF", muted:"#4A00BB", hint:"#7700CC" }, // 🐠 Skupinka    – elektrická fialová
  { primary:"#0055FF", secondary:"#3390FF", soft:"#AACCFF", bg:"#EEF4FF", muted:"#003DBB", hint:"#0044CC" }, // 🫙 Sklenice    – kobaltová
  { primary:"#FF3333", secondary:"#FF7777", soft:"#FFB8B8", bg:"#FFF0F0", muted:"#CC1111", hint:"#EE0000" }, // 🌡️ Teploměr   – ohnivá
  { primary:"#CC6600", secondary:"#FF9933", soft:"#FFD9A3", bg:"#FFF5E8", muted:"#994D00", hint:"#E07700" }, // 🍳 Recept      – mango
  { primary:"#1A7A4A", secondary:"#2ECC71", soft:"#A9F5C8", bg:"#EDFFF5", muted:"#145C37", hint:"#17A558" }, // 🪜 Schodiště   – lesní zelená
];

// NVC + growth mindset feedback
// Correct: pojmenovává konkrétní akci nebo úsilí, ne osobu
// Wrong: neutrální pozorování + otevřená otázka, bez hodnocení
const FEEDBACK = {
  correct: [
    "Vidím, že sis to pořádně rozmyslel/a. To funguje! 🌱",
    "Tenhle zlomek jsi přečetl/a správně. Postup byl jasný. ✅",
    "Povedlo se ti to najít. Co ti k tomu pomohlo? 🤔",
    "To dalo práci a vyplatilo se. 💛",
    "Zvládl/a jsi to – a to je to, na čem záleží. ✨",
    "Mozek pracoval a výsledek to ukazuje. 🧠",
  ],
  wrong: [
    "Tohle se nepodařilo úplně přesně. Co zkusit jinak? 🔍",
    "Zajímavá volba – co tě k ní vedlo? 🤔",
    "Tenhle zlomek ještě čeká, až ho objevíš. Zkus znovu. 🔄",
    "Chyba je součást cesty. Co vidíš teď jinak? 👀",
    "Ještě ne – ale čím více zkoušíš, tím blíž jsi. 💪",
  ],
};
const getMsg = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ─── Animal reward system – probabilistic, not perfection-based ──────────────
// Zvířátka jsou náhodná – dostaneš je za to, že hraješ, ne za dokonalost.
// Skóre lehce posouvá pravděpodobnost, ale i při nízkém skóre máš šanci.
// Každá hra má ~80% šanci získat NĚJAKÉ zvířátko.
const ANIMALS = [
  { emoji:"🦄", name:"Jednorožec", color:"#C026D3", baseProb: 0.05 },
  { emoji:"🐼", name:"Panda",      color:"#374151", baseProb: 0.10 },
  { emoji:"🦊", name:"Liška",      color:"#EA580C", baseProb: 0.18 },
  { emoji:"🦁", name:"Lev",        color:"#D97706", baseProb: 0.28 },
  { emoji:"🐸", name:"Žabák",      color:"#16A34A", baseProb: 0.42 },
  { emoji:"🐣", name:"Kuřátko",    color:"#CA8A04", baseProb: 0.65 },
];

// Vrátí jedno náhodné zvířátko (nebo null ~20% případů).
// scoreFactor 0..1 mírně zvyšuje pravděpodobnost vzácnějších.
function rollAnimal(score) {
  const sf = score / 10; // 0..1
  // Celková šance získat zvíře ~80 % + malý bonus za skóre
  if (Math.random() > 0.80 + sf * 0.15) return null;

  // Váhovaný los – vyšší skóre trochu posouvá váhy k vzácnějším
  const weights = ANIMALS.map(a => {
    const boost = a.baseProb < 0.3 ? sf * 0.08 : 0; // vzácná zvířata trochu boostujeme
    return Math.max(0.01, a.baseProb + boost);
  });
  const total = weights.reduce((s, w) => s + w, 0);
  let rand = Math.random() * total;
  for (let i = 0; i < ANIMALS.length; i++) {
    rand -= weights[i];
    if (rand <= 0) return { ...ANIMALS[i], count: 1 };
  }
  return { ...ANIMALS[ANIMALS.length - 1], count: 1 };
}

// ─── Shared button ─────────────────────────────────────────────────────────────
function Btn({ disabled, onClick, children, c, outline }) {
  const bg  = outline ? "white"     : (disabled ? "#CBD5E1" : c.primary);
  const col = outline ? c.primary   : "white";
  const bdr = outline ? c.primary   : "transparent";
  return (
    <button onClick={onClick} disabled={disabled} style={{
      background: bg, color: col, border: `2px solid ${bdr}`,
      borderRadius: 30, padding: "11px 32px", fontSize: 15,
      fontFamily: "inherit", fontWeight: 700,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "transform 0.1s",
    }}>
      {children}
    </button>
  );
}

// ─── ENV 1: Koláč ─────────────────────────────────────────────────────────────
function PizzaEnv({ question, onAnswer, c }) {
  const { numerator, denominator } = question;
  const [sel, setSel] = useState([]);
  const [done, setDone] = useState(false);
  useEffect(() => { setSel([]); setDone(false); }, [question]);

  const toggle = (i) => { if (done) return; setSel(p => p.includes(i) ? p.filter(x=>x!==i) : [...p,i]); };
  const submit = () => { if (done) return; setDone(true); onAnswer(sel.length === numerator); };

  const cx=120, cy=120, r=100;
  const path = (i) => {
    const a=360/denominator, s=(i*a-90)*Math.PI/180, e=((i+1)*a-90)*Math.PI/180;
    const x1=cx+r*Math.cos(s),y1=cy+r*Math.sin(s),x2=cx+r*Math.cos(e),y2=cy+r*Math.sin(e);
    return `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${a>180?1:0} 1 ${x2},${y2} Z`;
  };
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:18}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Vybarvi <strong style={{color:c.primary}}>{numerator}/{denominator}</strong> dílu koláče.
      </p>
      <svg width={240} height={240} viewBox="0 0 240 240">
        {Array.from({length:denominator}).map((_,i)=>(
          <path key={i} d={path(i)} fill={sel.includes(i)?c.secondary:c.soft}
            stroke={c.primary} strokeWidth={2} style={{cursor:"pointer",transition:"fill 0.18s"}}
            onClick={()=>toggle(i)} />
        ))}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={c.primary} strokeWidth={3}/>
      </svg>
      <div style={{color:c.muted,fontSize:14}}>Vybráno: <strong>{sel.length}</strong> z {denominator}</div>
      <Btn c={c} disabled={done||sel.length===0} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── ENV 2: Číselná osa ────────────────────────────────────────────────────────
function NumberLineEnv({ question, onAnswer, c }) {
  const { numerator, denominator } = question;
  const [pos, setPos] = useState(0.5);
  const [placed, setPlaced] = useState(false);
  const [done, setDone] = useState(false);
  const [hint, setHint] = useState(false);
  const [result, setResult] = useState(null); // null | true | false
  const svgRef = useRef(null);
  const drag = useRef(false);

  useEffect(() => { setPos(0.5); setPlaced(false); setDone(false); setHint(false); setResult(null); drag.current=false; }, [question]);

  const PAD=40, W=320, H=130, LY=68, TL=W-PAD*2;
  const toX = p => PAD + p*TL;
  const toP = x => Math.max(0,Math.min(1,(x-PAD)/TL));
  const cx  = e => e.touches ? e.touches[0].clientX : e.clientX;

  const onMove = useCallback(e => {
    if (!drag.current||!svgRef.current) return;
    const r=svgRef.current.getBoundingClientRect();
    setPos(toP((cx(e)-r.left)*(W/r.width)));
    setPlaced(true);
  }, []);
  const endDrag = useCallback(()=>{ drag.current=false; },[]);
  useEffect(()=>{
    window.addEventListener("mousemove",onMove);
    window.addEventListener("mouseup",endDrag);
    window.addEventListener("touchmove",onMove,{passive:false});
    window.addEventListener("touchend",endDrag);
    return ()=>{
      window.removeEventListener("mousemove",onMove);
      window.removeEventListener("mouseup",endDrag);
      window.removeEventListener("touchmove",onMove);
      window.removeEventListener("touchend",endDrag);
    };
  },[onMove,endDrag]);

  const hx = toX(pos), cx2 = toX(numerator/denominator);
  const ok = Math.abs(pos - numerator/denominator) <= 0.5/denominator;

  const submit = () => {
    if (done||!placed) return;
    setDone(true); setResult(ok);
    setTimeout(()=>onAnswer(ok),1200);
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Umísti <strong style={{color:c.primary,fontSize:22}}>{numerator}/{denominator}</strong> na číselnou osu.
      </p>
      <div style={{fontSize:12,color:c.muted,background:c.soft,borderRadius:8,padding:"5px 12px",border:`1px solid ${c.secondary}`}}>
        💭 Žádné pomůcky – jen tvoje hlava a osa od 0 do 1
      </div>

      <svg ref={svgRef} width={W} height={H} viewBox={`0 0 ${W} ${H}`}
        style={{overflow:"visible",touchAction:"none",width:"100%",maxWidth:W,cursor:done?"default":"pointer"}}
        onClick={e=>{
          if(done||drag.current) return;
          const r=svgRef.current.getBoundingClientRect();
          setPos(toP((e.clientX-r.left)*(W/r.width))); setPlaced(true);
        }}>
        {/* track bg */}
        <rect x={PAD} y={LY-4} width={TL} height={8} rx={4} fill={c.soft}/>
        {/* filled */}
        <rect x={PAD} y={LY-4} width={Math.max(0,hx-PAD)} height={8} rx={4}
          fill={result===null?c.secondary:result?CORRECT_COLOR:WRONG_COLOR} style={{transition:"fill 0.3s"}}/>
        {/* arrows */}
        <polygon points={`${PAD-4},${LY} ${PAD-14},${LY-6} ${PAD-14},${LY+6}`} fill={DARK}/>
        <polygon points={`${PAD+TL+4},${LY} ${PAD+TL+14},${LY-6} ${PAD+TL+14},${LY+6}`} fill={DARK}/>
        {/* end ticks */}
        {[0,1].map(v=>(
          <g key={v}>
            <line x1={toX(v)} y1={LY-12} x2={toX(v)} y2={LY+12} stroke={DARK} strokeWidth={2.5}/>
            <text x={toX(v)} y={LY+28} textAnchor="middle" fontSize={14} fontWeight="bold" fill={DARK} fontFamily="inherit">{v}</text>
          </g>
        ))}
        {/* hint ticks */}
        {hint && Array.from({length:denominator-1}).map((_,i)=>(
          <line key={i} x1={toX((i+1)/denominator)} y1={LY-7} x2={toX((i+1)/denominator)} y2={LY+7}
            stroke={c.hint} strokeWidth={1.5} strokeDasharray="3,2"/>
        ))}
        {/* correct marker after answer */}
        {result!==null && (
          <g>
            <line x1={cx2} y1={LY-24} x2={cx2} y2={LY+24} stroke={CORRECT_COLOR} strokeWidth={2.5} strokeDasharray="4,3"/>
            <circle cx={cx2} cy={LY-28} r={14} fill={CORRECT_COLOR}/>
            <text x={cx2} y={LY-23} textAnchor="middle" fontSize={11} fill="white" fontFamily="inherit" fontWeight="bold">
              {numerator}/{denominator}
            </text>
          </g>
        )}
        {/* handle */}
        {!done && (
          <g>
            <circle cx={hx} cy={LY} r={18} fill={placed?c.secondary:"#DDD"}
              stroke={placed?c.primary:"#AAA"} strokeWidth={3}
              style={{cursor:"grab",filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.2))",transition:"fill 0.2s"}}
              onMouseDown={e=>{if(!done){drag.current=true;e.preventDefault();}}}
              onTouchStart={e=>{if(!done){drag.current=true;e.preventDefault();}}}/>
            <text x={hx} y={LY+6} textAnchor="middle" fontSize={18} fill={placed?DARK:"#AAA"}
              fontFamily="inherit" fontWeight="bold" style={{pointerEvents:"none"}}>
              {placed?"•":"?"}
            </text>
          </g>
        )}
        {done && <circle cx={hx} cy={LY} r={18} fill={result?CORRECT_COLOR:WRONG_COLOR} stroke="white" strokeWidth={3}
          style={{filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.2))"}}/>}
        {/* error arrow */}
        {result===false && (
          <text x={(hx+cx2)/2} y={LY+46} textAnchor="middle" fontSize={11} fill={WRONG_COLOR} fontFamily="inherit">
            ← správná poloha
          </text>
        )}
      </svg>

      <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
        {!done && (
          <button onClick={()=>setHint(h=>!h)} style={{
            background:hint?c.hint:"white", color:hint?"white":c.hint,
            border:`2px solid ${c.hint}`, borderRadius:20, padding:"8px 16px",
            fontSize:13, fontFamily:"inherit", cursor:"pointer"}}>
            {hint?"🔍 Skrýt":"💡 Nápověda"}
          </button>
        )}
        <Btn c={c} disabled={done||!placed} onClick={submit}>Zkontrolovat ✓</Btn>
      </div>
      {!placed && <div style={{fontSize:12,color:c.muted}}>Táhni kolečko nebo klikni na osu</div>}
    </div>
  );
}

// ─── ENV 3: Porovnávání ────────────────────────────────────────────────────────
function CompareEnv({ question, onAnswer, c }) {
  const { fractionA, fractionB } = question;
  const [pick, setPick] = useState(null);
  const [done, setDone] = useState(false);
  useEffect(()=>{ setPick(null); setDone(false); }, [question]);

  const vA=fractionA[0]/fractionA[1], vB=fractionB[0]/fractionB[1];
  const correct = vA>vB?">":vA<vB?"<":"=";
  const submit = ()=>{ if(done||!pick) return; setDone(true); onAnswer(pick===correct); };

  const Bar = ({frac, color}) => (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:6}}>
      <div style={{fontSize:24,fontWeight:800,color:DARK}}>{frac[0]}/{frac[1]}</div>
      <div style={{width:56,height:130,background:c.soft,borderRadius:8,border:`2px solid ${c.secondary}`,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",bottom:0,width:"100%",height:`${(frac[0]/frac[1])*100}%`,background:color,transition:"height 0.5s"}}/>
      </div>
    </div>
  );
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:20}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>Doplň správné znaménko mezi zlomky.</p>
      <div style={{display:"flex",gap:20,alignItems:"center"}}>
        <Bar frac={fractionA} color={c.primary}/>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {[">","=","<"].map(sym=>(
            <button key={sym} onClick={()=>!done&&setPick(sym)} style={{
              width:48,height:48,borderRadius:"50%",
              border:`2.5px solid ${pick===sym?c.primary:c.soft}`,
              background:pick===sym?c.secondary:"white",
              color:DARK,fontSize:22,fontWeight:"bold",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}>
              {sym}
            </button>
          ))}
        </div>
        <Bar frac={fractionB} color={c.secondary}/>
      </div>
      <Btn c={c} disabled={done||!pick} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── ENV 4: Čtvercová síť ──────────────────────────────────────────────────────
function GridEnv({ question, onAnswer, c }) {
  const { rows, cols, numerator, denominator } = question;
  const total=rows*cols;
  const [sel, setSel] = useState(new Set());
  const [done, setDone] = useState(false);
  useEffect(()=>{ setSel(new Set()); setDone(false); }, [question]);
  const toggle = i=>{ if(done) return; setSel(p=>{ const n=new Set(p); n.has(i)?n.delete(i):n.add(i); return n; }); };
  const submit = ()=>{ if(done) return; setDone(true); onAnswer(sel.size===numerator); };
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:18}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Vybarvi <strong style={{color:c.primary}}>{numerator}/{denominator}</strong> políček.
      </p>
      <div style={{display:"grid",gridTemplateColumns:`repeat(${cols},44px)`,gap:4}}>
        {Array.from({length:total}).map((_,i)=>(
          <div key={i} onClick={()=>toggle(i)} style={{
            width:44,height:44,borderRadius:7,
            background:sel.has(i)?c.secondary:c.soft,
            border:`2px solid ${sel.has(i)?c.primary:c.secondary}`,
            cursor:"pointer",transition:"all 0.15s"}}/>
        ))}
      </div>
      <div style={{color:c.muted,fontSize:14}}>Vybráno: <strong>{sel.size}</strong> z {total}</div>
      <Btn c={c} disabled={done||sel.size===0} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── ENV 5: Pásek ─────────────────────────────────────────────────────────────
function PasekEnv({ question, onAnswer, c }) {
  const { numerator, denominator } = question;
  const [sel, setSel] = useState(new Set());
  const [done, setDone] = useState(false);
  useEffect(()=>{ setSel(new Set()); setDone(false); }, [question]);
  const toggle = i=>{ if(done) return; setSel(p=>{ const n=new Set(p); n.has(i)?n.delete(i):n.add(i); return n; }); };
  const submit = ()=>{ if(done) return; setDone(true); onAnswer(sel.size===numerator); };
  const W=300,H=70,sw=W/denominator;
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:18}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Vybarvi <strong style={{color:c.primary}}>{numerator}/{denominator}</strong> pásku.
      </p>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{cursor:"pointer"}}>
        {Array.from({length:denominator}).map((_,i)=>(
          <g key={i} onClick={()=>toggle(i)}>
            <rect x={i*sw} y={8} width={sw} height={H-16}
              fill={sel.has(i)?c.secondary:c.soft} style={{transition:"fill 0.18s"}}/>
            <rect x={i*sw} y={8} width={sw} height={H-16}
              fill="none" stroke={c.primary} strokeWidth={1.5} style={{pointerEvents:"none"}}/>
            {denominator<=10 && (
              <text x={i*sw+sw/2} y={H/2+5} textAnchor="middle" fontSize={11}
                fill={sel.has(i)?DARK:c.muted} fontFamily="inherit" style={{pointerEvents:"none"}}>
                {i+1}
              </text>
            )}
          </g>
        ))}
        <rect x={0} y={8} width={W} height={H-16} rx={8} fill="none" stroke={c.primary} strokeWidth={2.5}/>
      </svg>
      <div style={{color:c.muted,fontSize:14}}>Vybráno: <strong>{sel.size}</strong> z {denominator}</div>
      <Btn c={c} disabled={done||sel.size===0} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── ENV 6: Apartmány ─────────────────────────────────────────────────────────
function ApartmanyEnv({ question, onAnswer, c }) {
  const { numerator, denominator, floors, flatsPerFloor } = question;
  const total=floors*flatsPerFloor;
  const [sel, setSel] = useState(new Set());
  const [done, setDone] = useState(false);
  useEffect(()=>{ setSel(new Set()); setDone(false); }, [question]);
  const toggle = i=>{ if(done) return; setSel(p=>{ const n=new Set(p); n.has(i)?n.delete(i):n.add(i); return n; }); };
  const submit = ()=>{ if(done) return; setDone(true); onAnswer(sel.size===numerator); };
  const cw=56,ch=48,g=5, bW=flatsPerFloor*(cw+g)+g, bH=floors*(ch+g)+g+32;
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:18}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Vybarvi <strong style={{color:c.primary}}>{numerator}/{denominator}</strong> bytů v domě.
      </p>
      <svg width={bW} height={bH} viewBox={`0 0 ${bW} ${bH}`}>
        <polygon points={`${bW/2},2 ${bW-6},30 6,30`} fill={c.primary}/>
        <rect x={0} y={27} width={bW} height={bH-27} fill={c.soft} rx={5}/>
        {Array.from({length:floors}).map((_,row)=>
          Array.from({length:flatsPerFloor}).map((_,col)=>{
            const idx=row*flatsPerFloor+col;
            const x=g+col*(cw+g), y=32+g+row*(ch+g), on=sel.has(idx);
            return (
              <g key={idx} onClick={()=>toggle(idx)} style={{cursor:"pointer"}}>
                <rect x={x} y={y} width={cw} height={ch} rx={4}
                  fill={on?c.secondary:"white"} stroke={on?c.primary:c.soft}
                  strokeWidth={on?2:1.5} style={{transition:"fill 0.15s"}}/>
                <rect x={x+8}  y={y+7} width={13} height={16} rx={2} fill={on?c.primary:c.secondary} style={{pointerEvents:"none"}}/>
                <rect x={x+35} y={y+7} width={13} height={16} rx={2} fill={on?c.primary:c.secondary} style={{pointerEvents:"none"}}/>
                {row===floors-1 && <rect x={x+19} y={y+28} width={18} height={16} rx={2} fill={on?DARK:c.muted} style={{pointerEvents:"none"}}/>}
              </g>
            );
          })
        )}
      </svg>
      <div style={{color:c.muted,fontSize:14}}>Vybráno: <strong>{sel.size}</strong> z {total}</div>
      <Btn c={c} disabled={done||sel.size===0} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── ENV 7: Hodiny ────────────────────────────────────────────────────────────
function HodinyEnv({ question, onAnswer, c }) {
  const { numerator, denominator } = question;
  const [sel, setSel] = useState([]);
  const [done, setDone] = useState(false);
  useEffect(()=>{ setSel([]); setDone(false); }, [question]);
  const toggle = i=>{ if(done) return; setSel(p=>p.includes(i)?p.filter(x=>x!==i):[...p,i]); };
  const submit = ()=>{ if(done) return; setDone(true); onAnswer(sel.length===numerator); };
  const cx=130,cy=130,r=95, sa=360/denominator;
  const path = i=>{ const s=(i*sa-90)*Math.PI/180,e=((i+1)*sa-90)*Math.PI/180;
    const x1=cx+r*Math.cos(s),y1=cy+r*Math.sin(s),x2=cx+r*Math.cos(e),y2=cy+r*Math.sin(e);
    return `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${sa>180?1:0} 1 ${x2},${y2} Z`; };
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:18}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Vybarvi <strong style={{color:c.primary}}>{numerator}/{denominator}</strong> ciferníku.
      </p>
      <svg width={260} height={260} viewBox="0 0 260 260">
        <circle cx={cx} cy={cy} r={118} fill="white" stroke="#DDD" strokeWidth={1.5}/>
        {Array.from({length:denominator}).map((_,i)=>(
          <path key={i} d={path(i)} fill={sel.includes(i)?c.secondary:c.soft}
            stroke="white" strokeWidth={2} style={{cursor:"pointer",transition:"fill 0.18s"}}
            onClick={()=>toggle(i)}/>
        ))}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={c.primary} strokeWidth={3}/>
        {Array.from({length:12}).map((_,i)=>{
          const a=(i*30-90)*Math.PI/180,r1=100,r2=i%3===0?110:104;
          return (
            <g key={i}>
              <line x1={cx+r1*Math.cos(a)} y1={cy+r1*Math.sin(a)}
                    x2={cx+r2*Math.cos(a)} y2={cy+r2*Math.sin(a)}
                    stroke={c.muted} strokeWidth={i%3===0?2.5:1.5}/>
              {i%3===0 && <text x={cx+118*Math.cos(a)} y={cy+118*Math.sin(a)+4}
                textAnchor="middle" fontSize={11} fill={c.muted} fontFamily="inherit">
                {i===0?12:i}
              </text>}
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r={8} fill={c.primary}/>
      </svg>
      <div style={{color:c.muted,fontSize:14}}>Vybráno: <strong>{sel.length}</strong> z {denominator}</div>
      <Btn c={c} disabled={done||sel.length===0} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── ENV 8: Skupinka objektů (diskrétní model) ────────────────────────────────
// Klíčový pro Hejného – dítě vybírá z konkrétních předmětů, ne z plochy
const SKUPINKA_ICONS = ["🍎","🍋","🐟","⭐","🌸","🎈","🦋","🍄","🐠","🌻"];
function SkupinkaEnv({ question, onAnswer, c }) {
  const { numerator, denominator, icon } = question;
  const [sel, setSel] = useState(new Set());
  const [done, setDone] = useState(false);
  useEffect(()=>{ setSel(new Set()); setDone(false); }, [question]);
  const toggle = i=>{ if(done) return; setSel(p=>{ const n=new Set(p); n.has(i)?n.delete(i):n.add(i); return n; }); };
  const submit = ()=>{ if(done) return; setDone(true); onAnswer(sel.size===numerator); };
  // lay out in rows of up to 5
  const cols = Math.min(denominator, 5);
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:18}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Vyber <strong style={{color:c.primary}}>{numerator}/{denominator}</strong> z těchto předmětů.
      </p>
      <div style={{display:"grid",gridTemplateColumns:`repeat(${cols},52px)`,gap:8}}>
        {Array.from({length:denominator}).map((_,i)=>(
          <button key={i} onClick={()=>toggle(i)} style={{
            width:52,height:52,borderRadius:12,fontSize:26,
            background:sel.has(i)?c.secondary:c.soft,
            border:`2.5px solid ${sel.has(i)?c.primary:c.secondary}`,
            cursor:"pointer",transition:"all 0.15s",
            transform:sel.has(i)?"scale(1.12)":"scale(1)",
            boxShadow:sel.has(i)?`0 3px 10px ${c.soft}`:"none",
          }}>{icon}</button>
        ))}
      </div>
      <div style={{color:c.muted,fontSize:14}}>Vybráno: <strong>{sel.size}</strong> z {denominator}</div>
      <Btn c={c} disabled={done||sel.size===0} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── ENV 9: Sklenice ──────────────────────────────────────────────────────────
function SkleniceEnv({ question, onAnswer, c }) {
  const { numerator, denominator } = question;
  // drag to fill – continuous like number line
  const [fillLevel, setFillLevel] = useState(0); // 0..1
  const [placed, setPlaced] = useState(false);
  const [done, setDone] = useState(false);
  const [result, setResult] = useState(null);
  const svgRef = useRef(null);
  const drag = useRef(false);

  useEffect(()=>{ setFillLevel(0); setPlaced(false); setDone(false); setResult(null); drag.current=false; }, [question]);

  const W=160, H=220, BOTT=30, TOP=20, innerH=H-BOTT-TOP;
  const correctFill = numerator/denominator;
  const tolerance = 0.5/denominator;

  const svgYToFill = y => Math.max(0,Math.min(1,(H-BOTT-y)/innerH));
  const fillToSvgY = f => H-BOTT-f*innerH;

  const getClientY = e => e.touches?e.touches[0].clientY:e.clientY;

  const onMove = useCallback(e=>{
    if(!drag.current||!svgRef.current) return;
    const r=svgRef.current.getBoundingClientRect();
    const y=(getClientY(e)-r.top)*(H/r.height);
    setFillLevel(svgYToFill(y)); setPlaced(true);
  },[]);
  const endDrag = useCallback(()=>{ drag.current=false; },[]);
  useEffect(()=>{
    window.addEventListener("mousemove",onMove);
    window.addEventListener("mouseup",endDrag);
    window.addEventListener("touchmove",onMove,{passive:false});
    window.addEventListener("touchend",endDrag);
    return ()=>{
      window.removeEventListener("mousemove",onMove);
      window.removeEventListener("mouseup",endDrag);
      window.removeEventListener("touchmove",onMove);
      window.removeEventListener("touchend",endDrag);
    };
  },[onMove,endDrag]);

  const ok = Math.abs(fillLevel-correctFill)<=tolerance;
  const submit = ()=>{ if(done||!placed) return; setDone(true); setResult(ok); setTimeout(()=>onAnswer(ok),900); };

  const waterY = fillToSvgY(fillLevel);
  const correctY = fillToSvgY(correctFill);
  // tick marks on the side
  const ticks = Array.from({length:denominator+1},(_,i)=>({i, y:fillToSvgY(i/denominator), label:i===0?"0":i===denominator?"1":`${i}/${denominator}`}));

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:16}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Naplň sklenici na <strong style={{color:c.primary}}>{numerator}/{denominator}</strong>.
      </p>
      <div style={{display:"flex",gap:16,alignItems:"center"}}>
        <svg ref={svgRef} width={W} height={H} viewBox={`0 0 ${W} ${H}`}
          style={{overflow:"visible",touchAction:"none",cursor:done?"default":"ns-resize"}}
          onClick={e=>{
            if(done||drag.current) return;
            const r=svgRef.current.getBoundingClientRect();
            const y=(e.clientY-r.top)*(H/r.height);
            setFillLevel(svgYToFill(y)); setPlaced(true);
          }}>
          {/* Glass outline */}
          <path d={`M30,${TOP} L20,${H-BOTT} Q${W/2},${H-5} ${W-20},${H-BOTT} L${W-30},${TOP} Z`}
            fill="none" stroke={c.primary} strokeWidth={3} strokeLinejoin="round"/>
          {/* Water fill */}
          <clipPath id="glassClip">
            <path d={`M30,${TOP} L20,${H-BOTT} Q${W/2},${H-5} ${W-20},${H-BOTT} L${W-30},${TOP} Z`}/>
          </clipPath>
          <rect x={0} y={waterY} width={W} height={H} clipPath="url(#glassClip)"
            fill={result===null?c.secondary:result?CORRECT_COLOR:WRONG_COLOR}
            style={{transition:drag.current?"none":"fill 0.3s"}} opacity={0.7}/>
          {/* Correct level after answer */}
          {result!==null && (
            <line x1={15} y1={correctY} x2={W-15} y2={correctY}
              stroke={CORRECT_COLOR} strokeWidth={2.5} strokeDasharray="5,3"/>
          )}
          {/* Drag handle */}
          {!done && (
            <g style={{cursor:"ns-resize"}}
               onMouseDown={e=>{drag.current=true;e.preventDefault();}}
               onTouchStart={e=>{drag.current=true;e.preventDefault();}}>
              <line x1={25} y1={waterY} x2={W-25} y2={waterY} stroke={c.primary} strokeWidth={3}/>
              <circle cx={W/2} cy={waterY} r={10} fill={placed?c.primary:"#CCC"} stroke="white" strokeWidth={2}/>
            </g>
          )}
          {/* Bubble label */}
          {placed && !done && (
            <g>
              <rect x={W/2-22} y={waterY-36} width={44} height={22} rx={6} fill={c.primary}/>
              <polygon points={`${W/2-5},${waterY-14} ${W/2+5},${waterY-14} ${W/2},${waterY-8}`} fill={c.primary}/>
              <text x={W/2} y={waterY-21} textAnchor="middle" fontSize={11} fill="white" fontFamily="inherit" fontWeight="bold">
                {Math.round(fillLevel*denominator)}/{denominator}
              </text>
            </g>
          )}
        </svg>
        {/* Scale on the right */}
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:H-BOTT-TOP,paddingTop:TOP}}>
          {ticks.filter(t=>t.i===0||t.i===denominator).map(t=>(
            <div key={t.i} style={{fontSize:12,color:c.muted,fontWeight:700,lineHeight:1}}>{t.label}</div>
          ))}
        </div>
      </div>
      <div style={{fontSize:12,color:c.muted}}>Táhni nebo klikni na sklenici</div>
      <Btn c={c} disabled={done||!placed} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── ENV 10: Teploměr ─────────────────────────────────────────────────────────
function TeplotaEnv({ question, onAnswer, c }) {
  const { numerator, denominator } = question;
  const [fillLevel, setFillLevel] = useState(0);
  const [placed, setPlaced] = useState(false);
  const [done, setDone] = useState(false);
  const [result, setResult] = useState(null);
  const svgRef = useRef(null);
  const drag = useRef(false);

  useEffect(()=>{ setFillLevel(0); setPlaced(false); setDone(false); setResult(null); drag.current=false; }, [question]);

  const W=80, H=260, BULB=24, TPAD=20, trackH=H-BULB*2-TPAD;
  const correctFill = numerator/denominator;
  const tolerance = 0.5/denominator;

  const svgYToFill = y => Math.max(0,Math.min(1,(H-BULB-y)/trackH));
  const fillToSvgY = f => H-BULB-f*trackH;

  const getClientY = e => e.touches?e.touches[0].clientY:e.clientY;
  const onMove = useCallback(e=>{
    if(!drag.current||!svgRef.current) return;
    const r=svgRef.current.getBoundingClientRect();
    setFillLevel(svgYToFill((getClientY(e)-r.top)*(H/r.height)));
    setPlaced(true);
  },[]);
  const endDrag = useCallback(()=>{ drag.current=false; },[]);
  useEffect(()=>{
    window.addEventListener("mousemove",onMove); window.addEventListener("mouseup",endDrag);
    window.addEventListener("touchmove",onMove,{passive:false}); window.addEventListener("touchend",endDrag);
    return ()=>{ window.removeEventListener("mousemove",onMove); window.removeEventListener("mouseup",endDrag);
      window.removeEventListener("touchmove",onMove); window.removeEventListener("touchend",endDrag); };
  },[onMove,endDrag]);

  const ok = Math.abs(fillLevel-correctFill)<=tolerance;
  const submit = ()=>{ if(done||!placed) return; setDone(true); setResult(ok); setTimeout(()=>onAnswer(ok),900); };

  const CX=W/2, TW=18;
  const merY = fillToSvgY(fillLevel);
  const correctY = fillToSvgY(correctFill);
  const merColor = result===null?c.secondary:result?CORRECT_COLOR:WRONG_COLOR;

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Nastav teploměr na <strong style={{color:c.primary}}>{numerator}/{denominator}</strong>.
      </p>
      <div style={{display:"flex",gap:10,alignItems:"flex-start"}}>
        <svg ref={svgRef} width={W} height={H} viewBox={`0 0 ${W} ${H}`}
          style={{overflow:"visible",touchAction:"none",cursor:done?"default":"ns-resize"}}
          onClick={e=>{
            if(done||drag.current) return;
            const r=svgRef.current.getBoundingClientRect();
            setFillLevel(svgYToFill((e.clientY-r.top)*(H/r.height))); setPlaced(true);
          }}>
          {/* Track background */}
          <rect x={CX-TW/2} y={TPAD} width={TW} height={trackH+BULB} rx={TW/2} fill={c.soft}/>
          {/* Mercury fill */}
          <clipPath id="thermClip"><rect x={CX-TW/2} y={TPAD} width={TW} height={trackH+BULB} rx={TW/2}/></clipPath>
          <rect x={CX-TW/2} y={merY} width={TW} height={H} clipPath="url(#thermClip)"
            fill={merColor} style={{transition:drag.current?"none":"fill 0.3s"}}/>
          {/* Bulb */}
          <circle cx={CX} cy={H-BULB} r={BULB} fill={merColor} style={{transition:"fill 0.3s"}}/>
          <circle cx={CX} cy={H-BULB} r={BULB} fill="none" stroke={c.primary} strokeWidth={2.5}/>
          {/* Track outline */}
          <rect x={CX-TW/2} y={TPAD} width={TW} height={trackH} rx={TW/2} fill="none" stroke={c.primary} strokeWidth={2.5}/>
          {/* Tick marks */}
          {Array.from({length:denominator+1}).map((_,i)=>{
            const y=fillToSvgY(i/denominator), isEnd=i===0||i===denominator;
            return (
              <g key={i}>
                <line x1={CX+TW/2} y1={y} x2={CX+TW/2+( isEnd?10:6)} y2={y}
                  stroke={isEnd?c.primary:c.muted} strokeWidth={isEnd?2:1.5}/>
                {isEnd && <text x={CX+TW/2+14} y={y+4} fontSize={12} fontWeight="bold" fill={c.primary} fontFamily="inherit">
                  {i===0?"0":"1"}
                </text>}
              </g>
            );
          })}
          {/* Correct marker */}
          {result!==null && <line x1={CX-TW/2-4} y1={correctY} x2={CX+TW/2+4} y2={correctY}
            stroke={CORRECT_COLOR} strokeWidth={2.5} strokeDasharray="4,2"/>}
          {/* Drag handle */}
          {!done && <circle cx={CX} cy={merY} r={10} fill={placed?c.primary:"#CCC"} stroke="white" strokeWidth={2.5}
            style={{cursor:"ns-resize"}}
            onMouseDown={e=>{drag.current=true;e.preventDefault();}}
            onTouchStart={e=>{drag.current=true;e.preventDefault();}}/>}
        </svg>
        {/* Fraction label */}
        <div style={{paddingTop:TPAD,fontSize:13,color:c.muted,width:60}}>
          {placed&&!done&&<div style={{background:c.primary,color:"white",borderRadius:8,padding:"3px 7px",fontSize:12,fontWeight:700,textAlign:"center"}}>
            {Math.round(fillLevel*denominator)}/{denominator}
          </div>}
        </div>
      </div>
      <div style={{fontSize:12,color:c.muted}}>Táhni rtuť nebo klikni na teploměr</div>
      <Btn c={c} disabled={done||!placed} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── ENV 11: Recept ───────────────────────────────────────────────────────────
const RECIPE_ITEMS = [
  { label:"mouky",   emoji:"🌾", unitGen:"hrnků",   unitSg:"hrnek"  },
  { label:"cukru",   emoji:"🍬", unitGen:"lžic",    unitSg:"lžíce"  },
  { label:"másla",   emoji:"🧈", unitGen:"kostek",  unitSg:"kostka" },
  { label:"vajec",   emoji:"🥚", unitGen:"kusů",    unitSg:"kus"    },
  { label:"mléka",   emoji:"🥛", unitGen:"dcl",     unitSg:"dcl"    },
  { label:"kakaa",   emoji:"🍫", unitGen:"lžiček",  unitSg:"lžička" },
];
function ReceptEnv({ question, onAnswer, c }) {
  const { numerator, denominator, ingredient, totalScoops } = question;
  // totalScoops = denominator – how many spoon-clicks make the full amount
  // child must click exactly numerator scoops
  const [sel, setSel] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(()=>{ setSel(0); setDone(false); }, [question]);
  const add = ()=>{ if(done||sel>=denominator) return; setSel(s=>s+1); };
  const remove = ()=>{ if(done||sel<=0) return; setSel(s=>s-1); };
  const submit = ()=>{ if(done) return; setDone(true); onAnswer(sel===numerator); };

  const pct = sel / denominator;
  const W = 220, H = 160;
  // Bowl geometry
  const bL = 18, bR = W - 18, bTop = 18, bBot = H - 18;
  const bW = bR - bL, bH = bBot - bTop;
  // Bowl shape as path: flat rim at top, rounded bottom
  const bowlPath = `M${bL},${bTop} L${bR},${bTop} Q${bR+8},${bTop+bH*0.4} ${(bL+bR)/2},${bBot} Q${bL-8},${bTop+bH*0.4} ${bL},${bTop} Z`;
  // Fill rises from bottom: fillY is top of the fill rect
  const fillY = bTop + bH * (1 - pct);

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:18}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Odměř <strong style={{color:c.primary}}>{numerator}/{denominator}</strong> {ingredient.unitGen} {ingredient.label} {ingredient.emoji} do mísy.
      </p>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <clipPath id="bowlClip2">
            <path d={bowlPath}/>
          </clipPath>
        </defs>
        {/* Bowl background */}
        <path d={bowlPath} fill={c.soft}/>
        {/* Fill – rect from fillY to bottom, clipped to bowl shape */}
        <rect x={0} y={fillY} width={W} height={H - fillY}
          fill={c.secondary} clipPath="url(#bowlClip2)"
          style={{transition:"y 0.25s, height 0.25s"}}/>
        {/* Bowl outline on top */}
        <path d={bowlPath} fill="none" stroke={c.primary} strokeWidth={3} strokeLinejoin="round"/>
        {/* Ingredient emoji centered, always visible */}
        <text x={W/2} y={bTop + bH*0.52 + 8} textAnchor="middle" fontSize={26}
          fontFamily="inherit" style={{pointerEvents:"none"}}>{ingredient.emoji}</text>
        {/* Counter */}
        <text x={W/2} y={bTop + bH*0.82} textAnchor="middle" fontSize={14}
          fontWeight="bold" fill={pct > 0.6 ? "white" : c.primary} fontFamily="inherit">
          {sel}/{denominator}
        </text>
      </svg>
      {/* Stepper */}
      <div style={{display:"flex",gap:16,alignItems:"center"}}>
        <button onClick={remove} disabled={done||sel<=0} style={{
          width:44,height:44,borderRadius:"50%",fontSize:22,fontWeight:"bold",
          background:sel>0?c.secondary:c.soft, color:DARK, border:`2px solid ${c.primary}`,
          cursor:sel>0&&!done?"pointer":"not-allowed",fontFamily:"inherit"}}>−</button>
        <div style={{fontSize:28,minWidth:60,textAlign:"center",fontWeight:800,color:c.primary}}>
          {Array.from({length:denominator}).map((_,i)=>(
            <span key={i} style={{fontSize:20,opacity:i<sel?1:0.25}}>{ingredient.emoji}</span>
          ))}
        </div>
        <button onClick={add} disabled={done||sel>=denominator} style={{
          width:44,height:44,borderRadius:"50%",fontSize:22,fontWeight:"bold",
          background:sel<denominator?c.secondary:c.soft, color:DARK, border:`2px solid ${c.primary}`,
          cursor:sel<denominator&&!done?"pointer":"not-allowed",fontFamily:"inherit"}}>+</button>
      </div>
      <Btn c={c} disabled={done||sel===0} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── ENV 12: Schodiště ───────────────────────────────────────────────────────
function SchodisteEnv({ question, onAnswer, c }) {
  const { numerator, denominator } = question;
  const [sel, setSel] = useState(new Set());
  const [done, setDone] = useState(false);
  useEffect(()=>{ setSel(new Set()); setDone(false); }, [question]);

  const toggle = i => {
    if (done) return;
    setSel(p => { const n = new Set(p); n.has(i) ? n.delete(i) : n.add(i); return n; });
  };
  const submit = () => { if (done) return; setDone(true); onAnswer(sel.size === numerator); };

  // Staircase geometry – each step i (0=bottom, denominator-1=top)
  // step i has x = i * stepW, y = totalH - (i+1)*stepH, width = stepW*(denominator-i), height = stepH
  const SVG_W = 280, SVG_H = 200;
  const STEPS = denominator;
  const stepH = Math.min(36, Math.floor((SVG_H - 20) / STEPS));
  const stepW = Math.min(40, Math.floor((SVG_W - 20) / STEPS));
  const baseX = 10;
  const baseY = SVG_H - 10;

  // step 0 = bottom (1st step), step STEPS-1 = top
  const stepRect = i => ({
    x: baseX + i * stepW,
    y: baseY - (i + 1) * stepH,
    w: (STEPS - i) * stepW,
    h: stepH,
  });

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:18}}>
      <p style={{fontSize:18,color:c.muted,textAlign:"center",margin:0}}>
        Označ <strong style={{color:c.primary}}>{numerator}/{denominator}</strong> schodů schodiště.
      </p>
      <svg width={SVG_W} height={SVG_H} viewBox={`0 0 ${SVG_W} ${SVG_H}`} style={{cursor:"pointer"}}>
        {/* Ground line */}
        <line x1={baseX} y1={baseY} x2={baseX + STEPS*stepW + 10} y2={baseY}
          stroke={c.muted} strokeWidth={2}/>
        {Array.from({length:STEPS}).map((_,i)=>{
          const {x,y,w,h} = stepRect(i);
          const on = sel.has(i);
          return (
            <g key={i} onClick={()=>toggle(i)} style={{cursor:"pointer"}}>
              {/* Step tread (horizontal face) */}
              <rect x={x} y={y} width={w} height={h}
                fill={on ? c.secondary : c.soft}
                stroke={c.primary} strokeWidth={1.5}
                style={{transition:"fill 0.15s"}}/>
              {/* Step number */}
              <text x={x + w/2} y={y + h/2 + 5} textAnchor="middle"
                fontSize={Math.min(12, h*0.55)} fill={on ? DARK : c.muted}
                fontFamily="inherit" fontWeight="bold" style={{pointerEvents:"none"}}>
                {i+1}
              </text>
            </g>
          );
        })}
        {/* Little frog on top of highest selected step */}
        {sel.size > 0 && (() => {
          const topStep = Math.max(...sel);
          const {x, y, w} = stepRect(topStep);
          const px = x + w - 18, py = y - 2;
          return (
            <g style={{pointerEvents:"none"}}>
              {/* Body */}
              <ellipse cx={px} cy={py-10} rx={10} ry={9} fill="#2ECC71"/>
              {/* Eyes */}
              <circle cx={px-4} cy={py-17} r={5} fill="#2ECC71"/>
              <circle cx={px+4} cy={py-17} r={5} fill="#2ECC71"/>
              <circle cx={px-4} cy={py-17} r={3} fill="white"/>
              <circle cx={px+4} cy={py-17} r={3} fill="white"/>
              <circle cx={px-3} cy={py-17} r={1.5} fill={DARK}/>
              <circle cx={px+5} cy={py-17} r={1.5} fill={DARK}/>
              {/* Mouth */}
              <path d={`M${px-3},${py-11} Q${px},${py-8} ${px+3},${py-11}`}
                fill="none" stroke={DARK} strokeWidth={1.2} strokeLinecap="round"/>
              {/* Front legs */}
              <path d={`M${px-8},${py-8} Q${px-14},${py-4} ${px-12},${py}`}
                fill="none" stroke="#27AE60" strokeWidth={2.5} strokeLinecap="round"/>
              <path d={`M${px+8},${py-8} Q${px+14},${py-4} ${px+12},${py}`}
                fill="none" stroke="#27AE60" strokeWidth={2.5} strokeLinecap="round"/>
              {/* Belly spot */}
              <ellipse cx={px} cy={py-9} rx={5} ry={5} fill="#A9F5C8" opacity={0.7}/>
            </g>
          );
        })()}
      </svg>
      <div style={{color:c.muted,fontSize:14}}>
        Označeno: <strong>{sel.size}</strong> z {denominator} schodů
      </div>
      <Btn c={c} disabled={done||sel.size===0} onClick={submit}>Zkontrolovat ✓</Btn>
    </div>
  );
}

// ─── Question pool generators – každé prostředí generuje 100+ unikátních otázek ─
const DENOMS=[2,3,4,5,6,8,10];
const rN=d=>Math.floor(Math.random()*(d-1))+1;

// Shuffle array in place (Fisher-Yates)
const shuffle = arr => { for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];} return arr; };

function poolSimple() {
  const pool = [];
  for(const d of DENOMS) for(let n=1;n<d;n++) pool.push({numerator:n,denominator:d});
  // pad to 100+ by duplicating with shuffle
  while(pool.length < 100) pool.push({...pool[Math.floor(Math.random()*pool.length)]});
  return shuffle(pool);
}

function poolCompare() {
  const pool = [];
  for(const d1 of DENOMS) for(let n1=1;n1<d1;n1++)
    for(const d2 of DENOMS) for(let n2=1;n2<d2;n2++)
      if(!(n1===n2&&d1===d2)) pool.push({fractionA:[n1,d1],fractionB:[n2,d2]});
  return shuffle(pool).slice(0,150);
}

function poolGrid() {
  const cfgs=[[2,2],[2,3],[2,4],[3,3],[2,5],[3,4],[4,4],[2,6],[3,5]];
  const pool=[];
  for(const [rows,cols] of cfgs){ const t=rows*cols; for(let n=1;n<t;n++) pool.push({rows,cols,numerator:n,denominator:t}); }
  while(pool.length<100) pool.push({...pool[Math.floor(Math.random()*pool.length)]});
  return shuffle(pool);
}

function poolApartmany() {
  const cfgs=[[2,2],[2,3],[3,2],[2,4],[4,2],[3,3],[2,5],[5,2]];
  const pool=[];
  for(const [floors,flatsPerFloor] of cfgs){ const t=floors*flatsPerFloor; for(let n=1;n<t;n++) pool.push({floors,flatsPerFloor,numerator:n,denominator:t}); }
  while(pool.length<100) pool.push({...pool[Math.floor(Math.random()*pool.length)]});
  return shuffle(pool);
}

function poolHodiny() {
  const ds=[2,3,4,6,12];
  const pool=[];
  for(const d of ds) for(let n=1;n<d;n++) pool.push({numerator:n,denominator:d});
  while(pool.length<100) pool.push({...pool[Math.floor(Math.random()*pool.length)]});
  return shuffle(pool);
}

function poolSkupinka() {
  const ds=[3,4,5,6,8,10];
  const pool=[];
  for(const d of ds) for(let n=1;n<d;n++)
    for(const icon of SKUPINKA_ICONS) pool.push({numerator:n,denominator:d,icon});
  return shuffle(pool).slice(0,150);
}

function poolRecept() {
  const ds=[2,3,4,5,6];
  const pool=[];
  for(const d of ds) for(let n=1;n<d;n++)
    for(const ing of RECIPE_ITEMS) pool.push({numerator:n,denominator:d,ingredient:ing});
  while(pool.length<100) pool.push({...pool[Math.floor(Math.random()*pool.length)]});
  return shuffle(pool);
}

function poolSchodiste() {
  const ds=[4,5,6,7,8,10];
  const pool=[];
  for(const d of ds) for(let n=1;n<d;n++) pool.push({numerator:n,denominator:d});
  while(pool.length<100) pool.push({...pool[Math.floor(Math.random()*pool.length)]});
  return shuffle(pool);
}

const ENVS=[
  { name:"🍕 Koláč",         desc:"Rozkrájej koláč a sněz správný kousek!",   comp:PizzaEnv,      genPool: poolSimple },
  { name:"📏 Číselná osa",   desc:"Přesuň kolečko na správné místo na ose.",   comp:NumberLineEnv, genPool: poolSimple },
  { name:"⚖️ Porovnávání",   desc:"Který kelímek je plnější? Dej znaménko!",  comp:CompareEnv,    genPool: poolCompare },
  { name:"🟧 Čtvercová síť", desc:"Vybarvi správný počet políček v tabulce.",  comp:GridEnv,       genPool: poolGrid },
  { name:"📐 Pásek",         desc:"Vybarvi správnou část barevného pásku.",    comp:PasekEnv,      genPool: poolSimple },
  { name:"🏠 Apartmány",     desc:"Rozsviť světla ve správném počtu bytů!",   comp:ApartmanyEnv,  genPool: poolApartmany },
  { name:"🕐 Hodiny",        desc:"Vybarvi správnou výseč ciferníku hodin.",  comp:HodinyEnv,     genPool: poolHodiny },
  { name:"🐠 Skupinka",      desc:"Vyber správný počet předmětů ze skupiny.",  comp:SkupinkaEnv,   genPool: poolSkupinka },
  { name:"🫙 Sklenice",      desc:"Nalij do sklenice přesně tolik, kolik má!",comp:SkleniceEnv,   genPool: poolSimple },
  { name:"🌡️ Teploměr",     desc:"Nastav rtuť na správnou teplotu na škále.",comp:TeplotaEnv,    genPool: poolSimple },
  { name:"🍳 Recept",        desc:"Odměř správné množství přísad do mísy.",   comp:ReceptEnv,     genPool: poolRecept },
  { name:"🪜 Schodiště",     desc:"Vylez po schodech přesně tak vysoko!",     comp:SchodisteEnv,  genPool: poolSchodiste },
];

// ─── Confetti ─────────────────────────────────────────────────────────────────
function Confetti({ active }) {
  const canvasRef=useRef(null);
  const animRef=useRef(null);
  useEffect(()=>{
    if(!active) return;
    const canvas=canvasRef.current; if(!canvas) return;
    const ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth; canvas.height=window.innerHeight;
    const CC=["#FF5733","#00C9F0","#CC66FF","#2DDD99","#FFCC00","#00E5CC","#FF2D8A","#9C55FF","#3390FF","#FF7777","#FF9933"];
    const SH=["rect","circle","tri"];
    const ps=Array.from({length:150},()=>({
      x:Math.random()*canvas.width, y:-20-Math.random()*200,
      vx:(Math.random()-.5)*3, vy:2+Math.random()*4,
      rot:Math.random()*Math.PI*2, rv:(Math.random()-.5)*.18,
      sz:7+Math.random()*10, color:CC[Math.floor(Math.random()*CC.length)],
      shape:SH[Math.floor(Math.random()*SH.length)], op:1
    }));
    let frame=0;
    const draw=()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height); frame++;
      let alive=false;
      for(const p of ps){
        if(p.y>canvas.height+20) continue; alive=true;
        p.x+=p.vx; p.y+=p.vy; p.vy+=.06; p.rot+=p.rv;
        if(frame>90) p.op=Math.max(0,p.op-.013);
        ctx.save(); ctx.globalAlpha=p.op; ctx.translate(p.x,p.y); ctx.rotate(p.rot);
        ctx.fillStyle=p.color;
        if(p.shape==="rect") ctx.fillRect(-p.sz/2,-p.sz/4,p.sz,p.sz/2);
        else if(p.shape==="circle"){ ctx.beginPath(); ctx.arc(0,0,p.sz/2.5,0,Math.PI*2); ctx.fill(); }
        else { ctx.beginPath(); ctx.moveTo(0,-p.sz/2); ctx.lineTo(p.sz/2,p.sz/2); ctx.lineTo(-p.sz/2,p.sz/2); ctx.closePath(); ctx.fill(); }
        ctx.restore();
      }
      if(alive) animRef.current=requestAnimationFrame(draw);
    };
    animRef.current=requestAnimationFrame(draw);
    return ()=>{ if(animRef.current) cancelAnimationFrame(animRef.current); };
  },[active]);
  if(!active) return null;
  return <canvas ref={canvasRef} style={{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:999}}/>;
}

// ─── Zoo display (header collection) ─────────────────────────────────────────
function ZooBar({ collection }) {
  if(!collection.length) return null;
  const groups={};
  for(const r of collection){ if(!groups[r.emoji]) groups[r.emoji]={...r,count:0}; groups[r.emoji].count+=r.count; }
  return (
    <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",justifyContent:"center",
      padding:"7px 14px",background:"white",borderRadius:30,border:"1.5px solid #E2EBF0",
      boxShadow:"0 2px 8px rgba(0,0,0,0.06)",marginTop:6}}>
      <span style={{fontSize:12,color:"#6B7280",marginRight:2}}>Moje zoo:</span>
      {Object.values(groups).map(g=>(
        <span key={g.emoji} style={{fontSize:13,fontWeight:700,color:g.color}}>
          {g.emoji}×{g.count}
        </span>
      ))}
    </div>
  );
}

// ─── In-game score dots ───────────────────────────────────────────────────────
function ScoreDots({ score, c }) {
  return (
    <div style={{display:"flex",gap:4,flexWrap:"wrap",justifyContent:"center"}}>
      {Array.from({length:10}).map((_,i)=>(
        <div key={i} style={{
          width:22,height:22,borderRadius:"50%",
          background:i<score?c.primary:c.soft,
          border:`2px solid ${i<score?c.primary:c.secondary}`,
          transition:"background 0.3s",
          display:"flex",alignItems:"center",justifyContent:"center",
          fontSize:11
        }}>{i<score?"✓":""}</div>
      ))}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function ZlomkyGame() {
  const [envIdx,   setEnvIdx]   = useState(0);
  const [question, setQuestion] = useState(null);
  const [pool,     setPool]     = useState([]); // remaining questions this game
  const [score,    setScore]    = useState(0);
  const scoreRef = useRef(0);
  const [streak,   setStreak]   = useState(0);
  const [total,    setTotal]    = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [phase,    setPhase]    = useState("menu");
  const [collection, setCollection] = useState([]);
  const [waitingNext, setWaitingNext] = useState(false); // true after wrong answer – waits for manual continue
  const [showConfetti, setShowConfetti] = useState(false);
  const [newReward,    setNewReward]    = useState(null);

  const c = ENV_PALETTES[envIdx];

  const startGame = idx => {
    // Generate full pool, shuffle, take first 10 as the game queue
    const fullPool = ENVS[idx].genPool();
    const gameQueue = fullPool.slice(0, 10);
    setEnvIdx(idx); setScore(0); scoreRef.current=0; setStreak(0); setTotal(0);
    setFeedback(null); setNewReward(null); setShowConfetti(false); setWaitingNext(false);
    setPool(gameQueue.slice(1));   // remaining after first
    setQuestion(gameQueue[0]);
    setPhase("playing");
  };

  const nextQ = useCallback((remainingPool) => {
    if (remainingPool.length === 0) return;
    setQuestion(remainingPool[0]);
    setPool(remainingPool.slice(1));
    setFeedback(null);
  }, []);

  const handleAnswer = correct => {
    const nt = total + 1; setTotal(nt);
    if(correct){
      setScore(s=>s+1); scoreRef.current+=1; setStreak(s=>s+1);
      setFeedback({ok:true, msg:getMsg(FEEDBACK.correct)});
      if(nt >= 10){
        setTimeout(()=>{
          const fs = scoreRef.current;
          const reward = rollAnimal(fs);
          if(reward){ setCollection(col=>[...col,reward]); setNewReward(reward); }
          if(fs >= 7) setShowConfetti(true);
          setPhase("result");
          setTimeout(()=>setShowConfetti(false), 4500);
        }, 1400);
      } else {
        setPool(current => { setTimeout(()=>nextQ(current), 3000); return current; });
      }
    } else {
      setStreak(0);
      setFeedback({ok:false, msg:getMsg(FEEDBACK.wrong)});
      if(nt >= 10){
        // last question wrong – still need manual continue before result
        setWaitingNext(true);
      } else {
        setWaitingNext(true); // pause – teacher can discuss
      }
    }
  };

  const handleContinue = () => {
    setWaitingNext(false);
    const nt = total; // total already incremented
    if(nt >= 10){
      const fs = scoreRef.current;
      const reward = rollAnimal(fs);
      if(reward){ setCollection(col=>[...col,reward]); setNewReward(reward); }
      if(fs >= 7) setShowConfetti(true);
      setPhase("result");
      setTimeout(()=>setShowConfetti(false), 4500);
    } else {
      setPool(current => { nextQ(current); return current; });
    }
  };

  const Env = ENVS[envIdx]?.comp;
  const gc  = ENV_PALETTES[envIdx]; // game color (used in playing/result)

  return (
    <div style={{minHeight:"100vh",background:"#F0FDF8",fontFamily:"'Baloo 2','Segoe UI',sans-serif",
      display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap');
        * { box-sizing:border-box; }
        button { transition:transform 0.1s; }
        button:active:not(:disabled) { transform:scale(0.96); }
        @keyframes fadeIn  { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
        @keyframes popIn   { 0%{transform:scale(0) rotate(-12deg);opacity:0} 60%{transform:scale(1.3) rotate(4deg);opacity:1} 100%{transform:scale(1) rotate(0);opacity:1} }
        @keyframes shimmer { 0%,100%{opacity:1} 50%{opacity:.6} }
        @keyframes bounce  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      `}</style>

      <Confetti active={showConfetti}/>

      {/* ── Header ── */}
      <div style={{textAlign:"center",marginBottom:20}}>
        <div style={{fontSize:42,marginBottom:2,animation:"bounce 2s infinite"}}>🦁</div>
        <h1 style={{fontSize:30,fontWeight:800,color:DARK,margin:0,letterSpacing:.5}}>Zlomková zoo</h1>
        <p style={{color:"#6B7280",fontSize:13,margin:"3px 0 0"}}>Hraj, počítej a buduj si zoo 🐼🦊🐸🐣</p>
        <ZooBar collection={collection}/>
      </div>

      {/* ── MENU ── */}
      {phase==="menu" && (
        <div style={{maxWidth:460,width:"100%"}}>
          <p style={{color:"#6B7280",fontSize:14,marginBottom:14,textAlign:"center"}}>Vyber si hru a sbírej zvířátka! Čím víc hraješ, tím víc jich máš. 🌴</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {ENVS.map((env,i)=>{
              const ec=ENV_PALETTES[i];
              return (
                <button key={i} onClick={()=>startGame(i)} style={{
                  background:ec.bg, border:`2.5px solid ${ec.soft}`,
                  borderRadius:16,padding:"14px 12px",fontFamily:"inherit",
                  fontWeight:700,color:DARK,cursor:"pointer",textAlign:"left",
                  boxShadow:"0 2px 8px rgba(0,0,0,0.06)",
                  display:"flex",flexDirection:"column",gap:3,
                  transition:"transform 0.15s,box-shadow 0.15s"
                }}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 6px 16px ${ec.soft}`;}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.06)";}}>
                  <span style={{fontSize:26}}>{env.name.split(" ")[0]}</span>
                  <span style={{fontSize:14,color:ec.primary}}>{env.name.split(" ").slice(1).join(" ")}</span>
                  <span style={{fontSize:11,color:ec.muted,fontWeight:400}}>{env.desc}</span>
                </button>
              );
            })}
          </div>

          {/* Animal guide */}
          <div style={{marginTop:16,padding:"12px 16px",background:"white",borderRadius:14,border:"1.5px solid #E2EBF0"}}>
            <div style={{fontSize:12,color:"#6B7280",marginBottom:8,fontWeight:700}}>Jaká zvířátka můžeš získat:</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {ANIMALS.map(a=>(
                <div key={a.emoji} style={{display:"flex",alignItems:"center",gap:3,
                  padding:"4px 10px",background:a.rare?"#FDF4FF":"#F9FAFB",
                  borderRadius:20,border:`1.5px solid ${a.color}22`}}>
                  <span style={{fontSize:17}}>{a.emoji}</span>
                  <span style={{fontSize:11,color:a.color,fontWeight:700}}>{a.name}</span>
                </div>
              ))}
            </div>
            <div style={{fontSize:11,color:"#9CA3AF",marginTop:8}}>🦄 Jednorožec je vzácný – ale každá hra je šance ho potkat!</div>
          </div>
        </div>
      )}

      {/* ── PLAYING ── */}
      {phase==="playing" && question && Env && (
        <div style={{maxWidth:500,width:"100%"}}>
          {/* Stats bar */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
            marginBottom:14,padding:"10px 16px",
            background:gc.bg,borderRadius:14,border:`1.5px solid ${gc.soft}`,
            boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
            <div style={{fontSize:13,color:gc.muted}}><strong style={{color:gc.primary,fontSize:16}}>{score}</strong>/10</div>
            <div style={{fontSize:13,color:gc.primary,fontWeight:800}}>{ENVS[envIdx].name}</div>
            <div style={{fontSize:13,color:gc.muted}}>{total}/10 otázek</div>
          </div>

          <ScoreDots score={score} c={gc}/>

          {/* Progress bar */}
          <div style={{height:6,background:gc.soft,borderRadius:4,margin:"10px 0 16px",overflow:"hidden"}}>
            <div style={{height:"100%",width:`${(total/10)*100}%`,background:gc.primary,borderRadius:4,transition:"width 0.4s"}}/>
          </div>

          {/* Question card */}
          <div style={{background:"white",borderRadius:20,padding:"24px 20px",
            boxShadow:`0 4px 20px ${gc.soft}`,border:`1.5px solid ${gc.soft}`}}>
            <Env question={question} onAnswer={handleAnswer} c={gc}/>
          </div>

          {feedback && (
            <div style={{marginTop:14,padding:"12px 18px",
              background:feedback.ok?"#DCFCE7":"#FEF9C3",
              border:`2px solid ${feedback.ok?CORRECT_COLOR:"#EAB308"}`,
              borderRadius:14,color:DARK,fontSize:15,textAlign:"center",
              animation:"fadeIn 0.3s ease"}}>
              {feedback.msg}
              {waitingNext && (
                <div style={{marginTop:12}}>
                  <button onClick={handleContinue} style={{
                    background:gc.primary, color:"white", border:"none",
                    borderRadius:30, padding:"10px 28px", fontSize:15,
                    fontWeight:700, fontFamily:"inherit", cursor:"pointer",
                    boxShadow:`0 3px 10px ${gc.soft}`}}>
                    Pokračovat →
                  </button>
                </div>
              )}
            </div>
          )}

          <button onClick={()=>setPhase("menu")} style={{marginTop:14,background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
            ← Zpět do menu
          </button>
        </div>
      )}

      {/* ── RESULT ── */}
      {phase==="result" && (
        <div style={{maxWidth:420,width:"100%",textAlign:"center"}}>
          <div style={{fontSize:60,marginBottom:8}}>{score>=8?"🏆":score>=5?"🌟":"💪"}</div>
          <h2 style={{fontSize:28,fontWeight:800,color:DARK,marginBottom:6}}>
            {score>=8?"Hodně práce, hodně výsledků.":score>=5?"Pokračuješ – a to je základ.":"Každý pokus něco přinese."}
          </h2>
          <p style={{color:"#6B7280",fontSize:17,margin:"0 0 12px"}}>
            Správně: <strong style={{color:gc.primary,fontSize:26}}>{score}</strong> z 10
          </p>

          <ScoreDots score={score} c={gc}/>

          {/* New reward */}
          {newReward && (
            <div style={{margin:"20px auto",display:"inline-flex",flexDirection:"column",alignItems:"center",gap:6,
              padding:"18px 36px",background:"white",borderRadius:22,
              border:`3px solid ${newReward.color}`,
              boxShadow:`0 0 28px ${newReward.color}44`,
              animation:"popIn 0.5s cubic-bezier(.34,1.56,.64,1) forwards"}}>
              <div style={{fontSize:13,color:"#6B7280",fontWeight:700}}>Za dnešní hraní získáváš:</div>
              <div style={{fontSize:56,lineHeight:1,animation:"shimmer 1.5s infinite"}}>
                {Array.from({length:Math.min(newReward.count,4)}).map((_,i)=>(
                  <span key={i}>{newReward.emoji}</span>
                ))}
              </div>
              <div style={{fontSize:17,fontWeight:800,color:newReward.color}}>{newReward.name}!</div>
            </div>
          )}

          <div style={{margin:"16px 0",padding:"12px 16px",background:"white",borderRadius:16,
            border:"1.5px solid #E2EBF0",color:"#6B7280",fontSize:14}}>
            {score>=8?"Tenhle úsek šel dobře. Co ti nejvíce pomáhalo?":
             score>=5?"Část zlomků ti šla, část ještě ne. To je normální.":
             "Méně správných neznamená méně práce. Zkus to znovu – mozek se učí opakováním."}
          </div>

          {/* Zoo summary */}
          {collection.length>0 && (
            <div style={{marginBottom:16}}>
              <div style={{fontSize:12,color:"#6B7280",marginBottom:6}}>Tvoje zoo dnes:</div>
              <ZooBar collection={collection}/>
            </div>
          )}

          <div style={{display:"flex",gap:12,justifyContent:"center"}}>
            <Btn c={gc} onClick={()=>startGame(envIdx)}>Hrát znovu 🔄</Btn>
            <Btn c={gc} outline onClick={()=>setPhase("menu")}>Menu 🏠</Btn>
          </div>
        </div>
      )}
    </div>
  );
}
