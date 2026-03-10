import { useState } from "react";

// ─── 完整真实数据（未做任何修改）────────────────────────────────────────────────
const REAL_DATA = [
  {
    info: {
      role: "user",
      time: { created: 1773133412182 },
      summary: { diffs: [] },
      agent: "build",
      model: { providerID: "moonshotai-cn", modelID: "kimi-k2.5" },
      id: "msg_0rbVmCNj0000aSYXhTGwcs",
      sessionID: "ses_32904daa7ffev4AOVxvhwQfueJ",
    },
    parts: [
      {
        type: "text",
        text: "使用theme-script-creator 技能和 script-create-output-format 技能完成下方的任务",
        id: "prt_cd6fcb756001HxQOPRqFkezHOm",
        sessionID: "ses_32904daa7ffev4AOVxvhwQfueJ",
        messageID: "msg_0rbVmCNj0000aSYXhTGwcs",
      },
      {
        type: "text",
        text: '[{"name":"bg","width":1080,"height":2400,"x":0,"y":0,"visibility":true},{"name":"dl_0","width":650,"height":48,"x":250,"y":455,"visibility":true,"description":"按照电量实时变化切换展示图路径_后面的值，除以5后不带小数点，例如电量97除以5等于19.4，去掉小数点后为19，则展示dl_19.png"},{"name":"week_0","width":138,"height":47,"x":558,"y":569,"visibility":true},{"name":"sj_0","width":139,"height":201,"x":180,"y":215,"visibility":true},{"name":"sj_0","width":139,"height":201,"x":344,"y":215,"visibility":true},{"name":"sj_0","width":139,"height":201,"x":595,"y":215,"visibility":true},{"name":"sj_0","width":139,"height":201,"x":759,"y":215,"visibility":true},{"name":"icon","width":41,"height":72,"x":180,"y":443,"visibility":true},{"name":"light_0","width":61,"height":81,"x":66,"y":2260,"visibility":true},{"name":"camera","width":86,"height":69,"x":930,"y":2267,"visibility":true},{"name":"eye_b","width":117,"height":74,"x":824,"y":1481,"visibility":true},{"name":"eye_c","width":148,"height":33,"x":540,"y":1689,"visibility":true},{"name":"glass_c","width":212,"height":102,"x":539,"y":1722,"visibility":true},{"name":"sj_maohao","width":38,"height":148,"x":520,"y":253,"visibility":true},{"name":"yue_1","width":80,"height":42,"x":327,"y":571,"visibility":true},{"name":"day_0","width":28,"height":41,"x":417,"y":572,"visibility":true},{"name":"eye_g","width":108,"height":54,"x":167,"y":1397,"visibility":true},{"name":"day_0","width":28,"height":41,"x":455,"y":572,"visibility":true},{"name":"eye_w","width":98,"height":52,"x":167,"y":968,"visibility":true},{"name":"weatherType2_0","width":72,"height":72,"x":812,"y":556,"visibility":true,"description":"按照天气实时变化切换展示图路径_后面的值"},{"name":"eye_z","width":88,"height":33,"x":856,"y":978,"visibility":true}]',
        id: "prt_cd6fcb7560027AH0pz82XkUA7q",
        sessionID: "ses_32904daa7ffev4AOVxvhwQfueJ",
        messageID: "msg_0rbVmCNj0000aSYXhTGwcs",
      },
      {
        type: "text",
        text: "将上述JSON数据,生成直板机锁屏的xml脚本",
        id: "prt_cd6fcb756003Ohz0L95VCmJ3Sy",
        sessionID: "ses_32904daa7ffev4AOVxvhwQfueJ",
        messageID: "msg_0rbVmCNj0000aSYXhTGwcs",
      },
    ],
  },
  {
    info: {
      role: "assistant",
      time: { created: 1773133418037, completed: 1773133425318 },
      parentID: "msg_0rbVmCNj0000aSYXhTGwcs",
      modelID: "kimi-k2.5",
      providerID: "moonshotai-cn",
      mode: "build",
      agent: "build",
      path: { cwd: "C:\\Users\\y60034093", root: "/" },
      cost: 0,
      tokens: {
        total: 14930,
        input: 3692,
        output: 230,
        reasoning: 0,
        cache: { read: 11008, write: 0 },
      },
      finish: "tool-calls",
      id: "msg_cd6fcce35001HplRPBVvoDpi7e",
      sessionID: "ses_32904daa7ffev4AOVxvhwQfueJ",
    },
    parts: [
      {
        type: "step-start",
        id: "prt_cd6fcdbb70010GVNSoZkkVfz6i",
        sessionID: "ses_32904daa7ffev4AOVxvhwQfueJ",
        messageID: "msg_cd6fcce35001HplRPBVvoDpi7e",
      },
      {
        type: "reasoning",
        text: "用户要求生成一个直板机锁屏的XML脚本，根据提供的JSON数据。根据技能要求，我需要按照7个步骤来执行：\n\n1. 获取基础信息\n2. 检查缺失信息\n3. 读取参考文档\n4. 检查元素属性\n5. 检查错误示例\n6. 生成XML脚本\n7. 验证和输出\n\n让我先创建TODO列表，然后开始执行。",
        time: { start: 1773133421499, end: 1773133425303 },
        id: "prt_cd6fcdbbb001tEyn83r1UwLJ5U",
        sessionID: "ses_32904daa7ffev4AOVxvhwQfueJ",
        messageID: "msg_cd6fcce35001HplRPBVvoDpi7e",
      },
      {
        type: "text",
        text: "我将按照技能要求完成这个任务。首先创建任务列表：",
        time: { start: 1773133425304, end: 1773133425304 },
        id: "prt_cd6fce06e001cSX55dw4rYfMzB",
        sessionID: "ses_32904daa7ffev4AOVxvhwQfueJ",
        messageID: "msg_cd6fcce35001HplRPBVvoDpi7e",
      },
      {
        type: "tool",
        callID: "todowrite:2",
        tool: "todowrite",
        state: {
          status: "completed",
          input: {
            todos: [
              { content: "获取基础信息：模块、设备、分辨率", status: "in_progress", priority: "high" },
              { content: "检查缺失信息", status: "pending", priority: "high" },
              { content: "读取参考文档", status: "pending", priority: "high" },
              { content: "检查元素属性", status: "pending", priority: "high" },
              { content: "检查precautions.md中的错误示例", status: "pending", priority: "high" },
              { content: "生成XML脚本", status: "pending", priority: "high" },
              { content: "验证并输出", status: "pending", priority: "high" },
            ],
          },
          output:
            '[\n  {\n    "content": "获取基础信息：模块、设备、分辨率",\n    "status": "in_progress",\n    "priority": "high"\n  },\n  {\n    "content": "检查缺失信息",\n    "status": "pending",\n    "priority": "high"\n  },\n  {\n    "content": "读取参考文档",\n    "status": "pending",\n    "priority": "high"\n  },\n  {\n    "content": "检查元素属性",\n    "status": "pending",\n    "priority": "high"\n  },\n  {\n    "content": "检查precautions.md中的错误示例",\n    "status": "pending",\n    "priority": "high"\n  },\n  {\n    "content": "生成XML脚本",\n    "status": "pending",\n    "priority": "high"\n  },\n  {\n    "content": "验证并输出",\n    "status": "pending",\n    "priority": "high"\n  }\n]',
          title: "7 todos",
          metadata: {
            todos: [
              { content: "获取基础信息：模块、设备、分辨率", status: "in_progress", priority: "high" },
              { content: "检查缺失信息", status: "pending", priority: "high" },
              { content: "读取参考文档", status: "pending", priority: "high" },
              { content: "检查元素属性", status: "pending", priority: "high" },
              { content: "检查precautions.md中的错误示例", status: "pending", priority: "high" },
              { content: "生成XML脚本", status: "pending", priority: "high" },
              { content: "验证并输出", status: "pending", priority: "high" },
            ],
            truncated: false,
          },
          time: { start: 1773133425298, end: 1773133425300 },
        },
        id: "prt_cd6fce1bd001ZmEeOE6iPNMq4G",
        sessionID: "ses_32904daa7ffev4AOVxvhwQfueJ",
        messageID: "msg_cd6fcce35001HplRPBVvoDpi7e",
      },
      {
        type: "step-finish",
        reason: "tool-calls",
        cost: 0,
        tokens: {
          total: 14930,
          input: 3692,
          output: 230,
          reasoning: 0,
          cache: { read: 11008, write: 0 },
        },
        id: "prt_cd6fcea9a001yi7UpBPRB70M6o",
        sessionID: "ses_32904daa7ffev4AOVxvhwQfueJ",
        messageID: "msg_cd6fcce35001HplRPBVvoDpi7e",
      },
    ],
  },
];

