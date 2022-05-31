(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[210],{zt9G:function(e,a,l){"use strict";l.r(a);var t=l("nKUr"),c=l("btDt"),r=(l("q1tI"),l("MHX4")),s=l("/MKj");a.default=Object(s.b)((function(e){return{formData:e.formData,stepNumber:e.stepIndicator}}))((function(e){var a=e.formData[e.stepNumber],l=Object(r.c)(),s=l.register,i=l.handleSubmit,n=l.errors;return Object(t.jsxs)("div",{className:"w-100 bg-white p-3 p-md-5",children:[Object(t.jsx)("h2",{className:"mb-5",children:"Your Expenditure Details"}),Object(t.jsx)("h3",{children:"Expenditure"}),Object(t.jsxs)("form",{onSubmit:i((function(a){e.handleFormSave(e.stepNumber,a)&&e.handleFormStep(e.stepNumber+1)})),children:[e.showTotalMonthlyExpendature&&Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{className:"form-row mb-3",children:Object(t.jsxs)("div",{className:"col-24 col-md-7",children:[Object(t.jsxs)("label",{htmlFor:"mortgageRent",children:["Total Monthly Expendature ",Object(t.jsx)("small",{children:"(Required)"})]}),Object(t.jsxs)("div",{className:"input-group mb-3",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:"\xa3"})}),Object(t.jsx)("input",{type:"text",className:"form-control ".concat(n.totalMonthlyExpenditure?"is-invalid":""),name:"totalMonthlyExpenditure",id:"totalMonthlyExpenditure",placeholder:"Amount per month","aria-label":"Total Monthly Expendature","aria-describedby":"totalMonthlyExpenditure",ref:s({required:!0,pattern:/^[0-9]*$/}),defaultValue:a.totalMonthlyExpenditure}),n.totalMonthlyExpenditure&&Object(t.jsx)("span",{className:"invalid-feedback d-block",children:"This field is required"})]})]})})}),!e.showTotalMonthlyExpendature&&Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"form-row mb-3",children:Object(t.jsxs)("div",{className:"col-24 col-md-7",children:[Object(t.jsxs)("label",{htmlFor:"mortgageRent",children:["Mortgage / Rent ",Object(t.jsx)("small",{children:"(Required)"})]}),Object(t.jsxs)("div",{className:"input-group mb-3",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:"\xa3"})}),Object(t.jsx)("input",{type:"text",className:"form-control ".concat(n.mortgageRent?"is-invalid":""),name:"mortgageRent",id:"mortgageRent",placeholder:"Amount per month","aria-label":"Amount per month","aria-describedby":"mortgageRent",ref:s({required:!0,pattern:/^[0-9]*$/}),defaultValue:a.mortgageRent}),n.mortgageRent&&Object(t.jsx)("span",{className:"invalid-feedback d-block",children:"This field is required"})]})]})}),Object(t.jsx)("div",{className:"form-row mb-3",children:Object(t.jsxs)("div",{className:"col-24 col-md-7",children:[Object(t.jsxs)("label",{htmlFor:"utilityBills",children:["Utility Bills ",Object(t.jsx)("small",{children:"(Required)"})]}),Object(t.jsxs)("div",{className:"input-group mb-3",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:"\xa3"})}),Object(t.jsx)("input",{type:"text",className:"form-control ".concat(n.utilityBills?"is-invalid":""),name:"utilityBills",id:"utilityBills",placeholder:"Amount per month","aria-label":"Amount per month","aria-describedby":"utilityBills",ref:s({required:!0,pattern:/^[0-9]*$/}),defaultValue:a.utilityBills}),n.utilityBills&&Object(t.jsx)("span",{className:"invalid-feedback d-block",children:"This field is required"})]})]})}),Object(t.jsx)("div",{className:"form-row mb-3",children:Object(t.jsxs)("div",{className:"col-24 col-md-7",children:[Object(t.jsxs)("label",{htmlFor:"loans",children:["Loans ",Object(t.jsx)("small",{children:"(Required)"})]}),Object(t.jsxs)("div",{className:"input-group mb-3",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:"\xa3"})}),Object(t.jsx)("input",{type:"text",className:"form-control ".concat(n.loans?"is-invalid":""),name:"loans",id:"loans",placeholder:"Amount per month","aria-label":"Amount per month","aria-describedby":"loans",ref:s({required:!0,pattern:/^[0-9]*$/}),defaultValue:a.loans}),n.loans&&Object(t.jsx)("span",{className:"invalid-feedback d-block",children:"This field is required"})]})]})}),Object(t.jsx)("div",{className:"form-row",children:Object(t.jsxs)("div",{className:"col-24 col-md-12",children:[Object(t.jsxs)("label",{children:["Credit Cards ",Object(t.jsx)("small",{children:"(Required)"})]})," ",Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:"Which of the following (if any) do you own?"})]})}),Object(t.jsx)("div",{className:"form-row mb-4",children:Object(t.jsxs)("div",{className:"col-24 col-md-12",children:[Object(t.jsxs)("div",{className:"form-check form-check-inline",children:[Object(t.jsx)("input",{type:"checkbox",className:"form-check-input","aria-label":"Visa",id:"visaCard",name:"visa",ref:s(),defaultChecked:a.visa}),Object(t.jsx)("label",{className:"form-check-label",htmlFor:"visaCard",children:"Visa"})]}),Object(t.jsxs)("div",{className:"form-check form-check-inline",children:[Object(t.jsx)("input",{type:"checkbox",className:"form-check-input","aria-label":"Mastercard",id:"masterCard",name:"masterCard",ref:s(),defaultChecked:a.masterCard}),Object(t.jsx)("label",{className:"form-check-label",htmlFor:"masterCard",children:"Mastercard"})]}),Object(t.jsxs)("div",{className:"form-check form-check-inline",children:[Object(t.jsx)("input",{type:"checkbox",className:"form-check-input","aria-label":"American Express",id:"amexCard",name:"amex",ref:s(),defaultChecked:a.amex}),Object(t.jsx)("label",{className:"form-check-label",htmlFor:"amexCard",children:"American Express"})]}),Object(t.jsxs)("div",{className:"form-check form-check-inline",children:[Object(t.jsx)("input",{type:"checkbox",className:"form-check-input","aria-label":"Other",id:"otherCard",name:"other",ref:s(),defaultChecked:a.other}),Object(t.jsx)("label",{className:"form-check-label",htmlFor:"otherCard",children:"Other"})]})]})}),Object(t.jsx)("div",{className:"form-row mb-3",children:Object(t.jsxs)("div",{className:"col-24 col-md-7",children:[Object(t.jsxs)("label",{htmlFor:"otherExpenses",children:["Other Expenses ",Object(t.jsx)("small",{children:"(Required)"})]}),Object(t.jsxs)("div",{className:"input-group mb-3",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:"\xa3"})}),Object(t.jsx)("input",{type:"text",className:"form-control ".concat(n.otherExpenses?"is-invalid":""),name:"otherExpenses",id:"otherExpenses",placeholder:"Additional Expenses","aria-label":"Additional Expenses","aria-describedby":"otherExpenses",ref:s({required:!0,pattern:/^[0-9]*$/}),defaultValue:a.otherExpenses}),n.otherExpenses&&Object(t.jsx)("span",{className:"invalid-feedback d-block",children:"This field is required"})]})]})}),Object(t.jsx)("div",{className:"form-row mb-3",children:Object(t.jsxs)("div",{className:"col-24 col-md-7",children:[Object(t.jsxs)("label",{htmlFor:"currentCarPayment",children:["Current Car Payment ",Object(t.jsx)("small",{children:"(Required)"})]}),Object(t.jsxs)("div",{className:"input-group mb-3",children:[Object(t.jsx)("div",{className:"input-group-prepend",children:Object(t.jsx)("span",{className:"input-group-text",children:"\xa3"})}),Object(t.jsx)("input",{type:"text",className:"form-control ".concat(n.currentCarPayment?"is-invalid":""),name:"currentCarPayment",id:"currentCarPayment",placeholder:"Car Payment","aria-label":"Car Payment","aria-describedby":"currentCarPayment",ref:s({required:!0,pattern:/^[0-9]*$/}),defaultValue:a.currentCarPayment}),n.currentCarPayment&&Object(t.jsx)("span",{className:"invalid-feedback d-block",children:"This field is required"})]})]})}),Object(t.jsx)("div",{className:"form-row",children:Object(t.jsx)("div",{className:"col-24 col-md-12",children:Object(t.jsxs)("label",{htmlFor:"replaceCar",children:["Will this replace your current car? ",Object(t.jsx)("small",{children:"(Required)"})]})})}),Object(t.jsx)("div",{className:"form-row mb-3",children:Object(t.jsxs)("div",{className:"col-24 col-md-12",children:[Object(t.jsxs)("div",{className:"form-check form-check-inline",children:[Object(t.jsx)("input",{className:"form-check-input",type:"radio",name:"replacesCurrentCar",id:"yes",value:"yes",ref:s(),defaultChecked:"yes"===a.replacesCurrentCar}),Object(t.jsx)("label",{className:"form-check-label",htmlFor:"yes",children:"Yes"})]}),Object(t.jsxs)("div",{className:"form-check form-check-inline",children:[Object(t.jsx)("input",{className:"form-check-input",type:"radio",name:"replacesCurrentCar",id:"no",value:"no",ref:s(),defaultChecked:"no"===a.replacesCurrentCar}),Object(t.jsx)("label",{className:"form-check-label",htmlFor:"no",children:"No"})]})]})}),Object(t.jsx)("div",{className:"form-row mb-3",children:Object(t.jsxs)("div",{className:"col-24 col-md-7",children:[Object(t.jsx)("label",{htmlFor:"notes",children:"Notes"}),Object(t.jsx)("textarea",{className:"form-control",name:"notes",id:"notes","aria-label":"Notes","aria-describedby":"notes",placeholder:"If applicable please give us any additional information that may be relevant to your application",ref:s(),defaultValue:a.notes})]})})]}),Object(t.jsxs)("div",{className:"form-row d-flex justify-content-end",children:[Object(t.jsx)("button",{type:"button",className:"btn btn-outline-secondary mr-3",onClick:function(){return e.handleFormStep(e.stepNumber-1)},children:"Back"}),Object(t.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg",onClick:function(){Object(c.d)("prop_form_tracking_personal","Click","expenditure-details-completed")},children:"Next"})]})]})]})}))}}]);