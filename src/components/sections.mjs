import {icon} from './icons.mjs';
import {label, action, link, esc} from './ui.mjs';
import {trustStats, studioServices, currentTestimonials, studioWork, studioProcess} from '../content/current.mjs';
import {modules, agencyFaq, osFaq} from '../content/pages.mjs';

const tools = os => `<div class="tool-strip" aria-label="Tools in the workflow">${(os ? ['Figma','Claude Code','Codex','Supabase','Vercel'] : ['Figma','Claude Code','Codex','Next.js','Supabase','Vercel']).map(t => `<span>${t}</span>`).join('')}</div>`;
const checks = (items, cross=false) => `<ul class="checklist">${items.map(t => `<li>${icon(cross ? 'cross' : 'check')}<span>${t}</span></li>`).join('')}</ul>`;
const card = (symbol, title, copy, index) => `<article class="service-card reveal"><div class="service-index">0${index}</div>${icon(symbol)}<h3>${title}</h3><p>${copy}</p></article>`;

function trustBand(os=false) {
  return `<section class="trust-band ${os ? 'dark' : 'light'}" id="trust"><div class="trust-intro"><span class="trust-kicker">${os ? 'A practical workflow' : 'A clearer foundation'}</span><span>${os ? 'Learn it. Use it. Keep it.' : 'Built for the work ahead.'}</span></div><div class="trust-stats">${trustStats.slice(0, os ? 3 : 4).map(s => `<div class="trust-stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join('')}</div></section>`;
}

function problemSection() {
  const problems = [
    ['branch','Design drifts','New pages, decks and product screens start looking slightly different every time.'],
    ['code','Development drifts','The live product ends up using different rules from the brand and design files.'],
    ['bolt','AI makes it faster','Without clear rules and reusable foundations, AI simply creates more inconsistency, faster.']
  ];
  return `<section class="section dark" id="problem">${label('The problem','01')}<div class="section-head"><h2>Most brands are<br><em>not really systems.</em></h2><p>They are a logo, a guideline, a website and a bunch of files that slowly stop matching each other.</p></div><div class="service-grid">${problems.map((p,i) => card(...p,i+1)).join('')}</div></section>`;
}

function solutionSection() {
  return `<section class="section light" id="solution">${label('The solution','02')}<div class="section-head"><h2>One system your<br><em>whole team can use.</em></h2><p>The goal is simple: one clear source of truth for your brand, your website and the people building on top of it.</p></div><div class="service-grid">${studioServices.map((s,i) => card(s.icon,s.title,s.copy,i+1)).join('')}</div><div class="system-diagram" aria-label="Brand system flow"><span>Brand</span><i>${icon('arrow')}</i><span>Design</span><i>${icon('arrow')}</i><span>Code</span><i>${icon('arrow')}</i><span>Website</span></div></section>`;
}

function workSection() {
  return `<section class="section dark" id="work">${label('Selected work','06')}<div class="section-head"><h2>Built on<br><em>real projects.</em></h2><p>Keep this section visual. Three strong case studies are enough.</p></div><div class="work-grid">${studioWork.map((w,i) => `<article class="work-card reveal"><div class="work-image"><img src="${w.image}" alt="${esc(w.label)} visual direction" loading="lazy" onerror="this.onerror=null;this.src='/assets/system-object.jpg'"><span>${icon('diagonal')}</span></div><div class="work-meta"><span>${w.label}</span><span>0${i+1}</span></div><h3>${w.title}</h3><p>${w.copy}</p></article>`).join('')}</div></section>`;
}

function testimonialSection() {
  return `<section class="section light" id="testimonials">${label('Reviews','07')}<div class="testimonial-layout"><div class="testimonial-intro"><h2>Good work matters.<br><em>So does an easy process.</em></h2><p>What it feels like when design and development are finally working from the same system.</p><div class="testimonial-controls"><button class="carousel-button" data-carousel="prev" aria-label="Previous testimonial">${icon('arrow')}</button><span class="carousel-count"><b data-carousel-index>01</b> / ${String(currentTestimonials.length).padStart(2,'0')}</span><button class="carousel-button" data-carousel="next" aria-label="Next testimonial">${icon('arrow')}</button></div></div><div class="testimonial-viewport" data-carousel-root><div class="testimonial-track">${currentTestimonials.map((t,i) => `<article class="testimonial-slide" data-slide="${i}" aria-hidden="${i ? 'true' : 'false'}"><div class="testimonial-image"><img src="${t.image}" alt="Visual placeholder for ${esc(t.name)} testimonial" loading="lazy" onerror="this.onerror=null;this.src='/assets/system-object.jpg'"><span>${t.months}</span></div><div class="testimonial-copy"><div class="quote-mark">“</div><blockquote>${t.quote}</blockquote><div class="testimonial-person"><strong>${t.name}</strong><span>${t.role}</span></div></div></article>`).join('')}</div></div></div></section>`;
}

