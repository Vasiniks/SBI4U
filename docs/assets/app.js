(function () {
  'use strict';

  var UNITS = window.UNITS || {};
  var UNIT_KEY = window.UNIT_KEY || 'metabolism';
  var ALL = UNIT_KEY === 'all';
  var UNIT = UNITS[UNIT_KEY] || { key: UNIT_KEY, lessons: [] };
  function unitList() { return Object.keys(UNITS).map(function (k) { return UNITS[k]; }).sort(function (a, b) { return a.order - b.order; }); }

  var LESSONS = (window.LESSONS || []).slice().sort(function (a, b) { return a.id.localeCompare(b.id); });
  var QA = window.QA || [];
  var QUIZ = ALL ? (window.ALLQ || []) : (window.QUIZ || []).concat(window.QUIZ_APPLIED || [], window.DRILL || []);
  var EXT = window.EXT || [];
  var EXTRA = (window.EXTRA || []).map(function (e, i) { return [e, i]; }).sort(function (a, b) { return a[0].lesson.localeCompare(b[0].lesson) || a[1] - b[1]; }).map(function (p) { return p[0]; });
  var VIS = window.VIS || {};
  var GLOSSARY = (window.GLOSSARY || []).slice().sort(function (a, b) { return a.term.localeCompare(b.term); });

  var LESSON_META = { mix: { title: 'Whole unit', stage: 'c6' } };
  var LESSON_IDS = [];
  (ALL ? unitList() : [UNIT]).forEach(function (u) {
    (u.lessons || []).forEach(function (l) { LESSON_META[l.id] = { title: l.title, stage: l.stage, unit: u.key }; LESSON_IDS.push(l.id); });
    if (ALL) LESSON_META['mix-' + u.key] = { title: u.code + ' whole unit', stage: 'c6', unit: u.key };
  });
  LESSONS.forEach(function (l) { var m = LESSON_META[l.id] || (LESSON_META[l.id] = {}); m.title = l.title; m.stage = l.stage || m.stage; });
  function mixIds() { return ALL ? unitList().map(function (u) { return 'mix-' + u.key; }) : ['mix']; }
  function lessonHref(id) {
    if (!ALL) return '#/lesson/' + id;
    var u = UNITS[(LESSON_META[id] || {}).unit]; return u ? '../' + u.path + '/#/lesson/' + id : '#';
  }

  var view = document.getElementById('view');

  /* ---------- knowledge tiers ---------- */
  var TIER_RANK = { essential: 1, likely: 2, extra: 3 };
  var TIER_NAME = { essential: 'Essential', likely: 'Likely', extra: 'Extra' };
  var DEPTH_HINT = {
    essential: 'Only must-know content: names, functions, locations, yields, regulators.',
    likely: 'Essential plus what will probably be tested or was said in class.',
    extra: 'Everything, including enrichment beyond the slides.'
  };
  function getDepth() { var d = store('depth'); return TIER_RANK[d] ? d : 'extra'; }
  function tierOf(x) { if (!x) return 'essential'; var t = x.tier || (x.core === 'deeper' ? 'extra' : x.core) ; return TIER_RANK[t] ? t : 'essential'; }
  function kindOf(q) { return q.kind || (q.level === 3 ? 'applied' : 'knowledge'); }
  function visible(t) { return TIER_RANK[t || 'essential'] <= TIER_RANK[getDepth()]; }
  function tierBadge(t) { return '<span class="tier-badge t-' + t + '">' + TIER_NAME[t] + '</span>'; }
  function applyDepth() {
    var d = getDepth();
    document.documentElement.setAttribute('data-depth', d);
    $$('.depth button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-depth') === d)); });
    var h = document.getElementById('depthHint'); if (h) h.textContent = DEPTH_HINT[d];
  }
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var PREFIX = 'sbi4u-' + (UNIT_KEY === 'metabolism' ? 'm' : UNIT_KEY) + '-';
  function store(key, val) {
    try {
      var k = (key === 'depth' ? 'sbi4u-' : PREFIX) + key;
      if (val === undefined) { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; }
      localStorage.setItem(k, JSON.stringify(val));
    } catch (e) { return null; }
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function stageOf(id) { return (LESSON_META[id] || {}).stage || 'etc'; }
  function lessonLabel(id) { if (/^mix/.test(id)) return (LESSON_META[id] || {}).title || 'Whole unit'; return id + ' ' + (LESSON_META[id] ? LESSON_META[id].title : ''); }
  function setWide(on) { view.classList.toggle('wide', !!on); }

  /* ---------- theme ---------- */
  function currentTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  $$('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('sbi4u-theme', next); } catch (e) {}
    });
  });

  /* ---------- mobile menu ---------- */
  var sidebar = $('#sidebar'), scrim = $('#scrim'), menuBtn = $('#menuBtn');
  function closeMenu() { sidebar.classList.remove('open'); scrim.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', open); scrim.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open));
  });
  scrim.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  $$('.depth button').forEach(function (b) {
    b.addEventListener('click', function () { store('depth', b.getAttribute('data-depth')); applyDepth(); route(true); });
  });

  /* ---------- nav ---------- */
  if ($('#navLessons')) $('#navLessons').innerHTML = LESSON_IDS.map(function (id) {
    return '<li><a href="#/lesson/' + id + '" data-route="lesson/' + id + '" data-stage="' + stageOf(id) + '"><span class="dot"></span><span class="num">' + id + '</span><span>' + esc(LESSON_META[id].title) + '</span></a></li>';
  }).join('');

  function markNav(route) {
    $$('.nav a[data-route]').forEach(function (a) {
      var r = a.getAttribute('data-route');
      var on = r === route || (r === 'beyond' && route.indexOf('beyond') === 0);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  /* ---------- router ---------- */
  function route(keepScroll) {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('?');
    var path = parts[0], query = {};
    (parts[1] || '').split('&').forEach(function (kv) { if (kv) { var p = kv.split('='); query[p[0]] = decodeURIComponent(p[1] || ''); } });
    var seg = path.split('/');
    closeMenu();
    setSubnav(null);
    view.removeAttribute('data-stage');
    setWide(false);
    if (ALL) { renderQuizSetup(query); markNav('quiz'); }
    else if (!path) { renderHome(); markNav('home'); }
    else if (seg[0] === 'cram') { renderCram(seg[1]); markNav('cram'); }
    else if (seg[0] === 'lesson') { renderLesson(seg[1], seg[2]); markNav('lesson/' + seg[1]); }
    else if (seg[0] === 'qa') { renderQA(query, seg[1]); markNav('qa'); }
    else if (seg[0] === 'quiz') { renderQuizSetup(query); markNav('quiz'); }
    else if (seg[0] === 'apply') { renderApply(query); markNav('apply'); }
    else if (seg[0] === 'beyond') { seg[1] ? renderBeyondTopic(seg[1]) : renderBeyond(); markNav('beyond'); }
    else if (seg[0] === 'glossary') { renderGlossary(); markNav('glossary'); }
    else { renderHome(); markNav('home'); }
    fitDiagrams();
    if (pendingScroll) { var ps = pendingScroll; pendingScroll = null; ps.classList.remove('page-wait'); ps.classList.add('page-in'); ps.scrollIntoView({ block: 'start' }); }
    else if (keepScroll !== true) window.scrollTo(0, 0);
    var h1 = view.querySelector('h1, h2');
    document.title = (h1 ? h1.textContent + ' · ' : '') + (ALL ? 'SBI4U' : 'SBI4U ' + (UNIT.title || ''));
  }
  window.addEventListener('hashchange', function () { route(); });

  /* ---------- home ---------- */
  var STAGES = [
    { key: 'glyco', name: 'Glycolysis', where: 'Cytoplasm · 10 steps', carbon: '6C glucose → 2 × 3C pyruvate', lesson: '2.02',
      tally: { atp: 2, nadh: 2, fadh: 0, co2: 0 },
      text: 'Glucose is split into two pyruvate. You invest 2 ATP and make 4, so the net is 2 ATP plus 2 NADH. No oxygen needed, no CO<sub>2</sub> released.' },
    { key: 'link', name: 'Pyruvate oxidation', where: 'Mitochondrial matrix · 1 step', carbon: '2 × 3C → 2 × 2C acetyl-CoA', lesson: '2.03',
      tally: { atp: 0, nadh: 2, fadh: 0, co2: 2 },
      text: 'Each pyruvate loses a carbon as CO<sub>2</sub>, makes one NADH, and joins coenzyme A to become acetyl-CoA. Per glucose: 2 CO<sub>2</sub>, 2 NADH, 2 acetyl-CoA.' },
    { key: 'krebs', name: 'Krebs cycle', where: 'Mitochondrial matrix · 8 steps', carbon: 'last 4C leave as CO₂', lesson: '2.03',
      tally: { atp: 2, nadh: 6, fadh: 2, co2: 4 },
      text: 'Runs twice per glucose. Each acetyl-CoA joins oxaloacetate to make citrate; the cycle strips its electrons into 3 NADH and 1 FADH<sub>2</sub>, makes 1 ATP and releases 2 CO<sub>2</sub> per turn.' },
    { key: 'etc', name: 'ETC & chemiosmosis', where: 'Inner membrane (cristae)', carbon: '0C left: all carbon is CO₂', lesson: '2.04',
      tally: { atp: 34, nadh: -10, fadh: -2, co2: 0 },
      text: 'NADH and FADH<sub>2</sub> hand their electrons down the chain to oxygen. The energy pumps H<sup>+</sup> into the intermembrane space; H<sup>+</sup> flowing back through ATP synthase makes about 34 more ATP (10 × 3 + 2 × 2).' }
  ];

  function heroHTML() {
    if (UNIT.key !== 'metabolism') {
      return '<section class="hero"><p class="hero-course">SBI4U · ' + esc(UNIT.code || '') + ' study guide</p>' +
        '<h1>' + (UNIT.headline || esc(UNIT.title || '')) + '</h1>' +
        (UNIT.lede ? '<p class="lede">' + UNIT.lede + '</p>' : '') +
        (VIS.overview ? '<figure class="map">' + VIS.overview + '</figure>' : '') + '</section>';
    }
    return '<section class="hero">' +
        '<p class="hero-course">SBI4U · Unit 2 study guide</p>' +
        '<h1>Follow one glucose all the way to 38 ATP.</h1>' +
        '<p class="lede">Every lesson from class in full detail, every review question answered, a practice bank to test yourself, and extra content the slides skipped.</p>' +
        '<div class="journey">' +
          (VIS.overview ? '<figure class="map">' + VIS.overview + '</figure>' : '') +
          '<div class="journey-track" role="group" aria-label="The four stages of aerobic respiration">' +
            STAGES.map(function (s, i) {
              return '<button class="stage-btn st-' + s.key + '" data-i="' + i + '" aria-pressed="false"><span class="s-name">' + s.name + '</span><span class="s-where">' + s.where + '</span><span class="s-carbon">' + s.carbon + '</span></button>';
            }).join('') +
          '</div>' +
          '<div class="ledger" aria-live="polite">' +
            '<div class="l-atp"><b data-k="atp">0</b><span>ATP so far</span></div>' +
            '<div class="l-nadh"><b data-k="nadh">0</b><span>NADH waiting</span></div>' +
            '<div class="l-fadh"><b data-k="fadh">0</b><span>FADH<sub>2</sub> waiting</span></div>' +
            '<div class="l-co2"><b data-k="co2">0</b><span>CO<sub>2</sub> released</span></div>' +
          '</div>' +
          '<div class="journey-detail" id="journeyDetail"><h3>Tap a stage to follow the glucose</h3><p class="muted">The counters add up what one glucose has produced by the end of each stage, using the class values (NADH ≈ 3 ATP, FADH<sub>2</sub> ≈ 2 ATP).</p></div>' +
        '</div>' +
      '</section>';
  }
  function renderHome() {
    var lessonCards = LESSON_IDS.map(function (id) {
      var l = LESSONS.filter(function (x) { return x.id === id; })[0];
      return '<a class="row-link" data-stage="' + stageOf(id) + '" href="#/lesson/' + id + '"><span class="rl-num">' + id + '</span><span class="rl-body"><b>' + esc(LESSON_META[id].title) + '</b>' +
        (l && l.summary ? '<span>' + l.summary + '</span>' : '') + '</span></a>';
    }).join('');
    view.innerHTML =
      heroHTML() +
      '<h2>Three levels of depth</h2>' +
      '<div class="tier-explain">' +
        '<div>' + tierBadge('essential') + '<p>Must-know for the test: every name, function, location, yield, regulator and inhibitor.</p></div>' +
        '<div>' + tierBadge('likely') + '<p>Probably tested or said in class: reasoning, worked examples, case studies.</p></div>' +
        '<div>' + tierBadge('extra') + '<p>Enrichment beyond the slides, for full marks on thinking questions.</p></div>' +
      '</div>' +
      '<p class="muted">Use <strong>How much to show</strong> in the menu to hide lower levels everywhere. Short on time? <a href="#/cram">Open cram mode</a>: all the essentials on one page.</p>' +
      '<h2>Lessons</h2><div class="rows">' + lessonCards + '</div>' +
      '<h2>Test yourself</h2>' +
      '<div class="rows tools">' +
        '<a href="#/qa"><b>Class questions &amp; answers</b><span>' + countQA() + ' questions from the slides, worksheets, review and the Seven Deaths case, with model answers.</span></a>' +
        '<a href="#/quiz"><b>Practice quiz</b><span>' + QUIZ.length + ' multiple-choice and true/false questions with explanations. Filter by lesson.</span></a>' +
        '<a href="#/apply"><b>Apply &amp; extend</b><span>' + EXT.length + ' application and thinking questions with hints and full answers.</span></a>' +
        '<a href="../test/"><b>All-units test</b><span>Mixed practice from every unit, with an exam-style option that only shows answers at the end.</span></a>' +
        '<a href="#/beyond"><b>Beyond the slides</b><span>' + EXTRA.length + ' topics that go past what the slides covered, marked by how likely they are to come up.</span></a>' +
      '</div>';
    var running = { atp: 0, nadh: 0, fadh: 0, co2: 0 };
    $$('.stage-btn', view).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = +btn.getAttribute('data-i');
        $$('.stage-btn', view).forEach(function (b, j) { b.setAttribute('aria-pressed', String(j === i)); });
        $$('.mapstage', view).forEach(function (g) { g.classList.toggle('dim', g.getAttribute('data-s') !== STAGES[i].key); });
        running = { atp: 0, nadh: 0, fadh: 0, co2: 0 };
        for (var j = 0; j <= i; j++) Object.keys(running).forEach(function (k) { running[k] += STAGES[j].tally[k]; });
        $$('.ledger b', view).forEach(function (b) { b.textContent = running[b.getAttribute('data-k')]; });
        var s = STAGES[i];
        $('#journeyDetail').innerHTML = '<h3>' + (i + 1) + '. ' + s.name + '</h3><p>' + s.text + '</p>' +
          (i === 3 ? '<p class="ledger-note">Total: 2 + 2 + 30 + 4 = <strong>38 ATP</strong> maximum. The realistic number is 30–32, because H<sup>+</sup> leaks and cytosolic NADH has to be shuttled in.</p>' : '') +
          '<p><a href="#/lesson/' + s.lesson + '">Open lesson ' + s.lesson + '</a></p>';
      });
    });
  }
  function countQA() { return QA.reduce(function (n, g) { return n + g.items.length; }, 0); }

  /* ---------- diagram sizing ---------- */
  // Never upscale a diagram past its drawn size; on narrow screens keep labels >= 10px and scroll sideways.
  function fitDiagrams() {
    $$('figure svg', view).forEach(function (svg) {
      if (svg.parentNode.classList.contains('fig-scroll')) return;
      var vb = svg.viewBox && svg.viewBox.baseVal;
      if (!vb || !vb.width) return;
      var minF = 99;
      $$('text', svg).forEach(function (t) { var f = parseFloat(getComputedStyle(t).fontSize); if (f && f < minF) minF = f; });
      if (minF === 99) minF = 12;
      var wrap = document.createElement('div');
      wrap.className = 'fig-scroll';
      svg.parentNode.insertBefore(wrap, svg);
      wrap.appendChild(svg);
      svg.style.maxWidth = vb.width + 'px';
      svg.style.minWidth = Math.min(vb.width, Math.round(vb.width * 10 / minF)) + 'px';
      if (wrap.scrollWidth > wrap.clientWidth + 2) wrap.classList.add('scrolls');
    });
  }
  window.addEventListener('resize', function () {
    $$('.fig-scroll', view).forEach(function (w) { w.classList.toggle('scrolls', w.scrollWidth > w.clientWidth + 2); });
  });

  /* ---------- tabs + sidebar sub-navigation ---------- */
  function tabStrip(tabs, label) {
    return '<nav class="tabs" aria-label="' + esc(label) + '">' + tabs.map(function (t) {
      return '<a href="' + t.href + '"' + (t.tier ? ' data-tier="' + t.tier + '"' : '') + (t.current ? ' aria-current="page"' : '') + '>' + t.label + '</a>';
    }).join('') + '</nav>';
  }
  function setSubnav(routeKey, tabs) {
    $$('.subnav').forEach(function (u) { u.remove(); });
    if (!routeKey || !tabs || !tabs.length) return;
    var a = $('.nav a[data-route="' + routeKey + '"]'); if (!a) return;
    a.insertAdjacentHTML('afterend', '<ul class="subnav">' + tabs.map(function (t) {
      return '<li' + (t.tier ? ' data-tier="' + t.tier + '"' : '') + '><a href="' + t.href + '"' + (t.current ? ' aria-current="true"' : '') + '>' + t.label + '</a></li>';
    }).join('') + '</ul>');
  }
  function centerActiveTab() {
    var strip = $('.tabs', view), at = $('.tabs a[aria-current]', view);
    if (strip && at) strip.scrollLeft = at.offsetLeft - strip.offsetLeft - 24;
  }
  // Split lesson-style HTML into one section per h3.
  function sectionsOf(html, prep) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    tierizeBody(tmp);
    var kids = Array.prototype.slice.call(tmp.children);
    var secs = kids.filter(function (c) { return c.classList.contains('tier-sec'); });
    var lead = kids.filter(function (c) { return !c.classList.contains('tier-sec'); });
    if (!secs.length) {
      var one = document.createElement('section'); one.className = 'tier-sec'; one.setAttribute('data-tier', 'essential');
      lead.forEach(function (c) { one.appendChild(c); }); secs = [one]; lead = [];
    }
    if (prep) prep(secs);
    return { secs: secs, lead: lead };
  }
  function secTier(sec) { return sec.getAttribute('data-tier') || 'essential'; }
  function secTitle(sec) { var h = sec.querySelector('h3'); return h ? (h.getAttribute('data-title') || h.textContent) : 'Overview'; }
  function stepVisible(secs, i, dir) { for (var k = i + dir; k >= 0 && k < secs.length; k += dir) if (visible(secTier(secs[k]))) return k; return -1; }
  function pickSection(secs, want) {
    var i = Math.max(0, Math.min(secs.length - 1, parseInt(want, 10) || 0));
    if (visible(secTier(secs[i]))) return i;
    var f = stepVisible(secs, -1, 1); return f > -1 ? f : i;
  }

  /* ---------- continuous pages with a flip-in ---------- */
  var pageObserver = null, spyObserver = null, pendingScroll = null;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function mountPages(art, secs, base, want) {
    if (pageObserver) pageObserver.disconnect();
    if (spyObserver) spyObserver.disconnect();
    var io = 'IntersectionObserver' in window;
    secs.forEach(function (sec, k) {
      sec.classList.add('page');
      sec.id = 'page-' + k;
      sec.insertAdjacentHTML('beforeend', '<p class="page-no">Page ' + (k + 1) + ' of ' + secs.length + '</p>');
      if (io && !reduceMotion) sec.classList.add('page-wait');
      art.appendChild(sec);
    });
    if (io && !reduceMotion) {
      pageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.remove('page-wait'); e.target.classList.add('page-in');
          pageObserver.unobserve(e.target);
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.01 });
      secs.forEach(function (sec) { pageObserver.observe(sec); });
    }
    if (io) {
      spyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) setCurrentPage(+e.target.id.slice(5), base); });
      }, { rootMargin: '-30% 0px -65% 0px' });
      secs.forEach(function (sec) { spyObserver.observe(sec); });
    }
    function onJump(ev) {
      var a = ev.target.closest('a'); if (!a) return;
      var href = a.getAttribute('href') || '';
      if (href.indexOf(base + '/') !== 0) return;
      ev.preventDefault(); closeMenu();
      var el = document.getElementById('page-' + href.slice(base.length + 1));
      if (!el) return;
      el.classList.remove('page-wait'); el.classList.add('page-in');
      el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
    $('.tabs', view).addEventListener('click', onJump);
    var sn = $('.subnav'); if (sn) sn.addEventListener('click', onJump);
    var w = parseInt(want, 10);
    if (w > 0 && secs[w]) { pendingScroll = secs[w]; setCurrentPage(w, base); }
  }
  function setCurrentPage(k, base) {
    $$('.tabs a', view).forEach(function (a, i) { if (i === k) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    $$('.subnav a').forEach(function (a, i) { if (i === k) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    centerActiveTab();
    try { history.replaceState(null, '', base + '/' + k); } catch (e) {}
  }

  /* ---------- lesson ---------- */
  function renderLesson(id, want) {
    var l = LESSONS.filter(function (x) { return x.id === id; })[0];
    view.setAttribute('data-stage', stageOf(id));
    if (!l) { view.innerHTML = '<h1>' + esc(lessonLabel(id)) + '</h1><p class="empty">This lesson is still being written. Check back soon.</p>'; return; }
    var idx = LESSON_IDS.indexOf(id);
    var prevL = LESSON_IDS[idx - 1], nextL = LESSON_IDS[idx + 1];
    var nQ = QUIZ.filter(function (q) { return q.lesson === id; }).length;
    var base = '#/lesson/' + id;
    var S = sectionsOf(l.html), secs = S.secs;
    S.lead.slice().reverse().forEach(function (c) { secs[0].insertBefore(c, secs[0].firstChild); });
    var tabs = secs.map(function (sec, k) { return { href: base + '/' + k, label: esc(secTitle(sec)), tier: secTier(sec), current: k === 0 }; });
    view.innerHTML =
      '<header class="lesson-head">' +
        '<div class="lesson-kicker"><span>Lesson ' + l.id + '</span>' + (l.where ? '<span class="pill">' + esc(l.where) + '</span>' : '') + '<span>' + secs.length + ' pages</span></div>' +
        '<h1>' + esc(l.title) + '</h1>' +
        (l.summary ? '<p class="lede">' + l.summary + '</p>' : '') +
        (l.objectives && l.objectives.length ? '<div class="objectives"><p>By the end of this lesson you can</p><ul>' + l.objectives.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul></div>' : '') +
      '</header>' +
      tabStrip(tabs, 'Lesson pages') +
      '<article class="lesson-body pages"></article>' +
      '<div class="practice-cta"><p>Ready to test ' + esc(l.title) + '?</p><span><a class="btn" href="#/quiz?lesson=' + id + '">Practice ' + nQ + ' questions</a> <a class="btn ghost" href="#/qa?lesson=' + id + '">Class Q&amp;A</a></span></div>' +
      '<nav class="pager" aria-label="Lessons">' +
        (prevL ? '<a class="prev" href="#/lesson/' + prevL + '"><small>Previous lesson</small>' + prevL + ' ' + esc(LESSON_META[prevL].title) + '</a>' : '') +
        (nextL ? '<a class="next" href="#/lesson/' + nextL + '"><small>Next lesson</small>' + nextL + ' ' + esc(LESSON_META[nextL].title) + '</a>' : '') +
      '</nav>';
    setSubnav('lesson/' + id, tabs);
    mountPages($('.lesson-body', view), secs, base, want);
  }

  // Group each h3 and the blocks after it into a tier section; flag lower-tier blocks inside.
  function tierizeBody(body) {
    if (!body) return;
    var kids = Array.prototype.slice.call(body.children);
    var sec = null;
    kids.forEach(function (el) {
      if (el.tagName === 'H3') {
        var t = TIER_RANK[el.getAttribute('data-tier')] ? el.getAttribute('data-tier') : 'essential';
        el.removeAttribute('data-tier');
        sec = document.createElement('section');
        sec.className = 'tier-sec';
        sec.setAttribute('data-tier', t);
        body.insertBefore(sec, el);
        el.setAttribute('data-title', el.textContent);
        if (t !== 'essential') el.insertAdjacentHTML('beforeend', ' ' + tierBadge(t));
      }
      if (sec) sec.appendChild(el);
    });
    // A tiered h4 owns the blocks after it, up to the next heading.
    $$('h4[data-tier]', body).forEach(function (h) {
      var t = h.getAttribute('data-tier');
      var wrap = document.createElement('div');
      wrap.className = 'tier-sub';
      wrap.setAttribute('data-tier', t);
      h.parentNode.insertBefore(wrap, h);
      h.removeAttribute('data-tier');
      if (TIER_RANK[t] && t !== 'essential') h.insertAdjacentHTML('beforeend', ' ' + tierBadge(t));
      var n = h;
      while (n && !(n !== h && /^H[34]$/.test(n.tagName))) { var next = n.nextElementSibling; wrap.appendChild(n); n = next; }
    });
    $$('[data-tier]', body).forEach(function (el) {
      if (el.classList.contains('tier-sec') || el.classList.contains('tier-sub') || el.tagName === 'TR' || el.tagName === 'LI') return;
      var t = el.getAttribute('data-tier');
      var parentSec = el.closest('.tier-sec');
      if (!TIER_RANK[t] || t === 'essential' || (parentSec && parentSec.getAttribute('data-tier') === t)) return;
      el.insertAdjacentHTML('beforebegin', '<div class="tier-flag" data-tier="' + t + '">' + tierBadge(t) + '</div>');
    });
  }

  /* ---------- cram mode ---------- */
  function renderCram(want) {
    var ess = QUIZ.filter(function (q) { return tierOf(q) === 'essential'; }).length;
    view.setAttribute('data-stage', 'etc');
    var S = sectionsOf(window.CRAM || '<p class="empty">Cram sheet missing.</p>', function (secs) {
      secs.forEach(function (sec) {
        var h = sec.querySelector('h3'); if (!h) return;
        var txt = h.textContent;
        if (/^Krebs/.test(txt) && VIS.krebs) h.insertAdjacentHTML('afterend', '<figure class="diagram narrow">' + VIS.krebs + '<figcaption>Per turn: 3 NADH, 1 FADH<sub>2</sub>, 1 ATP, 2 CO<sub>2</sub>. Oxaloacetate is both the start and the end.</figcaption></figure>');
        if (/^Electron transport/.test(txt) && VIS.etc) h.insertAdjacentHTML('afterend', '<figure class="diagram">' + VIS.etc + '<figcaption>Electrons (dashed blue) pass I → Q → III → cyt c → IV → O<sub>2</sub>. Red arrows are H<sup>+</sup>: pumped up by I, III and IV, then flowing back down through ATP synthase.</figcaption></figure>');
        $$('tr[data-tier]', sec).forEach(function (tr) { var c = tr.cells[0]; if (c) c.insertAdjacentHTML('beforeend', ' ' + tierBadge(tr.getAttribute('data-tier'))); });
      });
      if (VIS.overview) {
        var big = document.createElement('section'); big.className = 'tier-sec'; big.setAttribute('data-tier', 'essential');
        big.innerHTML = '<h3 data-title="Big picture">Big picture</h3><figure class="diagram">' + VIS.overview + '<figcaption>The whole pathway on one map. Glycolysis happens in the cytoplasm; everything else is inside the mitochondrion.</figcaption></figure>';
        secs.unshift(big);
      }
    });
    var secs = S.secs, base = '#/cram';
    var tabs = secs.map(function (sec, k) { return { href: base + '/' + k, label: esc(secTitle(sec)), current: k === 0 }; });
    view.innerHTML = '<header class="lesson-head"><div class="lesson-kicker">' + tierBadge('essential') + '<span>The whole unit, essentials only</span></div>' +
      '<h1>Cram mode</h1>' +
      '<p class="lede">Every name, function, structure and key fact in the unit. Scroll straight through, then take the cram quiz.</p>' +
      '<div class="toolbar"><button class="btn" id="cramQuiz"' + (ess ? '' : ' disabled') + '>Cram quiz: ' + Math.min(25, ess) + ' essential questions</button><button class="btn ghost" id="cramPrint">Print the cram sheet</button></div></header>' +
      tabStrip(tabs, 'Cram topics') +
      '<article class="lesson-body pages cram"></article>';
    setSubnav('cram', tabs);
    mountPages($('.lesson-body', view), secs, base, want);
    $('#cramQuiz').addEventListener('click', function () {
      startQuiz(shuffle(QUIZ.filter(function (q) { return tierOf(q) === 'essential'; })).slice(0, 25));
    });
    $('#cramPrint').addEventListener('click', function () {
      $$('.page-wait', view).forEach(function (p) { p.classList.remove('page-wait'); });
      window.print();
    });
  }

  /* ---------- filter chips helper ---------- */
  function lessonChips(selected, includeMix) {
    var ids = LESSON_IDS.slice(); if (includeMix) ids.push('mix');
    return '<div class="chips" role="group" aria-label="Filter by lesson"><button class="fchip" data-l="all" aria-pressed="' + (!selected || selected === 'all') + '">All</button>' +
      ids.map(function (id) { return '<button class="fchip" data-l="' + id + '" aria-pressed="' + (selected === id) + '">' + (id === 'mix' ? 'Whole unit' : id) + '</button>'; }).join('') + '</div>';
  }

  /* ---------- Q&A ---------- */
  function renderQA(query, want) {
    if (!QA.length) { view.innerHTML = '<h1>Class questions &amp; answers</h1><p class="empty">Questions are still being written.</p>'; return; }
    var i = parseInt(want, 10);
    if (isNaN(i) && query.lesson) QA.forEach(function (g, k) { if (isNaN(i) && g.lesson === query.lesson) i = k; });
    if (isNaN(i) || i < 0 || i >= QA.length) i = 0;
    var g = QA[i];
    var tabs = QA.map(function (x, k) { return { href: '#/qa/' + k, label: esc(x.title.split(':')[0]), current: k === i }; });
    view.setAttribute('data-stage', stageOf(g.lesson));
    view.innerHTML = '<header class="lesson-head"><div class="lesson-kicker"><span>Class questions &amp; answers</span><span>' + countQA() + ' questions in ' + QA.length + ' sets</span></div>' +
      '<h1>' + esc(g.title) + '</h1>' + (g.source ? '<p class="qa-source">' + esc(g.source) + '</p>' : '') + '</header>' +
      tabStrip(tabs, 'Question sets') +
      '<div class="toolbar"><button class="btn ghost" id="openAll">Show all answers</button><button class="btn ghost" id="closeAll">Hide all answers</button></div>' +
      '<section class="qa-group">' + g.items.map(function (it, k) {
        var t = tierOf(it);
        return '<details class="qa-item" data-tier="' + t + '"><summary><span class="qn">' + (k + 1) + '.</span>' + it.q + (t !== 'essential' ? ' ' + tierBadge(t) : '') + '</summary><div class="qa-a">' + (it.note ? '<p class="qa-note">' + it.note + '</p>' : '') + it.a + '</div></details>';
      }).join('') + '</section>' +
      '<nav class="pager" aria-label="Question sets">' +
        (i > 0 ? '<a class="prev" href="#/qa/' + (i - 1) + '"><small>Previous set</small>' + esc(QA[i - 1].title) + '</a>' : '') +
        (i < QA.length - 1 ? '<a class="next" href="#/qa/' + (i + 1) + '"><small>Next set</small>' + esc(QA[i + 1].title) + '</a>' : '') +
      '</nav>';
    setSubnav('qa', tabs);
    centerActiveTab();
    $('#openAll').addEventListener('click', function () { $$('.qa-item', view).forEach(function (d) { d.open = true; }); });
    $('#closeAll').addEventListener('click', function () { $$('.qa-item', view).forEach(function (d) { d.open = false; }); });
  }

  /* ---------- quiz ---------- */
  var quiz = null;
  function stats() { return store('stats') || {}; }
  function renderQuizSetup(query) {
    var st = stats();
    var sel = query.lesson ? [query.lesson] : [];
    var type = 'both', count = 20, kind = query.kind || 'both', exam = ALL;
    var byLesson = LESSON_IDS.concat(mixIds()).map(function (id) {
      var qs = QUIZ.filter(function (q) { return q.lesson === id; });
      var seen = 0, right = 0;
      qs.forEach(function (q) { var s = st[q.id]; if (s) { seen++; if (s.last) right++; } });
      return { id: id, total: qs.length, seen: seen, right: right };
    });
    var missedIds = Object.keys(st).filter(function (k) { return st[k] && st[k].last === false; });
    var groups = ALL ? unitList().map(function (u) { return { label: u.code + ': ' + u.title, ids: u.lessons.map(function (l) { return l.id; }).concat(['mix-' + u.key]) }; })
      : [{ label: '', ids: LESSON_IDS.concat(['mix']) }];
    view.innerHTML = '<h1>' + (ALL ? 'All-units test' : 'Practice quiz') + '</h1>' +
      '<p class="lede">' + QUIZ.length + ' multiple-choice and true/false questions' + (ALL ? ' from every unit. Pick units or lessons, or leave them all off for a full mixed test.' : '. You get the answer and an explanation right after each one.') + '</p>' +
      '<div class="quiz-panel">' +
        '<span class="field-label">' + (ALL ? 'Units and lessons' : 'Lessons') + '</span>' +
        '<div id="qLessons">' + groups.map(function (g, gi) {
          return (g.label ? '<p class="chip-group"><span>' + esc(g.label) + '</span><button class="linkish" data-group="' + gi + '">Select all</button></p>' : '') +
            '<div class="chips" data-group="' + gi + '">' + g.ids.map(function (id) {
              var n = QUIZ.filter(function (q) { return q.lesson === id; }).length;
              if (!n && ALL) return '';
              return '<button class="fchip" data-l="' + id + '" aria-pressed="' + (sel.indexOf(id) > -1) + '">' + (/^mix/.test(id) ? 'Whole unit' : id + ' ' + esc(LESSON_META[id].title)) + '</button>';
            }).join('') + '</div>';
        }).join('') + '</div>' +
        '<p class="muted" style="font-size:14px;margin-top:-6px">Leave all unselected to use every ' + (ALL ? 'unit' : 'lesson') + '.</p>' +
        '<span class="field-label">Feedback</span>' +
        '<div class="chips" id="qExam"><button class="fchip" data-x="0" aria-pressed="' + !exam + '">After each question</button><button class="fchip" data-x="1" aria-pressed="' + exam + '">At the end (test conditions)</button></div>' +
        '<span class="field-label">Kind</span>' +
        '<div class="chips" id="qKind">' + [['both', 'Both'], ['knowledge', 'Knowledge: names, enzymes, facts'], ['applied', 'Applied: homework extensions, scenarios']].map(function (k) {
          var c = QUIZ.filter(function (q) { return k[0] === 'both' || kindOf(q) === k[0]; }).length;
          return '<button class="fchip" data-k="' + k[0] + '" aria-pressed="' + (kind === k[0]) + '">' + k[1] + ' <span class="muted">' + c + '</span></button>';
        }).join('') + '</div>' +
        '<span class="field-label">Question type</span>' +
        '<div class="chips" id="qType"><button class="fchip" data-t="both" aria-pressed="true">Both</button><button class="fchip" data-t="mcq" aria-pressed="false">Multiple choice</button><button class="fchip" data-t="tf" aria-pressed="false">True / false</button></div>' +
        '<span class="field-label">Depth</span>' +
        '<p class="muted" style="font-size:15px;margin:0">Using <strong>' + { essential: 'Essential only', likely: 'Essential + Likely', extra: 'Everything' }[getDepth()] + '</strong> (' + QUIZ.filter(function (q) { return visible(tierOf(q)); }).length + ' questions). Change it under <em>How much to show</em> in the menu.</p>' +
        '<span class="field-label">Length</span>' +
        '<div class="chips" id="qCount">' + [10, 20, 40, 0].map(function (c) { return '<button class="fchip" data-c="' + c + '" aria-pressed="' + (c === 20) + '">' + (c ? c + ' questions' : 'Everything') + '</button>'; }).join('') + '</div>' +
        '<div class="toolbar" style="margin-top:22px"><button class="btn" id="qStart">Start quiz</button>' +
          (missedIds.length ? '<button class="btn ghost" id="qMissed">Retry the ' + missedIds.length + ' I last got wrong</button>' : '') + '</div>' +
      '</div>' +
      (Object.keys(st).length ? '<h3>Your progress</h3><div class="bars">' + byLesson.filter(function (b) { return b.total; }).map(function (b) {
        var pct = b.seen ? Math.round(100 * b.right / b.seen) : 0;
        return '<div class="bar-row" data-stage="' + stageOf(b.id) + '"><span>' + esc(lessonLabel(b.id)) + '</span><span class="bar"><i style="width:' + pct + '%;background:var(--accent)"></i></span><span>' + (b.seen ? pct + '%' : '–') + '</span></div>';
      }).join('') + '</div><p class="muted" style="font-size:14px">Based on your latest answer to each question you have seen. Saved in this browser only. <button class="btn ghost" id="qReset" style="padding:3px 10px;font-size:13px">Reset progress</button></p>' : '');

    $$('#qLessons .fchip', view).forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); }); });
    function single(groupSel, cb) { $$(groupSel + ' .fchip', view).forEach(function (b) { b.addEventListener('click', function () { $$(groupSel + ' .fchip', view).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); b.setAttribute('aria-pressed', 'true'); cb(b); }); }); }
    single('#qType', function (b) { type = b.getAttribute('data-t'); });
    single('#qKind', function (b) { kind = b.getAttribute('data-k'); });
    single('#qExam', function (b) { exam = b.getAttribute('data-x') === '1'; });
    $$('#qLessons .linkish', view).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var chips = $$('.chips[data-group="' + btn.getAttribute('data-group') + '"] .fchip', view);
        var on = chips.some(function (c) { return c.getAttribute('aria-pressed') !== 'true'; });
        chips.forEach(function (c) { c.setAttribute('aria-pressed', String(on)); });
        btn.textContent = on ? 'Clear' : 'Select all';
      });
    });
    single('#qCount', function (b) { count = +b.getAttribute('data-c'); });
    $('#qStart').addEventListener('click', function () {
      var ls = $$('#qLessons .fchip[aria-pressed="true"]', view).map(function (b) { return b.getAttribute('data-l'); });
      var pool = QUIZ.filter(function (q) { return visible(tierOf(q)) && (kind === 'both' || kindOf(q) === kind) && (!ls.length || ls.indexOf(q.lesson) > -1) && (type === 'both' || q.type === type); });
      pool = shuffle(pool); if (count) pool = pool.slice(0, count);
      startQuiz(pool, exam);
    });
    var m = $('#qMissed'); if (m) m.addEventListener('click', function () { startQuiz(shuffle(QUIZ.filter(function (q) { return missedIds.indexOf(q.id) > -1; }))); });
    var r = $('#qReset'); if (r) r.addEventListener('click', function () { store('stats', {}); renderQuizSetup(query); });
  }

  function startQuiz(pool, exam) {
    if (!pool.length) { view.insertAdjacentHTML('beforeend', '<p class="empty">No questions match those filters. Pick another lesson or type.</p>'); return; }
    quiz = { pool: pool, i: 0, answers: [], exam: !!exam };
    showQuestion();
  }

  function showQuestion() {
    var q = quiz.pool[quiz.i];
    view.setAttribute('data-stage', stageOf(q.lesson));
    var opts = q.type === 'tf' ? ['True', 'False'] : q.options;
    var keys = q.type === 'tf' ? ['T', 'F'] : ['A', 'B', 'C', 'D'];
    view.innerHTML = '<h2>Practice quiz</h2><div class="quiz-panel">' +
      '<div class="quiz-top"><span>Question ' + (quiz.i + 1) + ' of ' + quiz.pool.length + '</span><span>' + (kindOf(q) === 'applied' ? 'Applied · ' : 'Knowledge · ') + esc(lessonLabel(q.lesson)) + '</span></div>' +
      '<div class="progress"><i style="width:' + (100 * quiz.i / quiz.pool.length) + '%"></i></div>' +
      '<p class="q-text">' + (q.type === 'tf' ? '<span class="pill" style="margin-right:8px">True or false</span>' : '') + q.q + (tierOf(q) !== 'essential' ? ' ' + tierBadge(tierOf(q)) : '') + '</p>' +
      '<div class="opts' + (q.type === 'tf' ? ' tf-row' : '') + '">' + opts.map(function (o, i) { return '<button class="opt" data-i="' + i + '"><span class="k">' + keys[i] + '</span>' + o + '</button>'; }).join('') + '</div>' +
      '<div id="fb"></div>' +
      '<div class="quiz-actions"><button class="btn ghost" id="qQuit">End quiz</button><button class="btn" id="qNext" hidden>' + (quiz.i + 1 < quiz.pool.length ? 'Next question' : 'See results') + '</button></div>' +
      '<p class="kbd-hint">Keyboard: ' + (q.type === 'tf' ? 'T or F' : '1–4 or A–D') + ' to answer, Enter for next.</p>' +
      '</div>';
    $$('.opt', view).forEach(function (b) { b.addEventListener('click', function () { answer(+b.getAttribute('data-i')); }); });
    $('#qNext').addEventListener('click', nextQ);
    $('#qQuit').addEventListener('click', results);
  }

  function answer(i) {
    var q = quiz.pool[quiz.i];
    if (quiz.answers[quiz.i] !== undefined) return;
    var correctIdx = q.type === 'tf' ? (q.answer ? 0 : 1) : q.answer;
    var ok = i === correctIdx;
    quiz.answers[quiz.i] = i;
    var st = stats(); var s = st[q.id] || { n: 0, c: 0 }; s.n++; if (ok) s.c++; s.last = ok; st[q.id] = s; store('stats', st);
    if (quiz.exam) {
      $$('.opt', view).forEach(function (b, j) { b.disabled = true; if (j === i) b.classList.add('chosen'); });
      var nx = $('#qNext'); nx.hidden = false; nx.focus();
      return;
    }
    $$('.opt', view).forEach(function (b, j) { b.disabled = true; if (j === correctIdx) b.classList.add('right'); else if (j === i) b.classList.add('wrong'); });
    $('#fb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><p class="verdict">' + (ok ? 'Correct' : 'Not quite') + '</p><p>' + (q.explain || '') + '</p></div>';
    var n = $('#qNext'); n.hidden = false; n.focus();
  }
  function nextQ() { if (quiz.i + 1 < quiz.pool.length) { quiz.i++; showQuestion(); window.scrollTo(0, 0); } else results(); }

  function results() {
    var done = quiz.answers.filter(function (a) { return a !== undefined; }).length;
    var right = 0, wrong = [];
    var per = {};
    quiz.pool.forEach(function (q, i) {
      var a = quiz.answers[i]; if (a === undefined) return;
      var c = q.type === 'tf' ? (q.answer ? 0 : 1) : q.answer;
      per[q.lesson] = per[q.lesson] || { n: 0, c: 0 }; per[q.lesson].n++;
      if (a === c) { right++; per[q.lesson].c++; } else wrong.push({ q: q, a: a, c: c });
    });
    var pct = done ? Math.round(100 * right / done) : 0;
    view.removeAttribute('data-stage');
    var label = function (q, i) { return q.type === 'tf' ? (i === 0 ? 'True' : 'False') : q.options[i]; };
    view.innerHTML = '<h2>Your results</h2><div class="quiz-panel">' +
      '<p class="score-big">' + right + ' / ' + done + '</p><p class="muted">' + pct + '% correct' + (done < quiz.pool.length ? ' (ended early)' : '') + '</p>' +
      '<div class="bars">' + Object.keys(per).sort().map(function (id) {
        var p = Math.round(100 * per[id].c / per[id].n);
        return '<div class="bar-row" data-stage="' + stageOf(id) + '"><span>' + esc(lessonLabel(id)) + '</span><span class="bar"><i style="width:' + p + '%;background:var(--accent)"></i></span><span>' + per[id].c + '/' + per[id].n + '</span></div>';
      }).join('') + '</div>' +
      '<div class="toolbar">' + (wrong.length ? '<button class="btn" id="rRetry">Retry the ' + wrong.length + ' I missed</button>' : '') + '<a class="btn ghost" href="' + (ALL ? '#/' : '#/quiz') + '" id="rNew">New ' + (ALL ? 'test' : 'quiz') + '</a></div>' +
      '</div>' +
      (wrong.length ? '<h3>Review what you missed</h3>' + wrong.map(function (w) {
        return '<div class="review-item" data-stage="' + stageOf(w.q.lesson) + '"><p class="q-text">' + w.q.q + '</p><p class="your">You said: ' + label(w.q, w.a) + '</p><p class="correct">Answer: ' + label(w.q, w.c) + '</p><p>' + (w.q.explain || '') + '</p><p>' + (/^mix/.test(w.q.lesson) ? '' : '<a href="' + lessonHref(w.q.lesson) + '">Review lesson ' + w.q.lesson + '</a>') + '</p></div>';
      }).join('') : '');
    var rr = $('#rRetry'); if (rr) rr.addEventListener('click', function () { startQuiz(shuffle(wrong.map(function (w) { return w.q; })), false); });
    var rn = $('#rNew'); if (rn && ALL) rn.addEventListener('click', function (e) { e.preventDefault(); route(); });
    window.scrollTo(0, 0);
  }

  document.addEventListener('keydown', function (e) {
    if (!quiz || !$('.opt', view) || e.metaKey || e.ctrlKey || e.altKey) return;
    if (/input|textarea/i.test((e.target.tagName || ''))) return;
    var q = quiz.pool[quiz.i]; var k = e.key.toLowerCase();
    if (k === 'enter') { var n = $('#qNext'); if (n && !n.hidden && document.activeElement !== n) { e.preventDefault(); nextQ(); } return; }
    var map = q.type === 'tf' ? { t: 0, f: 1, '1': 0, '2': 1 } : { a: 0, b: 1, c: 2, d: 3, '1': 0, '2': 1, '3': 2, '4': 3 };
    if (k in map) answer(map[k]);
  });

  /* ---------- apply & extend ---------- */
  function applyTabs(sel) {
    var ids = ['all'].concat(LESSON_IDS, ['mix']).filter(function (id) { return id === 'all' || EXT.some(function (x) { return x.lesson === id; }); });
    return ids.map(function (id) { return { href: '#/apply' + (id === 'all' ? '' : '?lesson=' + id), label: id === 'all' ? 'All' : id === 'mix' ? 'Whole unit' : id + ' ' + esc(LESSON_META[id].title), current: sel === id }; });
  }
  function renderApply(query) {
    var sel = query.lesson || 'all';
    var items = EXT.filter(function (x) { return sel === 'all' || x.lesson === sel; });
    var levelName = { apply: 'Apply', analyze: 'Analyze data', extend: 'Beyond the slides' };
    view.innerHTML = '<h1>Apply &amp; extend</h1>' +
      '<p class="lede">The thinking questions that come at the end of a test. Write your answer first, use a hint if you are stuck, then compare with the model answer.</p>' +
      tabStrip(applyTabs(sel), 'Lessons') +
      (items.length ? items.map(function (x) {
        var saved = store('ans-' + x.id) || '';
        return '<article class="x-card" data-stage="' + stageOf(x.lesson) + '" data-id="' + x.id + '" data-tier="' + tierOf(x) + '">' +
          '<div class="x-meta">' + tierBadge(tierOf(x)) + '<span class="pill">' + (levelName[x.level] || x.level) + '</span><span>' + esc(lessonLabel(x.lesson)) + '</span>' + (x.marks ? '<span>' + x.marks + ' marks</span>' : '') + '</div>' +
          '<h3>' + esc(x.title) + '</h3>' + x.prompt +
          '<label class="field-label" for="ta-' + x.id + '">Your answer</label><textarea id="ta-' + x.id + '" placeholder="Write your answer here. It is saved in this browser.">' + esc(saved) + '</textarea>' +
          '<div class="x-hints"></div>' +
          '<div class="toolbar">' + (x.hints && x.hints.length ? '<button class="btn ghost" data-act="hint">Show a hint</button>' : '') + '<button class="btn" data-act="answer">Show model answer</button></div>' +
          '<div class="x-answer" hidden><p class="x-label">Model answer</p>' + x.answer + '</div>' +
          '</article>';
      }).join('') : '<p class="empty">No questions for this lesson yet.</p>');
    setSubnav('apply', applyTabs(sel));
    centerActiveTab();
    $$('.x-card', view).forEach(function (card) {
      var x = EXT.filter(function (e) { return e.id === card.getAttribute('data-id'); })[0];
      var shown = 0;
      var ta = $('textarea', card);
      ta.addEventListener('input', function () { store('ans-' + x.id, ta.value); });
      var hb = $('[data-act="hint"]', card);
      if (hb) hb.addEventListener('click', function () {
        if (shown < x.hints.length) { $('.x-hints', card).insertAdjacentHTML('beforeend', '<p class="x-hint"><strong>Hint ' + (shown + 1) + ':</strong> ' + x.hints[shown] + '</p>'); shown++; }
        if (shown >= x.hints.length) { hb.disabled = true; hb.textContent = 'No more hints'; } else hb.textContent = 'Show another hint';
      });
      var ab = $('[data-act="answer"]', card);
      ab.addEventListener('click', function () { var box = $('.x-answer', card); box.hidden = !box.hidden; ab.textContent = box.hidden ? 'Show model answer' : 'Hide model answer'; });
    });
  }

  /* ---------- beyond the slides ---------- */
  function renderBeyond() {
    view.innerHTML = '<h1>Beyond the slides</h1>' +
      '<p class="lede">Your notes can\'t catch everything said in class, and the slides skip some of the reasoning. These topics fill those gaps. ' + tierBadge('likely') + ' topics were probably mentioned in class or could show up on the test; ' + tierBadge('extra') + ' topics are for full understanding and extension questions.</p>' +
      (getDepth() === 'essential' ? '<p class="empty">You are in Essential depth, so this section is hidden. Switch <em>How much to show</em> to <strong>+ Likely</strong> or <strong>Everything</strong> to see it.</p>' : '') +
      (EXTRA.length ? LESSON_IDS.concat(['mix']).map(function (id) {
        var items = EXTRA.filter(function (e) { return e.lesson === id; });
        if (!items.length) return '';
        return '<h3>' + esc(id === 'mix' ? 'Whole unit' : id + ' ' + LESSON_META[id].title) + '</h3><div class="beyond-list">' + items.map(function (e) {
          return '<a href="#/beyond/' + e.id + '" data-stage="' + stageOf(e.lesson) + '" data-tier="' + tierOf(e) + '"><b>' + e.title + '</b>' + tierBadge(tierOf(e)) + (e.why ? '<span class="why">' + e.why + '</span>' : '') + '</a>';
        }).join('') + '</div>';
      }).join('') : '<p class="empty">This section is still being written.</p>');
    setSubnav('beyond', beyondTabs(null));
  }
  function beyondTabs(cur) { return EXTRA.map(function (e) { return { href: '#/beyond/' + e.id, label: e.title, tier: tierOf(e), current: e.id === cur }; }); }
  function renderBeyondTopic(id) {
    var i = -1; EXTRA.forEach(function (e, j) { if (e.id === id) i = j; });
    var e = EXTRA[i];
    if (!e) { renderBeyond(); return; }
    view.setAttribute('data-stage', stageOf(e.lesson));
    var prev = EXTRA[i - 1], next = EXTRA[i + 1];
    view.innerHTML = '<header class="lesson-head"><div class="lesson-kicker"><a href="#/beyond">Beyond the slides</a><span>Extends ' + esc(lessonLabel(e.lesson)) + '</span>' + tierBadge(tierOf(e)) + '</div>' +
      '<h1>' + e.title + '</h1>' + (e.why ? '<p class="lede">' + e.why + '</p>' : '') + '</header>' +
      '<article class="lesson-body beyond-body">' + e.html + '</article>' +
      '<nav class="pager" aria-label="Topics">' +
        (prev ? '<a class="prev" href="#/beyond/' + prev.id + '"><small>Previous topic</small>' + prev.title + '</a>' : '') +
        (next ? '<a class="next" href="#/beyond/' + next.id + '"><small>Next topic</small>' + next.title + '</a>' : '') +
      '</nav>';
    setSubnav('beyond', beyondTabs(id));
  }

  /* ---------- glossary ---------- */
  function renderGlossary() {
    view.innerHTML = '<h1>Glossary</h1><p class="lede">' + GLOSSARY.length + ' terms from the unit. Search by name or by any word in the definition.</p>' +
      '<label class="field-label" for="gq">Search terms</label><input type="search" id="gq" placeholder="Try “NAD”, “matrix” or “pump”" autocomplete="off">' +
      lessonChips('all', false) + '<dl class="gloss" id="gl"></dl>';
    var lesson = 'all';
    function draw() {
      var q = $('#gq').value.trim().toLowerCase();
      var rows = GLOSSARY.filter(function (g) {
        if (lesson !== 'all' && g.lesson !== lesson) return false;
        if (!q) return true;
        return (g.term + ' ' + g.def).replace(/<[^>]+>/g, '').toLowerCase().indexOf(q) > -1;
      });
      $('#gl').innerHTML = rows.length ? rows.map(function (g) {
        return '<div class="gloss-row" data-stage="' + stageOf(g.lesson) + '" data-tier="' + tierOf(g) + '"><dt>' + g.term + (tierOf(g) !== 'essential' ? ' ' + tierBadge(tierOf(g)) : '') + (g.lesson ? '<small><a href="#/lesson/' + g.lesson + '">' + esc(lessonLabel(g.lesson)) + '</a></small>' : '') + '</dt><dd>' + g.def + '</dd></div>';
      }).join('') : '<p class="empty">No terms match “' + esc(q) + '”. Try a shorter word.</p>';
    }
    $('#gq').addEventListener('input', draw);
    $$('.fchip', view).forEach(function (b) { b.addEventListener('click', function () { $$('.fchip', view).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); b.setAttribute('aria-pressed', 'true'); lesson = b.getAttribute('data-l'); draw(); }); });
    draw();
  }

  applyDepth();
  route();
})();
