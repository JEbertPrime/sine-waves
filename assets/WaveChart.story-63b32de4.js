import{r as m}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var P={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=m,T=Symbol.for("react.element"),$=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,Y=I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function V(r,e,a){var t,s={},i=null,c=null;a!==void 0&&(i=""+a),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(c=e.ref);for(t in e)N.call(e,t)&&!O.hasOwnProperty(t)&&(s[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)s[t]===void 0&&(s[t]=e[t]);return{$$typeof:T,type:r,key:i,ref:c,props:s,_owner:Y.current}}v.Fragment=$;v.jsx=V;v.jsxs=V;P.exports=v;var X=P.exports;const D=X.jsx,b=r=>{const{waves:e,startFull:a,fullWidth:t,height:s=400,width:i,step:c=4}=r,y=m.useRef(),g=m.useRef(0);function W(l,n,u,o,q){n.canvas.width!=(t?window.innerWidth:window.innerWidth*.8)&&(n.canvas.width=t?window.innerWidth:window.innerWidth*.8),n.clearRect(0,0,n.canvas.width,n.canvas.height);const _=n.canvas.height/2;for(let F=l.length-1;F>=0;F--){const S=l[F];let d=0,R=_;for(n.strokeStyle=S.color,n.beginPath(),n.moveTo(0,_+S.getYFromX(0+o,o));d<u-o;)d+=q??4,R=_+S.getYFromX(d+o,o),n.lineTo(d,R);n.stroke()}u<n.canvas.width?(u+=q??4,requestAnimationFrame(()=>W(l,n,u,o))):(u+=1,o=u-n.canvas.width,g.current=requestAnimationFrame(()=>W(l,n,u,o)))}return m.useEffect(()=>{if(y.current){const l=y.current;l.width=i||(t?window.innerWidth:window.innerWidth*.8);const n=l.getContext("2d");n&&(g.current=requestAnimationFrame(()=>W(e,n,a?i||(t?window.innerWidth:window.innerWidth*.8):0,0,c)))}return()=>cancelAnimationFrame(g.current)}),D("canvas",{ref:y,width:i,height:s})};try{b.displayName="WaveChart",b.__docgenInfo={description:"",displayName:"WaveChart",props:{waves:{defaultValue:null,description:"",name:"waves",required:!0,type:{name:"SineWave[]"}},startFull:{defaultValue:null,description:"",name:"startFull",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}}}}}catch{}class f{constructor({frequency:e,amplitude:a,phase:t,color:s,yOffset:i}){this.angularFrequency=e instanceof Function?e:()=>e*2*Math.PI,this.amplitude=a instanceof Function?a:()=>a,this.phase=t instanceof Function?t:()=>t,this.color=s,this.yOffset=i instanceof Function?i:()=>i}getYFromX(e,a){return this.amplitude(e,a)*Math.sin(this.angularFrequency(e,a)*e+this.phase(e,a))+this.yOffset(e,a)}}const w=[];for(let r=0;r<60;r++)w.push(new f({frequency:.00154,amplitude:(e,a)=>Math.cos((e-a)/(40+Math.sin(e/10)))*20+r*4,phase:r/20,color:`rgba(${80+r/2},${100+r/2},${170-r/4},${1-r/60})`,yOffset:0}));const B={title:"WaveChart",component:b,argTypes:{waves:{options:["Single Wave","Multiple Waves","Show Amplitude Curve"],description:"An array of SineWave objects. Select from a single wave, multiple waves (with incremented phase and amplitude), and multiple waves with the amplitude curve",mapping:{"Single Wave":[new f({frequency:.0025,amplitude:(r,e)=>Math.cos((r-e)/(40+Math.sin(r/10)))*20+4,phase:0,color:"blue",yOffset:0})],"Multiple Waves":w,"Show Amplitude Curve":[...w,new f({frequency:0,amplitude:(r,e)=>Math.cos((r-e)/(40+Math.sin(r/10)))*20+4,phase:Math.PI/2,color:"red",yOffset:0})]}}}},h={args:{waves:[new f({frequency:.0025,amplitude:40,phase:0,color:"blue",yOffset:0})]}},p={args:{fullWidth:!0,startFull:!0,waves:w,height:500}};var M,C,A;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    waves: [new SineWave({
      frequency: 0.0025,
      amplitude: 40,
      phase: 0,
      color: 'blue',
      yOffset: 0
    })]
  }
}`,...(A=(C=h.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var E,j,k;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    startFull: true,
    waves: waves,
    height: 500
  }
}`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};export{h as Default,p as VariableAmplitude,B as default};
//# sourceMappingURL=WaveChart.story-63b32de4.js.map