// ─── 工具函数 ─────────────────────────────────────────────────────────────────

function fmtTime(ts) {
  if (!ts) return "";
  return new Date(ts).toLocaleTimeString("zh-CN", {
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  });
}

function fmtDuration(start, end) {
  if (!start || !end) return null;
  const ms = end - start;
  return ms < 1000 ? `${ms}ms` : `${(ms / 1000).toFixed(1)}s`;
}

function tryJSON(str) {
  if (typeof str !== "string" || str.length < 2) return null;
  const t = str.trim();
  if (!t.startsWith("{") && !t.startsWith("[")) return null;
  try { return JSON.parse(t); } catch { return null; }
}

// ─── 设计 token ───────────────────────────────────────────────────────────────
const C = {
  bg:         "#07071a",
  bgDeep:     "#04040f",
  bgCard:     "#0b0b22",
  bgHover:    "#0e0e28",
  border:     "#14142e",
  borderDim:  "#0c0c22",
  textPrimary:"#d0d0e8",
  textSecond: "#7878a0",
  textDim:    "#343460",
  purple:     "#7c5cfc",
  purpleDim:  "#3a2870",
  blue:       "#3b9eff",
  blueDim:    "#0c2a4a",
  green:      "#22c55e",
  amber:      "#f59e0b",
  red:        "#ef4444",
  teal:       "#14b8a6",
};

