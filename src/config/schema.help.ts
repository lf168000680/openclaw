import { MEDIA_AUDIO_FIELD_HELP } from "./media-audio-field-metadata.js";
import { describeTalkSilenceTimeoutDefaults } from "./talk-defaults.js";

export const FIELD_HELP: Record<string, string> = {
  meta: "由 OpenClaw 自动维护的元数据字段，用于记录该配置文件的写入/版本历史。保持系统管理，除非调试迁移历史，否则避免手动更改。",
  "meta.lastTouchedVersion": "OpenClaw 写入配置时自动设置的版本号。",
  "meta.lastTouchedAt": "最近写入配置的 ISO 时间戳（自动设置）。",
  env: "用于向网关进程提供运行时变量的环境导入与覆盖设置。通过这一节控制 shell 环境加载与显式变量注入行为。",
  "env.shellEnv":
    "启动期间从登录 shell 加载变量的控制选项。依赖 profile 定义的密钥或 PATH 定制时保持启用。",
  "env.shellEnv.enabled":
    "在初始化阶段启用从用户 shell 配置文件加载环境变量。开发机保持启用，在受限服务环境中通过显式环境管理时再禁用。",
  "env.shellEnv.timeoutMs":
    "解析 shell 环境时允许的最大毫秒数，超时后采用回退策略。需要更快启动时缩短超时，shell 初始化繁重时再延长。",
  "env.vars":
    "显式的键/值环境变量覆盖，与 OpenClaw 运行时进程环境合并。通过此节获得确定性的环境配置，而不是完全依赖 shell 配置文件的副作用。",
  wizard:
    "记录最近一次引导向导运行详情的状态字段。保留这些字段以便升级过程中监控与排障。",
  "wizard.lastRunAt":
    "记录最近一次在此主机完成向导的 ISO 时间戳。用于支持与运维审计时确认向导是否近期开启过。",
  "wizard.lastRunVersion":
    "记录最近一次向导运行时的 OpenClaw 版本。排查版本间行为差异时参考此字段。",
  "wizard.lastRunCommit":
    "开发版本中记录的最近向导执行所引用的源码提交 ID。调试时用于将向导行为与精确源码状态关联。",
  "wizard.lastRunCommand":
    "记录最近一次向导运行时执行的命令，保留执行上下文。需要重现向导问题时参考此命令。",
  "wizard.lastRunMode":
    '记录最近一次向导运行的执行模式（"local" 或 "remote"）。用于判断向导是面向直接本地运行还是远程网关拓扑。',
  diagnostics:
    "调试时用于针对性追踪、遥测导出和缓存检查的诊断控制。生产环境保持基础诊断，仅在排查时打开更深入信号。",
  "diagnostics.otel":
    "网关组件发送 Trace、Metric 和日志的 OpenTelemetry 导出设置。整合集中式可观测后台与分布式追踪时使用。",
  "diagnostics.cacheTrace":
    "缓存追踪日志设置，用于观察嵌入式运行中的缓存决策与负载上下文。调试阶段临时启用，之后关闭以减少敏感日志。",
  logging:
    "控制日志等级、输出目标、格式和敏感数据脱敏的行为。保持生产环境的等级与脱敏严格，同时保留有用诊断。",
  "logging.level":
    '运行时日志输出的主阈值：silent、fatal、error、warn、info、debug、trace。生产环境保持 info 或 warn，debug/trace 仅在调查时使用。',
  "logging.file":
    "可选的文件路径，用于在控制台日志之外（或替代）持久化输出。选择受管的可写路径，并与运维的保留/轮转策略一致。",
  "logging.consoleLevel":
    '控制台特定的日志阈值（silent、fatal 等）。用于保持本地控制台安静，同时必要时仍保留更丰富的文件日志。',
  "logging.consoleStyle":
    '控制台输出的格式：pretty、compact 或 json。需要机器解析时选 json，面向人工终端时用 pretty/compact。',
  "logging.redactSensitive":
    '敏感脱敏模式：off 禁用内建屏蔽，tools 会遮罩工具/配置中的敏感字段。共享日志除非已有隔离安全池，否则保持 tools。',
  "logging.redactPatterns":
    "附加的自定义脱敏正则，在日志写出前应用。用于屏蔽内建规则未覆盖的组织特定令牌和标识符。",
  cli:
    "CLI 呈现控制项，管理本地命令输出行为（如横幅与标语风格）。该节用于在不改运行时的情况下调整启动输出。",
  "cli.banner":
    "控制 CLI 启动横幅的标题/版本行与标语风格。保持横幅启用以便快速查看版本/上下文，再根据偏好调节标语噪音。",
  "cli.banner.taglineMode":
    '控制 CLI 横幅中的标语风格：random（默认）从旋转池中随机选，default 始终显示默认标语，off 则隐藏标语只保留版本行。',
  update:
    "控制更新通道与启动检查行为，以保持 OpenClaw 运行时版本的更新。生产环境使用谨慎通道，只有在可控场景才用更激进通道。",
  "update.channel": '用于 git 与 npm 安装的更新通道（"stable"、"beta"、"dev"）。',
  "update.checkOnStart": "网关启动时检查 npm 更新（默认：true）。",
  "update.auto.enabled": "启用后台自动更新包安装（默认：false）。",
  "update.auto.stableDelayHours": "稳定通道自动应用前的最小延迟（默认：6 小时）。",
  "update.auto.stableJitterHours": "稳定通道滚动的额外时间窗（小时）（默认：12）。",
  "update.auto.betaCheckIntervalHours": "Beta 通道检查的时间间隔（小时）（默认：1）。",
  gateway:
    "网关运行时表面，覆盖绑定模式、认证、控制 UI、远程传输和安全控制。除非刻意对可信本地接口以外暴露网关，否则保持保守默认。",
  "gateway.port":
    "网关监听 API、控制 UI 与通道入口的 TCP 端口。使用独立端口，避免与反向代理或本地服务冲突。",
  "gateway.mode":
    '网关运行模式：local 在本机运行通道与代理，remote 通过远程传输连接。只有在刻意构建分离远程拓扑时才选择 remote。',
  "gateway.bind":
    '网络绑定配置（"auto"、"lan"、"loopback"、"custom"、"tailnet"），控制接口暴露。默认 loopback 或 auto 最安全，外部客户端必须连接时才改动。',
  "gateway.customBindHost":
    "当 gateway.bind 设置为 custom 时，指定手动绑定的主机/IP。提供精确地址，避免通配符绑定，除非确实需要外部暴露。",
  "gateway.controlUi":
    "控制 UI 托管设置，包括启用状态、路径与浏览器来源/认证硬化。保持 UI 暴露最小，并在对公网部署前配合强认证。",
  "gateway.controlUi.enabled":
    "为 true 时启用由网关 HTTP 进程提供控制 UI。用于本地管理保持启用，若由外部控制面板取代则禁用。",
  "gateway.auth":
    "控制 HTTP/WebSocket 访问的认证策略，包括模式、凭据、可信代理行为及限流。除非部署仅限 loopback，否则始终启用认证。",
  "gateway.auth.mode":
    '认证模式："none"、"token"、"password"、"trusted-proxy"。直接暴露时用 token/password，trusted-proxy 仅在身份感知代理前置时使用。',
  "gateway.auth.allowTailscale":
    "允许受信任的 Tailscale 身份路径满足认证检查。仅在 tailnet 身份策略稳固且工作流程需要时启用。",
  "gateway.auth.rateLimit":
    "登录/认证请求限速，降低网关边界的暴力破解风险。在暴露环境保持启用，根据流量基线调节阈值。",
  "gateway.auth.trustedProxy":
    "可信代理认证头映射，用于上游身份提供者注入的声明。仅在已知代理 CIDR 且有严格头部白名单的情况下使用，防止伪造头。",
  "gateway.trustedProxies":
    "允许提供转发客户端身份头的上游代理 CIDR/IP 白名单。保持列表精简，避免不可信跳数冒充用户。",
  "gateway.allowRealIpFallback":
    "在缺少 x-forwarded-for 的代理场景下启用 x-real-ip 回退。除非 ingress 栈需要，否则保持关闭。",
  "gateway.tools":
    "网关级工具暴露的允许/拒绝策略，可在不动代理/工具配置的前提下收紧运行时工具范围。用于应急控制和生产加固。",
  "gateway.tools.allow":
    "当需要限定运行时工具集时，网关级的显式 allowlist。适用于扣控环境，让工具范围可控。",
  "gateway.tools.deny":
    "网关级的显式 denylist，即便下层策略允许也阻止高风险工具。用于应急响应和纵深防御。",
  "gateway.channelHealthCheckMinutes":
    "自动通道健康探测与状态更新的间隔分钟数。检测要求高时缩短，减少周期性探测噪音时拉长。",
  "gateway.channelStaleEventThresholdMinutes":
    "若连接的通道在指定分钟内未接收事件，则健康监测认为其为 stale 并触发重启。默认：30。",
  "gateway.channelMaxRestartsPerHour":
    "滚动一小时窗口内健康监测可触发的最大通道重启次数。达到上限后暂停重启，直到窗口过期。默认：10。",
  "gateway.tailscale":
    "Tailscale 集成设置，涵盖 Serve/Funnel 暴露与网关启动/退出的生命周期处理。除非部署依赖 Tailnet 入口，否则关闭。",
  "gateway.tailscale.mode":
    'Tailscale 公布模式："off"、"serve"、"funnel"。tailnet 内部访问用 serve，仅在需要公网访问时才用 funnel。',
  "gateway.tailscale.resetOnExit":
    "网关退出时重置 Tailscale Serve/Funnel 状态，避免停服后遗留已公布路由。除非其他控制器管理发布生命周期，否则保持启用。",
  "gateway.remote":
    "当此实例代理到其他运行主机时的远程网关连接设置（直连或 SSH）。只有在刻意配置分离主机操作时才使用 remote。",
  "gateway.remote.transport":
    '远程连接传输方式："direct" 使用配置的 URL，"ssh" 则通过 SSH 隧道。需要加密安全且不想暴露远端端口时选 SSH。',
  "gateway.reload":
    "配置实时重载策略，控制编辑如何应用以及何时触发完整重启。除非调试重载内部机制，否则保持 hybrid 以保证操作安全。",
  "gateway.tls":
    "网关进程直接终止 HTTPS 所需的 TLS 证书与密钥设置。生产中使用显式证书，避免在不可信网络暴露明文。",
  "gateway.tls.enabled":
    "启用网关监听端的 TLS，使客户端直接通过 HTTPS/WSS 连接。直接面向公网或不可信网络边界时需启用。",
  "gateway.tls.autoGenerate":
    "当未配置明确文件时自动生成本地 TLS 证书/密钥对。仅用于本地/开发环境，生产流量需替换真实证书。",
  "gateway.tls.certPath":
    "TLS 证书文件的路径。使用受管路径，并将续期自动化与该位置保持一致。",
  "gateway.tls.keyPath":
    "TLS 私钥文件路径。保持文件权限受限，并按照安全策略周期性轮换。",
  "gateway.tls.caPath":
    "可选 CA 证书链路径，用于客户端校验或自定义信任链。私有 PKI 或自定义证书链部署时使用。",
  "gateway.http":
    "网关 HTTP API 配置分组，涵盖端点开关与朝向传输的 API 暴露控制。仅启用必需端点以减少攻击面。",
  "gateway.http.endpoints":
    "网关 API 下的 HTTP 端点功能开关，针对兼容路径与可选集成。需要时有意启用，并在上线后监控访问。",
  "gateway.http.securityHeaders":
    "网关进程自行添加的可选 HTTP 响应安全头。TLS 在反向代理终止时建议由代理层设置。",
  "gateway.http.securityHeaders.strictTransportSecurity":
    "Strict-Transport-Security 头的值。仅在完全控制的 HTTPS 源上设置；用 false 可显式禁用。",
  "gateway.remote.url": "远程网关 WebSocket URL（ws:// 或 wss://）。",
  "gateway.remote.token":
    "用于在 token-auth 部署中向远程网关认证的 Bearer 令牌。通过 secret/env substitution 存储，并与远程网关认证一起轮换。",
  "gateway.remote.password":
    "远程网关认证的密码凭据（password 模式开启时）。将其保管在外部，避免在提交配置中使用明文。",
  "gateway.remote.tlsFingerprint":
    "远程网关的预期 sha256 TLS 指纹（用于防止中间人）。",
  "gateway.remote.sshTarget":
    "通过 SSH 的远程网关（将网关端口隧道到本地）。格式：user@host 或 user@host:port。",
  "gateway.remote.sshIdentity": "可选的 SSH 身份文件路径（传给 ssh -i）。",
  "talk.provider": '当前活跃的 Talk 提供商 ID（例如 "acme-speech"）。',
  "talk.providers":
    "以提供商 ID 为键的 Talk 配置。迁移期间优先使用此项，而非旧的 talk.* 键。",
  "talk.providers.*": "与提供商 ID 匹配的 Talk 所属配置字段。",
  "talk.providers.*.apiKey": "Talk 模式使用的提供商 API 密钥。", // pragma: allowlist secret
  "talk.interruptOnSpeech":
    "为 true（默认）时，在 Talk 模式中用户开始说话会中断助理语音。保持启用以实现对话轮转。",
  "talk.silenceTimeoutMs": `Talk 模式在用户静默多少毫秒后完成当前转录并发送。保留为空以使用平台默认暂停窗口（${describeTalkSilenceTimeoutDefaults()}）。`,
  acp:
    "ACP 运行时控制，涵盖启用调度、选择后端、限制目标代理以及微调流式投影行为。",
  "acp.enabled":
    "ACP 的全局特性开关。除非已配置 ACP 运行时与策略，否则保持禁用。",
  "acp.dispatch.enabled":
    "针对 ACP 会话轮次的独立调度开关（默认 true）。设为 false 可保留 ACP 命令但阻止实际轮次执行。",
  "acp.backend":
    "默认 ACP 运行时后端 ID（例如 acpx），必须与注册的 ACP 运行时插件后端匹配。",
  "acp.defaultAgent":
    "当 ACP spawn 未指定目标时使用的后备目标代理 ID。",
  "acp.allowedAgents":
    "ACP 会话允许的目标代理 ID 白名单。为空表示没有额外白名单限制。",
  "acp.maxConcurrentSessions":
    "此网关进程允许的最大并发 ACP 会话数。",
  "acp.stream":
    "控制 ACP 流式投影的块大小、元数据可见性与去重行为。",
  "acp.stream.coalesceIdleMs":
    "ACP 流式文本在输出前的合并空闲窗口毫秒数。",
  "acp.stream.maxChunkChars":
    "ACP 流式投影在拆分为多条块回复前的最大字符数。",
  "acp.stream.repeatSuppression":
    "为 true（默认）时，同一轮内重复的 ACP 状态/工具行会被抑制，而底层事件保持不变。",
  "acp.stream.deliveryMode":
    "ACP 投影样式：live streams 增量投影输出，final_only 缓冲全部输出直到终结事件。",
  "acp.stream.hiddenBoundarySeparator":
    "当存在隐藏的 ACP 工具生命周期事件时，在下一段可见助理文本前插入的分隔符（none|space|newline|paragraph）。默认 paragraph。",
  "acp.stream.maxOutputChars":
    "每轮 ACP 投影允许的最大助理输出字符数，超过时会发出截断提示。",
  "acp.stream.maxSessionUpdateChars":
    "投影的 ACP 会话或更新行（工具/状态更新）的最大字符数。",
  "acp.stream.tagVisibility":
    "ACP 投影中针对特定 sessionUpdate（例如 usage_update、available_commands_update）的可见性覆盖。",
  "acp.runtime.ttlMinutes":
    "ACP 会话 worker 空闲前的 TTL（分钟），超过则有资格清理。",
  "acp.runtime.installCommand":
    "ACP 后端连接缺失时，`/acp install` 和 `/acp doctor` 显示的可选运维安装/配置命令。",
  "agents.list.*.skills":
    "可选的代理技能白名单。省略时继承 agents.defaults.skills（如设置）；否则技能不受限。设为 [] 表示不允许任何技能。显式列表会完全替换继承而非合并。",
  "agents.list[].skills":
    "可选的代理技能白名单。省略时继承 agents.defaults.skills（如设置）；否则技能不受限。设为 [] 表示不允许任何技能。显式列表会完全替换继承而非合并。",
  agents:
    "代理运行时配置根，涵盖默认设置与显式代理条目，用于路由与执行上下文。保持此节显式以便在多代理场景中让模型/工具行为可预测。",
  "agents.defaults":
    "被 agents.list 中各项继承的共享默认设置。使用 defaults 可强制一致的基线行为并减少每个代理重复配置。",
  "agents.defaults.skills":
    "在代理未声明 agents.list[].skills 时继承的默认技能白名单。省略表示技能不限，[] 表示继承代理没有技能，显式 agents.list[].skills 会替代而非合并此默认。",
  "agents.list":
    "配置代理的显式列表，包含 ID 以及模型、工具、身份和工作区的可选覆盖。保持 ID 稳定以便绑定、审批和会话路由保持确定性。",
  "agents.list[].thinkingDefault":
    "可选的单代理默认 thinking 级别。当缺少 per-message 或 session 覆盖时，会覆盖 agents.defaults.thinkingDefault。",
  "agents.list[].reasoningDefault":
    "可选的代理级默认推理可见性（on|off|stream）。当未设置每条消息或会话的推理覆盖时生效。",
  "agents.list[].fastModeDefault":
    "可选的代理级默认快速模式。当 per-message 或 session 快速模式覆盖缺失时应用。",
  "agents.list[].runtime":
    "可选的运行时描述。embedded 表示默认的 OpenClaw 执行，acp 表示外部 ACP harness 的默认。",
  "agents.list[].runtime.type":
    '此代理的运行时类型："embedded"（默认 OpenClaw 运行时）或 "acp"（ACP harness 默认）。',
  "agents.list[].runtime.acp":
    "当 runtime.type=acp 时，该代理的 ACP 运行时默认值。绑定层级的 ACP 覆盖仍在每次会话中优先。",
  "agents.list[].runtime.acp.agent":
    "为此 OpenClaw 代理使用的可选 ACP harness agent ID（例如 codex、claude、cursor、gemini、openclaw）。",
  "agents.list[].runtime.acp.backend":
    "此代理 ACP 会话的可选后端覆盖（不设置则回退到全局 acp.backend）。",
  "agents.list[].runtime.acp.mode":
    "此代理的可选 ACP 会话模式默认值（persistent 或 oneshot）。",
  "agents.list[].runtime.acp.cwd":
    "此代理 ACP 会话的可选默认工作目录。",
  "agents.list[].identity.avatar":
    "头像图片路径（仅相对于代理工作区）或远程 URL/data URL。",
  "agents.defaults.heartbeat.suppressToolErrorWarnings":
    "在 heartbeat 运行期间抑制工具错误警告负载。",
  "agents.list[].heartbeat.suppressToolErrorWarnings":
    "在 heartbeat 运行期间抑制工具错误警告负载。",
  browser:
    "浏览器运行时控制，用于本地或远程 CDP 附加、配置文件路由与截图/快照行为。除非自动化流程需要自定义浏览器传输，否则保持默认。",
  "browser.enabled":
    "启用网关中的浏览器能力连接，使浏览器工具与 CDP 驱动的工作流能够运行。如不需要浏览器自动化则禁用以减少暴露与启动负担。",
  "browser.cdpUrl":
    "用于附加到外部管理浏览器实例的远程 CDP websocket URL。用于集中式浏览器主机，保持该 URL 仅限可信网络路径访问。",
  "browser.color":
    "用于在显示彩色身份提示的浏览器配置文件/界面元素中的默认强调色。保持颜色一致，帮助操作者快速识别活跃配置文件上下文。",
  "browser.executablePath":
    "当自动发现不能满足主机环境时，显式指定浏览器可执行文件路径。使用绝对稳定路径，确保重启后启动行为保持确定。",
  "browser.headless":
    "在本地启动器启动浏览器实例时强制 headless 模式。服务器环境保持启用，仅在需要可见 UI 调试时才禁用。",
  "browser.noSandbox":
    "在运行时沙箱失败的环境下禁用 Chromium 沙箱隔离标志。尽可能保持关闭，因为这会削弱进程隔离保护。",
  "browser.attachOnly":
    "限制浏览器模式为仅附加，且不启动本地浏览器进程。所有浏览器会话均由远程 CDP 提供者管理时使用。",
  "browser.cdpPortRangeStart":
    "用于自动分配浏览器配置文件端口的起始本地 CDP 端口。主机默认端口与其他服务冲突时增大该值。",
  "browser.defaultProfile":
    "调用方未显式选择配置文件时使用的默认浏览器配置文件名称。使用稳定的低权限配置文件以减少意外跨上下文状态利用。",
  "browser.profiles":
    "按名称命名的浏览器配置文件连接映射，用于显式路由到 CDP 端口或 URL，并可附加元数据。保持配置文件名一致，避免定义重叠。",
  "browser.profiles.*.cdpPort":
    "按端口连接浏览器实例时的每配置文件本地 CDP 端口。每个配置文件使用唯一端口以避免冲突。",
  "browser.profiles.*.cdpUrl":
    "按配置文件名称显式远程浏览器路由时使用的 per-profile CDP websocket URL。配对在远程主机或隧道终止的配置文件时使用。",
  "browser.profiles.*.userDataDir":
    "通过 Chrome DevTools MCP 附加现有会话时的 per-profile Chromium 用户数据目录。用于本地 Brave、Edge、Chromium 或非默认 Chrome 配置文件场景，当内建自动连接路径会选错数据目录时使用。",
  "browser.profiles.*.driver":
    '每配置文件的浏览器驱动模式。CDP 配置文件使用 "openclaw"（或旧版 "clawd"），而要连接主机本地 Chrome DevTools MCP 时使用 "existing-session"。',
  "browser.profiles.*.attachOnly":
    "每配置文件的 attach-only 覆盖，跳过本地浏览器启动，仅附加到现有 CDP 端点。适用于某个配置文件由外部管理但其他配置文件仍本地启动的情况。",
  "browser.profiles.*.color":
    "用于仪表盘和浏览器相关 UI 提示中的 per-profile 强调色。为高信号配置文件选择不同颜色，帮助操作者识别当前上下文。",
  "browser.evaluateEnabled":
    "启用浏览器端 evaluate 辅助以在支持场景下进行脚本评估。除非工作流需要快照/导航以外的 evaluate 语义，否则保持禁用。",
  "browser.snapshotDefaults":
    "调用方未提供快照配置时使用的默认快照捕获设置。根据通道与自动化路径调优以保持一致行为。",
  "browser.snapshotDefaults.mode":
    "默认快照提取模式，控制页面内容转换为供代理消费的方式。为你的工作流在可读性、还原度与 token 开销间取得平衡。",
  "browser.ssrfPolicy":
    "浏览器/网络抓取路径的服务器端请求伪造（SSRF）防护设置，防止访问内部主机。生产环境保持限制性默认，只在经过批准的目标上放开。",
  "browser.ssrfPolicy.dangerouslyAllowPrivateNetwork":
    "允许浏览器工具访问私有网络地址范围。默认为可信网络操作者设置启用；想要严格公网上的验证时禁用。",
  "browser.ssrfPolicy.allowedHostnames":
    "为 SSRF 策略检查提供的明确主机名白名单例外。保持列表精简，并定期审查，避免过时的广泛访问。",
  "browser.ssrfPolicy.hostnameAllowlist":
    "供 SSRF 策略消费者使用的传统/备用主机名白名单字段，用于显式主机例外。使用稳定的精确主机名，避免通配符式的宽泛模式。",
  "browser.remoteCdpTimeoutMs":
    "连接远程 CDP 端点前的超时时间（毫秒），超时则附件失败。高延迟隧道可调高此值，想要更快失败检测则调低。",
  "browser.remoteCdpHandshakeTimeoutMs":
    "连接后针对远程浏览器目标的 CDP 握手就绪检查超时时间（毫秒）。远程浏览器启动慢则调高，自动化循环需要快失败则调低。",
  "discovery.mdns.mode":
    'mDNS 广播模式（默认 "minimal"，"full" 包含 cliPath/sshPort，"off" 禁用 mDNS）。',
  discovery:
    "服务发现设置，涵盖本地 mDNS 广播和可选的广域存在信号。将发现限制在预期网络中，以避免泄露服务元数据。",
  "discovery.wideArea":
    "用于在本地链路范围之外公开发现信号的广域发现配置组。仅在打算跨站点汇聚网关存在时启用。",
  "discovery.wideArea.enabled":
    "在需要非本地网关发现时启用广域发现信号。除非确实需要跨网络发现，否则保持禁用。",
  "discovery.wideArea.domain":
    "用于广域发现的可选单播 DNS-SD 域，如 openclaw.internal。当你有意发布本地 mDNS 范围之外的网关发现时使用。",
  "discovery.mdns":
    "用于本地网络广播和发现行为调优的 mDNS 配置组。常规 LAN 发现保持 minimal 模式，只有需要额外元数据时再变更。",
  tools:
    "跨 web、exec、media、messaging 与提升面向的全局工具访问策略与能力配置。该节用于在全面发布前约束高风险能力。",
  "tools.allow":
    "绝对工具 allowlist，会替代配置文件派生的默认值，适用于严格环境。仅在明确运行精挑细选工具子集时启用。",
  "tools.deny":
    "全局工具 denylist，即便配置文件或提供者规则允许也会阻止列出的工具。用于紧急锁定与长期纵深防御。",
  "tools.web":
    "Web 工具策略组，涵盖搜索/抓取提供者、限制与兜底行为调优。保持启用设置与 API 密钥可用性及出站网络策略一致。",
  "tools.exec":
    "Exec 工具的策略组，涵盖 Shell 执行主机、安全模式、审批行为与运行时绑定。生产环境保持保守默认，对提升执行路径进行加强。",
  "tools.exec.host":
    '选择 Shell 命令的执行目标策略。需要时用 "auto" 让运行时感知行为（有沙箱则用沙箱，否则网关），或显式固定 sandbox/gateway/node。',
  "tools.exec.security":
    "执行安全姿态选择器，控制沙箱/审批预期。对不可信提示保持严格安全模式，仅在受信任操作者工作流中放宽。",
  "tools.exec.ask":
    "Exec 命令在执行前是否需要人工确认的审批策略。在共享通道采用更严格的 ask 行为，在私有操作者环境中降低摩擦。",
  "tools.exec.node":
    "当命令通过连接节点委派执行时的 Exec 工具节点绑定配置。仅在需要多节点路由时才使用显式节点绑定。",
  "tools.agentToAgent":
    "控制是否允许 agent-to-agent 工具调用及限制可达目标代理。除非刻意启用跨代理编排，否则保持禁用或严格限定。",
  "tools.agentToAgent.enabled":
    "启用 agent_to_agent 工具接口，让一个代理在运行时调用另一个。简化部署保持关闭，仅在编排价值掩盖复杂度时开启。",
  "tools.agentToAgent.allow":
    "在启用 agent_to_agent 时允许的目标代理 ID 白名单。使用显式白名单避免不受控的跨代理调用图。",
  "tools.experimental":
    "实验性内建工具标志。默认保持关闭，仅在有意测试预览 surface 时启用。",
  "tools.experimental.planTool":
    "控制实验性结构化 `update_plan` 工具的启用。OpenAI 与 OpenAI Codex 运行在此标志未设置时会自动开启；若不希望自动启用，请设为 false。",
  "tools.elevated":
    "特权命令面向的工具访问控制，只有受信任发送方才能触达。除非操作者工作流明确需要提升动作，否则保持禁用。",
  "tools.elevated.enabled":
    "当发送方与策略校验通过时启用提权工具执行路径。公共/共享通道保持禁用，仅在受信任的所有者操作者上下文中允许。",
  "tools.elevated.allowFrom":
    "针对提升工具的发送方允许规则，通常以通道/提供者标识格式为键。使用精确的显式身份，避免非预期用户触发提权命令。",
  "tools.subagents":
    "为 spawn 出来的子代理包装的工具策略，用于相对于父级默认限制或扩展工具可用性。用它让委派代理的能力与任务意图保持一致。",
  "tools.subagents.tools":
    "应用于 spawn 出的子代理运行时的 allow/deny 工具策略，用于对子代理进行加固。当子代理执行半自主工作流时保持该策略比父级更窄。",
  "tools.sandbox":
    "为沙箱代理执行包装的工具策略，使沙箱运行具备独立能力边界。用于在沙箱场景下额外强化安全。",
  "tools.sandbox.tools":
    "在代理运行于沙箱执行环境时应用的 allow/deny 工具策略。保持策略最小化，以防沙箱任务升级到不必要的外部操作。",
  web:
    "Web 通道运行时设置，用于在 Web 聊天界面上控制心跳与重连行为。根据网络可靠性与期望可用性调优重连参数。",
  "web.enabled":
    "启用 Web 通道运行时及相关 websocket 生命周期行为。未使用 Web 聊天时禁用以减少连接管理开销。",
  "web.heartbeatSeconds":
    "Web 通道连接与活跃维护的心跳间隔（秒）。需要更快检测时缩短，想减少保活噪音时拉长。",
  "web.reconnect":
    "Web 通道在传输失败后重连的退避策略。保持有限重试与合适的抖动，避免山呼式重连浪涌。",
  "web.reconnect.initialMs":
    "断连后首次重试前的初始重连延迟（毫秒）。设置适度延迟避免立即重试造成风暴。",
  "web.reconnect.maxMs":
    "重连退避的最大上限（毫秒），限制重复失败时延迟增长。设定合理上限以便长期故障后仍能及时恢复。",
  "web.reconnect.factor":
    "Web 通道重试循环中连接延迟的指数乘数。保持大于 1 并配合抖动，确保大规模客户端的稳定重连。",
  "web.reconnect.jitter":
    "应用于重连延迟的随机化因子（0-1），帮助故障发生后客户不同步。多客户端部署时保持非零抖动以减轻同步峰值。",
  "web.reconnect.maxAttempts":
    "当前故障序列中最大的重连尝试次数（0 表示不重试）。在对自动化敏感的环境中使用有限上限以便可控地处理失败。",
  canvasHost:
    "用于承载 canvas 资产与本地 live-reload 行为的 canvas 主机设置。仅在 canvas 驱动工作流活跃时启用。",
  "canvasHost.enabled":
    "启用 canvas 主机服务进程及其路由，用于提供 canvas 文件。canvas 工作流静止时禁用以减少暴露的本地服务。",
  "canvasHost.root":
    "canvas 主机用于提供 canvas 内容与静态资源的文件系统根目录。使用专用目录，避免使用整个仓库根以保持最小权限暴露。",
  "canvasHost.port":
    "canvas hosting 启用时，canvas 主机 HTTP 服务器使用的 TCP 端口。选择不冲突端口，并据此配置防火墙/代理策略。",
  "canvasHost.liveReload":
    "开发流程中为 canvas 资产启用自动 live-reload。生产类环境保持禁用以保证输出确定性。",
  talk:
    "Talk 模式语音合成设置，涵盖语音身份、模型选择、输出格式与中断行为。通过该节在控制延迟与成本的同时微调面向人的语音体验。",
  "gateway.auth.token":
    "默认情况下必须提供用于网关访问的令牌（除非使用 Tailscale Serve 身份）；非 loopback 绑定也同样需要。",
  "gateway.auth.password": "Tailscale funnel 所需密码。",
  "agents.defaults.sandbox.browser.network":
    "用于沙箱浏览器容器的 Docker 网络（默认：openclaw-sandbox-browser）。需要更严格隔离时避免使用 bridge。",
  "agents.list[].sandbox.browser.network":
    "针对单个代理的沙箱浏览器 Docker 网络覆盖。",
  "agents.defaults.sandbox.docker.dangerouslyAllowContainerNamespaceJoin":
    "危险的 break-glass 覆盖，允许沙箱 Docker 网络模式下的 container:<id>。这会加入其他容器命名空间，削弱沙箱隔离。",
  "agents.list[].sandbox.docker.dangerouslyAllowContainerNamespaceJoin":
    "单代理的危险覆盖，允许在沙箱 Docker 网络模式下加入容器命名空间。",
  "agents.defaults.sandbox.browser.cdpSourceRange":
    "用于容器边缘 CDP 入口的可选 CIDR 允许列表（例如 172.21.0.1/32）。",
  "agents.list[].sandbox.browser.cdpSourceRange":
    "单代理的 CDP 来源 CIDR 允许列表覆盖。",
  "gateway.controlUi.basePath":
    "控制 UI 提供服务时的可选 URL 前缀（例如 /openclaw）。",
  "gateway.controlUi.root":
    "Control UI 资产的可选文件系统根（默认：dist/control-ui）。",
  "gateway.controlUi.allowedOrigins":
    'Control UI/WebChat websocket 连接允许的浏览器来源（仅完整来源，例如 https://control.example.com）。非 loopback Control UI 部署必须配置此项，除非明确启用了危险的 Host-header 回退。将其设为 ["*"] 表示允许任何来源，只应在严格受控的本地测试中使用。',
  "gateway.controlUi.dangerouslyAllowHostHeaderOriginFallback":
    "危险的开关，允许 Control UI/WebChat websocket 检查使用 Host-header 的来源回退。只有在部署刻意依赖 Host-header 来源策略时才启用；显式配置 gateway.controlUi.allowedOrigins 仍为推荐加固默认。",
  "gateway.controlUi.allowInsecureAuth":
    "在必须运行非常规设置时放宽 Control UI 的浏览器认证检查。仅在你信任网络与代理路径的情况下开启，否则冒充风险较高。",
  "gateway.controlUi.dangerouslyDisableDeviceAuth":
    "关闭 Control UI 的设备身份校验，仅依赖 token/password。仅在可信网络上进行短期调试时使用，调试结束后立即关闭。",
  "gateway.push":
    "当网关需要唤醒或通知配对设备时使用的推送交付设置。为官方 iOS 构建在此配置 relay-backed APNs；本地/手动构建仍通过环境变量管理直接 APNs 认证。",
  "gateway.push.apns":
    "与此网关配对的 iOS 设备的 APNs 发送设置。官方/TestFlight 构建通过外部推送 relay 注册时使用 relay 设置。",
  "gateway.push.apns.relay":
    "用于 relay-backed APNs 发送的外部 relay 设置。网关在 push.test、wake 触发以及官方 iOS 构建发布 relay-backed 注册后恢复连接时会调用此 relay。",
  "gateway.push.apns.relay.baseUrl":
    "官方/TestFlight iOS 构建所用的外部 APNs relay 服务的基础 HTTPS URL。与 iOS 构建中写死的 relay URL 保持一致，以确保注册与发送流量命中同一个部署。",
  "gateway.push.apns.relay.timeoutMs":
    "网关向 APNs relay 发起发送请求的超时时间（毫秒）（默认：10000）。relay 或网络缓慢时加大，想更快失败唤醒时调小。",
  "gateway.http.endpoints.chatCompletions.enabled":
    "启用 OpenAI 兼容的 `POST /v1/chat/completions` 端点（默认：false）。",
  "gateway.http.endpoints.chatCompletions.maxBodyBytes":
    "`/v1/chat/completions` 请求体的最大字节数（默认：20MB）。",
  "gateway.http.endpoints.chatCompletions.maxImageParts":
    "接受的最近一次用户消息中的 `image_url` 部分最大数量（默认：8）。",
  "gateway.http.endpoints.chatCompletions.maxTotalImageBytes":
    "同一请求中所有 `image_url` 部分解码后的累计最大字节数（默认：20MB）。",
  "gateway.http.endpoints.chatCompletions.images":
    "针对 OpenAI 兼容的 `image_url` 部分的图像抓取与校验控制。",
  "gateway.http.endpoints.chatCompletions.images.allowUrl":
    "允许为 `image_url` 部分执行服务器端 URL 抓取（默认：false；仍支持 data URI）。若想完全禁用 URL 抓取，请设为 `false`。",
  "gateway.http.endpoints.chatCompletions.images.urlAllowlist":
    "用于 `image_url` URL 抓取的可选主机名允许列表；支持精确主机和 `*.example.com` 通配符。留空或省略表示没有主机名白名单限制。",
  "gateway.http.endpoints.chatCompletions.images.allowedMimes":
    " `image_url` 部分允许的 MIME 类型（大小写不敏感列表）。",
  "gateway.http.endpoints.chatCompletions.images.maxBytes":
    "每个抓取/解码的 `image_url` 图像的最大字节数（默认：10MB）。",
  "gateway.http.endpoints.chatCompletions.images.maxRedirects":
    "`image_url` URL 抓取允许的最大 HTTP 重定向次数（默认：3）。",
  "gateway.http.endpoints.chatCompletions.images.timeoutMs":
    "`image_url` URL 抓取的超时时间（毫秒）（默认：10000）。",
  "gateway.reload.mode":
    '控制配置编辑的应用方式："off" 忽略实时编辑，"restart" 总是重启，"hot" 在进程内应用，"hybrid" 先尝试 hot，再在必要时重启。常规更新保持 "hybrid" 以保证安全。',
  "gateway.reload.debounceMs": "应用配置变更前的去抖窗口（毫秒）。",
  "gateway.reload.deferralTimeoutMs":
    "在强制 SIGUSR1 重启前等待未完成操作完成的最长时间（毫秒）。默认：300000（5 分钟）。设置过低可能导致活跃子代理 LLM 调用被中断。",
  "gateway.nodes.browser.mode":
    '节点浏览器路由模式：auto=选取单个已连接的浏览器节点，manual=需要 node 参数，off=禁用。',
  "gateway.nodes.browser.node":
    "将浏览器路由固定到某个特定节点 ID 或名称（可选）。",
  "gateway.nodes.allowCommands":
    "在网关默认值之外允许的额外 node.invoke 命令（命令字符串数组）。在此处开启危险命令属于安全敏感的覆盖，并会被 `openclaw security audit` 标记。",
  "gateway.nodes.denyCommands":
    "即便节点声明或默认允许列表中包含，也要阻止的节点命令名称（仅精确命令名匹配，例如 `system.run`，不会检查命令内的 shell 文本）。",
  "gateway.webchat.chatHistoryMaxChars":
    "chat.history 响应中每个文本字段在截断前允许的最大字符数（默认：12000）。",
  nodeHost:
    "节点主机控制，用于将此网关节点的功能暴露给其他节点或客户端。除非你故意通过节点网络代理本地能力，否则保持默认。",
  "nodeHost.browserProxy":
    "浏览器代理设置集合，用于通过节点路由暴露本地浏览器控制。仅在远程节点工作流确实需要访问你的本地浏览器配置文件时启用。",
  "nodeHost.browserProxy.enabled":
    "通过节点代理路由暴露本地浏览器控制服务器，使远程客户端可以使用此主机的浏览器能力。除非远程自动化明确依赖，否则保持禁用。",
  "nodeHost.browserProxy.allowProfiles":
    "通过节点代理路由暴露的浏览器配置文件名的可选允许列表。留空将保留默认的完整配置文件表面，包括创建/删除配置文件路由。设置后，OpenClaw 会执行最小权限的配置文件访问，并阻止通过代理持久创建/删除配置文件。",
  media:
    "针对处理入站文件的提供者与工具共享的顶层媒体行为。除非需要稳定文件名以供外部处理管道或更长期的入站媒体保留，否则保留默认。",
  "media.preserveFilenames":
    "启用后上传的媒体保留原始文件名，而不是生成的临时安全名。下游自动化依赖稳定文件名时打开，想减少意外文件名泄露时关闭。",
  "media.ttlHours":
    "可选的入站媒体持久化清理保留窗口（小时）。保持未设置可保留旧行为，想要自动清理时可设为 24（1 天）或 168（7 天）等值。",
  audio:
    "在更高层工具处理语音或媒体内容前应用的全局音频摄取设置。需要对语音笔记与片段获得确定性转录时配置它。",
  "audio.transcription":
    "基于命令的转录设置，用于将音频文件在交给代理前转换为文本。保持路径简单、确定，便于在日志中排查故障。",
  "audio.transcription.command":
    '用于转录音频的可执行文件及参数（首令牌必须是安全的二进制/路径），例如 `["whisper-cli", "--model", "small", "{input}"]`。优先使用固定命令以确保运行时环境一致。',
  "audio.transcription.timeoutSeconds":
    "允许的转录命令完成前的最长时间（秒）。录音较长时增加，延迟敏感部署保持较小。",
  bindings:
    "用于路由与持久 ACP 会话所有权的顶层绑定规则。type=route 用于普通路由，type=acp 用于持久的 ACP harness 绑定。",
  "bindings[].type":
    '绑定类型。使用 "route"（或为兼容旧条目省略）表示正常路由，使用 "acp" 表示持久 ACP 会话绑定。',
  "bindings[].agentId":
    "在绑定匹配时接收流量的目标代理 ID。仅使用有效的已配置代理 ID，以免运行时路由失败。",
  "bindings[].match":
    "用于决策绑定何时生效的匹配规则对象，包含通道及可选的账号/peer 约束。保持规则严格，避免跨上下文意外接管代理。",
  "bindings[].match.channel":
    "此绑定适用的通道/提供者标识，如 `telegram`、`discord` 或插件通道 ID。精确使用配置中的通道键，以保证绑定评估可靠。",
  "bindings[].match.accountId":
    "针对多账号通道场景的可选账号选择器，使绑定仅应用于某一身份。需要按账户划分路由时使用，否则保留为空。",
  "bindings[].match.peer":
    "针对特定会话的可选 peer 匹配，包括 peer 类型与 ID。仅当要将单个 direct/group/channel 目标固定到某代理时使用。",
  "bindings[].match.peer.kind":
    'Peer 会话类型："direct"、"group"、"channel"，或旧版 "dm"（被弃用的 direct 别名）。新配置推荐使用 "direct"，并确保类型与通道语义一致。',
  "bindings[].match.peer.id":
    "与 peer 匹配使用的会话标识，如提供者的聊天 ID、通道 ID 或群组 ID。保持精确，避免不匹配而悄悄失效。",
  "bindings[].match.guildId":
    "在多服务器部署中用于绑定评估的可选 Discord 风格 guild/server ID 约束。当相同 peer ID 在不同 guild 中出现时使用此项。",
  "bindings[].match.teamId":
    "某些提供者将聊天归入团队的可选 team/workspace ID 约束。需要在单一工作区上下文内隔离绑定时添加。",
  "bindings[].match.roles":
    "可选的角色过滤列表，供附加角色到聊天上下文的提供者使用。用于将特权或运维角色流量路由到专门的代理。",
  "bindings[].acp":
    "针对 bindings[].type=acp 的可选绑定级 ACP 覆盖。此层会替代 agents.list[].runtime.acp 在匹配会话中的默认值。",
  "bindings[].acp.mode":
    "此绑定的 ACP 会话模式覆盖（persistent 或 oneshot）。",
  "bindings[].acp.label":
    "该绑定会话在 ACP 状态/诊断中的人类可读标签。",
  "bindings[].acp.cwd":
    "从此绑定创建的 ACP 会话的工作目录覆盖。",
  "bindings[].acp.backend":
    "此绑定的 ACP 后端覆盖（回退顺序：代理运行时 ACP 后端 → 全局 acp.backend）。",
  broadcast:
    "广播路由映射，用于将同一出站消息发送到多个来源会话的目标 peer ID。保持列表精简并可审计，因为一个来源可能会扩散到多个目的地。",
  "broadcast.strategy":
    '广播扩散的发送顺序："parallel" 同时发送给所有目标，"sequential" 则依次发送。需要速度时选 parallel，需要更严格的顺序/背压控制时选 sequential。',
  "broadcast.*":
    "每个来源 peer ID 对应的广播目标列表，键为来源 peer ID，值为目标 peer ID 数组。保持列表有意避免意外的消息扩散。",
  "diagnostics.flags":
    '按标志启用针对性诊断日志（例如 ["telegram.http"]）。支持 "telegram.*" 或 "*" 之类的通配符。',
  "diagnostics.enabled":
    "诊断仪器化输出的主开关，影响日志与遥测管道。正常可观察场景保持启用，仅在极其受限的环境中禁用。",
  "diagnostics.stuckSessionWarnMs":
    "在 session 仍处于处理中时发出卡顿会话警告的年龄阈值（毫秒）。长多工具轮次可调高以减少误报；需要更快检测时调低。",
  "diagnostics.otel.enabled":
    "基于配置的端点/协议启用 OpenTelemetry 导出管道（trace、metric、log）。在收集器端点与认证未完全配置前保持禁用。",
  "diagnostics.otel.endpoint":
    "用于 OpenTelemetry 导出传输的收集器端点 URL（含协议与端口）。使用可达且可信的收集器，并在上线后监控摄取错误。",
  "diagnostics.otel.protocol":
    '遥测导出使用的 OTel 传输协议："http/protobuf" 或 "grpc"，取决于收集器支持。使用你的可观测后台所需的协议，避免遥测负载被丢弃。',
  "diagnostics.otel.headers":
    "随 OpenTelemetry 导出请求发送的附加 HTTP/gRPC 元数据头，常用于租户认证或路由。将秘密保存在环境变量中，避免不必要的头泛滥。",
  "diagnostics.otel.serviceName":
    "在遥测资源属性中报告的服务名称，用于区分可观测后台中的该网关实例。使用稳定名称以保持仪表盘与告警在多次部署中一致。",
  "diagnostics.otel.traces":
    "是否向配置的 OpenTelemetry 收集器开关导出 trace 信号。需要延迟/调试追踪时启用，仅需要 metric/log 时可禁用。",
  "diagnostics.otel.metrics":
    "是否向配置的 OpenTelemetry 收集器导出 metrics 信号。用于运行态健康仪表盘，除非必须将指标量降低，否则保持启用。",
  "diagnostics.otel.logs":
    "除了本地日志之外，是否通过 OpenTelemetry 导出日志信号。在需要跨服务/代理集中日志关联时启用。",
  "diagnostics.otel.sampleRate":
    "Trace 采样率（0-1），控制导出到可观测后台的 trace 流量份额。降低采样率可减轻成本/开销，提高采样率有助于调试细节。",
  "diagnostics.otel.flushIntervalMs":
    "定期将缓冲区数据刷新至收集器的间隔（毫秒）。增加可减少导出频率，调低可在活跃事故响应期间更快获得可见性。",
  "diagnostics.cacheTrace.enabled":
    "记录嵌入式代理运行的缓存追踪快照（默认：false）。",
  "diagnostics.cacheTrace.filePath":
    "缓存追踪日志的 JSONL 输出路径（默认：$OPENCLAW_STATE_DIR/logs/cache-trace.jsonl）。",
  "diagnostics.cacheTrace.includeMessages":
    "在追踪输出中包含完整消息负载（默认：true）。",
  "diagnostics.cacheTrace.includePrompt":
    "在追踪输出中包含提示文本（默认：true）。",
  "diagnostics.cacheTrace.includeSystem":
    "在追踪输出中包含系统提示（默认：true）。",
  "tools.exec.applyPatch.enabled":
    "在工具策略允许时启用或禁用对 OpenAI 与 OpenAI Codex 模型的 apply_patch（默认：true）。",
  "tools.exec.applyPatch.workspaceOnly":
    "将 apply_patch 限制在工作区目录内（默认：true）。设为 false 可以写出工作区外（危险）。",
  "tools.exec.applyPatch.allowModels":
    '可选模型 ID 允许列表（例如 "gpt-5.4" 或 "openai/gpt-5.4"）。',
  "tools.loopDetection.enabled":
    "启用重复工具调用循环检测与回退安全检查（默认：false）。",
  "tools.loopDetection.historySize":
    "用于循环检测的工具历史窗口大小（默认：30）。",
  "tools.loopDetection.warningThreshold":
    "检测器启用时触发重复模式警告的阈值（默认：10）。",
  "tools.loopDetection.criticalThreshold":
    "检测器启用时触发重复模式临界阈值（默认：20）。",
  "tools.loopDetection.globalCircuitBreakerThreshold":
    "全局无进展触发断路器的阈值（默认：30）。",
  "tools.loopDetection.detectors.genericRepeat":
    "启用通用重复（相同工具/参数）循环检测（默认：true）。",
  "tools.loopDetection.detectors.knownPollNoProgress":
    "启用已知轮询工具无进展循环检测（默认：true）。",
  "tools.loopDetection.detectors.pingPong":
    "启用乒乓式循环检测（默认：true）。",
  "tools.exec.notifyOnExit":
    "为 true（默认）时，后台 exec 会话退出与节点 exec 生命周期事件会入队系统事件并请求心跳。",
  "tools.exec.notifyOnExitEmptySuccess":
    "为 true 时，即使后台 exec 成功退出且输出为空，也会入队完成系统事件（默认：false）。",
  "tools.exec.pathPrepend":
    "exec 运行（网关/沙箱）前添加到 PATH 的目录。",
  "tools.exec.safeBins":
    "允许 stdin-only 安全二进制在不显式配置白名单的情况下运行。",
  "tools.exec.strictInlineEval":
    "要求为解释器内联评估形式（如 `python -c`、`node -e`、`ruby -e` 或 `osascript -e`）提供显式审批。防止静默复用白名单，并将这些形式从 allow-always 降级为每次询问。",
  "tools.exec.safeBinTrustedDirs":
    "用于安全二进制路径检查的额外显式信任目录（PATH 条目永不自动信任）。",
  "tools.exec.safeBinProfiles":
    "可选的每个二进制 safe-bin 配置（位置限制 + 允许/拒绝标志）。",
  "tools.profile":
    "全局工具配置文件名称，用于在应用 allow/deny 覆盖前选择预定义的工具策略基线。用于跨代理保持一致的环境姿态，并保持配置文件名稳定。",
  "tools.alsoAllow":
    "在所选工具配置文件与默认策略之上叠加的额外工具 allowlist。保持列表精简且明确，以便审计时快速识别有意的策略例外。",
  "tools.byProvider":
    "以通道/提供者 ID 为键的逐个提供者的工具 allow/deny 覆盖，可针对不同表面定制能力。某个提供者需要比全局策略更严格控制时使用。",
  "agents.list[].tools.profile":
    "单代理的工具配置文件选择覆盖，当某代理需要不同的能力基线时使用。慎用以保持代理间策略差异具有意图且易于审查。",
  "agents.list[].tools.alsoAllow":
    "在全局与配置文件策略之上，单代理的附加工具 allowlist。保持精细以避免专用代理意外扩展权限。",
  "agents.list[].tools.byProvider":
    "单代理针对各提供者的工具策略覆盖，用于按通道控制能力。某一代理在某提供者上需要更严格限制时使用。",
  "tools.exec.approvalRunningNoticeMs":
    "exec 审批通过后显示进行中通知前的延迟（毫秒）。对快速命令增加延迟以减少闪烁，或者调低以加快操作者反馈。",
  "tools.links.enabled":
    "启用自动链接理解预处理，让 URL 在进入代理推理前即可被摘要。希望更丰富上下文时开启，在需要严格最小处理时关闭。",
  "tools.links.maxLinks":
    "链接理解每轮扩展的最大链接数。聊天密集时设低以控制时延/成本，关键多链接上下文时设高。",
  "tools.links.timeoutSeconds":
    "每个链接理解的超时预算（秒），未完成前跳过链接。保持有界，防止外部站点缓慢或不可达时严重阻塞。",
  "tools.links.models":
    "链接理解任务首选模型列表，按顺序作为备选。常规摘要先用轻量模型，需要时再用更重的模型。",
  "tools.links.scope":
    "控制链接理解相对于会话上下文与消息类型的触发时机。保持保守范围，避免在链接不可用时进行不必要抓取。",
  "tools.media.models":
    "当未设置特定模态模型列表时，媒体理解工具使用的共享 fallback 模型列表。与可用的多模态提供者保持一致，避免运行时频繁回退。",
  "tools.media.concurrency":
    "每轮跨图像、音频、视频任务的最大并发媒体理解操作数。在资源受限部署中调低，以防 CPU/网络饱和。",
  "tools.media.asyncCompletion.directSend":
    "为完成的异步音乐/视频生成任务启用直接通道发送，而不是依赖请求会话的唤醒路径。默认关闭，以便未附属的媒体完成仍保持传统模型交付流；需时再开启。",
  "tools.media.image.enabled":
    "启用图像理解，使附带或引用的图像可以被解释为文本上下文。仅需要纯文本操作或想避免图像处理开销时禁用。",
  "tools.media.image.maxBytes":
    "在策略跳过或截断前，接受的图像负载最大字节数。根据提供者限额与基础设施带宽设定合理上限。",
  "tools.media.image.maxChars":
    "图像理解输出在模型响应归一化后返回的最大字符数。缩小值可减少提示膨胀，大值适用于细节丰富的 OCR 任务。",
  "tools.media.image.prompt":
    "用于图像理解请求的指令模板，控制提取风格与细节层级。保持模板确定性以确保各轮与各通道输出一致。",
  "tools.media.image.timeoutSeconds":
    "每次图像理解请求的超时时长（秒）。高分辨率分析增加该值，延迟敏感工作流调小。",
  "tools.media.image.attachments":
    "图像输入的附件处理策略，定义哪些消息附件可触发图像分析。在不可信通道使用更严格的设置，减少意料之外的处理。",
  "tools.media.image.models":
    "专用于图像理解的模型优先顺序，可用于覆盖共享媒体模型。将最可靠的多模态模型放在首位，以减少回退。",
  "tools.media.image.scope":
    "控制何时尝试图像理解的范围选择器（如仅针对显式请求或扩展自动检测）。繁忙通道保持范围窄，以控制 token 与 API 消耗。",
  ...MEDIA_AUDIO_FIELD_HELP,
  "tools.media.video.enabled":
    "启用视频理解，让片段可以被总结为文本供下游推理与回复。处理视频不符合策略或成本过高时禁用。",
  "tools.media.video.maxBytes":
    "政策拒绝或截断前接受的视频负载最大字节数。根据提供者与基础设施限额调整，避免不断超时/失败。",
  "tools.media.video.maxChars":
    "保留的视频理解输出的最大字符数，以控制 prompt 增长。场景密集时提升，偏好简洁摘要时调低。",
  "tools.media.video.prompt":
    "视频理解的指令模板，描述所需摘要粒度与聚焦区域。保持稳定，确保在模型/提供者回退时输出质量可预期。",
  "tools.media.video.timeoutSeconds":
    "每个视频理解请求的超时时长（秒）。交互通道使用保守值，离线或批量处理可以适当延长。",
  "tools.media.video.attachments":
    "视频分析的附件资格策略，定义哪些消息文件可触发处理。在共享通道中明确设置以防意外的大媒体负载。",
  "tools.media.video.models":
    "在共享媒体回退前专用于视频理解的模型优先列表。优先选择对多模态视频支持良好的模型，以减少质量下降。",
  "tools.media.video.scope":
    "控制在何种事件中尝试视频理解的范围选择器。在嘈杂通道保持范围窄，仅在视频解析是工作流核心时再拓宽。",
  "skills.load.watch":
    "启用文件系统监听 skill 定义变更，以便在不重启整个进程的情况下应用更新。开发流程保持启用，无法变更的生产镜像可禁用。",
  "skills.load.watchDebounceMs":
    "在重载逻辑运行前合并快速 skill 文件变更的去抖窗口（毫秒）。频繁写入时加大以减少重载抖动，想要更快反馈时调小。",
  approvals:
    "审批路由控制，用于将 exec 与插件审批请求转发到原始会话之外的聊天目标。除非操作者需要带外审批可见性，否则保持关闭。",
  "approvals.exec":
    "管理 exec 审批转发行为，包括启用状态、路由模式、过滤器与显式目标。当审批提示必须送到运维通道而非仅限源线程时在此配置。",
  "approvals.exec.enabled":
    "启用将 exec 审批请求转发到配置的投递目标（默认：false）。低风险情况保持禁用，仅在需要人工审批响应显示在通道时开启。",
  "approvals.exec.mode":
    '控制审批提示的发送位置："session" 使用原始聊天，"targets" 使用配置目标，"both" 两者同时发送。以 "session" 作为基线，只有在运维工作流需要冗余时拓展。',
  "approvals.exec.agentFilter":
    '可选的代理 ID 允许列表（例如 `["primary", "ops-agent"]`），用于限制转发影响范围，避免向无关代理对应的通道发送通知。',
  "approvals.exec.sessionFilter":
    '可选的 session-key 过滤器，匹配子串或类正则模式（例如 `["discord:", "^agent:ops:"]`）。使用精确模式以确保只有预期审批上下文被转发。',
  "approvals.exec.targets":
    "仅在转发模式包含目标时使用的显式投递目标，每项包含通道与目标详情。保持目标列表的最小权限，并在允许广泛转发前验证每个目标。",
  "approvals.exec.targets[].channel":
    "用于转发审批的通道/提供者 ID，如 discord、slack 或插件通道 ID。仅使用有效通道 ID，以免审批因未知路线而静默失败。",
  "approvals.exec.targets[].to":
    "目标通道内的目标标识（根据提供者可能是通道 ID、用户 ID 或线程根），每个提供者的格式可能不同，需确认语义。",
  "approvals.exec.targets[].accountId":
    "多账号通道设置下的可选账号选择器，当审批必须走特定账号上下文时使用。仅在目标通道配置多个身份时启用。",
  "approvals.exec.targets[].threadId":
    "支持线程交付的通道的可选线程/主题目标。用于将审批流量保持在运维线程而不是主通道。",
  "approvals.plugin":
    "管理插件审批转发行为（启用、路由模式、过滤器、显式目标）。独立于 exec 审批转发。配置在插件审批提示必须送达运维通道时使用。",
  "approvals.plugin.enabled":
    "启用将插件审批请求转发到配置目标（默认：false）。与 approvals.exec.enabled 独立。",
  "approvals.plugin.mode":
    '控制插件审批提示的发送位置："session" 使用原始聊天，"targets" 使用配置目标，"both" 同时发送。',
  "approvals.plugin.agentFilter":
    '插件审批的可选代理 ID 允许列表（例如 `["primary", "ops-agent"]`），用于限制转发影响范围。',
  "approvals.plugin.sessionFilter":
    '插件审批的可选 session-key 过滤器（例如 `["discord:", "^agent:ops:"]`），保持精确模式以便仅转发预期审批上下文。',
  "approvals.plugin.targets":
    "当插件审批转发模式包含目标时使用的显式投递目标，每项包含通道与目标详情。",
  "approvals.plugin.targets[].channel":
    "用于转发插件审批的通道/提供者 ID，如 discord、slack 或插件通道 ID。",
  "approvals.plugin.targets[].to":
    "目标通道内的目标标识（通道 ID、用户 ID 或线程根，视提供者而定）。",
  "approvals.plugin.targets[].accountId":
    "多账号通道设置下的可选账号选择器，当插件审批必须通过特定账号上下文时使用。",
  "approvals.plugin.targets[].threadId":
    "支持线程交付的通道的可选线程/主题目标。",
  "tools.fs.workspaceOnly":
    "将文件系统工具（read/write/edit/apply_patch）限制在工作区目录内（默认：false）。",
  "tools.sessions.visibility":
    '控制哪些会话可被 sessions_list/sessions_history/sessions_send 目标化。（默认 "tree" = 当前会话 + spawn 的子代理；"self"=仅当前；"agent"=当前代理 ID 的任意会话；"all"=任意会话；跨代理仍需 tools.agentToAgent）。',
  "tools.message.allowCrossContextSend":
    "遗留覆盖：允许跨提供者的跨上下文发送。",
  "tools.message.crossContext.allowWithinProvider":
    "允许在同一提供者内发送到其他通道（默认：true）。",
  "tools.message.crossContext.allowAcrossProviders":
    "允许跨不同提供者发送（默认：false）。",
  "tools.message.crossContext.marker.enabled":
    "跨上下文发送时添加可见来源标记（默认：true）。",
  "tools.message.crossContext.marker.prefix":
    '跨上下文标记的文本前缀（支持 "{channel}" 占位符）。',
  "tools.message.crossContext.marker.suffix":
    '跨上下文标记的文本后缀（支持 "{channel}" 占位符）。',
  "tools.message.broadcast.enabled":
    "启用广播行为（默认：true）。",
  "tools.web.search.enabled":
    "启用受管的 web_search 和可选的 Codex 原生搜索（供支持的模型使用）。",
  "tools.web.search.provider":
    "搜索提供者 ID。如省略，将根据可用 API 密钥自动检测。",
  "tools.web.search.maxResults":
    "返回结果数量（1-10）。",
  "tools.web.search.timeoutSeconds":
    "web_search 请求的超时时间（秒）。",
  "tools.web.search.cacheTtlMinutes":
    "web_search 结果的缓存 TTL（分钟）。",
  "tools.web.search.openaiCodex.enabled":
    "为支持 Codex 的模型启用原生 Codex web search。",
  "tools.web.search.openaiCodex.mode":
    'Codex 原生 web search 模式："cached"（默认）或 "live"。',
  "tools.web.search.openaiCodex.allowedDomains":
    "传递给 Codex web_search 工具的可选域名白名单。",
  "tools.web.search.openaiCodex.contextSize":
    'Codex 搜索上下文大小提示："low"、"medium" 或 "high"。',
  "tools.web.search.openaiCodex.userLocation.country":
    "传递给 Codex web search 的近似国家。",
  "tools.web.search.openaiCodex.userLocation.region":
    "传递给 Codex web search 的近似地区/州。",
  "tools.web.search.openaiCodex.userLocation.city":
    "传递给 Codex web search 的近似城市。",
  "tools.web.search.openaiCodex.userLocation.timezone":
    "传递给 Codex web search 的近似时区。",
  "tools.web.search.brave.mode":
    'Brave Search 模式："web"（URL 结果）或 "llm-context"（为 LLM 基础提取的页面内容）。',
  "tools.web.fetch.enabled":
    "启用 web_fetch 工具（轻量级 HTTP 抓取）。",
  "tools.web.fetch.maxChars":
    "web_fetch 返回的最大字符数（会截断）。",
  "tools.web.fetch.maxCharsCap":
    "web_fetch maxChars 的硬上限（适用于配置与工具调用）。",
  "tools.web.fetch.maxResponseBytes":
    "超出此下载大小前会截断。",
  "tools.web.fetch.provider":
    "web fetch 的后备提供者 ID。",
  "tools.web.fetch.timeoutSeconds":
    "web_fetch 请求的超时时间（秒）。",
  "tools.web.fetch.cacheTtlMinutes":
    "web_fetch 结果的缓存 TTL（分钟）。",
  "tools.web.fetch.maxRedirects":
    "web_fetch 允许的最大重定向次数（默认：3）。",
  "tools.web.fetch.userAgent":
    "为 web_fetch 请求覆盖 User-Agent 头。",
  "tools.web.fetch.readability":
    "使用 Readability 从 HTML 中提取主内容（失败时回退到基础 HTML 清理）。",
  models:
    "模型目录根，涵盖提供者定义、合并/替换行为以及可选的 Bedrock 发现集成。在依赖生产故障恢复路径前保持提供者定义显式且经过验证。",
  "models.mode":
    '控制提供者目录行为："merge" 保留内建提供者并叠加自定义提供者，"replace" 只使用你配置的提供者。在 "merge" 模式下，匹配的提供者 ID 会保留非空 agents.list[].models.json baseUrl 值；apiKey 仅在当前 config/auth-profile 未通过 SecretRef 管理时才保留；SecretRef 管理的提供者会从当前源标记刷新 apiKey，匹配的模型 contextWindow/maxTokens 以显式与隐式项的更大值为准。',
  "models.providers":
    "以提供者 ID 为键的映射，包含连接/认证设置和具体模型定义。保持提供者键稳定，以便代理与工具在不同环境中引用时仍保持可搬迁。",
  "models.providers.*.baseUrl":
    "此提供者条目用于响应模型请求的基础 URL。使用 HTTPS 端点，并在需要时通过配置模板保持 URL 与环境一致。",
  "models.providers.*.apiKey":
    "当提供者要求直接密钥认证时所用的提供者凭据。通过 secret/env substitution 存储，避免在提交的配置中保存真实密钥。",
  "models.providers.*.auth":
    '选择提供者的认证方式："api-key" 为 API 密钥，"token" 为 Bearer 令牌，"oauth" 为 OAuth 凭据，"aws-sdk" 为 AWS 凭据解析。根据提供者要求选择。',
  "models.providers.*.api":
    "提供者 API 适配器选择，控制模型调用时的请求/响应兼容处理。使用与你的上游提供者协议匹配的适配器，避免特性不匹配。",
  "models.providers.*.injectNumCtxForOpenAICompat":
    "控制是否为配置了 OpenAI 兼容适配器（`openai-completions`）的 Ollama 提供者注入 `options.num_ctx`。默认 true；只有当你的代理/上游拒绝未知 `options` 字段时才设为 false。",
  "models.providers.*.headers":
    "合并到提供者请求中的静态 HTTP 头，用于租户路由、代理认证或自定义网关需求。谨慎使用，将敏感头值保存在 secret 中。",
  "models.providers.*.authHeader":
    "若为 true，即便存在其他认证方式也通过 HTTP Authorization 头发送凭据。仅在你的提供者或代理明确要求转发 Authorization 时使用。",
  "models.providers.*.request":
    "模型提供者请求的可选覆盖，包括额外头、认证覆盖、代理路由与 TLS 客户端设置。仅当上游或企业网络路径需要自定义传输时使用。",
  "models.providers.*.request.headers":
    "在默认附加与认证解析后合并到提供者请求中的额外头。",
  "models.providers.*.request.auth":
    "该提供者请求的认证行为覆盖。",
  "models.providers.*.request.auth.mode":
    '认证覆盖模式："provider-default"、"authorization-bearer" 或 "header"。',
  "models.providers.*.request.auth.token":
    "当 auth 模式为 authorization-bearer 时使用的 Bearer 令牌。",
  "models.providers.*.request.auth.headerName":
    "auth 模式为 header 时使用的自定义认证头名称。",
  "models.providers.*.request.auth.value":
    "auth 模式为 header 时使用的自定义认证头值。",
  "models.providers.*.request.auth.prefix":
    "auth 模式为 header 时可选地在 request.auth.value 前加上的前缀。",
  "models.providers.*.request.proxy":
    '模型提供者请求的可选代理覆盖。使用 "env-proxy" 尊重环境代理设置，或用 "explicit-proxy" 通过特定代理 URL 路由。',
  "models.providers.*.request.proxy.mode":
    '模型提供者请求的代理覆盖模式："env-proxy" 或 "explicit-proxy"。',
  "models.providers.*.request.proxy.url":
    "当 request.proxy.mode 为 explicit-proxy 时使用的显式代理 URL。URL 中嵌入的凭据被视为敏感并在快照中脱敏。",
  "models.providers.*.request.proxy.tls":
    "连接配置代理时可选的 TLS 设置。",
  "models.providers.*.request.proxy.tls.ca":
    "用于验证代理 TLS 证书链的自定义 CA 包。",
  "models.providers.*.request.proxy.tls.cert":
    "在需要双向 TLS 时呈现给代理的客户端 TLS 证书。",
  "models.providers.*.request.proxy.tls.key":
    "与 request.proxy.tls.cert 配对的私钥，用于代理双向 TLS。",
  "models.providers.*.request.proxy.tls.passphrase":
    "用以解密 request.proxy.tls.key 的可选密码。",
  "models.providers.*.request.proxy.tls.serverName":
    "建立与代理的 TLS 时可选的 SNI/服务器名称覆盖。",
  "models.providers.*.request.proxy.tls.insecureSkipVerify":
    "跳过代理 TLS 证书验证。仅在受控开发环境使用。",
  "models.providers.*.request.tls":
    "直接连接上游模型端点时的可选 TLS 设置。",
  "models.providers.*.request.tls.ca":
    "用于验证上游 TLS 证书链的自定义 CA 包。",
  "models.providers.*.request.tls.cert":
    "在需要双向 TLS 时向上游端点呈现的客户端 TLS 证书。",
  "models.providers.*.request.tls.key":
    "与 request.tls.cert 配对的私钥，用于上游双向 TLS。",
  "models.providers.*.request.tls.passphrase":
    "解密 request.tls.key 的可选密码。",
  "models.providers.*.request.tls.serverName":
    "建立与上游 TLS 时可选的 SNI/服务器名称覆盖。",
  "models.providers.*.request.tls.insecureSkipVerify":
    "跳过上游 TLS 证书验证。仅在受控开发环境使用。",
  "models.providers.*.models":
    "为提供者声明的模型列表（包含标识符、元数据与可选的兼容/费用提示）。保持 ID 与提供者目录值一致，以便选择与回退正常解析。",
  auth:
    "认证配置根，用于多配置文件的提供者凭据与基于冷却的故障转移排序。保持配置精简明确，以便自动故障恢复行为具备可审计性。",
  "channels.matrix.allowBots":
    '允许来自其他配置的 Matrix 机器人账户的消息触发回复（默认：false）。设置为 "mentions" 时仅接受显式提到本机器人提交的消息。',
  "channels.mattermost.botToken":
    "在 Mattermost 系统控制台 -> 集成 -> 机器人账户中创建的 bot 令牌。",
  "channels.mattermost.baseUrl":
    "你的 Mattermost 服务器基础 URL（例如 https://chat.example.com）。",
  "channels.mattermost.chatmode":
    '在提及时回复频道消息（"oncall"）、在触发字符（">" 或 "!"）时回复（"onchar"），或对每条消息回复（"onmessage"）。',
  "channels.mattermost.oncharPrefixes":
    'onchar 模式的触发前缀（默认：[">", "!"]）。',
  "channels.mattermost.requireMention":
    "在频道中必须 @ 提及后才响应（默认：true）。",
  "auth.profiles": "命名认证配置文件（提供者 + 模式 + 可选邮箱）。",
  "auth.order":
    "每个提供者的认证配置文件 ID 顺序（用于自动故障转移）。",
  "auth.cooldowns":
    "在计费相关失败和重试窗口后对配置文件进行临时抑制的冷却/退避控制。用于避免对仍被封锁的配置文件快速重新选择。",
  "auth.cooldowns.billingBackoffHours":
    "配置文件因计费/余额不足失败时的基础退避时间（小时，默认：5）。",
  "auth.cooldowns.billingBackoffHoursByProvider":
    "针对各提供者的计费退避小时数可选覆盖。",
  "auth.cooldowns.billingMaxHours":
    "计费退避的上限小时数（默认：24）。",
  "auth.cooldowns.authPermanentBackoffMinutes":
    "针对高置信度 auth_permanent 错误的基础退避时间（分钟，默认：10）。保持低于计费退避，以便上游认证问题恢复后配置文件能自动重新启用。",
  "auth.cooldowns.authPermanentMaxMinutes":
    "auth_permanent 退避的上限分钟数（默认：60）。",
  "auth.cooldowns.failureWindowHours":
    "退避计数器使用的失败时间窗口（小时，默认：24）。",
  "auth.cooldowns.overloadedProfileRotations":
    "在遇到 overload 错误后，同一提供者允许的认证配置文件轮换最大次数（默认：1），超过则切换到模型回退。",
  "auth.cooldowns.overloadedBackoffMs":
    "在尝试 overloaded 提供者/配置文件轮换前的固定延迟（毫秒，默认：0）。",
  "auth.cooldowns.rateLimitedProfileRotations":
    "遇到 rate_limit 错误时，同一提供者可轮换的认证配置文件最大次数（默认：1），超过则切换模型回退。",
  "agents.defaults.workspace":
    "默认工作区路径，会暴露给代理运行时工具以获取文件上下文和仓库感知行为。从 wrapper 启动时显式设置此项，以保持路径解析确定。",
  "agents.defaults.contextInjection":
    '控制何时将工作区引导文件注入系统提示：“always”（默认）或在助手响应完成后的安全延续轮次中使用 "continuation-skip"。',
  "agents.defaults.bootstrapMaxChars":
    "注入系统提示的每个工作区引导文件的最大字符数（默认：20000）。",
  "agents.defaults.bootstrapTotalMaxChars":
    "所有注入工作区引导文件的字符总上限（默认：150000）。",
  "agents.defaults.bootstrapPromptTruncationWarning":
    '在引导文件被截断时向代理注入可见警告文本："off"、"once"（默认）或 "always"。',
  "agents.defaults.repoRoot":
    "可选的仓库根路径，在系统提示运行时行中显示（覆盖自动检测）。",
  "agents.defaults.envelopeTimezone":
    '消息信封使用的时区（"utc"、"local"、"user" 或 IANA 时区字符串）。',
  "agents.defaults.envelopeTimestamp":
    '是否在消息信封中包含绝对时间戳（"on" 或 "off"）。',
  "agents.defaults.envelopeElapsed":
    '是否在消息信封中包含已用时（"on" 或 "off"）。',
  "agents.defaults.models":
    "配置的模型目录（键为完整的 提供者/模型 ID）。",
  "agents.defaults.memorySearch":
    "对 MEMORY.md 与 memory/*.md 进行向量搜索（支持按代理覆盖）。",
  "agents.defaults.memorySearch.enabled":
    "此代理配置的 memory search 索引与检索主开关。希望实现语义回忆时启用，想要完全无状态响应时禁用。",
  "agents.defaults.memorySearch.sources":
    '选择需要索引的来源："memory" 读取 MEMORY.md 与 memory 文件，"sessions" 包含会话历史。除非需要从先前聊天转录中检索，否则保持 ["memory"]。',
  "agents.defaults.memorySearch.extraPaths":
    "在默认 memory 文件之外添加额外目录或 .md 文件进行索引。当关键参考文档位于仓库其它位置时使用；启用多模态 memory 时，这些路径下匹配的图像/音频文件也会参与索引。",
  "agents.defaults.memorySearch.qmd":
    "当某代理需要查询另一个代理的转录集合时使用 QMD，QMD 专用的额外集合可让你在不将所有内容展开到共享命名空间的情况下启用跨代理记忆检索。",
  "agents.defaults.memorySearch.qmd.extraCollections":
    "在需要跨代理定向转录搜索时添加集合；在此处添加集合可以在不创建共享全局转录命名空间的情况下限定 QMD 回忆范围。",
  "agents.defaults.memorySearch.qmd.extraCollections.path":
    "为额外的 QMD 集合指定绝对路径或基于工作区的相对路径；保持指向实际希望此代理搜索的转录目录或笔记文件夹。",
  "agents.defaults.memorySearch.qmd.extraCollections.name":
    "仅在路径指向代理工作区之外时保留配置的集合标签；路径在工作区内即使提供名称也仍保持代理作用域。用于位于工作区之外但需要跨代理共享的转录根。",
  "agents.defaults.memorySearch.qmd.extraCollections.pattern":
    "使用 glob 模式限制集合内哪些文件会被索引；除非需要更窄子集，否则保留默认 `**/*.md`。",
  "agents.defaults.memorySearch.multimodal":
    "多模态 memory 设置（可选），用于从配置的 extraPaths 索引图像与音频文件。除非你的嵌入模型明确支持跨模态嵌入，否则保持关闭，并在启用时将 `memorySearch.fallback` 设为 \"none\"。索引期间匹配的二进制文件会上传到配置的远程嵌入提供者。",
  "agents.defaults.memorySearch.multimodal.enabled":
    "启用 extraPaths 中的图像/音频 memory 索引。目前需要 Gemini embedding-2，保持默认 memory 根仅限 Markdown，禁用 memory-search 的 fallback 提供者，并将匹配的二进制内容上传到配置的远程嵌入提供者。",
  "agents.defaults.memorySearch.multimodal.modalities":
    '选择从 extraPaths 索引的多模态文件类型："image"、"audio" 或 "all"。保持范围窄以避免无意中索引大量二进制语料。',
  "agents.defaults.memorySearch.multimodal.maxFileBytes":
    "为每个多模态文件设定最大允许字节数，超过则在 memory 索引时跳过。用于限制上传成本与索引延迟，或在面对质量较高的短音频片段时提高该值。",
  "agents.defaults.memorySearch.experimental.sessionMemory":
    "将会话转录索引进 memory search，以便回复可以引用早期聊天轮次。只有在需要转录回忆时启用，因为索引成本与存储会增加。",
  "agents.defaults.memorySearch.provider":
    '选择用于构建/查询 memory 向量的嵌入后台："openai"、"gemini"、"voyage"、"mistral"、"bedrock"、"ollama" 或 "local"。保持最可靠的提供者，并配置 fallback 以提升鲁棒性。',
  "agents.defaults.memorySearch.model":
    "所选 memory 提供者在需要非默认模型时使用的嵌入模型覆盖。只有在需要对回忆质量/成本进行显式调优时才设置。",
  "agents.defaults.memorySearch.outputDimensionality":
    "针对 memory 嵌入的提供者级输出向量维度覆盖。Gemini embedding-2 支持 768、1536 或 3072；Bedrock 系列如 Titan V2、Cohere V4、Nova 对应各自允许的维度。更改此值会导致向量维度不一致，因此需要重新索引。",
  "agents.defaults.memorySearch.remote.baseUrl":
    "覆盖嵌入 API 端点，例如一个 OpenAI 兼容的代理或自定义 Gemini 基础 URL。仅在需要通过自己的网关或供应商端点路由时使用，否则沿用提供者默认值。",
  "agents.defaults.memorySearch.remote.apiKey":
    "为 memory 索引与查询嵌入提供的专用 API 密钥。当 memory 嵌入需要与全局默认或环境变量不同的凭据时使用。",
  "agents.defaults.memorySearch.remote.headers":
    "向远程嵌入请求添加自定义 HTTP 头，并与提供者默认合并。用于代理认证或租户路由头，保持值最小以避免泄露敏感元数据。",
  "agents.defaults.memorySearch.remote.batch.enabled":
    "启用支持批处理的嵌入 API（OpenAI/Gemini）以提升大规模索引吞吐。除非调试批处理失败或运行极小工作负载，否则保持启用。",
  "agents.defaults.memorySearch.remote.batch.wait":
    "等待嵌入批处理任务完全完成后再结束索引操作。保持启用以获得确定性索引状态；如果可以接受延迟一致性，可禁用。",
  "agents.defaults.memorySearch.remote.batch.concurrency":
    "限制索引过程中同时运行的嵌入批处理作业数量（默认：2）。为了更快的大规模索引可慎增此值，但要注意提供者速率限制与排队错误。",
  "agents.defaults.memorySearch.remote.batch.pollIntervalMs":
    "以毫秒为单位控制系统轮询提供者 API 查询批处理作业状态的频率（默认：2000）。频率低可减少 API 交互，频率高可更快感知完成。",
  "agents.defaults.memorySearch.remote.batch.timeoutMinutes":
    "限制一个完整嵌入批处理操作的最大等待时间（分钟，默认：60）。大型语料或慢速提供者可提高此值；自动化密集时可调小以快速失败。",
  "agents.defaults.memorySearch.local.modelPath":
    "指定本地 memory search 使用的嵌入模型源，例如 GGUF 文件路径或 `hf:` URI。仅在 provider 为 `local` 时使用，并在大规模重建前确认模型兼容性。",
  "agents.defaults.memorySearch.fallback":
    '主嵌入失败时使用的备用提供者："openai"、"gemini"、"voyage"、"mistral"、"ollama"、"local" 或 "none"。生产环境配置实际备用，只有在偏好显式失败时才设为 "none"。',
  "agents.defaults.memorySearch.store.path":
    "为每个代理指定 SQLite memory 索引在磁盘上的存储位置。除非需要自定义存储或备份策略，否则保持默认 `~/.openclaw/memory/{agentId}.sqlite`。",
  "agents.defaults.memorySearch.store.vector.enabled":
    "启用 memory search 中用于向量相似查询的 sqlite-vec 扩展（默认：true）。正常语义回忆保持启用，仅在调试或仅用回退时禁用。",
  "agents.defaults.memorySearch.store.vector.extensionPath":
    "覆盖自动发现的 sqlite-vec 扩展库路径（`.dylib`/`.so`/`.dll`）。在运行时无法自动找到 sqlite-vec 或需要固定已知良好构建时使用。",
  "agents.defaults.memorySearch.chunking.tokens":
    "在进行嵌入/索引前切分 memory 来源时使用的 token 分块大小。为每块保留更广上下文时增大，为提高精确查找时调小。",
  "agents.defaults.memorySearch.chunking.overlap":
    "相邻 memory 分块之间的 token 重叠量，以在划分边界保持上下文连贯。适度重叠可减少边界遗漏，同时避免过度膨胀索引。",
  "agents.defaults.memorySearch.query.maxResults":
    "memory 搜索返回结果的最大数量，在下游 rerank 与提示注入前生效。想要更广召回时增大，想要更紧凑提示与更快响应时减小。",
  "agents.defaults.memorySearch.query.minScore":
    "包含在最终回忆输出中的记忆结果的最低相关分值阈值。提高可减少弱/噪音匹配，降低则允许更宽松的检索。",
  "agents.defaults.memorySearch.query.hybrid.enabled":
    "将 BM25 关键词匹配与向量相似度相结合，以更好地处理中等程度精确 + 语义查询。除非你需要隔离排名行为，否则保持启用。",
  "agents.defaults.memorySearch.query.hybrid.vectorWeight":
    "控制语义相似度在混合排名中的权重（0-1）。当意译匹配比精确词更重要时提高；需要更严格依赖关键词时降低。",
  "agents.defaults.memorySearch.query.hybrid.textWeight":
    "控制 BM25 关键词相关性在混合排名中的权重（0-1）。需要精确词匹配时增加；想让语义匹配靠前时减少。",
  "agents.defaults.memorySearch.query.hybrid.candidateMultiplier":
    "在重新排序前扩展候选池大小（默认：4）。在嘈杂语料中提高以改善召回，但会增加计算与略微放慢搜索。",
  "agents.defaults.memorySearch.query.hybrid.mmr.enabled":
    "添加 MMR 重新排序以让结果更多样，减少单个回答窗口中的近重复段。召回看起来重复时启用，严格分数排序时保持关闭。",
  "agents.defaults.memorySearch.query.hybrid.mmr.lambda":
    "设置 MMR 中相关性与多样性的平衡（0 = 最多样，1 = 最相关，默认：0.7）。降低可减少重复；升高则保持高相关但可能重复。",
  "agents.defaults.memorySearch.query.hybrid.temporalDecay.enabled":
    "应用时间衰减，使较新 memory 在分数接近时胜过陈旧 memory。需要时序性时启用，不需要时保持关闭。",
  "agents.defaults.memorySearch.query.hybrid.temporalDecay.halfLifeDays":
    "当启用时间衰减时控制陈旧 memory 降级速度（半衰期，天，默认：30）。值越低越强调近期上下文。",
  "agents.defaults.memorySearch.cache.maxEntries":
    "Sets a best-effort upper bound on cached embeddings kept in SQLite for memory search. Use this when controlling disk growth matters more than peak reindex speed.",
  "agents.defaults.memorySearch.sync.onSessionStart":
    "Triggers a memory index sync when a session starts so early turns see fresh memory content. Keep enabled when startup freshness matters more than initial turn latency.",
  "agents.defaults.memorySearch.sync.onSearch":
    "Uses lazy sync by scheduling reindex on search after content changes are detected. Keep enabled for lower idle overhead, or disable if you require pre-synced indexes before any query.",
  "agents.defaults.memorySearch.sync.watch":
    "Watches memory files and schedules index updates from file-change events (chokidar). Enable for near-real-time freshness; disable on very large workspaces if watch churn is too noisy.",
  "agents.defaults.memorySearch.sync.watchDebounceMs":
    "Debounce window in milliseconds for coalescing rapid file-watch events before reindex runs. Increase to reduce churn on frequently-written files, or lower for faster freshness.",
  "agents.defaults.memorySearch.sync.sessions.deltaBytes":
    "Requires at least this many newly appended bytes before session transcript changes trigger reindex (default: 100000). Increase to reduce frequent small reindexes, or lower for faster transcript freshness.",
  "agents.defaults.memorySearch.sync.sessions.deltaMessages":
    "Requires at least this many appended transcript messages before reindex is triggered (default: 50). Lower this for near-real-time transcript recall, or raise it to reduce indexing churn.",
  "agents.defaults.memorySearch.sync.sessions.postCompactionForce":
    "Forces a session memory-search reindex after compaction-triggered transcript updates (default: true). Keep enabled when compacted summaries must be immediately searchable, or disable to reduce write-time indexing pressure.",
  ui: "UI presentation settings for accenting and assistant identity shown in control surfaces. Use this for branding and readability customization without changing runtime behavior.",
  "ui.seamColor":
    "Primary accent color used by UI surfaces for emphasis, badges, and visual identity cues. Use high-contrast values that remain readable across light/dark themes.",
  "ui.assistant":
    "Assistant display identity settings for name and avatar shown in UI surfaces. Keep these values aligned with your operator-facing persona and support expectations.",
  "ui.assistant.name":
    "Display name shown for the assistant in UI views, chat chrome, and status contexts. Keep this stable so operators can reliably identify which assistant persona is active.",
  "ui.assistant.avatar":
    "Assistant avatar image source used in UI surfaces (URL, path, or data URI depending on runtime support). Use trusted assets and consistent branding dimensions for clean rendering.",
  plugins:
    "Plugin system controls for enabling extensions, constraining load scope, configuring entries, and tracking installs. Keep plugin policy explicit and least-privilege in production environments.",
  "plugins.enabled":
    "Enable or disable plugin/extension loading globally during startup and config reload (default: true). Keep enabled only when extension capabilities are required by your deployment.",
  "plugins.allow":
    "Optional allowlist of plugin IDs; when set, only listed plugins are eligible to load. Configured bundled chat channels can still activate their bundled plugin when the channel is explicitly enabled in config. Use this to enforce approved extension inventories in controlled environments.",
  "plugins.deny":
    "Optional denylist of plugin IDs that are blocked even if allowlists or paths include them. Use deny rules for emergency rollback and hard blocks on risky plugins.",
  "plugins.load":
    "Plugin loader configuration group for specifying filesystem paths where plugins are discovered. Keep load paths explicit and reviewed to avoid accidental untrusted extension loading.",
  "plugins.load.paths":
    "Additional plugin files or directories scanned by the loader beyond built-in defaults. Use dedicated extension directories and avoid broad paths with unrelated executable content.",
  "plugins.slots":
    "Selects which plugins own exclusive runtime slots such as memory so only one plugin provides that capability. Use explicit slot ownership to avoid overlapping providers with conflicting behavior.",
  "plugins.slots.memory":
    'Select the active memory plugin by id, or "none" to disable memory plugins.',
  "plugins.slots.contextEngine":
    "Selects the active context engine plugin by id so one plugin provides context orchestration behavior.",
  "plugins.entries":
    "Per-plugin settings keyed by plugin ID including enablement and plugin-specific runtime configuration payloads. Use this for scoped plugin tuning without changing global loader policy.",
  "plugins.entries.*.enabled":
    "Per-plugin enablement override for a specific entry, applied on top of global plugin policy (restart required). Use this to stage plugin rollout gradually across environments.",
  "plugins.entries.*.hooks":
    "Per-plugin typed hook policy controls for core-enforced safety gates. Use this to constrain high-impact hook categories without disabling the entire plugin.",
  "plugins.entries.*.hooks.allowPromptInjection":
    "Controls whether this plugin may mutate prompts through typed hooks. Set false to block `before_prompt_build` and ignore prompt-mutating fields from legacy `before_agent_start`, while preserving legacy `modelOverride` and `providerOverride` behavior.",
  "plugins.entries.*.subagent":
    "Per-plugin subagent runtime controls for model override trust and allowlists. Keep this unset unless a plugin must explicitly steer subagent model selection.",
  "plugins.entries.*.subagent.allowModelOverride":
    "Explicitly allows this plugin to request provider/model overrides in background subagent runs. Keep false unless the plugin is trusted to steer model selection.",
  "plugins.entries.*.subagent.allowedModels":
    'Allowed override targets for trusted plugin subagent runs as canonical "provider/model" refs. Use "*" only when you intentionally allow any model.',
  "plugins.entries.*.apiKey":
    "Optional API key field consumed by plugins that accept direct key configuration in entry settings. Use secret/env substitution and avoid committing real credentials into config files.",
  "plugins.entries.*.env":
    "Per-plugin environment variable map injected for that plugin runtime context only. Use this to scope provider credentials to one plugin instead of sharing global process environment.",
  "plugins.entries.*.config":
    "Plugin-defined configuration payload interpreted by that plugin's own schema and validation rules. Use only documented fields from the plugin to prevent ignored or invalid settings.",
  "plugins.installs":
    "CLI-managed install metadata (used by `openclaw plugins update` to locate install sources).",
  "plugins.installs.*.source": 'Install source ("npm", "archive", or "path").',
  "plugins.installs.*.spec": "Original npm spec used for install (if source is npm).",
  "plugins.installs.*.sourcePath": "Original archive/path used for install (if any).",
  "plugins.installs.*.installPath": "Resolved install directory for the installed plugin bundle.",
  "plugins.installs.*.version": "Version recorded at install time (if available).",
  "plugins.installs.*.resolvedName": "Resolved npm package name from the fetched artifact.",
  "plugins.installs.*.resolvedVersion":
    "Resolved npm package version from the fetched artifact (useful for non-pinned specs).",
  "plugins.installs.*.resolvedSpec":
    "Resolved exact npm spec (<name>@<version>) from the fetched artifact.",
  "plugins.installs.*.integrity":
    "Resolved npm dist integrity hash for the fetched artifact (if reported by npm).",
  "plugins.installs.*.shasum":
    "Resolved npm dist shasum for the fetched artifact (if reported by npm).",
  "plugins.installs.*.resolvedAt":
    "ISO timestamp when npm package metadata was last resolved for this install record.",
  "plugins.installs.*.installedAt": "ISO timestamp of last install/update.",
  "plugins.installs.*.marketplaceName":
    "Marketplace display name recorded for marketplace-backed plugin installs (if available).",
  "plugins.installs.*.marketplaceSource":
    "Original marketplace source used to resolve the install (for example a repo path or Git URL).",
  "plugins.installs.*.marketplacePlugin":
    "Plugin entry name inside the source marketplace, used for later updates.",
  "agents.list.*.identity.avatar":
    "Agent avatar (workspace-relative path, http(s) URL, or data URI).",
  "agents.defaults.model.primary": "Primary model (provider/model).",
  "agents.defaults.model.fallbacks":
    "Ordered fallback models (provider/model). Used when the primary model fails.",
  "agents.defaults.imageModel.primary":
    "Optional image model (provider/model) used when the primary model lacks image input.",
  "agents.defaults.imageModel.fallbacks": "Ordered fallback image models (provider/model).",
  "agents.defaults.imageGenerationModel.primary":
    "Optional image-generation model (provider/model) used by the shared image generation capability.",
  "agents.defaults.imageGenerationModel.fallbacks":
    "Ordered fallback image-generation models (provider/model).",
  "agents.defaults.videoGenerationModel.primary":
    "Optional video-generation model (provider/model) used by the shared video generation capability.",
  "agents.defaults.videoGenerationModel.fallbacks":
    "Ordered fallback video-generation models (provider/model).",
  "agents.defaults.musicGenerationModel.primary":
    "Optional music-generation model (provider/model) used by the shared music generation capability.",
  "agents.defaults.musicGenerationModel.fallbacks":
    "Ordered fallback music-generation models (provider/model).",
  "agents.defaults.mediaGenerationAutoProviderFallback":
    "When true (default), shared image, music, and video generation automatically appends other auth-backed provider defaults after explicit primary/fallback refs. Set false to disable implicit cross-provider fallback while keeping explicit fallbacks.",
  "agents.defaults.pdfModel.primary":
    "Optional PDF model (provider/model) for the PDF analysis tool. Defaults to imageModel, then session model.",
  "agents.defaults.pdfModel.fallbacks": "Ordered fallback PDF models (provider/model).",
  "agents.defaults.pdfMaxBytesMb":
    "Maximum PDF file size in megabytes for the PDF tool (default: 10).",
  "agents.defaults.pdfMaxPages":
    "Maximum number of PDF pages to process for the PDF tool (default: 20).",
  "agents.defaults.imageMaxDimensionPx":
    "Max image side length in pixels when sanitizing transcript/tool-result image payloads (default: 1200).",
  "agents.defaults.cliBackends": "Optional CLI backends for text-only fallback (claude-cli, etc.).",
  "agents.defaults.compaction":
    "Compaction tuning for when context nears token limits, including history share, reserve headroom, and pre-compaction memory flush behavior. Use this when long-running sessions need stable continuity under tight context windows.",
  "agents.defaults.compaction.mode":
    'Compaction strategy mode: "default" uses baseline behavior, while "safeguard" applies stricter guardrails to preserve recent context. Keep "default" unless you observe aggressive history loss near limit boundaries.',
  "agents.defaults.compaction.provider":
    "Id of a registered compaction provider plugin used for summarization. When set and the provider is registered, its summarize() method is called instead of the built-in summarizeInStages pipeline. Falls back to built-in on provider failure. Leave unset to use the default built-in summarization.",
  "agents.defaults.compaction.reserveTokens":
    "Token headroom reserved for reply generation and tool output after compaction runs. Use higher reserves for verbose/tool-heavy sessions, and lower reserves when maximizing retained history matters more.",
  "agents.defaults.compaction.keepRecentTokens":
    "Minimum token budget preserved from the most recent conversation window during compaction. Use higher values to protect immediate context continuity and lower values to keep more long-tail history.",
  "agents.defaults.compaction.reserveTokensFloor":
    "Minimum floor enforced for reserveTokens in Pi compaction paths (0 disables the floor guard). Use a non-zero floor to avoid over-aggressive compression under fluctuating token estimates.",
  "agents.defaults.compaction.maxHistoryShare":
    "Maximum fraction of total context budget allowed for retained history after compaction (range 0.1-0.9). Use lower shares for more generation headroom or higher shares for deeper historical continuity.",
  "agents.defaults.compaction.identifierPolicy":
    'Identifier-preservation policy for compaction summaries: "strict" prepends built-in opaque-identifier retention guidance (default), "off" disables this prefix, and "custom" uses identifierInstructions. Keep "strict" unless you have a specific compatibility need.',
  "agents.defaults.compaction.identifierInstructions":
    'Custom identifier-preservation instruction text used when identifierPolicy="custom". Keep this explicit and safety-focused so compaction summaries do not rewrite opaque IDs, URLs, hosts, or ports.',
  "agents.defaults.compaction.recentTurnsPreserve":
    "Number of most recent user/assistant turns kept verbatim outside safeguard summarization (default: 3). Raise this to preserve exact recent dialogue context, or lower it to maximize compaction savings.",
  "agents.defaults.compaction.qualityGuard":
    "Optional quality-audit retry settings for safeguard compaction summaries. Leave this disabled unless you explicitly want summary audits and one-shot regeneration on failed checks.",
  "agents.defaults.compaction.qualityGuard.enabled":
    "Enables summary quality audits and regeneration retries for safeguard compaction. Default: false, so safeguard mode alone does not turn on retry behavior.",
  "agents.defaults.compaction.qualityGuard.maxRetries":
    "Maximum number of regeneration retries after a failed safeguard summary quality audit. Use small values to bound extra latency and token cost.",
  "agents.defaults.compaction.postIndexSync":
    'Controls post-compaction session memory reindex mode: "off", "async", or "await" (default: "async"). Use "await" for strongest freshness, "async" for lower compaction latency, and "off" only when session-memory sync is handled elsewhere.',
  "agents.defaults.compaction.postCompactionSections":
    'AGENTS.md H2/H3 section names re-injected after compaction so the agent reruns critical startup guidance. Leave unset to use "Session Startup"/"Red Lines" with legacy fallback to "Every Session"/"Safety"; set to [] to disable reinjection entirely.',
  "agents.defaults.compaction.timeoutSeconds":
    "Maximum time in seconds allowed for a single compaction operation before it is aborted (default: 900). Increase this for very large sessions that need more time to summarize, or decrease it to fail faster on unresponsive models.",
  "agents.defaults.compaction.model":
    "Optional provider/model override used only for compaction summarization. Set this when you want compaction to run on a different model than the session default, and leave it unset to keep using the primary agent model.",
  "agents.defaults.compaction.truncateAfterCompaction":
    "When enabled, rewrites the session JSONL file after compaction to remove entries that were summarized. Prevents unbounded file growth in long-running sessions with many compaction cycles. Default: false.",
  "agents.defaults.compaction.notifyUser":
    "When enabled, sends a brief compaction notice to the user (e.g. '🧹 Compacting context...') when compaction starts. Disabled by default to keep compaction silent and non-intrusive.",
  "agents.defaults.compaction.memoryFlush":
    "Pre-compaction memory flush settings that run an agentic memory write before heavy compaction. Keep enabled for long sessions so salient context is persisted before aggressive trimming.",
  "agents.defaults.compaction.memoryFlush.enabled":
    "Enables pre-compaction memory flush before the runtime performs stronger history reduction near token limits. Keep enabled unless you intentionally disable memory side effects in constrained environments.",
  "agents.defaults.compaction.memoryFlush.softThresholdTokens":
    "Threshold distance to compaction (in tokens) that triggers pre-compaction memory flush execution. Use earlier thresholds for safer persistence, or tighter thresholds for lower flush frequency.",
  "agents.defaults.compaction.memoryFlush.forceFlushTranscriptBytes":
    'Forces pre-compaction memory flush when transcript file size reaches this threshold (bytes or strings like "2mb"). Use this to prevent long-session hangs even when token counters are stale; set to 0 to disable.',
  "agents.defaults.compaction.memoryFlush.prompt":
    "User-prompt template used for the pre-compaction memory flush turn when generating memory candidates. Use this only when you need custom extraction instructions beyond the default memory flush behavior.",
  "agents.defaults.compaction.memoryFlush.systemPrompt":
    "System-prompt override for the pre-compaction memory flush turn to control extraction style and safety constraints. Use carefully so custom instructions do not reduce memory quality or leak sensitive context.",
  "agents.defaults.embeddedPi":
    "Embedded Pi runner hardening controls for how workspace-local Pi settings are trusted and applied in OpenClaw sessions.",
  "agents.defaults.embeddedPi.projectSettingsPolicy":
    'How embedded Pi handles workspace-local `.pi/config/settings.json`: "sanitize" (default) strips shellPath/shellCommandPrefix, "ignore" disables project settings entirely, and "trusted" applies project settings as-is.',
  "agents.defaults.humanDelay.mode": 'Delay style for block replies ("off", "natural", "custom").',
  "agents.defaults.humanDelay.minMs": "Minimum delay in ms for custom humanDelay (default: 800).",
  "agents.defaults.humanDelay.maxMs": "Maximum delay in ms for custom humanDelay (default: 2500).",
  commands:
    "Controls chat command surfaces, owner gating, and elevated command access behavior across providers. Keep defaults unless you need stricter operator controls or broader command availability.",
  "commands.native":
    "Registers native slash/menu commands with channels that support command registration (Discord, Slack, Telegram). Keep enabled for discoverability unless you intentionally run text-only command workflows.",
  "commands.nativeSkills":
    "Registers native skill commands so users can invoke skills directly from provider command menus where supported. Keep aligned with your skill policy so exposed commands match what operators expect.",
  "commands.text":
    "Enables text-command parsing in chat input in addition to native command surfaces where available. Keep this enabled for compatibility across channels that do not support native command registration.",
  "commands.bash":
    "Allow bash chat command (`!`; `/bash` alias) to run host shell commands (default: false; requires tools.elevated).",
  "commands.bashForegroundMs":
    "How long bash waits before backgrounding (default: 2000; 0 backgrounds immediately).",
  "commands.config": "Allow /config chat command to read/write config on disk (default: false).",
  "commands.mcp":
    "Allow /mcp chat command to manage OpenClaw MCP server config under mcp.servers (default: false).",
  "commands.plugins":
    "Allow /plugins chat command to list discovered plugins and toggle plugin enablement in config (default: false).",
  "commands.debug": "Allow /debug chat command for runtime-only overrides (default: false).",
  "commands.restart": "Allow /restart and gateway restart tool actions (default: true).",
  "commands.useAccessGroups": "Enforce access-group allowlists/policies for commands.",
  "commands.ownerAllowFrom":
    "Explicit owner allowlist for owner-only tools/commands. Use channel-native IDs (optionally prefixed like \"whatsapp:+15551234567\"). '*' is ignored.",
  "commands.ownerDisplay":
    "Controls how owner IDs are rendered in the system prompt. Allowed values: raw, hash. Default: raw.",
  "commands.ownerDisplaySecret":
    "Optional secret used to HMAC hash owner IDs when ownerDisplay=hash. Prefer env substitution.",
  "commands.allowFrom":
    "Defines elevated command allow rules by channel and sender for owner-level command surfaces. Use narrow provider-specific identities so privileged commands are not exposed to broad chat audiences.",
  mcp: "Global MCP server definitions managed by OpenClaw. Embedded Pi and other runtime adapters can consume these servers without storing them inside Pi-owned project settings.",
  "mcp.servers":
    "Named MCP server definitions. OpenClaw stores them in its own config and runtime adapters decide which transports are supported at execution time.",
  session:
    "Global session routing, reset, delivery policy, and maintenance controls for conversation history behavior. Keep defaults unless you need stricter isolation, retention, or delivery constraints.",
  "session.scope":
    'Sets base session grouping strategy: "per-sender" isolates by sender and "global" shares one session per channel context. Keep "per-sender" for safer multi-user behavior unless deliberate shared context is required.',
  "session.dmScope":
    'DM session scoping: "main" keeps continuity, while "per-peer", "per-channel-peer", and "per-account-channel-peer" increase isolation. Use isolated modes for shared inboxes or multi-account deployments.',
  "session.identityLinks":
    "Maps canonical identities to provider-prefixed peer IDs so equivalent users resolve to one DM thread (example: telegram:123456). Use this when the same human appears across multiple channels or accounts.",
  "session.resetTriggers":
    "Lists message triggers that force a session reset when matched in inbound content. Use sparingly for explicit reset phrases so context is not dropped unexpectedly during normal conversation.",
  "session.idleMinutes":
    "Applies a legacy idle reset window in minutes for session reuse behavior across inactivity gaps. Use this only for compatibility and prefer structured reset policies under session.reset/session.resetByType.",
  "session.reset":
    "Defines the default reset policy object used when no type-specific or channel-specific override applies. Set this first, then layer resetByType or resetByChannel only where behavior must differ.",
  "session.reset.mode":
    'Selects reset strategy: "daily" resets at a configured hour and "idle" resets after inactivity windows. Keep one clear mode per policy to avoid surprising context turnover patterns.',
  "session.reset.atHour":
    "Sets local-hour boundary (0-23) for daily reset mode so sessions roll over at predictable times. Use with mode=daily and align to operator timezone expectations for human-readable behavior.",
  "session.reset.idleMinutes":
    "Sets inactivity window before reset for idle mode and can also act as secondary guard with daily mode. Use larger values to preserve continuity or smaller values for fresher short-lived threads.",
  "session.resetByType":
    "Overrides reset behavior by chat type (direct, group, thread) when defaults are not sufficient. Use this when group/thread traffic needs different reset cadence than direct messages.",
  "session.resetByType.direct":
    "Defines reset policy for direct chats and supersedes the base session.reset configuration for that type. Use this as the canonical direct-message override instead of the legacy dm alias.",
  "session.resetByType.dm":
    "Deprecated alias for direct reset behavior kept for backward compatibility with older configs. Use session.resetByType.direct instead so future tooling and validation remain consistent.",
  "session.resetByType.group":
    "Defines reset policy for group chat sessions where continuity and noise patterns differ from DMs. Use shorter idle windows for busy groups if context drift becomes a problem.",
  "session.resetByType.thread":
    "Defines reset policy for thread-scoped sessions, including focused channel thread workflows. Use this when thread sessions should expire faster or slower than other chat types.",
  "session.resetByChannel":
    "Provides channel-specific reset overrides keyed by provider/channel id for fine-grained behavior control. Use this only when one channel needs exceptional reset behavior beyond type-level policies.",
  "session.store":
    "Sets the session storage file path used to persist session records across restarts. Use an explicit path only when you need custom disk layout, backup routing, or mounted-volume storage.",
  "session.typingIntervalSeconds":
    "Controls interval for repeated typing indicators while replies are being prepared in typing-capable channels. Increase to reduce chatty updates or decrease for more active typing feedback.",
  "session.typingMode":
    'Controls typing behavior timing: "never", "instant", "thinking", or "message" based emission points. Keep conservative modes in high-volume channels to avoid unnecessary typing noise.',
  "session.parentForkMaxTokens":
    "Maximum parent-session token count allowed for thread/session inheritance forking. If the parent exceeds this, OpenClaw starts a fresh thread session instead of forking; set 0 to disable this protection.",
  "session.mainKey":
    'Overrides the canonical main session key used for continuity when dmScope or routing logic points to "main". Use a stable value only if you intentionally need custom session anchoring.',
  "session.sendPolicy":
    "Controls cross-session send permissions using allow/deny rules evaluated against channel, chatType, and key prefixes. Use this to fence where session tools can deliver messages in complex environments.",
  "session.sendPolicy.default":
    'Sets fallback action when no sendPolicy rule matches: "allow" or "deny". Keep "allow" for simpler setups, or choose "deny" when you require explicit allow rules for every destination.',
  "session.sendPolicy.rules":
    'Ordered allow/deny rules evaluated before the default action, for example `{ action: "deny", match: { channel: "discord" } }`. Put most specific rules first so broad rules do not shadow exceptions.',
  "session.sendPolicy.rules[].action":
    'Defines rule decision as "allow" or "deny" when the corresponding match criteria are satisfied. Use deny-first ordering when enforcing strict boundaries with explicit allow exceptions.',
  "session.sendPolicy.rules[].match":
    "Defines optional rule match conditions that can combine channel, chatType, and key-prefix constraints. Keep matches narrow so policy intent stays readable and debugging remains straightforward.",
  "session.sendPolicy.rules[].match.channel":
    "Matches rule application to a specific channel/provider id (for example discord, telegram, slack). Use this when one channel should permit or deny delivery independently of others.",
  "session.sendPolicy.rules[].match.chatType":
    "Matches rule application to chat type (direct, group, thread) so behavior varies by conversation form. Use this when DM and group destinations require different safety boundaries.",
  "session.sendPolicy.rules[].match.keyPrefix":
    "Matches a normalized session-key prefix after internal key normalization steps in policy consumers. Use this for general prefix controls, and prefer rawKeyPrefix when exact full-key matching is required.",
  "session.sendPolicy.rules[].match.rawKeyPrefix":
    "Matches the raw, unnormalized session-key prefix for exact full-key policy targeting. Use this when normalized keyPrefix is too broad and you need agent-prefixed or transport-specific precision.",
  "session.agentToAgent":
    "Groups controls for inter-agent session exchanges, including loop prevention limits on reply chaining. Keep defaults unless you run advanced agent-to-agent automation with strict turn caps.",
  "session.agentToAgent.maxPingPongTurns":
    "Max reply-back turns between requester and target agents during agent-to-agent exchanges (0-5). Use lower values to hard-limit chatter loops and preserve predictable run completion.",
  "session.threadBindings":
    "Shared defaults for thread-bound session routing behavior across providers that support thread focus workflows. Configure global defaults here and override per channel only when behavior differs.",
  "session.threadBindings.enabled":
    "Global master switch for thread-bound session routing features and focused thread delivery behavior. Keep enabled for modern thread workflows unless you need to disable thread binding globally.",
  "session.threadBindings.idleHours":
    "Default inactivity window in hours for thread-bound sessions across providers/channels (0 disables idle auto-unfocus). Default: 24.",
  "session.threadBindings.maxAgeHours":
    "Optional hard max age in hours for thread-bound sessions across providers/channels (0 disables hard cap). Default: 0.",
  "session.maintenance":
    "Automatic session-store maintenance controls for pruning age, entry caps, and file rotation behavior. Start in warn mode to observe impact, then enforce once thresholds are tuned.",
  "session.maintenance.mode":
    'Determines whether maintenance policies are only reported ("warn") or actively applied ("enforce"). Keep "warn" during rollout and switch to "enforce" after validating safe thresholds.',
  "session.maintenance.pruneAfter":
    "Removes entries older than this duration (for example `30d` or `12h`) during maintenance passes. Use this as the primary age-retention control and align it with data retention policy.",
  "session.maintenance.pruneDays":
    "Deprecated age-retention field kept for compatibility with legacy configs using day counts. Use session.maintenance.pruneAfter instead so duration syntax and behavior are consistent.",
  "session.maintenance.maxEntries":
    "Caps total session entry count retained in the store to prevent unbounded growth over time. Use lower limits for constrained environments, or higher limits when longer history is required.",
  "session.maintenance.rotateBytes":
    "Rotates the session store when file size exceeds a threshold such as `10mb` or `1gb`. Use this to bound single-file growth and keep backup/restore operations manageable.",
  "session.maintenance.resetArchiveRetention":
    "Retention for reset transcript archives (`*.reset.<timestamp>`). Accepts a duration (for example `30d`), or `false` to disable cleanup. Defaults to pruneAfter so reset artifacts do not grow forever.",
  "session.maintenance.maxDiskBytes":
    "Optional per-agent sessions-directory disk budget (for example `500mb`). Use this to cap session storage per agent; when exceeded, warn mode reports pressure and enforce mode performs oldest-first cleanup.",
  "session.maintenance.highWaterBytes":
    "Target size after disk-budget cleanup (high-water mark). Defaults to 80% of maxDiskBytes; set explicitly for tighter reclaim behavior on constrained disks.",
  cron: "Global scheduler settings for stored cron jobs, run concurrency, delivery fallback, and run-session retention. Keep defaults unless you are scaling job volume or integrating external webhook receivers.",
  "cron.enabled":
    "Enables cron job execution for stored schedules managed by the gateway. Keep enabled for normal reminder/automation flows, and disable only to pause all cron execution without deleting jobs.",
  "cron.store":
    "Path to the cron job store file used to persist scheduled jobs across restarts. Set an explicit path only when you need custom storage layout, backups, or mounted volumes.",
  "cron.maxConcurrentRuns":
    "Limits how many cron jobs can execute at the same time when multiple schedules fire together. Use lower values to protect CPU/memory under heavy automation load, or raise carefully for higher throughput.",
  "cron.retry":
    "Overrides the default retry policy for one-shot jobs when they fail with transient errors (rate limit, overloaded, network, server_error). Omit to use defaults: maxAttempts 3, backoffMs [30000, 60000, 300000], retry all transient types.",
  "cron.retry.maxAttempts":
    "Max retries for one-shot jobs on transient errors before permanent disable (default: 3).",
  "cron.retry.backoffMs":
    "Backoff delays in ms for each retry attempt (default: [30000, 60000, 300000]). Use shorter values for faster retries.",
  "cron.retry.retryOn":
    "Error types to retry: rate_limit, overloaded, network, timeout, server_error. Use to restrict which errors trigger retries; omit to retry all transient types.",
  "cron.webhook":
    'Deprecated legacy fallback webhook URL used only for old jobs with `notify=true`. Migrate to per-job delivery using `delivery.mode="webhook"` plus `delivery.to`, and avoid relying on this global field.',
  "cron.webhookToken":
    "Bearer token attached to cron webhook POST deliveries when webhook mode is used. Prefer secret/env substitution and rotate this token regularly if shared webhook endpoints are internet-reachable.",
  "cron.sessionRetention":
    "Controls how long completed cron run sessions are kept before pruning (`24h`, `7d`, `1h30m`, or `false` to disable pruning; default: `24h`). Use shorter retention to reduce storage growth on high-frequency schedules.",
  "cron.runLog":
    "Pruning controls for per-job cron run history files under `cron/runs/<jobId>.jsonl`, including size and line retention.",
  "cron.runLog.maxBytes":
    "Maximum bytes per cron run-log file before pruning rewrites to the last keepLines entries (for example `2mb`, default `2000000`).",
  "cron.runLog.keepLines":
    "How many trailing run-log lines to retain when a file exceeds maxBytes (default `2000`). Increase for longer forensic history or lower for smaller disks.",
  hooks:
    "Inbound webhook automation surface for mapping external events into wake or agent actions in OpenClaw. Keep this locked down with explicit token/session/agent controls before exposing it beyond trusted networks.",
  "hooks.enabled":
    "Enables the hooks endpoint and mapping execution pipeline for inbound webhook requests. Keep disabled unless you are actively routing external events into the gateway.",
  "hooks.path":
    "HTTP path used by the hooks endpoint (for example `/hooks`) on the gateway control server. Use a non-guessable path and combine it with token validation for defense in depth.",
  "hooks.token":
    "Shared bearer token checked by hooks ingress for request authentication before mappings run. Treat holders as full-trust callers for the hook ingress surface, not as a separate non-owner role. Use environment substitution and rotate regularly when webhook endpoints are internet-accessible.",
  "hooks.defaultSessionKey":
    "Fallback session key used for hook deliveries when a request does not provide one through allowed channels. Use a stable but scoped key to avoid mixing unrelated automation conversations.",
  "hooks.allowRequestSessionKey":
    "Allows callers to supply a session key in hook requests when true, enabling caller-controlled routing. Keep false unless trusted integrators explicitly need custom session threading.",
  "hooks.allowedSessionKeyPrefixes":
    "Allowlist of accepted session-key prefixes for inbound hook requests when caller-provided keys are enabled. Use narrow prefixes to prevent arbitrary session-key injection.",
  "hooks.allowedAgentIds":
    "Allowlist of agent IDs that hook mappings are allowed to target when selecting execution agents. Use this to constrain automation events to dedicated service agents and reduce blast radius if a hook token is exposed.",
  "hooks.maxBodyBytes":
    "Maximum accepted webhook payload size in bytes before the request is rejected. Keep this bounded to reduce abuse risk and protect memory usage under bursty integrations.",
  "hooks.presets":
    "Named hook preset bundles applied at load time to seed standard mappings and behavior defaults. Keep preset usage explicit so operators can audit which automations are active.",
  "hooks.transformsDir":
    "Base directory for hook transform modules referenced by mapping transform.module paths. Use a controlled repo directory so dynamic imports remain reviewable and predictable.",
  "hooks.mappings":
    "Ordered mapping rules that match inbound hook requests and choose wake or agent actions with optional delivery routing. Use specific mappings first to avoid broad pattern rules capturing everything.",
  "hooks.mappings[].id":
    "Optional stable identifier for a hook mapping entry used for auditing, troubleshooting, and targeted updates. Use unique IDs so logs and config diffs can reference mappings unambiguously.",
  "hooks.mappings[].match":
    "Grouping object for mapping match predicates such as path and source before action routing is applied. Keep match criteria specific so unrelated webhook traffic does not trigger automations.",
  "hooks.mappings[].match.path":
    "Path match condition for a hook mapping, usually compared against the inbound request path. Use this to split automation behavior by webhook endpoint path families.",
  "hooks.mappings[].match.source":
    "Source match condition for a hook mapping, typically set by trusted upstream metadata or adapter logic. Use stable source identifiers so routing remains deterministic across retries.",
  "hooks.mappings[].action":
    'Mapping action type: "wake" triggers agent wake flow, while "agent" sends directly to agent handling. Use "agent" for immediate execution and "wake" when heartbeat-driven processing is preferred.',
  "hooks.mappings[].wakeMode":
    'Wake scheduling mode: "now" wakes immediately, while "next-heartbeat" defers until the next heartbeat cycle. Use deferred mode for lower-priority automations that can tolerate slight delay.',
  "hooks.mappings[].name":
    "Human-readable mapping display name used in diagnostics and operator-facing config UIs. Keep names concise and descriptive so routing intent is obvious during incident review.",
  "hooks.mappings[].agentId":
    "Target agent ID for mapping execution when action routing should not use defaults. Use dedicated automation agents to isolate webhook behavior from interactive operator sessions.",
  "hooks.mappings[].sessionKey":
    "Explicit session key override for mapping-delivered messages to control thread continuity. Use stable scoped keys so repeated events correlate without leaking into unrelated conversations.",
  "hooks.mappings[].messageTemplate":
    "Template for synthesizing structured mapping input into the final message content sent to the target action path. Keep templates deterministic so downstream parsing and behavior remain stable.",
  "hooks.mappings[].textTemplate":
    "Text-only fallback template used when rich payload rendering is not desired or not supported. Use this to provide a concise, consistent summary string for chat delivery surfaces.",
  "hooks.mappings[].deliver":
    "Controls whether mapping execution results are delivered back to a channel destination versus being processed silently. Disable delivery for background automations that should not post user-facing output.",
  "hooks.mappings[].allowUnsafeExternalContent":
    "When true, mapping content may include less-sanitized external payload data in generated messages. Keep false by default and enable only for trusted sources with reviewed transform logic.",
  "hooks.mappings[].channel":
    'Delivery channel override for mapping outputs (for example "last", "telegram", "discord", "slack", "signal", "imessage", or "msteams"). Keep channel overrides explicit to avoid accidental cross-channel sends.',
  "hooks.mappings[].to":
    "Destination identifier inside the selected channel when mapping replies should route to a fixed target. Verify provider-specific destination formats before enabling production mappings.",
  "hooks.mappings[].model":
    "Optional model override for mapping-triggered runs when automation should use a different model than agent defaults. Use this sparingly so behavior remains predictable across mapping executions.",
  "hooks.mappings[].thinking":
    "Optional thinking-effort override for mapping-triggered runs to tune latency versus reasoning depth. Keep low or minimal for high-volume hooks unless deeper reasoning is clearly required.",
  "hooks.mappings[].timeoutSeconds":
    "Maximum runtime allowed for mapping action execution before timeout handling applies. Use tighter limits for high-volume webhook sources to prevent queue pileups.",
  "hooks.mappings[].transform":
    "Transform configuration block defining module/export preprocessing before mapping action handling. Use transforms only from reviewed code paths and keep behavior deterministic for repeatable automation.",
  "hooks.mappings[].transform.module":
    "Relative transform module path loaded from hooks.transformsDir to rewrite incoming payloads before delivery. Keep modules local, reviewed, and free of path traversal patterns.",
  "hooks.mappings[].transform.export":
    "Named export to invoke from the transform module; defaults to module default export when omitted. Set this when one file hosts multiple transform handlers.",
  "hooks.gmail":
    "Gmail push integration settings used for Pub/Sub notifications and optional local callback serving. Keep this scoped to dedicated Gmail automation accounts where possible.",
  "hooks.gmail.account":
    "Google account identifier used for Gmail watch/subscription operations in this hook integration. Use a dedicated automation mailbox account to isolate operational permissions.",
  "hooks.gmail.label":
    "Optional Gmail label filter limiting which labeled messages trigger hook events. Keep filters narrow to avoid flooding automations with unrelated inbox traffic.",
  "hooks.gmail.topic":
    "Google Pub/Sub topic name used by Gmail watch to publish change notifications for this account. Ensure the topic IAM grants Gmail publish access before enabling watches.",
  "hooks.gmail.subscription":
    "Pub/Sub subscription consumed by the gateway to receive Gmail change notifications from the configured topic. Keep subscription ownership clear so multiple consumers do not race unexpectedly.",
  "hooks.gmail.hookUrl":
    "Public callback URL Gmail or intermediaries invoke to deliver notifications into this hook pipeline. Keep this URL protected with token validation and restricted network exposure.",
  "hooks.gmail.includeBody":
    "When true, fetch and include email body content for downstream mapping/agent processing. Keep false unless body text is required, because this increases payload size and sensitivity.",
  "hooks.gmail.allowUnsafeExternalContent":
    "Allows less-sanitized external Gmail content to pass into processing when enabled. Keep disabled for safer defaults, and enable only for trusted mail streams with controlled transforms.",
  "hooks.gmail.serve":
    "Local callback server settings block for directly receiving Gmail notifications without a separate ingress layer. Enable only when this process should terminate webhook traffic itself.",
  "hooks.gmail.pushToken":
    "Shared secret token required on Gmail push hook callbacks before processing notifications. Use env substitution and rotate if callback endpoints are exposed externally.",
  "hooks.gmail.maxBytes":
    "Maximum Gmail payload bytes processed per event when includeBody is enabled. Keep conservative limits to reduce oversized message processing cost and risk.",
  "hooks.gmail.renewEveryMinutes":
    "Renewal cadence in minutes for Gmail watch subscriptions to prevent expiration. Set below provider expiration windows and monitor renew failures in logs.",
  "hooks.gmail.serve.bind":
    "Bind address for the local Gmail callback HTTP server used when serving hooks directly. Keep loopback-only unless external ingress is intentionally required.",
  "hooks.gmail.serve.port":
    "Port for the local Gmail callback HTTP server when serve mode is enabled. Use a dedicated port to avoid collisions with gateway/control interfaces.",
  "hooks.gmail.serve.path":
    "HTTP path on the local Gmail callback server where push notifications are accepted. Keep this consistent with subscription configuration to avoid dropped events.",
  "hooks.gmail.tailscale.mode":
    'Tailscale exposure mode for Gmail callbacks: "off", "serve", or "funnel". Use "serve" for private tailnet delivery and "funnel" only when public internet ingress is required.',
  "hooks.gmail.tailscale":
    "Tailscale exposure configuration block for publishing Gmail callbacks through Serve/Funnel routes. Use private tailnet modes before enabling any public ingress path.",
  "hooks.gmail.tailscale.path":
    "Path published by Tailscale Serve/Funnel for Gmail callback forwarding when enabled. Keep it aligned with Gmail webhook config so requests reach the expected handler.",
  "hooks.gmail.tailscale.target":
    "Local service target forwarded by Tailscale Serve/Funnel (for example http://127.0.0.1:8787). Use explicit loopback targets to avoid ambiguous routing.",
  "hooks.gmail.model":
    "Optional model override for Gmail-triggered runs when mailbox automations should use dedicated model behavior. Keep unset to inherit agent defaults unless mailbox tasks need specialization.",
  "hooks.gmail.thinking":
    'Thinking effort override for Gmail-driven agent runs: "off", "minimal", "low", "medium", or "high". Keep modest defaults for routine inbox automations to control cost and latency.',
  "hooks.internal":
    "Internal hook runtime settings for bundled/custom event handlers loaded from module paths. Use this for trusted in-process automations and keep handler loading tightly scoped.",
  "hooks.internal.enabled":
    "Enables processing for internal hooks and configured entries in the internal hook runtime. Keep disabled unless internal hooks are intentionally configured.",
  "hooks.internal.entries":
    "Configured internal hook entry records used to register concrete runtime handlers and metadata. Keep entries explicit and versioned so production behavior is auditable.",
  "hooks.internal.load":
    "Internal hook loader settings controlling where handler modules are discovered at startup. Use constrained load roots to reduce accidental module conflicts or shadowing.",
  "hooks.internal.load.extraDirs":
    "Additional directories searched for internal hook modules beyond default load paths. Keep this minimal and controlled to reduce accidental module shadowing.",
  "hooks.internal.installs":
    "Install metadata for internal hook modules, including source and resolved artifacts for repeatable deployments. Use this as operational provenance and avoid manual drift edits.",
  messages:
    "Message formatting, acknowledgment, queueing, debounce, and status reaction behavior for inbound/outbound chat flows. Use this section when channel responsiveness or message UX needs adjustment.",
  "messages.messagePrefix":
    "Prefix text prepended to inbound user messages before they are handed to the agent runtime. Use this sparingly for channel context markers and keep it stable across sessions.",
  "messages.responsePrefix":
    "Prefix text prepended to outbound assistant replies before sending to channels. Use for lightweight branding/context tags and avoid long prefixes that reduce content density.",
  "messages.groupChat":
    "Group-message handling controls including mention triggers and history window sizing. Keep mention patterns narrow so group channels do not trigger on every message.",
  "messages.groupChat.mentionPatterns":
    "Safe case-insensitive regex patterns used to detect explicit mentions/trigger phrases in group chats. Use precise patterns to reduce false positives in high-volume channels; invalid or unsafe nested-repetition patterns are ignored.",
  "messages.groupChat.historyLimit":
    "Maximum number of prior group messages loaded as context per turn for group sessions. Use higher values for richer continuity, or lower values for faster and cheaper responses.",
  "messages.queue":
    "Inbound message queue strategy used to buffer bursts before processing turns. Tune this for busy channels where sequential processing or batching behavior matters.",
  "messages.queue.mode":
    'Queue behavior mode: "steer", "followup", "collect", "steer-backlog", "steer+backlog", "queue", or "interrupt". Keep conservative modes unless you intentionally need aggressive interruption/backlog semantics.',
  "messages.queue.byChannel":
    "Per-channel queue mode overrides keyed by provider id (for example telegram, discord, slack). Use this when one channel’s traffic pattern needs different queue behavior than global defaults.",
  "messages.queue.debounceMs":
    "Global queue debounce window in milliseconds before processing buffered inbound messages. Use higher values to coalesce rapid bursts, or lower values for reduced response latency.",
  "messages.queue.debounceMsByChannel":
    "Per-channel debounce overrides for queue behavior keyed by provider id. Use this to tune burst handling independently for chat surfaces with different pacing.",
  "messages.queue.cap":
    "Maximum number of queued inbound items retained before drop policy applies. Keep caps bounded in noisy channels so memory usage remains predictable.",
  "messages.queue.drop":
    'Drop strategy when queue cap is exceeded: "old", "new", or "summarize". Use summarize when preserving intent matters, or old/new when deterministic dropping is preferred.',
  "messages.inbound":
    "Direct inbound debounce settings used before queue/turn processing starts. Configure this for provider-specific rapid message bursts from the same sender.",
  "messages.inbound.byChannel":
    "Per-channel inbound debounce overrides keyed by provider id in milliseconds. Use this where some providers send message fragments more aggressively than others.",
  "messages.removeAckAfterReply":
    "Removes the acknowledgment reaction after final reply delivery when enabled. Keep enabled for cleaner UX in channels where persistent ack reactions create clutter.",
  "messages.tts":
    "Text-to-speech policy for reading agent replies aloud on supported voice or audio surfaces. Keep disabled unless voice playback is part of your operator/user workflow.",
  "messages.tts.providers":
    "Provider-specific TTS settings keyed by speech provider id. Use this instead of bundled provider-specific top-level keys so speech plugins stay decoupled from core config schema.",
  "messages.tts.providers.*":
    "Provider-specific TTS configuration for one speech provider id. Keep fields scoped to the plugin that owns that provider.",
  "messages.tts.providers.*.apiKey":
    "Provider API key used by that speech provider when its plugin requires authenticated TTS access.", // pragma: allowlist secret
  channels:
    "Channel provider configurations plus shared defaults that control access policies, heartbeat visibility, and per-surface behavior. Keep defaults centralized and override per provider only where required.",
  "channels.mattermost":
    "Mattermost channel provider configuration for bot credentials, base URL, and message trigger modes. Keep mention/trigger rules strict in high-volume team channels.",
  "channels.defaults":
    "Default channel behavior applied across providers when provider-specific settings are not set. Use this to enforce consistent baseline policy before per-provider tuning.",
  "channels.defaults.groupPolicy":
    'Default group policy across channels: "open", "disabled", or "allowlist". Keep "allowlist" for safer production setups unless broad group participation is intentional.',
  "channels.defaults.contextVisibility":
    'Default supplemental context visibility for fetched quote/thread/history content: "all" (keep all context), "allowlist" (only allowlisted senders), or "allowlist_quote" (allowlist + keep explicit quotes).',
  "channels.defaults.heartbeat":
    "Default heartbeat visibility settings for status messages emitted by providers/channels. Tune this globally to reduce noisy healthy-state updates while keeping alerts visible.",
  "channels.defaults.heartbeat.showOk":
    "Shows healthy/OK heartbeat status entries when true in channel status outputs. Keep false in noisy environments and enable only when operators need explicit healthy confirmations.",
  "channels.defaults.heartbeat.showAlerts":
    "Shows degraded/error heartbeat alerts when true so operator channels surface problems promptly. Keep enabled in production so broken channel states are visible.",
  "channels.defaults.heartbeat.useIndicator":
    "Enables concise indicator-style heartbeat rendering instead of verbose status text where supported. Use indicator mode for dense dashboards with many active channels.",
  "agents.defaults.heartbeat.includeSystemPromptSection":
    "Includes the default agent's ## Heartbeats system prompt section when true. Turn this off to keep heartbeat runtime behavior while omitting the heartbeat prompt instructions from the agent system prompt.",
  "agents.list.*.heartbeat.includeSystemPromptSection":
    "Per-agent override for whether the default agent's ## Heartbeats system prompt section is injected. Use false to keep heartbeat runtime behavior but omit the heartbeat prompt instructions from that agent's system prompt.",
  "agents.defaults.heartbeat.directPolicy":
    'Controls whether heartbeat delivery may target direct/DM chats: "allow" (default) permits DM delivery and "block" suppresses direct-target sends.',
  "agents.list.*.heartbeat.directPolicy":
    'Per-agent override for heartbeat direct/DM delivery policy; use "block" for agents that should only send heartbeat alerts to non-DM destinations.',
  "channels.mattermost.configWrites":
    "Allow Mattermost to write config in response to channel events/commands (default: true).",
  "channels.modelByChannel":
    "Map provider -> channel id -> model override (values are provider/model or aliases).",
  "messages.suppressToolErrors":
    "When true, suppress ⚠️ tool-error warnings from being shown to the user. The agent already sees errors in context and can retry. Default: false.",
  "messages.ackReaction": "Emoji reaction used to acknowledge inbound messages (empty disables).",
  "messages.ackReactionScope":
    'When to send ack reactions ("group-mentions", "group-all", "direct", "all", "off", "none"). "off"/"none" disables ack reactions entirely.',
  "messages.statusReactions":
    "Lifecycle status reactions that update the emoji on the trigger message as the agent progresses (queued → thinking → tool → done/error).",
  "messages.statusReactions.enabled":
    "Enable lifecycle status reactions on supported channels. Slack and Discord treat unset as enabled when ack reactions are active; Telegram requires this to be true before lifecycle reactions are used.",
  "messages.statusReactions.emojis":
    "Override default status reaction emojis. Keys: thinking, compacting, tool, coding, web, done, error, stallSoft, stallHard. Must be valid Telegram reaction emojis.",
  "messages.statusReactions.timing":
    "Override default timing. Keys: debounceMs (700), stallSoftMs (25000), stallHardMs (60000), doneHoldMs (1500), errorHoldMs (2500).",
  "messages.inbound.debounceMs":
    "Debounce window (ms) for batching rapid inbound messages from the same sender (0 to disable).",
};
