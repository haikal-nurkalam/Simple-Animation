


const d = document.querySelector('.d');
const i = document.querySelector('.i');
const r = document.querySelector('.r');
const u = document.querySelector('.u');
const m= document.querySelector('.m');
const a = document.querySelector('.a');
const h = document.querySelector('.h');
const a2 = document.querySelector('.a2');
const j = document.querySelector('.j');
const a3 = document.querySelector('.a3');

d.addEventListener('mouseenter', function(){
	d.style.color = '#F57B51';
});
i.addEventListener('mouseenter', function(){
	i.style.color = 'white';
});
r.addEventListener('mouseenter', function(){
	r.style.color = '#F57B51';
});
u.addEventListener('mouseenter', function(){
	u.style.color = 'white';
});
m.addEventListener('mouseenter', function(){
	m.style.color = '#F57B51';
});
a.addEventListener('mouseenter', function(){
	a.style.color = 'white';
});
h.addEventListener('mouseenter', function(){
	h.style.color = '#F57B51';
});
a2.addEventListener('mouseenter', function(){
	a2.style.color = 'white';
});
j.addEventListener('mouseenter', function(){
	j.style.color = '#F57B51';
});
a3.addEventListener('mouseenter', function(){
	a3.style.color = 'white';
});



const nama = document.querySelector('.nama');
// ini buat mecah satu satu hurufnya, di looping pake map, terus sisipin span, buat ngebagi tiap huruf, dan join untuk jadi string kosong
const huruf = [...nama.textContent].map(h =>`<span>${h}</span>`).join('');
// baru dah ditimpa ke HTML
nama.innerHTML = huruf;







