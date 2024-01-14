import{r as d}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var P={exports:{}},y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=d,$=Symbol.for("react.element"),N=Symbol.for("react.fragment"),Y=Object.prototype.hasOwnProperty,O=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function I(r,e,a){var n,o={},s=null,c=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(c=e.ref);for(n in e)Y.call(e,n)&&!V.hasOwnProperty(n)&&(o[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:$,type:r,key:s,ref:c,props:o,_owner:O.current}}y.Fragment=N;y.jsx=I;y.jsxs=I;P.exports=y;var X=P.exports;const D=X.jsx,b=r=>{const{waves:e,startFull:a,height:n=400,width:o=800,step:s=4,...c}=r,w=d.useRef(),g=d.useRef(0);function _(u,t,l,i,R){t.clearRect(0,0,t.canvas.width,t.canvas.height);const F=t.canvas.height/2;for(let S=u.length-1;S>=0;S--){const W=u[S];let p=0,q=F;for(t.strokeStyle=W.color,t.beginPath(),t.moveTo(0,F+W.getYFromX(0+i,i));p<l-i;)p+=R??4,q=F+W.getYFromX(p+i,i),t.lineTo(p,q);t.stroke()}l<t.canvas.width?(l+=R??4,requestAnimationFrame(()=>_(u,t,l,i))):(l+=1,i=l-t.canvas.width,g.current=requestAnimationFrame(()=>_(u,t,l,i)))}return d.useEffect(()=>{if(w.current){const u=w.current,t=u.getContext("2d");t&&(g.current=requestAnimationFrame(()=>_(e,t,a?u.width:0,0,s)))}return()=>cancelAnimationFrame(g.current)}),D("canvas",{ref:w,width:o,height:n,...c})};try{b.displayName="WaveChart",b.__docgenInfo={description:"",displayName:"WaveChart",props:{waves:{defaultValue:null,description:"",name:"waves",required:!0,type:{name:"SineWave[]"}},startFull:{defaultValue:null,description:"",name:"startFull",required:!0,type:{name:"boolean"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}}}}}catch{}class v{constructor({frequency:e,amplitude:a,phase:n,color:o,yOffset:s}){this.angularFrequency=e instanceof Function?e:()=>e*2*Math.PI,this.amplitude=a instanceof Function?a:()=>a,this.phase=n instanceof Function?n:()=>n,this.color=o,this.yOffset=s instanceof Function?s:()=>s}getYFromX(e,a){return this.amplitude(e,a)*Math.sin(this.angularFrequency(e,a)*e+this.phase(e,a))+this.yOffset(e,a)}}const f=[];for(let r=0;r<60;r++)f.push(new v({frequency:.00154,amplitude:(e,a)=>Math.cos((e-a)/(40+Math.sin(e/10)))*20+r*4,phase:r/20,color:`rgba(${80+r/2},${100+r/2},${170-r/4},${1-r/60})`,yOffset:0}));const B={title:"WaveChart",component:b,argTypes:{waves:{options:["Single Wave","Multiple Waves","Show Amplitude Curve"],description:"An array of SineWave objects. Select from a single wave, multiple waves (with incremented phase and amplitude), and multiple waves with the amplitude curve",mapping:{"Single Wave":[new v({frequency:.0025,amplitude:(r,e)=>Math.cos((r-e)/(40+Math.sin(r/10)))*20+4,phase:0,color:"blue",yOffset:0})],"Multiple Waves":f,"Show Amplitude Curve":[...f,new v({frequency:0,amplitude:(r,e)=>Math.cos((r-e)/(40+Math.sin(r/10)))*20+4,phase:Math.PI/2,color:"red",yOffset:0})]}}}},m={args:{waves:[new v({frequency:.0025,amplitude:40,phase:0,color:"blue",yOffset:0})]}},h={args:{startFull:!0,waves:f,height:500}};var M,C,A;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    waves: [new SineWave({
      frequency: 0.0025,
      amplitude: 40,
      phase: 0,
      color: 'blue',
      yOffset: 0
    })]
  }
}`,...(A=(C=m.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var E,j,k;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    startFull: true,
    waves,
    height: 500
  }
}`,...(k=(j=h.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};export{m as Default,h as VariableAmplitude,B as default};
//# sourceMappingURL=WaveChart.story-2b0b878f.js.map
