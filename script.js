const app=document.querySelector('#app');const nav=document.querySelector('#nav');const menu=document.querySelector('.menu-toggle');const categories={'all':'All work','commercials':'Commercials','films':'Films','music-videos':'Music Videos'};
function escapeHTML(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function art(p){const photo=p.photo?`<img src="${escapeHTML(p.photo)}?v=portfolio-14-20261103" alt="" loading="lazy">`:'';return `<div class="art" style="--c:${escapeHTML(p.color||'#b6ada4')}">${photo}</div>`}
function tile(p,i){return `<a class="tile ${escapeHTML(p.size)}" href="?project=${encodeURIComponent(p.slug)}" aria-label="View ${escapeHTML(p.title)}">${art(p)}<span class="tile-num">${String(i+1).padStart(2,'0')} / ${String(PROJECTS.length).padStart(2,'0')}</span><div class="tile-overlay"><h2>${escapeHTML(p.title)}</h2></div></a>`}
function listing(cat='all'){document.title='Mirela Vasileva — Costume Designer & Stylist';const shown=cat==='all'?PROJECTS:PROJECTS.filter(p=>p.category===cat);app.innerHTML=`<section class="intro"><h1>${escapeHTML(SITE.intro)}</h1></section><div class="filters">${Object.entries(categories).map(([k,v])=>`<button data-filter="${k}" class="${cat===k?'active':''}">${v}</button>`).join('')}</div><section class="portfolio-grid">${shown.length?Array.from({length:3},(_,col)=>`<div class="portfolio-column portfolio-column-${col+1}">${shown.filter((p,i)=>i%3===col).map((p,i)=>tile(p,col+i*3)).join('')}</div>`).join(''):'<p class="empty">Projects coming soon.</p>'}</section>`;nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.dataset.filter===cat));}
function about(){
  document.title='About — Mirela Vasileva';
  const email=SITE.email ? `<a href="mailto:${escapeHTML(SITE.email)}" class="about-contact-link">EMAIL</a>` : `<span class="about-contact-pending">EMAIL <small>ADDRESS TO BE ADDED</small></span>`;
  const ig=SITE.instagram ? `<a href="${escapeHTML(SITE.instagram)}" class="about-contact-link" rel="noopener noreferrer" target="_blank">INSTAGRAM</a>` : `<span class="about-contact-pending">INSTAGRAM <small>PROFILE TO BE ADDED</small></span>`;
  const vimeo=SITE.vimeo ? `<a href="${escapeHTML(SITE.vimeo)}" class="about-contact-link" rel="noopener noreferrer" target="_blank">VIMEO</a>` : `<span class="about-contact-pending">VIMEO <small>PROFILE TO BE ADDED</small></span>`;
  app.innerHTML=`<section class="page about-page">
    <h1 class="about-name">Mirela Vasileva<span class="about-period">.</span></h1>
    <div class="about-profile">
      <p class="about-bio">${escapeHTML(SITE.about)}</p>
      <p class="about-location">BASED IN SOFIA, BULGARIA · AVAILABLE WORLDWIDE</p>
    </div>
    <div class="about-contact" id="get-in-touch">
      <h2>LET’S WORK<span class="about-period">.</span></h2>
      <div class="about-contact-links">${email}${ig}${vimeo}</div>
    </div>
    <div class="about-photo-space" aria-hidden="true"></div>
  </section>`;
  nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.dataset.view==='about'));
}

