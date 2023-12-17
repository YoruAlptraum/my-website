import{s as R,n as S,o as $,b as tt}from"../chunks/scheduler.e108d1fd.js";import{S as W,i as X,g as E,h as T,j as P,f as _,k as x,a as b,m as O,n as Y,x as I,o as et,s as C,r as G,c as H,u as J,y as F,v as K,d as N,t as Q,w as U}from"../chunks/index.a21d6cee.js";function nt(g){let t;return{c(){t=E("canvas"),this.h()},l(s){t=T(s,"CANVAS",{id:!0,width:!0,height:!0}),P(t).forEach(_),this.h()},h(){x(t,"id","cube"),x(t,"width",g[0]),x(t,"height",g[1])},m(s,i){b(s,t,i),g[4](t)},p(s,[i]){i&1&&x(t,"width",s[0]),i&2&&x(t,"height",s[1])},i:S,o:S,d(s){s&&_(t),g[4](null)}}}const it=.05,st=.15,lt=.1;function at(g,t,s){let{w:i=400}=t,{h:l=400}=t,{color:r="purple"}=t;const c=function(m,a,o){this.x=m,this.y=a,this.z=o};let M,f,h,v,u,n,w,y,k,L=0;$(()=>{s(2,M),f=M.getContext("2d"),h=i/2,v=l/2,u=0,n=l/4,w=[new c(h-n,v-n,u-n),new c(h+n,v-n,u-n),new c(h+n,v+n,u-n),new c(h-n,v+n,u-n),new c(h-n,v-n,u+n),new c(h+n,v-n,u+n),new c(h+n,v+n,u+n),new c(h-n,v+n,u+n)],y=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],f.strokeStyle=r,f.lineWidth=i/100,f.lineCap="round",requestAnimationFrame(D)});function D(m){k=m-L,L=m,f.clearRect(0,0,i,l);let a=k*.001*lt*Math.PI*2;for(let o of w){let p=o.x-h,e=o.y-v,d=p*Math.cos(a)-e*Math.sin(a),z=p*Math.sin(a)+e*Math.cos(a);o.x=d+h,o.y=z+v}a=k*.001*it*Math.PI*2;for(let o of w){let p=o.y-v,e=o.z-u,d=p*Math.cos(a)-e*Math.sin(a),z=p*Math.sin(a)+e*Math.cos(a);o.y=d+v,o.z=z+u}a=k*.001*st*Math.PI*2;for(let o of w){let p=o.x-h,e=o.z-u,d=e*Math.sin(a)+p*Math.cos(a),z=e*Math.cos(a)-p*Math.sin(a);o.x=d+h,o.z=z+u}for(let o of y)f.beginPath(),f.moveTo(w[o[0]].x,w[o[0]].y),f.lineTo(w[o[1]].x,w[o[1]].y),f.stroke();requestAnimationFrame(D)}function A(m){tt[m?"unshift":"push"](()=>{M=m,s(2,M)})}return g.$$set=m=>{"w"in m&&s(0,i=m.w),"h"in m&&s(1,l=m.h),"color"in m&&s(3,r=m.color)},[i,l,M,r,A]}class ot extends W{constructor(t){super(),X(this,t,at,nt,R,{w:0,h:1,color:3})}}function rt(g){let t,s=g[0]+"|",i;return{c(){t=E("h2"),i=O(s),this.h()},l(l){t=T(l,"H2",{class:!0});var r=P(t);i=Y(r,s),r.forEach(_),this.h()},h(){x(t,"class","title_disp")},m(l,r){b(l,t,r),I(t,i)},p(l,[r]){r&1&&s!==(s=l[0]+"|")&&et(i,s)},i:S,o:S,d(l){l&&_(t)}}}let j=20;function ct(g,t,s){let{title:i="Title goes here!"}=t,l="",r=0,c=1;$(()=>{requestAnimationFrame(M)});function M(f){f>r+55&&(c+=1,r=f),c<=i.length?s(0,l=i.slice(0,c)):c>i.length+j&&s(0,l=i.slice(0,i.length+j-c)),c>i.length*2+j*2&&(c=1),requestAnimationFrame(M)}return g.$$set=f=>{"title"in f&&s(1,i=f.title)},[l,i]}class ht extends W{constructor(t){super(),X(this,t,ct,rt,R,{title:1})}}function ut(g){let t,s,i,l,r,c,M,f,h,v,u,n,w,y,k='<a href="https://github.com/YoruAlptraum"><img class="icon" src="./github-mark.svg" alt="github link"/></a> <a href="https://www.linkedin.com/in/thiago-ozawa-5b79a3194/"><img class="icon" src="./icons8-linkedin.svg" alt="linkedin link"/></a>',L,D,A="",m,a,o="",p;return h=new ht({props:{title:"Software Developer"}}),n=new ot({props:{w:500,h:500,color:"#6900FD"}}),{c(){t=E("title"),s=O(q),i=C(),l=E("div"),r=E("div"),c=E("h1"),M=O(q),f=C(),G(h.$$.fragment),v=C(),u=E("div"),G(n.$$.fragment),w=C(),y=E("div"),y.innerHTML=k,L=C(),D=E("div"),D.innerHTML=A,m=C(),a=E("div"),a.innerHTML=o,this.h()},l(e){t=T(e,"TITLE",{});var d=P(t);s=Y(d,q),d.forEach(_),i=H(e),l=T(e,"DIV",{class:!0});var z=P(l);r=T(z,"DIV",{class:!0});var V=P(r);c=T(V,"H1",{});var Z=P(c);M=Y(Z,q),Z.forEach(_),f=H(V),J(h.$$.fragment,V),V.forEach(_),v=H(z),u=T(z,"DIV",{id:!0});var B=P(u);J(n.$$.fragment,B),B.forEach(_),z.forEach(_),w=H(e),y=T(e,"DIV",{class:!0,"data-svelte-h":!0}),F(y)!=="svelte-1hbtd20"&&(y.innerHTML=k),L=H(e),D=T(e,"DIV",{class:!0,"data-svelte-h":!0}),F(D)!=="svelte-pdjg2n"&&(D.innerHTML=A),m=H(e),a=T(e,"DIV",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-uvhzdt"&&(a.innerHTML=o),this.h()},h(){x(r,"class","info"),x(u,"id","anim"),x(l,"class","hero"),x(y,"class","contact_me"),x(D,"class","about_me"),x(a,"class","projects")},m(e,d){b(e,t,d),I(t,s),b(e,i,d),b(e,l,d),I(l,r),I(r,c),I(c,M),I(r,f),K(h,r,null),I(l,v),I(l,u),K(n,u,null),b(e,w,d),b(e,y,d),b(e,L,d),b(e,D,d),b(e,m,d),b(e,a,d),p=!0},p:S,i(e){p||(N(h.$$.fragment,e),N(n.$$.fragment,e),p=!0)},o(e){Q(h.$$.fragment,e),Q(n.$$.fragment,e),p=!1},d(e){e&&(_(t),_(i),_(l),_(w),_(y),_(L),_(D),_(m),_(a)),U(h),U(n)}}}let q="Thiago Ozawa";class dt extends W{constructor(t){super(),X(this,t,null,ut,R,{})}}export{dt as component};