function fitSection() {
  const fit = ['You already have a real product or business','Your brand and website are starting to drift apart','Your team needs a more reusable system','You want something your team can keep using'];
  const noFit = ['You only need a quick one-off landing page','You want endless logo concepts','You want us to blindly execute a finished spec','You need everything tomorrow'];
  return `<section class="section light" id="fit">${label('Good fit','08')}<div class="section-head"><h2>This works best when<br><em>the business is already moving.</em></h2><p>You have a real product, a growing team and a brand that is becoming harder to keep consistent.</p></div><div class="fit-grid"><article class="fit-card"><h3>Probably a good fit</h3>${checks(fit)}</article><article class="fit-card"><h3>Probably not a fit</h3>${checks(noFit,true)}</article></div></section>`;
}

function processSection() {
  return `<section class="section dark" id="how-it-works">${label('How it works','03')}<div class="process-layout"><div class="process-intro"><h2>From strategy<br><em>to production.</em></h2><p>One process. One system. No awkward handoff between five different people.</p>${tools(false)}</div><div class="process-list">${studioProcess.map(([sym,title,p],i) => `<article class="process-step reveal"><span>0${i+1}</span><div><h3>${title}</h3><p>${p}</p></div>${icon(sym)}</article>`).join('')}</div></div></section>`;
}

function whySection() {
  return `<section class="statement" id="why">${label('Why this approach','04')}<div class="statement-grid"><h2>More control.<br><em>Less dependency.</em></h2><div><p>We prefer owning the code, choosing the hosting and building on foundations that are not tied to one page builder.</p><div class="statement-note">${icon('shield')}Your team owns the system.</div></div></div><div class="service-grid statement-cards">${[['window','Page builders are useful.','Framer, Webflow and similar tools can be great for the right project. We are not pretending otherwise.'],['code','They are just not our default anymore.','For long-term systems, we prefer code ownership, flexible hosting and a cleaner path to custom integrations.']].map((p,i)=>card(...p,i+1)).join('')}</div></section>`;
}

function offerSection(settings) {
  return `<section class="section light" id="offer">${label('The offer','05')}<div class="offer-layout"><div class="offer-intro"><h2>A scalable system<br><em>for your next stage.</em></h2><p>Strategy, identity, design and code brought together in one clear system — then applied to a website that is built to last.</p><div class="offer-price"><strong>01</strong><span>connected engagement</span></div></div><div class="offer-card"><div class="offer-card-head"><span>AI-Ready Brand System</span><span>Built to grow</span></div>${checks(['Brand foundation and visual direction','Reusable design system and components','Production-ready code foundation','Website applied, shipped and documented','Your team owns the code'])}${action('Book a call','bookingUrl',settings)}<small>No hard sell. If we’re not a good fit, I’ll tell you.</small></div></div></section>`;
}

function faqSection(os=false) {
  const list = os ? osFaq : agencyFaq;
  return `<section class="section ${os ? 'dark' : 'light'}" id="faq">${label('Questions','09')}<div class="faq-layout"><h2>Good questions.<br><em>Clear answers.</em></h2><div>${list.map(([q,a]) => `<details class="faq-item"><summary>${q}${icon('plus')}</summary><p>${a}</p></details>`).join('')}</div></div></section>`;
}

export function agencySections(settings) {
  return `${trustBand(false)}${problemSection()}${solutionSection()}${processSection()}${whySection()}${workSection()}${testimonialSection()}${fitSection()}${offerSection(settings)}${faqSection(false)}`;
}

function curriculumSection() {
  return `<section class="section dark" id="the-program">${label('Inside DesignerOS','05')}<div class="curriculum"><div class="curriculum-intro"><h2>Build the workflow.<br><em>Properly.</em></h2><p>Everything you need to connect design to production. Explore each module to see what you’ll learn.</p><div class="curriculum-meta"><span>7 modules</span><span>Full workflow</span><span>Future updates included</span></div></div><div>${modules.map(([title,p,outcome,sym],i) => `<details class="module" name="program" ${i===0 ? 'open' : ''}><summary><span>0${i+1}</span><h3>${title}</h3>${icon('plus')}</summary><div class="module-content"><p>${p}</p><div class="module-outcome">${icon(sym)}<span>${outcome}</span></div></div></details>`).join('')}</div></div></section>`;
}