const mono = "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace";

// ─── Reasoning Part ───────────────────────────────────────────────────────────

function ReasoningPart({ part }) {
  const [open, setOpen] = useState(false);
  const dur = fmtDuration(part.time?.start, part.time?.end);
  const preview = part.text?.replace(/\n/g, " ").slice(0, 60);

  return (
    <div style={{ margin: "2px 0" }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          all: "unset", cursor: "pointer", display: "flex",
          alignItems: "center", gap: 6, padding: "3px 0",
        }}
      >
        <span style={{
          color: C.purple, fontSize: 9,
          display: "inline-block",
          transform: open ? "rotate(90deg)" : "none",
          transition: "transform .15s",
        }}>▶</span>
        <span style={{ color: C.purple, fontSize: 12 }}>思考过程</span>
        {dur && <span style={{ color: C.textDim, fontSize: 11, fontFamily: mono }}>{dur}</span>}
        {!open && preview && (
          <span style={{ color: C.textDim, fontSize: 11, fontStyle: "italic" }}>
            {preview}…
          </span>
        )}
      </button>
      {open && (
        <div style={{
          marginTop: 4,
          borderLeft: `2px solid ${C.purpleDim}`,
          paddingLeft: 12, marginLeft: 3,
          color: C.textSecond, fontSize: 12,
          fontFamily: mono, lineHeight: 1.75,
          whiteSpace: "pre-wrap",
        }}>
          {part.text}
        </div>
      )}
    </div>
  );
}

// ─── Todo list (special render for todowrite tool) ────────────────────────────

const TODO_STATUS = {
  completed:   { icon: "✓", color: C.green },
  in_progress: { icon: "◉", color: C.amber },
  pending:     { icon: "○", color: C.textDim },
};

