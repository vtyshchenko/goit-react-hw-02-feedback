(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),i=(n(12),n(4)),s=n(5),d=n(7),u=n(6),b=n(0);var l=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Good: ",t]}),Object(b.jsxs)("p",{children:["Neutral: ",n]}),Object(b.jsxs)("p",{children:["Bad: ",c]}),Object(b.jsxs)("p",{children:["Total: ",a]}),Object(b.jsxs)("p",{children:["Positive feedback: ",r," %"]})]})};var j=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)("button",{onClick:function(){return n(t)},children:e},e)}))})};var h=function(e){var t=e.title,n=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:t}),n]})};var v=function(e){var t=e.message;return Object(b.jsx)("p",{children:t})},f=["Good","Neutral","Bad"],O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){switch(f[t]){case"Good":e.setState((function(e){return{good:e.good+1}}));break;case"Neutral":e.setState((function(e){return{neutral:e.neutral+1}}));break;case"Bad":e.setState((function(e){return{bad:e.bad+1}}))}},e}return Object(s.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return this.countTotalFeedback()>0?100*this.state.good/this.countTotalFeedback():0}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback();return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{title:"Please leave feedback",children:Object(b.jsx)(j,{options:f,onLeaveFeedback:this.onLeaveFeedback})}),a?Object(b.jsx)(h,{title:"Statistics",children:Object(b.jsx)(l,{good:t,neutral:n,bad:c,total:a,positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(b.jsx)(v,{message:"There is no feedback"})]})}}]),n}(c.Component),g=O;n(14);var k=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(g,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.22ed27ba.chunk.js.map