function toolkitSection() {
  return `<section class="section light" id="included">${label('The toolkit','06')}<div class="section-head"><h2>You also<br><em>get the tools.</em></h2><p>Three practical kits. Buy them separately, or get all of them inside DesignerOS.</p></div><div class="kits">${[['grid','AI-Ready Design Starter Kit','39'],['case','Freelance Client OS','59'],['window','AI Website Foundation Kit','149']].map(([sym,title,p]) => `<article class="kit reveal"><div class="kit-visual">${icon(sym)}</div><h3>${title}</h3><div class="kit-bottom"><span>€${p} separately</span><span>Included in DesignerOS</span></div></article>`).join('')}</div><p class="included-value">€247 standalone value. Included with DesignerOS.</p></section>`;
}

function programProof() {
  const t = currentTestimonials[0];
  return `<section class="section light" id="proof"><div class="proof-banner"><div><span class="section-label">{ The practice behind the program }</span><h2>Show the work,<br><em>not just the promise.</em></h2></div><div><p>DesignerOS is built from the same systems, rituals and production decisions used in the AI-Ready Brand System workflow.</p><div class="proof-numbers"><span><strong>7</strong> practical modules</span><span><strong>1</strong> connected workflow</span></div></div></div><div class="studio-quote"><div class="quote-mark">“</div><blockquote>${t.quote}</blockquote><span>${t.name} · ${t.role}</span></div></section>`;
}

export function osSections(settings) {
  return `${trustBand(true)}<section class="section dark" id="the-shift">${label('The shift','01')}<div class="statement-grid"><h2>The designer role<br><em>is changing.</em></h2><div><p>Knowing one design tool is not enough. Knowing one AI tool is not enough either.</p><div class="statement-note">${icon('cursor')}Stay involved. All the way to production.</div></div></div></section><section class="section light"><div class="service-grid">${[['branch','The old model.','Design the screens, hand them off and wait for someone else to make them real.'],['launch','The new opportunity.','Design the system, use AI to build it and stay involved all the way to production.']].map((p,i)=>card(...p,i+1)).join('')}</div></section><section class="section dark" id="what-you-learn">${label('What you learn','02')}<div class="section-head"><h2>From idea<br><em>to live product.</em></h2><p>DesignerOS connects design, systems, AI, code and business into one workflow.</p></div><div class="service-grid">${[['grid','Design','Build clear systems instead of disconnected screens.'],['code','Build','Use Claude Code or Codex to turn your decisions into working products.'],['launch','Ship','Understand deployment, simple backends and enough development to stop being afraid of production.'],['case','Sell','Turn the workflow into a service clients understand and actually want to buy.']].map((p,i)=>card(...p,i+1)).join('')}</div></section><section class="section light" id="the-workflow">${label('The workflow','03')}<div class="section-head"><h2>Use the tools.<br><em>Own the process.</em></h2><p>Today, the workflow uses Figma, Claude Code or Codex, Supabase when needed, and Vercel. Tomorrow, some of those tools may change.</p></div>${tools(true)}</section>${curriculumSection()}${toolkitSection()}<section class="section dark" id="who-it-s-for">${label('An honest approach','07')}<div class="section-head"><h2>More capable.<br><em>Still a designer.</em></h2><p>You can already design. You don’t necessarily want to become a software engineer. You just want to stop depending on someone else every time your work needs to become real.</p></div><div class="service-grid">${[['shield','No fake promises.','It won’t turn you into a senior developer in four weeks. It won’t guarantee you €10k next month.'],['compass','You still have to think.','Claude will break things. You’ll still need taste, judgment and the patience to fix what doesn’t work.']].map((p,i)=>card(...p,i+1)).join('')}</div></section>${programProof()}<section class="section dark section-separator" id="pricing">${label('One program. Everything included.','08')}<div class="pricing-layout"><div class="pricing-intro"><h2>Invest in what<br><em>you can create.</em></h2><p>For designers who want more control over their work, from the first decision to the final deployment.</p></div><div class="price-card"><div class="price-card-top"><span>DesignerOS</span><small>Founding price</small></div><div class="price">€690</div><p class="price-caption">Full program. Continued access.</p>${checks(['All 7 modules','All future course updates','AI-Ready Design Starter Kit','AI Website Foundation Kit','Freelance Client OS','Community / live sessions'])}${action('Join DesignerOS','checkoutUrl',settings)}<small>The price will go up as the program gets better.<br>No fake countdown timer.</small></div></div></section>${faqSection(true)}`;
}