function TodoList({ todos }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {todos.map((t, i) => {
        const s = TODO_STATUS[t.status] || TODO_STATUS.pending;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: s.color, fontFamily: mono, fontSize: 12, width: 14, flexShrink: 0 }}>
              {s.icon}
            </span>
            <span style={{
              fontSize: 13, color: t.status === "completed" ? C.textDim : C.textPrimary,
              textDecoration: t.status === "completed" ? "line-through" : "none",
              flex: 1,
            }}>
              {t.content}
            </span>
            {t.priority === "high" && (
              <span style={{
                fontSize: 9, color: C.red, background: "#1a0606",
                border: `1px solid #3a0a0a`, padding: "1px 5px", borderRadius: 3,
                fontFamily: mono, flexShrink: 0,
              }}>HIGH</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Tool Part ────────────────────────────────────────────────────────────────

function ToolPart({ part }) {
  const [open, setOpen] = useState(false);
  const { status, input, output, metadata, time: stateTime } = part.state || {};
  const isRunning = !status || status === "running";
  const isError   = status === "error";
  const accentColor = isRunning ? C.amber : isError ? C.red : C.green;
  const stateIcon   = isRunning ? "⟳" : isError ? "✗" : "✓";
  const dur = fmtDuration(stateTime?.start, stateTime?.end);

  // todowrite gets a special in-place render (no expand needed for todos)
  const isTodo  = part.tool === "todowrite";
  const todos   = metadata?.todos || input?.todos;

  return (
    <div style={{
      margin: "4px 0",
      borderRadius: 8,
      border: `1px solid ${C.border}`,
      borderLeft: `3px solid ${accentColor}`,
      background: C.bgCard,
      overflow: "hidden",
      fontFamily: mono,
      fontSize: 12,
    }}>
      {/* ── Header ── */}
      <div
        onClick={() => setOpen(v => !v)}
        style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "8px 12px", cursor: "pointer", userSelect: "none",
        }}
      >
        <span style={{
          color: accentColor, fontSize: 13,
          display: "inline-block",
          animation: isRunning ? "spin 1.2s linear infinite" : "none",
        }}>{stateIcon}</span>

        <span style={{ color: C.blue, fontWeight: 700 }}>{part.tool}</span>

        {part.callID && (
          <span style={{ color: C.textDim }}>#{part.callID}</span>
        )}
        {dur && (
          <span style={{ color: C.textDim }}>{dur}</span>
        )}
        {isTodo && todos && (
          <span style={{ color: C.purple }}>{todos.length} tasks</span>
        )}

        <span style={{ marginLeft: "auto", color: C.textDim, fontSize: 10 }}>
          {open ? "▲" : "▼"}
        </span>
      </div>

      {/* ── Body: todo special render inline ── */}
      {isTodo && todos && (
        <div style={{ padding: "0 14px 10px 14px" }}>
          <TodoList todos={todos} />
        </div>
      )}

      {/* ── Body: expand for input / output ── */}
      {open && (
        <div style={{ borderTop: `1px solid ${C.borderDim}`, padding: "10px 14px" }}>
          {input && !isTodo && (
            <div style={{ marginBottom: 10 }}>
              <div style={{ color: C.textDim, fontSize: 10, letterSpacing: 1, marginBottom: 4 }}>INPUT</div>
              <pre style={{
                margin: 0, color: "#80c060", fontSize: 11,
                whiteSpace: "pre-wrap", wordBreak: "break-all",
              }}>
                {JSON.stringify(input, null, 2)}
              </pre>
            </div>
          )}
          {output && (
            <div>
              <div style={{ color: C.textDim, fontSize: 10, letterSpacing: 1, marginBottom: 4 }}>OUTPUT</div>
              <pre style={{
                margin: 0, color: C.textSecond, fontSize: 11,
                whiteSpace: "pre-wrap", wordBreak: "break-all",
                maxHeight: 240, overflow: "auto",
              }}>
                {typeof output === "string" ? output : JSON.stringify(output, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── JSON Block (collapsible, for text parts that are pure JSON) ──────────────

function JsonBlock({ raw }) {
  const [open, setOpen] = useState(false);
  const parsed = tryJSON(raw);
  const label = Array.isArray(parsed)
    ? `JSON 数组 · ${parsed.length} 项`
    : `JSON 对象 · ${Object.keys(parsed).length} 字段`;

  return (
    <div style={{
      margin: "4px 0",
      borderRadius: 8,
      border: `1px solid ${C.border}`,
      borderLeft: `3px solid ${C.teal}`,
      background: C.bgCard,
      fontFamily: mono, fontSize: 12,
      overflow: "hidden",
    }}>
      <div
        onClick={() => setOpen(v => !v)}
        style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", cursor: "pointer", userSelect: "none" }}
      >
        <span style={{ color: C.teal }}>{"{ }"}</span>
        <span style={{ color: C.textSecond }}>{label}</span>
        <span style={{ marginLeft: "auto", color: C.textDim, fontSize: 10 }}>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div style={{ borderTop: `1px solid ${C.borderDim}`, padding: "10px 14px" }}>
          <pre style={{
            margin: 0, color: "#60a8d0", fontSize: 11,
            whiteSpace: "pre-wrap", wordBreak: "break-all",
            maxHeight: 320, overflow: "auto",
          }}>
            {JSON.stringify(parsed, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

// ─── Text Part ────────────────────────────────────────────────────────────────

function TextPart({ part }) {
  const text = part.text || "";
  if (tryJSON(text)) return <JsonBlock raw={text} />;

  return (
    <div style={{ color: C.textPrimary, fontSize: 14, lineHeight: 1.8 }}>
      {text.split("\n").map((line, i) => {
        if (line === "") return <div key={i} style={{ height: 4 }} />;

        // inline **bold**
        const segs = line.split(/(\*\*[^*]+\*\*)/g).map((s, j) =>
          s.startsWith("**") && s.endsWith("**")
            ? <strong key={j} style={{ color: "#fff", fontWeight: 600 }}>{s.slice(2, -2)}</strong>
            : <span key={j}>{s}</span>
        );

        if (/^[-•]\s/.test(line)) return (
          <div key={i} style={{ display: "flex", gap: 8, marginLeft: 8 }}>
            <span style={{ color: C.purple, flexShrink: 0, marginTop: 1 }}>•</span>
            <span>{segs}</span>
          </div>
        );
        if (/^\d+\.\s/.test(line)) return (
          <div key={i} style={{ display: "flex", gap: 8, marginLeft: 8 }}>
            <span style={{ color: C.purple, flexShrink: 0, minWidth: 18, fontFamily: mono, fontSize: 12 }}>
              {line.match(/^\d+/)[0]}.
            </span>
            <span>{segs}</span>
          </div>
        );
        return <div key={i}>{segs}</div>;
      })}
    </div>
  );
}

// ─── Step dividers ────────────────────────────────────────────────────────────

function StepStart() {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      margin: "10px 0 4px", color: C.textDim, fontSize: 10,
      fontFamily: mono,
    }}>
      <div style={{ flex: 1, height: 1, background: C.borderDim }} />
      <span>step</span>
      <div style={{ flex: 1, height: 1, background: C.borderDim }} />
    </div>
  );
}

function StepFinish({ part }) {
  const t = part.tokens;
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", gap: 10,
      margin: "4px 0 10px", fontSize: 11,
      color: C.textDim, fontFamily: mono,
    }}>
      {t && <>
        <span>↑ {t.input?.toLocaleString()} in</span>
        <span>↓ {t.output?.toLocaleString()} out</span>
        {t.reasoning > 0 && <span>💭 {t.reasoning}</span>}
        {t.cache?.read > 0 && <span style={{ color: "#1a3a2a" }}>⚡ {t.cache.read?.toLocaleString()} cached</span>}
        <span style={{ color: "#1a1a38" }}>· {part.reason}</span>
      </>}
    </div>
  );
}

// ─── Message ─────────────────────────────────────────────────────────────────

function Message({ message }) {
  const { info, parts } = message;
  const isUser = info.role === "user";
  const modelLabel = info.modelID || info.model?.modelID || "";
  const elapsed = fmtDuration(info.time?.created, info.time?.completed);

  const renderPart = (part) => {
    switch (part.type) {
      case "text":        return <TextPart      key={part.id} part={part} />;
      case "reasoning":   return <ReasoningPart key={part.id} part={part} />;
      case "tool":        return <ToolPart      key={part.id} part={part} />;
      case "step-start":  return <StepStart     key={part.id} />;
      case "step-finish": return <StepFinish    key={part.id} part={part} />;
      default:            return null;
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: isUser ? "row-reverse" : "row",
      gap: 10,
      marginBottom: 28,
      alignItems: "flex-start",
      animation: "fadeIn .2s ease",
    }}>
      {/* Avatar */}
      <div style={{
        width: 30, height: 30, borderRadius: "50%",
        flexShrink: 0, marginTop: 2,
        background: isUser
          ? `linear-gradient(135deg, #6d28d9, #8b5cf6)`
          : `linear-gradient(135deg, #0c4a6e, #0369a1)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, fontWeight: 800, color: "#fff",
        boxShadow: isUser ? "0 0 12px #6d28d930" : "0 0 12px #0369a130",
      }}>
        {isUser ? "U" : "AI"}
      </div>

      {/* Bubble */}
      <div style={{
        flex: 1,
        maxWidth: isUser ? "80%" : "100%",
        background: isUser ? "#0c0a24" : "transparent",
        border: isUser ? `1px solid #1c1840` : "none",
        borderRadius: isUser ? 10 : 0,
        padding: isUser ? "10px 14px" : 0,
      }}>
        {/* Meta */}
        <div style={{
          display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6,
          marginBottom: 8, fontSize: 11,
          color: C.textDim, fontFamily: mono,
        }}>
          <span style={{ color: isUser ? "#8b5cf6" : C.blue, fontWeight: 600 }}>
            {info.role}
          </span>
          {modelLabel && <span>{modelLabel}</span>}
          {info.agent && <span>· {info.agent}</span>}
          {info.providerID && !isUser && <span style={{ color: "#1a2a3a" }}>· {info.providerID}</span>}
          <span style={{ marginLeft: "auto" }}>{fmtTime(info.time?.created)}</span>
        </div>

        {/* Parts */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {parts.map(renderPart)}
        </div>

        {/* Token footer for assistant */}
        {!isUser && info.tokens && (
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 12,
            marginTop: 10, paddingTop: 8,
            borderTop: `1px solid ${C.borderDim}`,
            fontSize: 11, color: C.textDim,
            fontFamily: mono,
          }}>
            <span>total {info.tokens.total?.toLocaleString()}</span>
            <span>↑ {info.tokens.input}</span>
            <span>↓ {info.tokens.output}</span>
            {info.tokens.cache?.read > 0 && (
              <span style={{ color: "#1a3a28" }}>⚡ {info.tokens.cache.read?.toLocaleString()}</span>
            )}
            {elapsed && <span>⏱ {elapsed}</span>}
            {info.finish && <span style={{ color: "#1a1a38" }}>· {info.finish}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── App Shell ────────────────────────────────────────────────────────────────

export default function OpenCodeChat() {
  const [tab, setTab] = useState("chat"); // "chat" | "raw"
  const sessionID = REAL_DATA[0]?.info?.sessionID || "";

  return (
    <div style={{
      minHeight: "100vh", background: C.bg,
      display: "flex", flexDirection: "column",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: C.textPrimary,
    }}>
      <style>{`
        @keyframes spin    { to { transform: rotate(360deg); } }
        @keyframes fadeIn  { from { opacity:0; transform:translateY(5px); } to { opacity:1; transform:none; } }
        * { box-sizing: border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #1c1c38; border-radius: 2px; }
        button:focus { outline: none; }
      `}</style>

      {/* ── Header ── */}
      <div style={{
        padding: "0 20px",
        borderBottom: `1px solid ${C.borderDim}`,
        background: C.bgDeep,
        display: "flex", alignItems: "center", gap: 0,
        minHeight: 48,
      }}>
        {/* Logo / title */}
        <div style={{ marginRight: 24 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: C.purple, letterSpacing: 0.5 }}>
            opencode
          </span>
          <span style={{ fontSize: 11, color: C.textDim, marginLeft: 8, fontFamily: mono }}>
            {sessionID.slice(0, 24)}…
          </span>
        </div>

        {/* Tabs */}
        {["chat", "raw"].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "14px 14px", fontSize: 12,
              color: tab === t ? C.purple : C.textDim,
              borderBottom: tab === t ? `2px solid ${C.purple}` : "2px solid transparent",
              transition: "color .15s",
            }}
          >
            {t === "chat" ? "Chat" : "Raw JSON"}
          </button>
        ))}

        {/* Right: model badge */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            fontSize: 11, color: C.blue,
            background: C.blueDim, border: `1px solid #0a2040`,
            padding: "2px 8px", borderRadius: 4, fontFamily: mono,
          }}>
            kimi-k2.5
          </span>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green }} />
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ flex: 1, overflow: "auto", padding: "24px 20px" }}>
        {tab === "raw" ? (
          <pre style={{
            fontSize: 11, color: "#38386a",
            fontFamily: mono,
            whiteSpace: "pre-wrap", wordBreak: "break-all",
            lineHeight: 1.6,
          }}>
            {JSON.stringify(REAL_DATA, null, 2)}
          </pre>
        ) : (
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            {REAL_DATA.map(msg => (
              <Message key={msg.info.id} message={msg} />
            ))}
          </div>
        )}
      </div>

      {/* ── Input bar ── */}
      <div style={{
        padding: "10px 20px",
        borderTop: `1px solid ${C.borderDim}`,
        background: C.bgDeep,
        display: "flex", gap: 10, alignItems: "center",
      }}>
        <div style={{
          flex: 1, background: C.bgCard,
          border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "9px 14px", fontSize: 13, color: C.textDim,
        }}>
          发送消息…
        </div>
        <button style={{
          background: `linear-gradient(135deg, ${C.purple}, #5b21b6)`,
          border: "none", borderRadius: 8,
          color: "#fff", fontSize: 13, fontWeight: 600,
          padding: "9px 20px", cursor: "pointer",
          boxShadow: "0 0 16px #7c5cfc28",
        }}>
          发送
        </button>
      </div>
    </div>
  );
}
