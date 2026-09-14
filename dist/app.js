const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(){menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open menu');nav?.classList.remove('is-open')}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('is-open',open)});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('is-open')){closeMenu();menu.focus()}});

const dialog=document.querySelector('#availability');let previousFocus;
const messages={bookingUrl:['Let’s talk.','The booking link will be connected here soon.'],checkoutUrl:['DesignerOS is coming.','Enrollment is not open yet. Come back soon to join the program.']};
document.querySelectorAll('[data-unavailable]').forEach(button=>button.addEventListener('click',()=>{const [title,copy]=messages[button.dataset.unavailable];document.querySelector('#dialog-title').textContent=title;document.querySelector('#dialog-copy').textContent=copy;previousFocus=button;dialog.showModal()}));
document.querySelectorAll('.dialog-close,.dialog-dismiss').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog?.addEventListener('close',()=>previousFocus?.focus());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close()}});

const carousel=document.querySelector('[data-carousel-root]');
if(carousel){
 const track=carousel.querySelector('.testimonial-track');const slides=[...carousel.querySelectorAll('[data-slide]')];let index=0;
 function select(next){index=(next+slides.length)%slides.length;track.style.transform=`translateX(-${index*100}%)`;slides.forEach((slide,i)=>slide.setAttribute('aria-hidden',String(i!==index)));const counter=document.querySelector('[data-carousel-index]');if(counter)counter.textContent=String(index+1).padStart(2,'0')}
 document.querySelector('[data-carousel="prev"]')?.addEventListener('click',()=>select(index-1));document.querySelector('[data-carousel="next"]')?.addEventListener('click',()=>select(index+1));
 let startX=null;carousel.addEventListener('pointerdown',e=>{startX=e.clientX;carousel.setPointerCapture?.(e.pointerId)});carousel.addEventListener('pointerup',e=>{if(startX===null)return;const delta=e.clientX-startX;if(Math.abs(delta)>45)select(index+(delta<0?1:-1));startX=null});
 document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')select(index-1);if(e.key==='ArrowRight')select(index+1)});
}

const audienceRoot=document.querySelector('[data-audience-root]');
if(audienceRoot){const tabs=[...audienceRoot.querySelectorAll('[role="tab"]')];tabs.forEach((tab,i)=>tab.addEventListener('click',()=>{tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));document.getElementById(t.getAttribute('aria-controls')).hidden=!selected});}));}

document.querySelectorAll('.module').forEach(module=>module.addEventListener('toggle',()=>{if(module.open)document.querySelectorAll('.module').forEach(other=>{if(other!==module)other.open=false})}));

const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
if(!reducedMotion.matches&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('pending');observer.unobserve(entry.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('pending');observer.observe(el)});reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches){document.querySelectorAll('.pending').forEach(el=>el.classList.remove('pending'));observer.disconnect()}})}

const progress=document.querySelector('.reading-progress');let scheduled=false;function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,scrollY/max)):0})`;scheduled=false}addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateProgress)}},{passive:true});addEventListener('resize',updateProgress);updateProgress();
