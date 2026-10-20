// junta as 2 últimas palavras de cada texto com espaço inseguro, para nunca sobrar uma palavra sozinha
document.querySelectorAll('h1,h2,h3,p,li,small,summary,.cred b,.step b,.card .for,.go,.chips span,.float,.strip span,.strip b').forEach(el=>{
  const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let last=null,n;
  while(n=w.nextNode()){if(n.nodeValue.trim())last=n}
  if(!last)return;
  const t=last.nodeValue.replace(/\s+$/,'');
  const i=t.lastIndexOf(' ');
  if(i>0&&t.slice(0,i).trim()) last.nodeValue=t.slice(0,i)+'\u00A0'+t.slice(i+1)+last.nodeValue.slice(t.length);
});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.14,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv,.stg').forEach(el=>io.observe(el));
