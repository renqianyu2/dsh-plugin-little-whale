window.__ModuleLoader__.load({
  id: 'dsh-plugin-little-whale',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const NS = 'littleWhale';

    const SETTINGS_KEY = 'little-whale.settings.v1';
    const LEDGER_KEY = 'little-whale.ledger.v2';
    const POSITION_KEY = 'little-whale.position.v2';
    const DEFAULT_PRICES = { input: 2, cache: 0.2, output: 3 };
    const DEFAULT_BUDGET = 5;

    const DICTIONARIES = {
      en: {
        hint: 'Click to talk and change my look; drag to move',
        panelTitle: 'Whale ledger',
        sessionCost: 'This chat',
        today: 'Today',
        budget: 'Budget',
        input: 'Input',
        cache: 'Cache',
        output: 'Output',
        estimateNote: 'Estimated from tokens and the prices below. Today counts what this browser has seen; Reset today restarts it from zero.',
        settings: 'Settings',
        priceInput: 'Input ¥/M',
        priceCache: 'Cache ¥/M',
        priceOutput: 'Output ¥/M',
        dailyBudget: 'Daily budget ¥',
        reset: 'Reset today',
        resetPosition: 'Reset position',
        overBudget: 'Over budget — the wallet is leaking.',
        close: 'Close',
        soundLabel: 'Sound effects',
        ledgerLabel: 'Ledger',
        defaultName: 'Blue',
        openLedger: 'Open ledger',
        appearance: 'Look',
        nextSkin: 'Next look',
        skinBlue: 'Blue',
        skinPink: 'Bow pink',
        skinYellow: 'Sailor yellow',
        skinMint: 'Flower mint',
        skinPurple: 'Glasses purple',
        skinOrange: 'Bow-tie orange',
        skinCream: 'Crown cream',
        skinSlate: 'Headphone slate',
        skinChanged1: 'Ta-da — {skin} now!',
        skinChanged2: 'Ding! {skin} is online. How do I look?',
        skinChanged3: '{skin} has arrived — still me, right?',
        sizeLabel: 'Size',
        sleepLabel: 'Sleep',
        sleepUnit: 'min',
        sleepHint: '0 turns sleeping off.',
        lineLeft1: 'Today has {amount} left — I am keeping an eye on it.',
        lineLeft2: '{name} reporting: {amount} left today. Easy does it.',
        lineLeft3: 'Blub blub — {amount} left in the wallet today.',
        lineLeft4: '{amount} left. Plenty of room to breathe.',
        lineLeft5: 'Budget check: {amount} left for today.',
        lineLeft6: 'I did the math — {amount} still available today.',
        lineLeft7: 'Wallet status: {amount} left. Looking good.',
        lineLeft8: 'Only {amount} left, but we are still fine.',
        lineLeft9: '{amount} left today. I will guard it for you.',
        lineLeft10: 'Current balance: {amount}. Spend gently.',
        lineLeft11: '{amount} left — maybe save a little treat for later?',
        lineLeft12: 'Report: {amount} remaining. Whale status: excellent.',
        lineLeft13: 'Spent {spent} today; {amount} left to go.',
        lineLeft14: '{percent}% of the budget used; {amount} remains. Steady.',
        lineLeft15: '{amount} left — enough for a whole lot of tiny fish.',
        lineLeft16: 'Today remaining: {amount}. I will keep the books.',
        lineLeft17: 'Ding — {amount} left today. Please note the delivery.',
        lineLeft18: '{amount} left. Finish your water before the next round.',
        lineOver1: 'Over budget by {amount}. Let us stop here?',
        lineOver2: 'We are {amount} over today. The whale is worried.',
        lineOver3: 'Oops — {amount} over. Shall we call it a day?',
        lineOver4: 'Budget broken, {amount} past the line. Take a break?',
        lineOver5: 'Today is {amount} over. The wallet is leaking air.',
        lineOver6: '{amount} over — one more purchase and I am busking.',
        lineOver7: 'You are {amount} over. I am holding the wallet.',
        lineOver8: 'Budget gone plus {amount}. Let us reflect a little.',
        lineNoBudget1: 'Today has cost {spent} so far, and no budget is set.',
        lineNoBudget2: '{spent} spent today. Set a budget in the ledger?',
        lineNoBudget3: '{spent} so far, no budget — I can only keep the count.',
        lineNoBudget4: 'Today: {spent}, budget blank. The whale feels unsure.',
        lineNoBudget5: '{spent} spent. Give me a budget and I can warn you next time.',
        renamed: 'Got it — call me {name} from now on!',
        resetLine: 'Ledger cleared. Fresh start!',
        nameLabel: 'Name',
        voiceLabel: 'Read aloud',
        voiceNote: 'A cute system voice reads each line; turn it off here.',
      },
      zh: {
        hint: '点我说话和换装，拖动换位置',
        panelTitle: '小鲸鱼记账',
        sessionCost: '本会话',
        today: '今日',
        budget: '预算',
        input: '输入',
        cache: '缓存',
        output: '输出',
        estimateNote: '按 token 和下方单价估算；今日为本机观察到的累计，重置后会从 0 重新开始。',
        settings: '设置',
        priceInput: '输入 ¥/百万',
        priceCache: '缓存 ¥/百万',
        priceOutput: '输出 ¥/百万',
        dailyBudget: '每日预算 ¥',
        reset: '重置今日记录',
        resetPosition: '回到默认位置',
        overBudget: '超预算啦，钱包在漏水…',
        close: '关闭',
        soundLabel: '音效',
        ledgerLabel: '记账本',
        defaultName: '小蓝',
        openLedger: '查看账本',
        appearance: '外观',
        nextSkin: '换一个',
        skinBlue: '小蓝',
        skinPink: '蝴蝶结粉',
        skinYellow: '水手黄',
        skinMint: '小花薄荷',
        skinPurple: '眼镜紫',
        skinOrange: '领结橙',
        skinCream: '皇冠奶油',
        skinSlate: '耳机灰蓝',
        skinChanged1: '换好啦，现在是{skin}～',
        skinChanged2: '叮！{skin}上线！好看吗？',
        skinChanged3: '{skin}来啦，还认得我吗？',
        sizeLabel: '大小',
        sleepLabel: '睡眠',
        sleepUnit: '分钟',
        sleepHint: '设为 0 就不睡。',
        lineLeft1: '今天还剩{amount}，我帮你盯着呢～',
        lineLeft2: '{name}报告：今天还剩{amount}，省着点花哦。',
        lineLeft3: '咕噜咕噜～钱包里今天还剩{amount}。',
        lineLeft4: '还剩{amount}，够我们慢慢花啦。',
        lineLeft5: '今天预算还剩{amount}，别着急，先深呼吸。',
        lineLeft6: '我算过了，今天还能花{amount}。',
        lineLeft7: '钱包鼓鼓的：今天还剩{amount}！',
        lineLeft8: '剩{amount}呢，今天可以安心一点点。',
        lineLeft9: '今天还剩{amount}，我先替你守着。',
        lineLeft10: '当前余额还剩{amount}，花钱要温柔一点哦。',
        lineLeft11: '还剩{amount}，要不要给自己留点小惊喜？',
        lineLeft12: '报告：今日余额{amount}，鲸鱼状态良好。',
        lineLeft13: '今天已经花了{spent}，还剩{amount}。',
        lineLeft14: '预算用了{percent}%，还剩{amount}，稳住。',
        lineLeft15: '还剩{amount}，够买好多好多小鱼干啦。',
        lineLeft16: '今日剩余{amount}，我继续帮你记账。',
        lineLeft17: '叮～今日余额{amount}，请注意查收。',
        lineLeft18: '还剩{amount}，喝完这杯水再继续吧。',
        lineOver1: '今天已经超了{amount}啦，我们收手吧…',
        lineOver2: '超预算{amount}了，鲸鱼都替你心疼。',
        lineOver3: '哎呀，超了{amount}，要不明天再战？',
        lineOver4: '预算已经破了，超出{amount}，先歇一歇吧。',
        lineOver5: '今天超支{amount}，钱包开始漏气了。',
        lineOver6: '超出{amount}啦，再花就真的要卖艺了…',
        lineOver7: '超了{amount}呢，我帮你把钱包按住。',
        lineOver8: '预算用完还多花了{amount}，我们反省一下。',
        lineNoBudget1: '今天已经花了{spent}，还没设预算哦。',
        lineNoBudget2: '今日花费{spent}，要不要去账本里设个预算？',
        lineNoBudget3: '花了{spent}啦，没有预算我只能陪你记账。',
        lineNoBudget4: '今天{spent}，预算空白，鲸鱼有点没底。',
        lineNoBudget5: '已经花了{spent}，设个预算我就能提醒你啦。',
        renamed: '记住啦，以后叫我{name}！',
        resetLine: '账本清零啦，重新开始！',
        nameLabel: '名字',
        voiceLabel: '朗读',
        voiceNote: '会用可爱的系统语音把话读出来，也可以在这里关掉。',
      },
    };

    const SKINS = [
      { nameKey: 'skinBlue', body0: '#6ec4f4', body1: '#2f8fd6', belly: '#e8f8ff', blush: '#ff9fb4', line: '#2a6f9e', accessory: 'none' },
      { nameKey: 'skinPink', body0: '#ffa9cf', body1: '#e4649f', belly: '#ffeaf4', blush: '#ff6fa5', line: '#8a3a5e', accessory: 'bow' },
      { nameKey: 'skinYellow', body0: '#ffe07a', body1: '#edb43a', belly: '#fff8dc', blush: '#ff9f80', line: '#8a6414', accessory: 'hat' },
      { nameKey: 'skinMint', body0: '#93e6ca', body1: '#3fb890', belly: '#e8fff7', blush: '#ff9fbd', line: '#1f6b55', accessory: 'flower' },
      { nameKey: 'skinPurple', body0: '#c9b0ff', body1: '#8a63e0', belly: '#f1e9ff', blush: '#ff9fd0', line: '#4a2d7a', accessory: 'glasses' },
      { nameKey: 'skinOrange', body0: '#ffbe7d', body1: '#ef8136', belly: '#fff1e2', blush: '#ff7f6b', line: '#8a4516', accessory: 'bowtie' },
      { nameKey: 'skinCream', body0: '#f7e7c6', body1: '#d9b06f', belly: '#fffaf0', blush: '#ffa3b5', line: '#7a5a24', accessory: 'crown' },
      { nameKey: 'skinSlate', body0: '#a9bfd6', body1: '#5f7896', belly: '#eef4fb', blush: '#ff9fb4', line: '#2f4358', accessory: 'headphones' },
    ];

    const LEFT_LINES = Array.from({ length: 18 }, function (_, index) { return 'lineLeft' + (index + 1); });
    const OVER_LINES = Array.from({ length: 8 }, function (_, index) { return 'lineOver' + (index + 1); });
    const NO_BUDGET_LINES = Array.from({ length: 5 }, function (_, index) { return 'lineNoBudget' + (index + 1); });
    const SKIN_LINES = ['skinChanged1', 'skinChanged2', 'skinChanged3'];

    const CSS = `
      .lw-root { position: fixed; z-index: 30; display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; line-height: 0; pointer-events: auto; }
      .lw-button {
        position: relative; z-index: 50;
        display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center;
        width: 52px; height: 42px; padding: 0; border: 0; border-radius: 12px;
        background: transparent; color: inherit; cursor: grab; touch-action: none; user-select: none;
        -webkit-tap-highlight-color: transparent;
        transition: background-color 140ms ease, transform 140ms ease;
      }
      .lw-button:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(127, 127, 127, 0.12)); }
      .lw-dragging .lw-button { cursor: grabbing; transform: none; }
      .lw-button:active { transform: scale(0.95); }
      .lw-button:focus-visible { outline: 2px solid var(--dsw-alias-button-info-fill, #2f8fd6); outline-offset: 1px; }
      .lw-svg { display: block; width: 46px; height: 40px; overflow: visible; }
      .lw-jump {
        transform-box: fill-box; transform-origin: 50% 88%;
        animation: lw-bob 4.2s ease-in-out infinite;
      }
      .lw-burst .lw-jump {
        animation: lw-bob 4.2s ease-in-out infinite, lw-hop 0.72s cubic-bezier(0.34, 1.3, 0.5, 1);
      }
      .lw-tail {
        transform-box: fill-box; transform-origin: 100% 50%;
        animation: lw-tail 3.6s ease-in-out infinite;
      }
      .lw-fin {
        transform-box: fill-box; transform-origin: 50% 0%;
        animation: lw-fin 3.6s ease-in-out infinite;
      }
      .lw-eye-open {
        transform-box: fill-box; transform-origin: 50% 50%;
        animation: lw-blink 5.4s ease-in-out infinite;
      }
      .lw-burst .lw-eye-open { animation: lw-blink 5.4s ease-in-out infinite, lw-eye-hide 0.8s ease; }
      .lw-eye-happy { opacity: 0; }
      .lw-burst .lw-eye-happy { animation: lw-eye-show 0.8s ease; }
      .lw-bubble { animation: lw-float 3.8s ease-in-out infinite; }
      .lw-bubble-b { animation-duration: 4.7s; }
      .lw-bubble-c { animation-duration: 3.2s; }
      .lw-burst .lw-bubble {
        animation: lw-float 3.8s ease-in-out infinite, lw-bubble-pop 0.9s ease-out;
      }
      .lw-burst .lw-bubble-b { animation: lw-float 4.7s ease-in-out infinite, lw-bubble-pop 0.9s ease-out 0.05s; }
      .lw-burst .lw-bubble-c { animation: lw-float 3.2s ease-in-out infinite, lw-bubble-pop 0.9s ease-out 0.1s; }
      .lw-eye-sleep { opacity: 0; }
      .lw-asleep .lw-eye-open, .lw-asleep .lw-eye-happy { opacity: 0 !important; animation: none !important; }
      .lw-asleep .lw-eye-sleep { opacity: 1; }
      .lw-asleep .lw-jump,
      .lw-asleep .lw-burst .lw-jump { animation: lw-sleep 5.2s ease-in-out infinite; }
      .lw-asleep .lw-tail, .lw-asleep .lw-fin { animation-duration: 9s; }
      .lw-asleep .lw-bubble { opacity: 0.45; animation-duration: 8s; }
      .lw-asleep .lw-heart, .lw-asleep .lw-spark { animation: none !important; opacity: 0 !important; }
      .lw-zzz { opacity: 0; }
      .lw-asleep .lw-zzz { opacity: 1; }
      .lw-asleep .lw-zzz-a { animation: lw-zzz 3.2s ease-in-out infinite; }
      .lw-asleep .lw-zzz-b { animation: lw-zzz 3.2s ease-in-out infinite 0.5s; }
      .lw-asleep .lw-zzz-c { animation: lw-zzz 3.2s ease-in-out infinite 1s; }
      .lw-spark { opacity: 0; transform-box: fill-box; transform-origin: 50% 50%; }
      .lw-burst .lw-spark { animation: lw-spark 0.9s ease-out; }
      .lw-burst .lw-spark-b { animation-delay: 0.08s; }
      .lw-burst .lw-spark-c { animation-delay: 0.16s; }
      .lw-heart { opacity: 0; }
      .lw-burst .lw-heart { animation: lw-heart 1.05s ease-out; }
      .lw-burst .lw-heart-b { animation-delay: 0.12s; }

      .lw-panel {
        position: absolute; left: 50%; bottom: calc(100% + 10px); transform: translateX(-50%);
        z-index: 40; width: 288px; max-width: calc(100vw - 24px); max-height: min(360px, calc(100vh - 120px));
        overflow: auto; padding: 12px 14px 10px; border-radius: 14px;
        background: var(--dsw-alias-bg-module-platform, light-dark(#ffffff, #26272a));
        color: var(--dsw-alias-label-primary, light-dark(#111111, #f5f6f7));
        border: 1px solid var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.25));
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.16);
        line-height: 1.4; text-align: left; cursor: default;
        animation: lw-panel-in 160ms ease-out;
      }
      .lw-panel.lw-below { top: calc(100% + 10px); bottom: auto; }
      .lw-panel.lw-left { left: 0; transform: none; }
      .lw-panel.lw-right { left: auto; right: 0; transform: none; }
      .lw-panel.lw-center { left: 50%; transform: translateX(-50%); }
      .lw-panel-head { display: flex; align-items: center; gap: 6px; min-height: 24px; }
      .lw-panel-title { flex: 1; min-width: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.01em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .lw-iconbtn {
        display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto;
        width: 24px; height: 24px; padding: 0; border: 0; border-radius: 7px;
        background: transparent; color: var(--dsw-alias-label-secondary, #666666); cursor: pointer;
      }
      .lw-iconbtn:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(127, 127, 127, 0.12)); color: var(--dsw-alias-label-primary, #111111); }
      .lw-iconbtn:focus-visible { outline: 2px solid var(--dsw-alias-button-info-fill, #2f8fd6); outline-offset: 1px; }
      .lw-iconbtn svg { display: block; width: 15px; height: 15px; }
      .lw-money { margin-top: 8px; display: flex; align-items: baseline; gap: 8px; }
      .lw-money-label { font-size: 11.5px; color: var(--dsw-alias-label-secondary, #666666); }
      .lw-money-value { font-size: 22px; font-weight: 650; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; }
      .lw-sub { display: flex; justify-content: space-between; gap: 8px; margin-top: 2px; font-size: 11.5px; color: var(--dsw-alias-label-secondary, #666666); font-variant-numeric: tabular-nums; }
      .lw-bar { height: 6px; margin-top: 7px; border-radius: 99px; overflow: hidden; background: var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.22)); }
      .lw-bar-fill { display: block; height: 100%; border-radius: inherit; background: var(--dsw-alias-button-info-fill, #2f8fd6); transition: width 240ms ease; }
      .lw-bar-fill.lw-bar-over { background: light-dark(#d18a12, #f0bc5a); }
      .lw-warn { margin-top: 6px; font-size: 11.5px; color: light-dark(#a96f05, #f0c367); }
      .lw-tokens { margin-top: 9px; font-size: 11.5px; color: var(--dsw-alias-label-secondary, #666666); font-variant-numeric: tabular-nums; }
      .lw-note { margin-top: 4px; font-size: 10.5px; line-height: 1.45; color: var(--dsw-alias-label-tertiary, #888888); }
      .lw-more { margin-top: 9px; padding-top: 7px; border-top: 1px solid var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.2)); }
      .lw-more summary { cursor: pointer; font-size: 11.5px; color: var(--dsw-alias-label-secondary, #666666); list-style: none; user-select: none; }
      .lw-more summary::-webkit-details-marker { display: none; }
      .lw-more summary::before { content: '▸'; display: inline-block; width: 12px; color: var(--dsw-alias-label-tertiary, #888888); }
      .lw-more[open] summary::before { content: '▾'; }
      .lw-more summary:focus-visible { outline: 2px solid var(--dsw-alias-button-info-fill, #2f8fd6); outline-offset: 1px; border-radius: 4px; }
      .lw-prices { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 7px; margin-top: 8px; }
      .lw-field { display: block; min-width: 0; font-size: 10px; color: var(--dsw-alias-label-tertiary, #888888); }
      .lw-field input {
        display: block; width: 100%; height: 26px; margin-top: 3px; padding: 0 6px;
        border: 0; border-radius: 7px; background: var(--dsw-alias-interactive-bg-hover, rgba(127, 127, 127, 0.1));
        color: var(--dsw-alias-label-primary, #111111); font: inherit; font-size: 11.5px; font-variant-numeric: tabular-nums;
      }
      .lw-field input:focus-visible { outline: 2px solid var(--dsw-alias-button-info-fill, #2f8fd6); outline-offset: 0; }
      .lw-budget-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 9px; font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #888888); }
      .lw-budget-row input, .lw-name-row input {
        width: 88px; height: 26px; padding: 0 6px; border: 0; border-radius: 7px;
        background: var(--dsw-alias-interactive-bg-hover, rgba(127, 127, 127, 0.1));
        color: var(--dsw-alias-label-primary, #111111); font: inherit; font-size: 11.5px; text-align: right; font-variant-numeric: tabular-nums;
      }
      .lw-budget-row input:focus-visible, .lw-name-row input:focus-visible { outline: 2px solid var(--dsw-alias-button-info-fill, #2f8fd6); outline-offset: 0; }
      .lw-say-bubble {
        position: absolute; left: 50%; bottom: calc(100% + 9px); transform: translateX(-50%);
        z-index: 35; width: max-content; max-width: 240px; padding: 8px 11px;
        border-radius: 12px; pointer-events: none;
        background: var(--dsw-alias-bg-module-platform, light-dark(#ffffff, #26272a));
        color: var(--dsw-alias-label-primary, light-dark(#111111, #f5f6f7));
        border: 1px solid var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.25));
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.14);
        font-size: 11.5px; line-height: 1.45; text-align: left; white-space: normal;
        animation: lw-say-in 160ms ease-out;
      }
      .lw-say-bubble.lw-below { top: calc(100% + 9px); bottom: auto; }
      .lw-say-bubble.lw-left { left: 0; transform: none; }
      .lw-say-bubble.lw-right { left: auto; right: 0; transform: none; }
      .lw-say-bubble.lw-center { left: 50%; transform: translateX(-50%); }
      .lw-say-bubble.lw-below::after {
        top: -5px; bottom: auto; border: 0;
        border-top: 1px solid var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.25));
        border-left: 1px solid var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.25));
      }
      .lw-bubble-name {
        display: block; margin-bottom: 3px; font-size: 10.5px; font-weight: 600;
        color: var(--dsw-alias-button-info-fill, #2f8fd6);
      }
      .lw-say-bubble-text { display: block; color: var(--dsw-alias-label-primary, #111111); }
      .lw-bubble-more {
        pointer-events: auto; display: inline-flex; margin-top: 6px; padding: 2px 0;
        border: 0; background: transparent; cursor: pointer;
        color: var(--dsw-alias-button-info-fill, #2f8fd6); font: inherit; font-size: 10.5px; font-weight: 500;
      }
      .lw-bubble-more:hover { text-decoration: underline; }
      .lw-bubble-more:focus-visible { outline: 2px solid var(--dsw-alias-button-info-fill, #2f8fd6); outline-offset: 2px; border-radius: 4px; }
      .lw-say-bubble::after {
        content: ''; position: absolute; left: 50%; bottom: -5px; width: 9px; height: 9px;
        background: inherit; border-right: 1px solid var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.25));
        border-bottom: 1px solid var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.25));
        transform: translateX(-50%) rotate(45deg);
      }
      .lw-say {
        display: flex; align-items: baseline; gap: 5px; margin-top: 7px; padding: 7px 9px;
        border-radius: 9px; background: var(--dsw-alias-interactive-bg-hover, rgba(127, 127, 127, 0.08));
        font-size: 11.5px; line-height: 1.5;
      }
      .lw-say-name { flex: 0 0 auto; font-weight: 600; color: var(--dsw-alias-label-primary, #111111); }
      .lw-say-text { min-width: 0; color: var(--dsw-alias-label-secondary, #666666); overflow-wrap: anywhere; }
      .lw-name-row {
        display: flex; align-items: center; justify-content: space-between; gap: 8px;
        margin-top: 9px; font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #888888);
      }
      .lw-name-row input { width: 150px; text-align: left; }
      .lw-skin-row {
        display: flex; align-items: center; gap: 8px; margin-top: 9px;
        font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #888888);
      }
      .lw-skin-label { flex: 0 0 auto; }
      .lw-skin-name {
        flex: 1; min-width: 0; color: var(--dsw-alias-label-primary, #111111); font-weight: 500;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .lw-skin-next {
        flex: 0 0 auto; padding: 2px 0; border: 0; background: transparent; cursor: pointer;
        color: var(--dsw-alias-button-info-fill, #2f8fd6); font: inherit; font-size: 10.5px;
      }
      .lw-skin-next:hover { text-decoration: underline; }
      .lw-skin-next:focus-visible { outline: 2px solid var(--dsw-alias-button-info-fill, #2f8fd6); outline-offset: 2px; border-radius: 4px; }
      .lw-size-row {
        display: flex; align-items: center; gap: 8px; margin-top: 9px;
        font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #888888);
      }
      .lw-size-label { flex: 0 0 auto; }
      .lw-size-row input[type='range'] {
        flex: 1; min-width: 0; height: 18px; margin: 0; cursor: pointer;
        accent-color: var(--dsw-alias-button-info-fill, #2f8fd6);
      }
      .lw-size-value {
        flex: 0 0 auto; width: 34px; text-align: right; font-variant-numeric: tabular-nums;
        color: var(--dsw-alias-label-primary, #111111);
      }
      .lw-sleep-row {
        display: flex; align-items: center; gap: 6px; margin-top: 9px;
        font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #888888);
      }
      .lw-sleep-row > span:first-child { flex: 1; min-width: 0; }
      .lw-sleep-row input {
        width: 54px; height: 26px; padding: 0 6px; border: 0; border-radius: 7px;
        background: var(--dsw-alias-interactive-bg-hover, rgba(127, 127, 127, 0.1));
        color: var(--dsw-alias-label-primary, #111111); font: inherit; font-size: 11.5px;
        text-align: right; font-variant-numeric: tabular-nums;
      }
      .lw-sleep-row input:focus-visible { outline: 2px solid var(--dsw-alias-button-info-fill, #2f8fd6); outline-offset: 0; }
      .lw-sleep-unit { flex: 0 0 auto; }
      .lw-audio { display: flex; gap: 10px; margin-top: 10px; }
      .lw-toggle-chip {
        flex: 1 1 0; min-width: 0; display: flex; align-items: center; justify-content: space-between; gap: 6px;
        font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #888888);
      }
      .lw-toggle-chip > span { min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .lw-switch {
        appearance: none; -webkit-appearance: none; position: relative; flex: 0 0 auto;
        width: 34px; height: 20px; margin: 0; border: 0; border-radius: 99px; cursor: pointer;
        background: var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.28));
        transition: background-color 150ms ease;
      }
      .lw-switch::before {
        content: ''; position: absolute; left: 2px; top: 2px; width: 16px; height: 16px;
        border-radius: 50%; background: #ffffff; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
        transition: transform 150ms ease;
      }
      .lw-switch:checked { background: var(--dsw-alias-button-info-fill, #2f8fd6); }
      .lw-switch:checked::before { transform: translateX(14px); }
      .lw-switch:focus-visible { outline: 2px solid var(--dsw-alias-button-info-fill, #2f8fd6); outline-offset: 2px; }
      .lw-setting-note { margin-top: 3px; font-size: 9.5px; line-height: 1.45; color: var(--dsw-alias-label-tertiary, #888888); }
      .lw-reset-row { display: flex; gap: 14px; align-items: center; margin-top: 9px; }
      .lw-reset {
        padding: 3px 0; border: 0; background: transparent; cursor: pointer;
        color: var(--dsw-alias-label-secondary, #666666); font: inherit; font-size: 10.5px;
      }
      .lw-reset:hover { color: var(--dsw-alias-label-primary, #111111); text-decoration: underline; }
      .lw-reset:focus-visible { outline: 2px solid var(--dsw-alias-button-info-fill, #2f8fd6); outline-offset: 2px; border-radius: 4px; }

      @keyframes lw-panel-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes lw-say-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes lw-sleep {
        0%, 100% { transform: translateY(0) scale(1, 1); }
        50% { transform: translateY(1px) scale(1.02, 1.04); }
      }
      @keyframes lw-zzz {
        0% { opacity: 0; transform: translateY(4px) scale(0.7); }
        30% { opacity: 0.9; }
        100% { opacity: 0; transform: translateY(-7px) scale(1.15); }
      }
      @keyframes lw-bob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-1.6px); }
      }
      @keyframes lw-hop {
        0% { transform: translateY(0) scale(1, 1); }
        18% { transform: translateY(1px) scale(1.05, 0.93); }
        45% { transform: translateY(-9px) scale(0.95, 1.06) rotate(-2deg); }
        72% { transform: translateY(0) scale(1.03, 0.96) rotate(0deg); }
        100% { transform: translateY(0) scale(1, 1); }
      }
      @keyframes lw-tail {
        0%, 100% { transform: rotate(-3deg); }
        50% { transform: rotate(4deg); }
      }
      @keyframes lw-fin {
        0%, 100% { transform: rotate(4deg); }
        50% { transform: rotate(-4deg); }
      }
      @keyframes lw-blink {
        0%, 90%, 96%, 100% { transform: scaleY(1); }
        93% { transform: scaleY(0.1); }
      }
      @keyframes lw-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-2px); }
      }
      @keyframes lw-bubble-pop {
        0% { transform: translateY(0) scale(1); }
        35% { transform: translateY(-5px) scale(1.45); }
        100% { transform: translateY(0) scale(1); }
      }
      @keyframes lw-spark {
        0% { opacity: 0; transform: scale(0.3) rotate(-20deg); }
        35% { opacity: 1; transform: scale(1.1) rotate(10deg); }
        100% { opacity: 0; transform: scale(1.3) rotate(25deg); }
      }
      @keyframes lw-heart {
        0% { transform: translateY(3px) scale(0.4); opacity: 0; }
        25% { opacity: 1; }
        100% { transform: translateY(-16px) scale(1); opacity: 0; }
      }
      @keyframes lw-eye-hide {
        0%, 12% { opacity: 1; }
        22%, 62% { opacity: 0; }
        78%, 100% { opacity: 1; }
      }
      @keyframes lw-eye-show {
        0%, 12% { opacity: 0; }
        22%, 62% { opacity: 1; }
        78%, 100% { opacity: 0; }
      }
      @keyframes lw-heart-fade {
        0%, 100% { opacity: 0; }
        30%, 70% { opacity: 0.9; }
      }
      @media (prefers-reduced-motion: reduce) {
        .lw-jump, .lw-tail, .lw-fin, .lw-eye-open, .lw-eye-happy, .lw-bubble, .lw-heart, .lw-spark,
        .lw-zzz-a, .lw-zzz-b, .lw-zzz-c {
          animation: none !important;
        }
        .lw-burst .lw-heart { animation: lw-heart-fade 0.9s ease !important; }
        .lw-burst .lw-eye-open { animation: lw-eye-swap-out 0.9s ease !important; }
        .lw-burst .lw-eye-happy { animation: lw-eye-swap 0.9s ease !important; }
        .lw-panel, .lw-say-bubble { animation: none; }
      }
      @keyframes lw-eye-swap {
        0%, 100% { opacity: 0; }
        20%, 75% { opacity: 1; }
      }
      @keyframes lw-eye-swap-out {
        0%, 100% { opacity: 1; }
        20%, 75% { opacity: 0; }
      }
    `;

    function clampNumber(value, min, max, fallback) {
      const n = typeof value === 'number' ? value : Number(value);
      if (!Number.isFinite(n)) return fallback;
      return Math.min(max, Math.max(min, n));
    }

    function readStorage(key) {
      try {
        return window.localStorage.getItem(key);
      } catch (_error) {
        return null;
      }
    }

    function writeStorage(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (_error) {
        // Private mode or a full quota leaves the ledger in memory only.
      }
    }

    function defaultPosition() {
      return {
        x: Math.max(16, window.innerWidth - 52 - 32),
        y: Math.max(16, Math.round(window.innerHeight * 0.45) - 21),
      };
    }

    function loadPosition() {
      let saved = null;
      try {
        saved = JSON.parse(readStorage(POSITION_KEY) || 'null');
      } catch (_error) {
        saved = null;
      }
      const fallback = defaultPosition();
      if (!saved || !Number.isFinite(saved.x) || !Number.isFinite(saved.y)) return fallback;
      // Discard positions that would sit against or past an edge (a common way to lose the pet).
      const minX = 16;
      const minY = 16;
      const maxX = window.innerWidth - 52 - 16;
      const maxY = window.innerHeight - 42 - 96;
      if (saved.x < minX || saved.y < minY || saved.x > maxX || saved.y > maxY) return fallback;
      return { x: saved.x, y: saved.y };
    }

    function savePosition(position) {
      writeStorage(POSITION_KEY, JSON.stringify({ x: Math.round(position.x), y: Math.round(position.y) }));
    }

    function loadSettings() {
      let parsed = null;
      try {
        parsed = JSON.parse(readStorage(SETTINGS_KEY) || 'null');
      } catch (_error) {
        parsed = null;
      }
      const prices = parsed && typeof parsed.prices === 'object' && parsed.prices !== null ? parsed.prices : {};
      return {
        sound: !(parsed && parsed.sound === false),
        voice: !(parsed && parsed.voice === false),
        name: parsed && typeof parsed.name === 'string' ? parsed.name.slice(0, 16) : '',
        skin: Math.round(clampNumber(parsed && parsed.skin, 0, SKINS.length - 1, 0)),
        scale: clampNumber(parsed && parsed.scale, 0.7, 1.6, 1),
        sleepMinutes: Math.round(clampNumber(parsed && parsed.sleepMinutes, 0, 120, 5)),
        budget: clampNumber(parsed && parsed.budget, 0, 1000000000, DEFAULT_BUDGET),
        prices: {
          input: clampNumber(prices.input, 0, 1000000, DEFAULT_PRICES.input),
          cache: clampNumber(prices.cache, 0, 1000000, DEFAULT_PRICES.cache),
          output: clampNumber(prices.output, 0, 1000000, DEFAULT_PRICES.output),
        },
      };
    }

    function saveSettings(settings) {
      writeStorage(SETTINGS_KEY, JSON.stringify(settings));
    }

    function todayKey() {
      const date = new Date();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${date.getFullYear()}-${month}-${day}`;
    }

    function zeroUsage() {
      return { input: 0, cache: 0, output: 0 };
    }

    function loadLedger() {
      let parsed = null;
      try {
        parsed = JSON.parse(readStorage(LEDGER_KEY) || 'null');
      } catch (_error) {
        parsed = null;
      }
      if (!parsed || parsed.day !== todayKey() || !parsed.today || !parsed.sessions) {
        return { day: todayKey(), today: zeroUsage(), sessions: {} };
      }
      return parsed;
    }

    function saveLedger(ledger) {
      writeStorage(LEDGER_KEY, JSON.stringify(ledger));
    }

    function usageOf(raw) {
      const cacheWrite = raw && Number.isFinite(raw.cacheWriteTokens) ? raw.cacheWriteTokens : 0;
      return {
        input: (raw && Number.isFinite(raw.uncachedInputTokens) ? raw.uncachedInputTokens : 0) + cacheWrite,
        cache: raw && Number.isFinite(raw.cacheReadTokens) ? raw.cacheReadTokens : 0,
        output: raw && Number.isFinite(raw.outputTokens) ? raw.outputTokens : 0,
      };
    }

    const sessionStore = {
      value: { sessionId: '', usage: { input: 0, cache: 0, output: 0 } },
      listeners: new Set(),
      getSnapshot: function () { return sessionStore.value; },
      subscribe: function (listener) {
        sessionStore.listeners.add(listener);
        return function () { sessionStore.listeners.delete(listener); };
      },
      publish: function (sessionId, usage) {
        sessionStore.value = { sessionId: sessionId || '', usage: usage };
        const listeners = Array.from(sessionStore.listeners);
        listeners.forEach(function (listener) {
          try { listener(); } catch (_error) {}
        });
      },
    };

    function computePlace(position, viewport, scale) {
      const panelWidth = Math.min(288, viewport.width - 24);
      const centerX = position.x + (52 * scale) / 2;
      const below = position.y < 280;
      let align = 'center';
      if (centerX < panelWidth / 2 + 12) align = 'left';
      else if (centerX > viewport.width - panelWidth / 2 - 12) align = 'right';
      return { below: below, align: align };
    }

    function useSessionStore() {
      return React.useSyncExternalStore(sessionStore.subscribe, sessionStore.getSnapshot, sessionStore.getSnapshot);
    }

    function addUsage(target, source) {
      target.input += source.input;
      target.cache += source.cache;
      target.output += source.output;
    }

    function recordUsage(sessionId, usage) {
      const ledger = loadLedger();
      const id = typeof sessionId === 'string' && sessionId.length > 0 ? sessionId : 'unknown';
      const previous = ledger.sessions[id];
      if (previous === undefined) {
        addUsage(ledger.today, usage);
        ledger.sessions[id] = { input: usage.input, cache: usage.cache, output: usage.output };
      } else {
        const delta = {
          input: Math.max(0, usage.input - (previous.input || 0)),
          cache: Math.max(0, usage.cache - (previous.cache || 0)),
          output: Math.max(0, usage.output - (previous.output || 0)),
        };
        addUsage(ledger.today, delta);
        ledger.sessions[id] = { input: usage.input, cache: usage.cache, output: usage.output };
      }
      saveLedger(ledger);
      return { input: ledger.today.input, cache: ledger.today.cache, output: ledger.today.output };
    }

    function resetLedger(sessionId, usage) {
      const id = typeof sessionId === 'string' && sessionId.length > 0 ? sessionId : 'unknown';
      const sessions = {};
      sessions[id] = { input: usage.input, cache: usage.cache, output: usage.output };
      saveLedger({ day: todayKey(), today: zeroUsage(), sessions: sessions });
      return zeroUsage();
    }

    function costOf(usage, prices) {
      return (usage.input * prices.input + usage.cache * prices.cache + usage.output * prices.output) / 1000000;
    }

    function formatMoney(value) {
      const n = Number.isFinite(value) && value > 0 ? value : 0;
      if (n === 0) return '¥0.00';
      if (n < 0.001) return '¥' + n.toFixed(4);
      if (n < 0.1) return '¥' + n.toFixed(3);
      return '¥' + n.toFixed(2);
    }

    function formatTokens(value) {
      const n = Number.isFinite(value) && value > 0 ? value : 0;
      if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
      if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
      return String(Math.round(n));
    }

    let audioContext = null;

    function audio() {
      try {
        if (audioContext === null) {
          const AudioCtor = window.AudioContext || window.webkitAudioContext;
          if (!AudioCtor) return null;
          audioContext = new AudioCtor();
        }
        if (audioContext.state === 'suspended') audioContext.resume().catch(function () {});
        return audioContext;
      } catch (_error) {
        return null;
      }
    }

    function tone(from, to, duration, type, volume, delay) {
      const ctx = audio();
      if (ctx === null) return;
      const start = ctx.currentTime + (delay || 0);
      try {
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(from, start);
        oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, to), start + duration);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(volume, start + 0.018);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
        oscillator.connect(gain);
        gain.connect(ctx.destination);
        oscillator.start(start);
        oscillator.stop(start + duration + 0.03);
      } catch (_error) {
        // A blocked or interrupted audio context is silent, never fatal.
      }
    }

    function playCue(kind, enabled) {
      if (!enabled) return;
      if (kind === 'open') {
        tone(680, 920, 0.1, 'sine', 0.05);
        tone(1020, 1360, 0.09, 'sine', 0.026, 0.06);
      } else if (kind === 'close') {
        tone(720, 500, 0.09, 'sine', 0.035);
      } else if (kind === 'warn') {
        tone(520, 440, 0.13, 'triangle', 0.045);
        tone(400, 340, 0.16, 'triangle', 0.04, 0.12);
      } else if (kind === 'tick') {
        tone(1040, 1280, 0.06, 'sine', 0.03);
      }
    }

    function speak(text, enabled) {
      if (!enabled || !text) return;
      try {
        const synth = window.speechSynthesis;
        if (!synth) return;
        synth.cancel();
        const lang = (document.documentElement && document.documentElement.lang) || 'zh-CN';
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 1.08;
        utterance.pitch = 1.35;
        utterance.volume = 0.85;
        const voices = typeof synth.getVoices === 'function' ? synth.getVoices() : [];
        const primary = lang.toLowerCase().slice(0, 2);
        const matching = voices.filter(function (voice) {
          return String(voice.lang || '').toLowerCase().indexOf(primary) === 0;
        });
        const bright = /female|woman|girl|xiaoxiao|xiaoyi|tingting|meijia|samantha|victoria|karen|moira|tessa|zira|aria|jenny|susan|nicky|serena|allison|ava/i;
        const deep = /male|man|david|alex|daniel|fred|george|james|mark/i;
        const cute = matching.find(function (voice) { return bright.test(voice.name || ''); });
        const lighter = matching.find(function (voice) { return !deep.test(voice.name || ''); });
        if (cute) utterance.voice = cute;
        else if (lighter) utterance.voice = lighter;
        synth.speak(utterance);
      } catch (_error) {
        // A browser without speech synthesis simply stays quiet.
      }
    }

    function stopSpeaking() {
      try {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
      } catch (_error) {
        // Nothing to cancel.
      }
    }

    function skinAccessory(kind) {
      if (kind === 'bow') {
        return h(
          'g',
          null,
          h('path', { d: 'M40 23c-3.5-2.6-7.2-2-7.2.8 0 2.8 3.7 3.4 7.2.8Z', fill: '#ff6fa5', stroke: '#d94f86', strokeWidth: 0.6 }),
          h('path', { d: 'M40 23c3.5-2.6 7.2-2 7.2.8 0 2.8-3.7 3.4-7.2.8Z', fill: '#ff8fb9', stroke: '#d94f86', strokeWidth: 0.6 }),
          h('circle', { cx: 40, cy: 23, r: 1.7, fill: '#e2508c' }),
        );
      }
      if (kind === 'hat') {
        return h(
          'g',
          null,
          h('path', { d: 'M20 23c4.5-2.2 18.5-2.2 23 0-2.4 1.8-20.6 1.8-23 0Z', fill: '#ffffff', stroke: '#4a86c8', strokeWidth: 0.8 }),
          h('path', { d: 'M23 22.5c1-6.5 15.5-6.5 16.5 0Z', fill: '#ffffff', stroke: '#4a86c8', strokeWidth: 0.8 }),
          h('path', { d: 'M22.5 21.2h19', stroke: '#ff7a8a', strokeWidth: 1.4, strokeLinecap: 'round' }),
        );
      }
      if (kind === 'flower') {
        return h(
          'g',
          { transform: 'translate(43 21)' },
          h('circle', { cx: 0, cy: -2.8, r: 2, fill: '#fff8e6', stroke: '#f0cf74', strokeWidth: 0.5 }),
          h('circle', { cx: 2.7, cy: -0.9, r: 2, fill: '#fff8e6', stroke: '#f0cf74', strokeWidth: 0.5 }),
          h('circle', { cx: 1.7, cy: 2.3, r: 2, fill: '#fff8e6', stroke: '#f0cf74', strokeWidth: 0.5 }),
          h('circle', { cx: -1.7, cy: 2.3, r: 2, fill: '#fff8e6', stroke: '#f0cf74', strokeWidth: 0.5 }),
          h('circle', { cx: -2.7, cy: -0.9, r: 2, fill: '#fff8e6', stroke: '#f0cf74', strokeWidth: 0.5 }),
          h('circle', { cx: 0, cy: 0, r: 1.5, fill: '#ffd45e' }),
        );
      }
      if (kind === 'glasses') {
        return h(
          'g',
          null,
          h('path', {
            d: 'M23 39c-3.2-2-5.4-4.2-5.4-6.4 0-2.2 2.1-3.2 3.6-2.1L23 32l1.8-1.5c1.5-1.1 3.6-.1 3.6 2.1 0 2.2-2.2 4.4-5.4 6.4Z',
            fill: '#ff7aa2', opacity: 0.55, stroke: '#3b2b3a', strokeWidth: 1.2,
          }),
          h('path', { d: 'M28 33.5c3 .2 5 1.8 6 3.8', fill: 'none', stroke: '#3b2b3a', strokeWidth: 1.1, strokeLinecap: 'round' }),
          h('path', { d: 'M20 34.2c1.2-1 2.8-1.2 4-.4', fill: 'none', stroke: '#ffffff', strokeWidth: 1, opacity: 0.6, strokeLinecap: 'round' }),
        );
      }
      if (kind === 'bowtie') {
        return h(
          'g',
          { transform: 'translate(17 43)' },
          h('path', { d: 'M0 0l-5-3v6Z', fill: '#ff6f61' }),
          h('path', { d: 'M0 0l5-3v6Z', fill: '#ff6f61' }),
          h('circle', { cx: 0, cy: 0, r: 1.5, fill: '#d94f3f' }),
        );
      }
      if (kind === 'crown') {
        return h(
          'g',
          null,
          h('path', { d: 'M22 22l1.2-7 3.6 3.4 4.2-5.2 4 4.4 3.4-2.4 1 6.8Z', fill: '#ffd45e', stroke: '#d9a52b', strokeWidth: 0.8 }),
          h('circle', { cx: 23.2, cy: 14.6, r: 1, fill: '#fff8e0' }),
          h('circle', { cx: 31, cy: 12, r: 1.1, fill: '#fff8e0' }),
          h('circle', { cx: 39.4, cy: 16.6, r: 0.9, fill: '#fff8e0' }),
        );
      }
      if (kind === 'headphones') {
        return h(
          'g',
          null,
          h('path', { d: 'M13.5 34c-1.5-9 9-15.5 20-13', fill: 'none', stroke: '#3f4a63', strokeWidth: 2.4, strokeLinecap: 'round' }),
          h('circle', { cx: 14, cy: 35, r: 4.2, fill: '#5a6a8a', stroke: '#3f4a63', strokeWidth: 1 }),
          h('circle', { cx: 14, cy: 35, r: 2, fill: '#a9bad4' }),
        );
      }
      return null;
    }

    function whaleSvg(skin, overBudget, scale) {
      const sweat = overBudget
        ? h('g', { 'aria-hidden': true },
          h('path', {
            d: 'M16 30.5c-1.9 2.5-2.9 4-2.9 5.3a2.9 2.9 0 0 0 5.8 0c0-1.3-1-2.8-2.9-5.3Z',
            fill: '#8fd2f4',
          }),
          h('circle', { cx: 15, cy: 34.4, r: 0.8, fill: '#ffffff', opacity: 0.9 }),
        )
        : null;

      return h(
        'svg',
        {
          className: 'lw-svg',
          viewBox: '0 0 64 56',
          'aria-hidden': true,
          focusable: 'false',
          style: { width: (46 * scale) + 'px', height: (40 * scale) + 'px' },
        },
        h(
          'defs',
          null,
          h(
            'linearGradient',
            { id: 'lw-skin', x1: '0', y1: '0', x2: '0', y2: '1' },
            h('stop', { offset: '0', stopColor: skin.body0 }),
            h('stop', { offset: '1', stopColor: skin.body1 }),
          ),
          h(
            'clipPath',
            { id: 'lw-body-clip' },
            h('ellipse', { cx: 30, cy: 37, rx: 17, ry: 11 }),
          ),
        ),
        h(
          'g',
          { className: 'lw-jump' },
          h(
            'g',
            { className: 'lw-whale' },
            h('path', {
              className: 'lw-tail',
              d: 'M45 33c5-4 10-8 13-9 2-1 3 2 1 5-3 4-7 6-11 8 4 0 8 2 10 5 2 3-1 6-4 4-4-3-7-7-9-9Z',
              fill: 'url(#lw-skin)',
            }),
            h('ellipse', { cx: 30, cy: 37, rx: 17, ry: 11, fill: 'url(#lw-skin)' }),
            h(
              'g',
              { clipPath: 'url(#lw-body-clip)' },
              h('ellipse', { cx: 30, cy: 45, rx: 15, ry: 7, fill: skin.belly }),
              h('path', {
                d: 'M16.5 39.5q3 2.4 6.5 1',
                fill: 'none',
                stroke: skin.line,
                strokeWidth: 1.1,
                strokeLinecap: 'round',
                opacity: 0.65,
              }),
            ),
            h('path', {
              className: 'lw-fin',
              d: 'M32 46c3 1 6.5 3.5 8 7 .5 1.5-1.5 2.5-3 1.5-3-2-5-5-6.5-7Z',
              fill: skin.body1,
            }),
            h(
              'g',
              { className: 'lw-eye-open' },
              h('circle', { cx: 23, cy: 35, r: 3.4, fill: '#ffffff' }),
              h('circle', { cx: 22.3, cy: 35.4, r: 1.8, fill: '#153f5c' }),
              h('circle', { cx: 21.4, cy: 34.2, r: 0.9, fill: '#ffffff' }),
            ),
            h('path', {
              className: 'lw-eye-happy',
              d: 'M20.5 36c1.1-1.7 3.2-1.7 4.3 0',
              fill: 'none',
              stroke: '#153f5c',
              strokeWidth: 1.4,
              strokeLinecap: 'round',
            }),
            h('path', {
              className: 'lw-eye-sleep',
              d: 'M20.5 35.8c1.4 1 3 1 4.4 0',
              fill: 'none',
              stroke: '#153f5c',
              strokeWidth: 1.4,
              strokeLinecap: 'round',
            }),
            h('ellipse', { cx: 27.5, cy: 42.5, rx: 2.5, ry: 1.5, fill: skin.blush, opacity: 0.6 }),
            h('ellipse', { cx: 31, cy: 27, rx: 2.4, ry: 1.1, fill: skin.body1, opacity: 0.45 }),
            sweat,
          ),
          h(
            'g',
            { fill: '#d9f2ff', stroke: '#8fd2f4', strokeWidth: 1 },
            h('circle', { className: 'lw-bubble lw-bubble-a', cx: 24, cy: 20.5, r: 3 }),
            h('circle', { className: 'lw-bubble lw-bubble-b', cx: 31.5, cy: 14, r: 4 }),
            h('circle', { className: 'lw-bubble lw-bubble-c', cx: 39.5, cy: 21, r: 2.4 }),
          ),
          h(
            'g',
            { fill: '#ffffff', opacity: 0.85 },
            h('circle', { className: 'lw-bubble lw-bubble-a', cx: 22.8, cy: 19.3, r: 0.8 }),
            h('circle', { className: 'lw-bubble lw-bubble-b', cx: 29.8, cy: 12.4, r: 1.1 }),
            h('circle', { className: 'lw-bubble lw-bubble-c', cx: 38.8, cy: 20.2, r: 0.6 }),
          ),
          h(
            'g',
            { fill: '#ff8fa3' },
            h(
              'g',
              { transform: 'translate(48 17) scale(0.9)' },
              h('path', {
                className: 'lw-heart',
                d: 'M0 2.6C-1.6.8-5.2.4-5.2-2.2-5.2-4-3-4.9-1.3-3.4L0-2.2 1.3-3.4C3-4.9 5.2-4 5.2-2.2 5.2.4 1.6.8 0 2.6Z',
              }),
            ),
            h(
              'g',
              { transform: 'translate(56 24) scale(0.65) rotate(-12 0 0)' },
              h('path', {
                className: 'lw-heart lw-heart-b',
                d: 'M0 2.6C-1.6.8-5.2.4-5.2-2.2-5.2-4-3-4.9-1.3-3.4L0-2.2 1.3-3.4C3-4.9 5.2-4 5.2-2.2 5.2.4 1.6.8 0 2.6Z',
              }),
            ),
          ),
          h(
            'g',
            { fill: '#ffe27a' },
            h('g', { transform: 'translate(12 13)' }, h('path', { className: 'lw-spark lw-spark-a', d: 'M0 -4 L1.2 -1.2 L4 0 L1.2 1.2 L0 4 L-1.2 1.2 L-4 0 L-1.2 -1.2Z' })),
            h('g', { transform: 'translate(55 19)' }, h('path', { className: 'lw-spark lw-spark-b', d: 'M0 -4 L1.2 -1.2 L4 0 L1.2 1.2 L0 4 L-1.2 1.2 L-4 0 L-1.2 -1.2Z' })),
            h('g', { transform: 'translate(48 44)' }, h('path', { className: 'lw-spark lw-spark-c', d: 'M0 -4 L1.2 -1.2 L4 0 L1.2 1.2 L0 4 L-1.2 1.2 L-4 0 L-1.2 -1.2Z' })),
          ),
          skinAccessory(skin.accessory),
          h(
            'g',
            { className: 'lw-zzz', stroke: '#3f7fb5', strokeWidth: 1.2, strokeLinecap: 'round', fill: 'none' },
            h('g', { transform: 'translate(48 12)' }, h('path', { className: 'lw-zzz-a', d: 'M0 0h4l-4 4h4' })),
            h('g', { transform: 'translate(54 6) scale(0.8)' }, h('path', { className: 'lw-zzz-b', d: 'M0 0h4l-4 4h4' })),
            h('g', { transform: 'translate(59 14) scale(0.6)' }, h('path', { className: 'lw-zzz-c', d: 'M0 0h4l-4 4h4' })),
          ),
        ),
      );
    }

    function reportWhaleError(error, info) {
      try {
        window.localStorage.setItem('little-whale.error.v1', JSON.stringify({
          message: String((error && error.message) || error),
          stack: String((error && error.stack) || ''),
          componentStack: String((info && info.componentStack) || ''),
          at: Date.now(),
        }));
      } catch (_error) {}
      try { console.error('[little-whale]', error, info); } catch (_error) {}
    }

    class WhaleBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { failed: false };
      }
      static getDerivedStateFromError() {
        return { failed: true };
      }
      componentDidCatch(error, info) {
        reportWhaleError(error, info);
      }
      render() {
        if (this.state.failed) {
          return h('button', {
            type: 'button',
            title: '小鲸鱼出了点小问题，点我重试',
            'aria-label': '小鲸鱼出了点小问题，点我重试',
            style: {
              position: 'fixed', right: '24px', top: '40%', zIndex: 60,
              width: '48px', height: '48px', borderRadius: '50%',
              border: '1px solid rgba(127,127,127,0.3)',
              background: 'var(--dsw-alias-bg-module-platform, #ffffff)',
              boxShadow: '0 6px 18px rgba(0,0,0,0.16)',
              fontSize: '24px', lineHeight: '1', cursor: 'pointer',
            },
            onClick: function () { this.setState({ failed: false }); }.bind(this),
          }, '🐳');
        }
        return h(WhalePet, this.props);
      }
    }

    function SessionBridge(props) {
      const useProjection = props.useProjection;
      const rawUsage = typeof useProjection === 'function' ? useProjection('tokenUsage') : undefined;
      const usage = usageOf(rawUsage);
      React.useEffect(function () {
        sessionStore.publish(props.sessionId, usage);
      }, [props.sessionId, usage.input, usage.cache, usage.output]);
      return null;
    }

    function WhalePet(props) {
      const session = useSessionStore();
      const usage = session.usage;
      const [open, setOpen] = React.useState(false);
      const [bursts, setBursts] = React.useState(0);
      const [settings, setSettings] = React.useState(loadSettings);
      const [today, setToday] = React.useState(function () { return loadLedger().today; });
      const [speech, setSpeech] = React.useState('');
      const [position, setPosition] = React.useState(loadPosition);
      const [dragging, setDragging] = React.useState(false);
      const [asleep, setAsleep] = React.useState(false);
      const [idleTick, setIdleTick] = React.useState(0);
      const [viewport, setViewport] = React.useState(function () {
        return { width: window.innerWidth, height: window.innerHeight };
      });
      const rootRef = React.useRef(null);
      const buttonRef = React.useRef(null);
      const closeRef = React.useRef(null);
      const dragRef = React.useRef(null);
      const movedRef = React.useRef(false);

      const t = typeof props.t === 'function'
        ? props.t
        : function (key, params) {
          const template = DICTIONARIES.en[key] !== undefined ? DICTIONARIES.en[key] : key;
          if (!params) return template;
          return template.replace(/\{(\w+)\}/g, function (match, name) {
            return Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match;
          });
        };
      const displayName = (settings.name || '').trim() || t('defaultName');
      const skinIndex = Math.min(SKINS.length - 1, Math.max(0, Math.round(settings.skin || 0)));
      const skin = SKINS[skinIndex];

      function clampPosition(x, y) {
        const root = rootRef.current;
        const width = root ? root.offsetWidth : 52;
        const height = root ? root.offsetHeight : 42;
        return {
          x: Math.min(Math.max(8, x), Math.max(8, window.innerWidth - width - 8)),
          y: Math.min(Math.max(8, y), Math.max(8, window.innerHeight - height - 8)),
        };
      }

      const sessionCost = costOf(usage, settings.prices);
      const todayCost = costOf(today, settings.prices);
      const budget = settings.budget;
      const overBudget = budget > 0 && todayCost > budget;
      const percent = budget > 0 ? Math.min(100, Math.round((todayCost / budget) * 100)) : 0;
      const overRef = React.useRef(false);
      const speechRef = React.useRef('');
      const nameAtFocusRef = React.useRef('');
      const recentLinesRef = React.useRef([]);
      const moneyLineRef = React.useRef(null);

      React.useEffect(function () {
        if (!session.sessionId) return;
        setToday(recordUsage(session.sessionId, usage));
      }, [session.sessionId, usage.input, usage.cache, usage.output]);

      React.useEffect(function () {
        setPosition(function (current) { return clampPosition(current.x, current.y); });
        function onResize() {
          setViewport({ width: window.innerWidth, height: window.innerHeight });
          setPosition(function (current) { return clampPosition(current.x, current.y); });
        }
        window.addEventListener('resize', onResize);
        return function () { window.removeEventListener('resize', onResize); };
      }, []);

      React.useEffect(function () {
        setPosition(function (current) { return clampPosition(current.x, current.y); });
      }, [settings.scale]);

      React.useEffect(function () {
        const minutes = clampNumber(settings.sleepMinutes, 0, 120, 5);
        if (minutes <= 0) {
          setAsleep(false);
          return undefined;
        }
        if (asleep) return undefined;
        const timer = setTimeout(function () { setAsleep(true); }, minutes * 60000);
        return function () { clearTimeout(timer); };
      }, [settings.sleepMinutes, asleep, idleTick]);

      React.useEffect(function () {
        return stopSpeaking;
      }, []);

      React.useEffect(function () {
        speechRef.current = speech;
      }, [speech]);

      React.useEffect(function () {
        if (!speech || open) return undefined;
        const timer = setTimeout(function () { setSpeech(''); }, 6500);
        function onPointerDown(event) {
          if (rootRef.current && !rootRef.current.contains(event.target)) {
            setSpeech('');
            stopSpeaking();
          }
        }
        document.addEventListener('pointerdown', onPointerDown);
        return function () {
          clearTimeout(timer);
          document.removeEventListener('pointerdown', onPointerDown);
        };
      }, [speech, open]);

      React.useEffect(function () {
        const key = 'little-whale.greeted.v1';
        let timer = null;
        if (readStorage(key) !== todayKey()) {
          timer = setTimeout(function () {
            if (speechRef.current) return;
            const line = moneyLineRef.current ? moneyLineRef.current() : '';
            if (!line) return;
            writeStorage(key, todayKey());
            setSpeech(line);
          }, 1200);
        }
        return function () { if (timer !== null) clearTimeout(timer); };
      }, []);

      React.useEffect(function () {
        if (!overBudget) {
          overRef.current = false;
          return;
        }
        if (overRef.current) return;
        overRef.current = true;
        if (readStorage('little-whale.warned.v1') === todayKey()) return;
        writeStorage('little-whale.warned.v1', todayKey());
        setSpeech(moneyLine());
      }, [overBudget]);

      React.useEffect(function () {
        if (!open) return undefined;
        try {
          if (closeRef.current) closeRef.current.focus();
        } catch (error) {
          reportWhaleError(error, null);
        }
        function onPointerDown(event) {
          if (rootRef.current && !rootRef.current.contains(event.target)) {
            setOpen(false);
            setSpeech('');
            stopSpeaking();
          }
        }
        document.addEventListener('pointerdown', onPointerDown);
        return function () {
          document.removeEventListener('pointerdown', onPointerDown);
        };
      }, [open]);

      function updateSettings(patch) {
        const next = { ...settings, ...patch };
        setSettings(next);
        saveSettings(next);
      }

      function updatePrices(key, value) {
        const n = Number(value);
        if (!Number.isFinite(n) || n < 0) return;
        updateSettings({ prices: { ...settings.prices, [key]: clampNumber(n, 0, 1000000, 0) } });
      }

      function updateBudget(value) {
        const n = Number(value);
        if (!Number.isFinite(n) || n < 0) return;
        updateSettings({ budget: clampNumber(n, 0, 1000000000, 0) });
      }

      function updateScale(value) {
        const n = Number(value);
        if (!Number.isFinite(n)) return;
        updateSettings({ scale: clampNumber(n / 100, 0.7, 1.6, 1) });
      }

      function updateSleep(value) {
        const n = Number(value);
        if (!Number.isFinite(n) || n < 0) return;
        updateSettings({ sleepMinutes: Math.round(clampNumber(n, 0, 120, 5)) });
      }

      function noteActivity() {
        setAsleep(false);
        setIdleTick(function (value) { return value + 1; });
      }

      function toggleSound() {
        const next = !settings.sound;
        updateSettings({ sound: next });
        if (next) playCue('tick', true);
      }

      function toggleVoice() {
        const next = !settings.voice;
        updateSettings({ voice: next });
        if (next) {
          const line = moneyLine();
          setSpeech(line);
          speak(line, true);
        } else {
          stopSpeaking();
        }
      }

      function updateName(value) {
        updateSettings({ name: Array.from(String(value)).slice(0, 16).join('') });
      }

      function onNameFocus() {
        nameAtFocusRef.current = (settings.name || '').trim();
      }

      function onNameBlur() {
        const raw = settings.name || '';
        const trimmed = raw.trim();
        if (raw !== trimmed) updateSettings({ name: trimmed });
        if (trimmed === nameAtFocusRef.current) return;
        nameAtFocusRef.current = trimmed;
        const line = t('renamed', { name: trimmed || t('defaultName') });
        setSpeech(line);
        speak(line, settings.voice);
      }

      function defaultLine() {
        if (budget > 0) {
          const left = budget - todayCost;
          if (left < 0) return t('lineOver1', { amount: formatMoney(-left) });
          return t('lineLeft1', { amount: formatMoney(left) });
        }
        return t('lineNoBudget1', { spent: formatMoney(todayCost) });
      }

      function pickLine(keys, params) {
        const candidates = keys.map(function (key) { return t(key, params); });
        const recent = recentLinesRef.current;
        let fresh = candidates.filter(function (line) { return recent.indexOf(line) === -1; });
        if (fresh.length === 0) {
          const last = recent[recent.length - 1];
          fresh = candidates.filter(function (line) { return line !== last; });
          recent.length = 0;
          if (fresh.length === 0) fresh = candidates;
        }
        const line = fresh[Math.floor(Math.random() * fresh.length)];
        recent.push(line);
        while (recent.length > 6) recent.shift();
        return line;
      }

      function moneyLine() {
        const params = {
          name: displayName,
          amount: '',
          spent: formatMoney(todayCost),
          percent: budget > 0 ? Math.round((todayCost / budget) * 100) : 0,
        };
        if (budget > 0) {
          const left = budget - todayCost;
          if (left < 0) {
            params.amount = formatMoney(-left);
            return pickLine(OVER_LINES, params);
          }
          params.amount = formatMoney(left);
          return pickLine(LEFT_LINES, params);
        }
        return pickLine(NO_BUDGET_LINES, params);
      }

      moneyLineRef.current = moneyLine;

      function resetPosition() {
        const fallback = defaultPosition();
        const next = clampPosition(fallback.x, fallback.y);
        setPosition(next);
        savePosition(next);
      }

      function closePanel() {
        setOpen(false);
        setSpeech('');
        stopSpeaking();
        if (buttonRef.current) buttonRef.current.focus();
      }

      function onPointerDown(event) {
        if (event.button !== undefined && event.button !== 0) return;
        const root = rootRef.current;
        if (!root) return;
        const rect = root.getBoundingClientRect();
        dragRef.current = {
          pointerId: event.pointerId,
          startX: rect.left,
          startY: rect.top,
          pointerX: event.clientX,
          pointerY: event.clientY,
        };
        movedRef.current = false;
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch (_error) {
          // Pointer capture is an enhancement; the drag still works without it.
        }
      }

      function onPointerMove(event) {
        const drag = dragRef.current;
        if (!drag) return;
        const dx = event.clientX - drag.pointerX;
        const dy = event.clientY - drag.pointerY;
        if (!movedRef.current && Math.abs(dx) + Math.abs(dy) < 5) return;
        if (!movedRef.current) {
          movedRef.current = true;
          setDragging(true);
        }
        setPosition(clampPosition(drag.startX + dx, drag.startY + dy));
      }

      function finishDrag(event) {
        const drag = dragRef.current;
        if (!drag) return;
        dragRef.current = null;
        setDragging(false);
        try {
          if (event.currentTarget.hasPointerCapture && event.currentTarget.hasPointerCapture(drag.pointerId)) {
            event.currentTarget.releasePointerCapture(drag.pointerId);
          }
        } catch (_error) {}
        if (movedRef.current && event.type !== 'pointercancel') {
          const final = clampPosition(
            drag.startX + (event.clientX - drag.pointerX),
            drag.startY + (event.clientY - drag.pointerY),
          );
          setPosition(final);
          savePosition(final);
        }
      }

      function onWhaleClick() {
        if (movedRef.current) {
          movedRef.current = false;
          return;
        }
        onWhale();
      }

      function onWhale() {
        updateSettings({ skin: (skinIndex + 1) % SKINS.length });
        setBursts(function (value) { return value + 1; });
        const line = moneyLine();
        setSpeech(line);
        playCue(overBudget ? 'warn' : 'open', settings.sound);
        speak(line, settings.voice);
      }

      function cycleSkin() {
        const nextIndex = (skinIndex + 1) % SKINS.length;
        updateSettings({ skin: nextIndex });
        setBursts(function (value) { return value + 1; });
        const line = pickLine(SKIN_LINES, { skin: t(SKINS[nextIndex].nameKey) });
        setSpeech(line);
        speak(line, settings.voice);
      }

      function openLedger() {
        setOpen(true);
      }

      const priceFields = [
        { key: 'input', label: t('priceInput') },
        { key: 'cache', label: t('priceCache') },
        { key: 'output', label: t('priceOutput') },
      ];

      const place = computePlace(position, viewport, settings.scale);
      const placementClass = (place.below ? ' lw-below' : '') + ' lw-' + place.align;
      const panelMaxHeight = Math.max(160, Math.min(360, place.below
        ? viewport.height - position.y - 52 - 16
        : position.y - 16));

      const panel = open
        ? h(
          'div',
          {
            className: 'lw-panel' + placementClass,
            style: { maxHeight: panelMaxHeight + 'px' },
            role: 'dialog',
            'aria-label': displayName + ' · ' + t('panelTitle'),
            onKeyDown: function (event) {
              if (event.key !== 'Escape') return;
              event.preventDefault();
              event.stopPropagation();
              closePanel();
            },
          },
          h(
            'div',
            { className: 'lw-panel-head' },
            h('span', { className: 'lw-panel-title' }, displayName + ' · ' + t('ledgerLabel')),
            h(
              'button',
              {
                type: 'button',
                className: 'lw-iconbtn',
                title: t('close'),
                'aria-label': t('close'),
                onClick: closePanel,
                ref: closeRef,
              },
              h(
                'svg',
                { viewBox: '0 0 16 16', 'aria-hidden': true },
                h('path', { d: 'M4 4l8 8M12 4l-8 8', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' }),
              ),
            ),
          ),
          h(
            'div',
            { className: 'lw-say', 'aria-live': 'polite' },
            h('span', { className: 'lw-say-name' }, displayName),
            h('span', { className: 'lw-say-text' }, '“' + (speech || defaultLine()) + '”'),
          ),
          h(
            'div',
            { className: 'lw-money' },
            h('span', { className: 'lw-money-label' }, t('sessionCost')),
            h('span', { className: 'lw-money-value' }, formatMoney(sessionCost)),
          ),
          h(
            'div',
            { className: 'lw-sub' },
            h('span', null, `${t('today')} ${formatMoney(todayCost)}`),
            h('span', null, `${t('budget')} ${formatMoney(budget)}`),
          ),
          h(
            'div',
            { className: 'lw-bar' },
            h('span', {
              className: 'lw-bar-fill' + (overBudget ? ' lw-bar-over' : ''),
              style: { width: percent + '%' },
            }),
          ),
          overBudget ? h('div', { className: 'lw-warn' }, t('overBudget')) : null,
          h(
            'div',
            { className: 'lw-tokens' },
            `${t('input')} ${formatTokens(usage.input)} · ${t('cache')} ${formatTokens(usage.cache)} · ${t('output')} ${formatTokens(usage.output)}`,
          ),
          h('div', { className: 'lw-note' }, t('estimateNote')),
          h(
            'details',
            { className: 'lw-more' },
            h('summary', null, t('settings')),
            h(
              'label',
              { className: 'lw-name-row' },
              t('nameLabel'),
              h('input', {
                type: 'text',
                maxLength: '16',
                defaultValue: settings.name,
                placeholder: t('defaultName'),
                onChange: function (event) { updateName(event.target.value); },
                onFocus: onNameFocus,
                onBlur: onNameBlur,
              }),
            ),
            h(
              'div',
              { className: 'lw-skin-row' },
              h('span', { className: 'lw-skin-label' }, t('appearance')),
              h('span', { className: 'lw-skin-name' }, t(skin.nameKey)),
              h(
                'button',
                { type: 'button', className: 'lw-skin-next', onClick: cycleSkin },
                t('nextSkin'),
              ),
            ),
            h(
              'div',
              { className: 'lw-size-row' },
              h('span', { className: 'lw-size-label' }, t('sizeLabel')),
              h('input', {
                type: 'range',
                min: '70',
                max: '160',
                step: '5',
                value: String(Math.round(settings.scale * 100)),
                'aria-label': t('sizeLabel'),
                title: t('sizeLabel'),
                onChange: function (event) { updateScale(event.target.value); },
              }),
              h('span', { className: 'lw-size-value' }, Math.round(settings.scale * 100) + '%'),
            ),
            h(
              'label',
              { className: 'lw-sleep-row', title: t('sleepHint') },
              h('span', null, t('sleepLabel')),
              h('input', {
                type: 'number',
                min: '0',
                max: '120',
                step: '1',
                defaultValue: String(settings.sleepMinutes),
                onChange: function (event) { updateSleep(event.target.value); },
              }),
              h('span', { className: 'lw-sleep-unit' }, t('sleepUnit')),
            ),
            h(
              'div',
              { className: 'lw-audio' },
              h(
                'label',
                { className: 'lw-toggle-chip' },
                h('span', null, t('soundLabel')),
                h('input', {
                  type: 'checkbox',
                  className: 'lw-switch',
                  role: 'switch',
                  'aria-checked': settings.sound ? 'true' : 'false',
                  checked: settings.sound,
                  onChange: toggleSound,
                }),
              ),
              h(
                'label',
                { className: 'lw-toggle-chip' },
                h('span', null, t('voiceLabel')),
                h('input', {
                  type: 'checkbox',
                  className: 'lw-switch',
                  role: 'switch',
                  'aria-checked': settings.voice ? 'true' : 'false',
                  checked: settings.voice,
                  onChange: toggleVoice,
                }),
              ),
            ),
            h('div', { className: 'lw-setting-note' }, t('voiceNote')),
            h(
              'div',
              { className: 'lw-prices' },
              ...priceFields.map(function (field) {
                return h(
                  'label',
                  { className: 'lw-field', key: field.key },
                  field.label,
                  h('input', {
                    type: 'number',
                    min: '0',
                    step: '0.01',
                    defaultValue: String(settings.prices[field.key]),
                    onChange: function (event) { updatePrices(field.key, event.target.value); },
                  }),
                );
              }),
            ),
            h(
              'label',
              { className: 'lw-budget-row' },
              t('dailyBudget'),
              h('input', {
                type: 'number',
                min: '0',
                step: '0.5',
                defaultValue: String(settings.budget),
                onChange: function (event) { updateBudget(event.target.value); },
              }),
            ),
            h(
              'div',
              { className: 'lw-reset-row' },
              h(
                'button',
                {
                  type: 'button',
                  className: 'lw-reset',
                  onClick: function () {
                    setToday(resetLedger(session.sessionId, usage));
                    const line = t('resetLine');
                    setSpeech(line);
                    speak(line, settings.voice);
                    playCue('tick', settings.sound);
                  },
                },
                t('reset'),
              ),
              h(
                'button',
                {
                  type: 'button',
                  className: 'lw-reset',
                  onClick: resetPosition,
                },
                t('resetPosition'),
              ),
            ),
          ),
        )
        : null;

      return h(
        'div',
        {
          className: 'lw-root' + (asleep ? ' lw-asleep' : '') + (dragging ? ' lw-dragging' : ''),
          ref: rootRef,
          style: { left: position.x + 'px', top: position.y + 'px' },
          onPointerDown: noteActivity,
          onKeyDown: noteActivity,
        },
        h('style', null, CSS),
        h(
          'button',
          {
            type: 'button',
            ref: buttonRef,
            className: bursts > 0 ? 'lw-button lw-burst' : 'lw-button',
            style: { width: (52 * settings.scale) + 'px', height: (42 * settings.scale) + 'px' },
            'aria-label': displayName + '. ' + t('hint'),
            title: displayName + ' · ' + t('hint') + ' · ' + formatMoney(sessionCost),
            onMouseDown: function (event) { event.preventDefault(); },
            onPointerDown: onPointerDown,
            onPointerMove: onPointerMove,
            onPointerUp: finishDrag,
            onPointerCancel: finishDrag,
            onClick: onWhaleClick,
          },
          h('span', { key: bursts }, whaleSvg(skin, overBudget, settings.scale)),
        ),
        !open && speech
          ? h(
            'div',
            { className: 'lw-say-bubble' + placementClass },
            h('span', { className: 'lw-bubble-name' }, displayName + ' · ' + t(skin.nameKey)),
            h('span', { className: 'lw-say-bubble-text', role: 'status' }, speech),
            h(
              'button',
              {
                type: 'button',
                className: 'lw-bubble-more',
                'aria-haspopup': 'dialog',
                onClick: openLedger,
              },
              t('openLedger') + ' ›',
            ),
          )
          : null,
        panel,
      );
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        ctx.effect(function () { return ctx.locale.register(NS, DICTIONARIES); }, 'little-whale: locale');
        ctx.slots.inject('conversation.composer.dock', function () {
          return ctx.slots.register({
            name: 'conversation.composer.dock',
            id: 'little-whale-bridge',
            order: 3,
            locale: NS,
          }, SessionBridge);
        });
        ctx.slots.inject('shell.overlay', function () {
          return ctx.slots.register({
            name: 'shell.overlay',
            id: 'little-whale',
            order: 10,
            locale: NS,
          }, WhaleBoundary);
        });
      },
    };
  },
});
