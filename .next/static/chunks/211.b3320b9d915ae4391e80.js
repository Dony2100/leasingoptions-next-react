(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[211],{WudC:function(e,t,r){"use strict";r.r(t);var n=r("cpVT"),c=r("nKUr"),o=r("btDt"),i=(r("q1tI"),r("MHX4")),a=r("/MKj"),b=r("mnGr");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=Object(a.b)((function(e){return{formData:e.formData,stepNumber:e.stepIndicator}}))((function(e){var t=e.formData[e.stepNumber],r=Object(i.c)(),n=r.handleSubmit;return Object(c.jsxs)("div",{className:"w-100 bg-white p-3 p-md-5",children:[Object(c.jsx)("h2",{className:"mb-5",children:"Submit Your Application"}),Object(c.jsx)("h3",{children:"Terms and Conditions"}),Object(c.jsx)(i.b,p(p({},r),{},{children:Object(c.jsxs)("form",{onSubmit:n((function(t){e.handleFormSubmit(e.stepNumber,t)})),children:[Object(c.jsx)(b.a,{defaultValue:t.privacy,onAcceptChange:function(t){e.handleFormSave(e.stepNumber,{privacy:t.target.checked})}}),Object(c.jsxs)("div",{className:"form-row d-flex justify-content-end",children:[Object(c.jsx)("button",{type:"button",className:"btn btn-outline-secondary mr-3",onClick:function(){e.handleFormStep(e.stepNumber-1)},children:"Back"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg",onClick:function(){Object(o.d)("prop_form_tracking_personal","Click","completed-application")},children:"Complete"})]})]})}))]})}))}}]);