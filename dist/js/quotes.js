// Korean renderings are original editorial paraphrases; source editions are linked.
const books={marcus:['마르쿠스 아우렐리우스','Marcus Aurelius','명상록','https://www.gutenberg.org/files/2680/2680-h/2680-h.htm','Meric Casaubon'],socrates:['소크라테스','Socrates','플라톤, 소크라테스의 변명','https://www.gutenberg.org/files/1656/1656-h/1656-h.htm','Benjamin Jowett'],laozi:['노자','Laozi','도덕경','https://www.gutenberg.org/files/216/216-h/216-h.htm','James Legge'],epictetus:['에픽테토스','Epictetus','엥케이리디온','https://www.gutenberg.org/files/45109/45109-h/45109-h.htm','Elizabeth Carter'],descartes:['르네 데카르트','René Descartes','방법서설','https://www.gutenberg.org/files/59/59-h/59-h.htm','John Veitch']};
const entries=[
['marcus','action','좋은 사람이 어떤 사람인지 더는 논하지 말고, 그런 사람이 되어라.','10.16','실천'],
['laozi','journey','천 리 길도 발아래 한 걸음에서 시작된다.','64장','시작'],
['socrates','examine','성찰하지 않는 삶은 살아갈 가치가 없다.','38a','성찰'],
['epictetus','judgment','우리를 흔드는 것은 사건 자체가 아니라, 그 사건을 바라보는 우리의 판단이다.','5장','마음'],
['descartes','reason','좋은 정신을 가지는 것만으로는 충분하지 않다. 중요한 것은 그것을 잘 사용하는 일이다.','1부','이성'],
['laozi','self','다른 사람을 아는 것은 지혜이고, 자신을 아는 것은 밝음이다.','33장','자기 이해'],
['marcus','refuge','어디에도 자신의 영혼 안보다 더 고요한 은신처는 없다.','4.3','고요'],
['epictetus','control','어떤 일은 우리에게 달려 있고, 어떤 일은 우리에게 달려 있지 않다.','1장','통제'],
['laozi','contentment','만족할 줄 아는 사람이 부유한 사람이다.','33장','만족'],
['descartes','existence','나는 생각한다. 그러므로 나는 존재한다.','4부','존재'],
['socrates','knowing','나는 알지 못하는 것을 안다고 생각하지는 않는다.','21d','앎'],
['marcus','present','현재는 모든 사람에게 똑같다. 잃을 수 있는 것도 오직 현재뿐이다.','2.14','지금'],
['laozi','water','가장 좋은 것은 물과 같다. 물은 만물을 이롭게 하면서도 다투지 않는다.','8장','삶의 태도'],
['epictetus','wish','일이 네가 바라는 대로 일어나길 구하지 말고, 일어나는 대로 받아들이기를 바라라.','8장','수용'],
['laozi','knowing','아는 사람은 말하지 않고, 말하는 사람은 알지 못한다.','56장','침묵'],
['marcus','opinion','누군가 내가 잘못 생각하거나 행동했음을 보여 준다면, 기꺼이 바꾸겠다.','6.21','배움']
];
export const quotes=entries.map(([b,id,text,section,theme])=>({id:`${b}-${id}`,text,authorKr:books[b][0],author:books[b][1],work:books[b][2],sourceSection:section,sourceUrl:books[b][3],sourceTranslator:books[b][4],themes:[theme],language:'ko',translator:'여백 · 한국어 자체 번역·의역',verified:false}));
export function localDate(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
export function dailyIndex(key){const [y,m,d]=key.split('-').map(Number);const days=Math.floor(Date.UTC(y,m-1,d)/86400000);return ((days-20724)%quotes.length+quotes.length)%quotes.length}
export function quoteFor(id){return quotes.find(q=>q.id===id)}