function project(slug){
  const p=PROJECTS.find(q=>q.slug===slug);
  if(!p){listing();return;}
  document.title=`${p.title} — Mirela Vasileva`;
  const credits=(p.credits||[]).map(c=>`<li>${escapeHTML(c)}</li>`).join('');
  let video='';
  try{
    if(p.video){
      const u=new URL(p.video);
      if(u.protocol==='https:'&&['player.vimeo.com','www.youtube-nocookie.com','www.youtube.com'].includes(u.hostname)){
        video=`<iframe class="video-frame" src="${escapeHTML(u.href)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="${escapeHTML(p.title)} video"></iframe>`;
      }
    }
  }catch(e){}
  const ix=PROJECTS.indexOf(p);
  const previous=ix>0?PROJECTS[ix-1]:null;
  const next=ix<PROJECTS.length-1?PROJECTS[ix+1]:null;
  const videoOrImage=video||`<div class="project-fallback-image" style="--c:${escapeHTML(p.color||'#b6ada4')}">${art(p)}</div>`;
  app.innerHTML=`<section class="page project-page">
    <a href="index.html" class="back">All work</a>
    <div class="project-top"><h1 class="project-title">${escapeHTML(p.title)}</h1><div class="project-meta">${escapeHTML(p.type||'')}</div></div>
    <div class="project-video">${videoOrImage}</div>
    <div class="project-body project-credits-layout"><div class="project-detail-spacer"></div><div><span class="small-label">Credits</span><ul>${credits}</ul></div></div>
    <nav class="project-pagination" aria-label="Project navigation">
      <div>${previous?`<span class="project-pagination-label">Previous</span><a href="?project=${encodeURIComponent(previous.slug)}">${escapeHTML(previous.title)}</a>`:''}</div>
      <div class="project-pagination-next">${next?`<span class="project-pagination-label">Next</span><a href="?project=${encodeURIComponent(next.slug)}">${escapeHTML(next.title)}</a>`:''}</div>
    </nav>
  </section>`;
}

function route(){let params=new URLSearchParams(location.search);let slug=params.get('project');let hash=decodeURIComponent(location.hash.slice(1)).toLowerCase();try{if(slug)project(slug);else if(hash==='about'||hash==='contact')about();else listing(Object.prototype.hasOwnProperty.call(categories,hash)?hash:'all');}catch(err){console.error('Portfolio rendering error:',err);app.innerHTML='<p class="render-error">Unable to show the portfolio. Please reload the page.</p>';}window.scrollTo(0,0);nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{let open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});document.body.addEventListener('click',e=>{const filter=e.target.closest('[data-filter]');if(filter&&filter.tagName==='BUTTON'){location.hash=filter.dataset.filter==='all'?'':filter.dataset.filter;if(filter.dataset.filter==='all'&&location.hash==='')route()}});window.addEventListener('hashchange',route);window.addEventListener('popstate',route);document.querySelector('#year').textContent=new Date().getFullYear();const footerEmail=document.querySelector('#footer-email');if(footerEmail){if(SITE.email){footerEmail.href=`mailto:${SITE.email}`}else{footerEmail.style.display='none'}}route();

// Muted editorial palette. Avoid repeating the same colour on the next interaction.
const accentPalette=['#af5b64','#667e9e','#b77b61','#89749d','#6b8c90','#a47986'];
let accentIndex=-1;
try { accentIndex=Number(sessionStorage.getItem('mirela-accent-index') ?? '-1'); } catch (_) {}
function nextAccent(){
  const choices=accentPalette.map((_,i)=>i).filter(i=>i!==accentIndex);
  accentIndex=choices[Math.floor(Math.random()*choices.length)];
  document.documentElement.style.setProperty('--accent',accentPalette[accentIndex]);
  try { sessionStorage.setItem('mirela-accent-index',String(accentIndex)); } catch (_) {}
}
nextAccent();
// Test variant 2: each navigation or filter click picks a fresh accent.
// On full-page navigation the next page picks a fresh accent on load.
document.addEventListener('click',e=>{
  if(e.target.closest('.filters [data-filter], .site-header nav a')) nextAccent();
});

// iPad Safari sometimes reports hover:none even with a connected trackpad or mouse.
// Pointer events additionally activate the card title for actual pointing devices.
document.addEventListener('pointerover', event => {
  if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
  const tile=event.target.closest('.portfolio-grid .tile');
  if(tile) tile.classList.add('is-pointer-hover');
});
document.addEventListener('pointerout', event => {
  if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
  const tile=event.target.closest('.portfolio-grid .tile');
  if (tile && !tile.contains(event.relatedTarget)) tile.classList.remove('is-pointer-hover');
});

// V12: explicit All Work handling; Safari can preserve an earlier fragment during navigation.
document.addEventListener('click', e => {
  const link=e.target.closest('a[data-filter="all"]');
  if(link){e.preventDefault();history.pushState(null,'',location.pathname);route();return;}
  const button=e.target.closest('button[data-filter="all"]');
  if(button){history.replaceState(null,'',location.pathname);route();}
});
