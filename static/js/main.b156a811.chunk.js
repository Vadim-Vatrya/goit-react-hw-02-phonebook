(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),o=n(9),s=n(2),u=n(3),b=n(5),h=n(4),l=n(17),m=n(8),d=n(0),j=function(){return Object(d.jsx)("button",{type:"submit",children:"Add contact"})},O=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(m.a)({},a,c))},e.handleSubmit=function(t){var n=e.state,a=n.name,c=n.number;t.preventDefault(),e.props.onSubmit(a,c),e.reset()},e.contactNameId=Object(l.a)(),e.contactNumberId=Object(l.a)(),e}return Object(u.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{htmlFor:this.contactNameId,children:["Name",Object(d.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.contactNameId})]}),Object(d.jsxs)("label",{htmlFor:this.contactNumberId,children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,id:this.contactNumberId})]}),Object(d.jsx)(j,{})]})}}]),n}(a.Component),v=function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Find contacts by name"}),Object(d.jsx)("label",{children:Object(d.jsx)("input",{name:"filter",type:"text",value:t,onChange:n})})]})},f=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){var n=t.name,a=t.number,c=e.state.contacts;""===n&&alert("Enter your name"),""===a&&alert("Enter your number"),c.find((function(e){return e.name===n}))&&alert("".concat(n," is already in contacts"));var r={id:l.a,name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(o.a)(t))}}))},e.changeFilter=function(t){var n=t.target.value;e.setState({filter:n})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(O,{onSubmit:this.addContact}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(v,{value:e,onChange:this.changeFilter}),Object(d.jsx)(v,{})]})}}]),n}(a.Component);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b156a811.chunk.js.map