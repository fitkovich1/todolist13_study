(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(58)},35:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),s=(n(35),n(1)),c=n(12),l=n(3),d=n(2),u=n(4),p=(n(7),function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={editMode:!1,title:n.props.task.title},n.onIsDoneChanged=function(t){var e=t.currentTarget.checked?2:0;n.props.changeStatus(n.props.task.id,e)},n.onTitleChanged=function(t){n.setState({title:t.currentTarget.value})},n.activateEditMode=function(){n.setState({editMode:!0})},n.deactivateEditMode=function(){n.setState({editMode:!1}),n.props.changeTitle(n.props.task.id,n.state.title)},n.onDeleteTask=function(){n.props.deleteTask(n.props.task.id)},n.render=function(){var t=2===n.props.task.status?"todoList-task done":"todoList-task",e="";switch(n.props.task.priority){case 0:e="Low";break;case 1:e="Middle";break;case 2:e="High";break;case 3:e="Urgently";break;case 4:e="Later"}return a.a.createElement("div",{className:t},a.a.createElement("input",{type:"checkbox",checked:2===n.props.task.status,onChange:n.onIsDoneChanged}),n.state.editMode?a.a.createElement("input",{onBlur:n.deactivateEditMode,onChange:n.onTitleChanged,autoFocus:!0,value:n.state.title}):a.a.createElement("span",{onClick:n.activateEditMode},n.props.task.title),", priority: ",e," ",a.a.createElement("button",{onClick:n.onDeleteTask},"X"))},n}return Object(u.a)(e,t),e}(a.a.Component)),f=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).render=function(){var t=n.props.tasks.map(function(t){return a.a.createElement(p,{task:t,changeStatus:n.props.changeStatus,changeTitle:n.props.changeTitle,deleteTask:n.props.deleteTask})});return a.a.createElement("div",{className:"todoList-tasks"},t)},n}return Object(u.a)(e,t),e}(a.a.Component),T=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={isHidden:!1},n.onAllFilterClick=function(){n.props.changeFilter("All")},n.onCompletedFilterClick=function(){n.props.changeFilter("Completed")},n.onActiveFilterClick=function(){n.props.changeFilter("Active")},n.onShowFiltersClick=function(){n.setState({isHidden:!0})},n.onHideFiltersClick=function(){n.setState({isHidden:!1})},n.render=function(t){var e="All"===n.props.filterValue?"filter-active":"",o="Completed"===n.props.filterValue?"filter-active":"",r="Active"===n.props.filterValue?"filter-active":"";return a.a.createElement("div",{className:"todoList-footer"},!n.state.isHidden&&a.a.createElement("div",null,a.a.createElement("button",{onClick:n.onAllFilterClick,className:e},"All"),a.a.createElement("button",{onClick:n.onCompletedFilterClick,className:o},"Completed"),a.a.createElement("button",{onClick:n.onActiveFilterClick,className:r},"Active")),!n.state.isHidden&&a.a.createElement("span",{onClick:n.onShowFiltersClick},"hide"),n.state.isHidden&&a.a.createElement("span",{onClick:n.onHideFiltersClick},"show"))},n}return Object(u.a)(e,t),e}(a.a.Component),k=n(13),h=n(27);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}var b=n.n(h).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/todo-lists/",headers:{"API-KEY":"edd25c6c-92b4-48d9-95c2-52b239caae08"},withCredentials:!0}),O={createTask:function(t,e){return b.post("".concat(e,"/tasks"),{title:t})},createTodoList:function(t){return b.post("",{title:t})},getTodolists:function(){return b.get("")},updateTask:function(t,e){return b.put("tasks",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach(function(e){Object(k.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t,{},e))},getTasks:function(t){return b.get("".concat(t,"/tasks"))},deleteTodoList:function(t){return b.delete(""+t)},deleteTask:function(t){return b.delete("tasks/".concat(t))},updateTodoTitle:function(t,e){return b.put(""+e,{title:t})}},v=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={editMode:!1,title:n.props.title},n.activateEditModeTodo=function(){n.setState({editMode:!0})},n.deactivateEditModeTodo=function(){n.setState({editMode:!1})},n.onTitleChangeTodo=function(t){n.setState({title:t.currentTarget.value},function(){O.updateTodoTitle(n.state.title,n.props.todolistId)})},n.render=function(){return a.a.createElement(a.a.Fragment,null,n.state.editMode?a.a.createElement("input",{onBlur:n.deactivateEditModeTodo,onChange:n.onTitleChangeTodo,autoFocus:!0,value:n.state.title}):a.a.createElement("h3",{className:"todoList-header__title",onClick:n.activateEditModeTodo},n.state.title,a.a.createElement("button",{onClick:n.props.onDelete},"X")))},n}return Object(u.a)(e,t),e}(a.a.Component),g=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={error:!1,title:""},n.onAddItemClick=function(){var t=n.state.title;n.setState({title:""}),""===t?n.setState({error:!0}):(n.setState({error:!1}),n.props.addItem(t))},n.onTitleChanged=function(t){n.setState({error:!1,title:t.currentTarget.value})},n.onKeyPress=function(t){"Enter"===t.key&&n.onAddItemClick()},n.render=function(){var t=n.state.error?"error":"";return a.a.createElement("div",{className:"todoList-newTaskForm"},a.a.createElement("input",{className:t,type:"text",placeholder:"New item name",onChange:n.onTitleChanged,onKeyPress:n.onKeyPress,value:n.state.title}),a.a.createElement("button",{onClick:n.onAddItemClick},"Add"))},n}return Object(u.a)(e,t),e}(a.a.Component),E=n(9),j=n(17);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach(function(e){Object(k.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var w="TodoList/Reducer/ADD-TASK",S={todolists:[]},L=function(t,e){return function(n){O.createTask(t,e).then(function(t){n(function(t,e){return{type:w,newTask:t,todolistId:e}}(t.data.data.item,e))})}},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TodoList/Reducer/SET_TASKS":return C({},t,{todolists:t.todolists.map(function(t){return t.id!==e.todolistId?t:C({},t,{tasks:e.tasks})})});case"TodoList/Reducer/SET_TODOLISTS":return C({},t,{todolists:e.todolists.map(function(t){return C({},t,{tasks:[]})})});case"TodoList/Reducer/ADD-TODOLIST":return C({},t,{todolists:[].concat(Object(j.a)(t.todolists),[e.newTodolist])});case"TodoList/Reducer/DELETE-TODOLIST":return C({},t,{todolists:t.todolists.filter(function(t){return t.id!==e.todolistId})});case"TodoList/Reducer/DELETE-TASK":return C({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?C({},t,{tasks:t.tasks.filter(function(t){return t.id!==e.taskId})}):t})});case w:return C({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?C({},t,{tasks:[].concat(Object(j.a)(t.tasks),[e.newTask])}):t})});case"TodoList/Reducer/UPDATE-TASK":return C({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?C({},t,{tasks:t.tasks.map(function(t){return t.id!==e.taskId?t:C({},t,{},e.obj)})}):t})})}return t},D=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={filterValue:"All"},n.addTask=function(t){n.props.addTask(t,n.props.id)},n.changeTask=function(t,e){n.props.updateTask(t,e,n.props.id)},n.deleteTodolist=function(){n.props.deleteTodolist(n.props.id)},n.deleteTask=function(t){n.props.deleteTask(t,n.props.id)},n.changeFilter=function(t){n.setState({filterValue:t})},n.changeStatus=function(t,e){n.changeTask(t,{status:e})},n.changeTitle=function(t,e){n.changeTask(t,{title:e})},n.render=function(){var t=n.props.tasks,e=void 0===t?[]:t;return a.a.createElement("div",{className:"todoList"},a.a.createElement("div",{className:"todoList-header"},a.a.createElement(v,{title:n.props.title,onDelete:n.deleteTodolist,todolistId:n.props.id}),a.a.createElement(g,{addItem:n.addTask})),a.a.createElement(f,{changeStatus:n.changeStatus,changeTitle:n.changeTitle,deleteTask:n.deleteTask,tasks:e.filter(function(t){return"All"===n.state.filterValue||("Active"===n.state.filterValue?!1===t.isDone:"Completed"===n.state.filterValue?!0===t.isDone:void 0)})}),a.a.createElement(T,{changeFilter:n.changeFilter,filterValue:n.state.filterValue}))},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.loadTasks(this.props.id)}}]),e}(a.a.Component),I=Object(E.b)(null,function(t){return{addTask:function(e,n){t(L(e,n))},loadTasks:function(e){t(function(t){return function(e){O.getTasks(t).then(function(n){e(function(t,e){return{type:"TodoList/Reducer/SET_TASKS",tasks:t,todolistId:e}}(n.data.items,t))})}}(e))},updateTask:function(e,n,o){t(function(t,e,n){return function(o,a){a().todolists.find(function(t){return t.id===n}).tasks.forEach(function(a){a.id===t&&O.updateTask(C({},a,{},e)).then(function(a){o(function(t,e,n){return{type:"TodoList/Reducer/UPDATE-TASK",taskId:t,obj:e,todolistId:n}}(t,e,n))})})}}(e,n,o))},deleteTodolist:function(e){t(function(t){return function(e){O.deleteTodoList(t).then(function(n){e(function(t){return{type:"TodoList/Reducer/DELETE-TODOLIST",todolistId:t}}(t))})}}(e))},deleteTask:function(e,n){t(function(t,e){return function(n){O.deleteTask(e).then(function(o){n(function(t,e){return{type:"TodoList/Reducer/DELETE-TASK",todolistId:t,taskId:e}}(t,e))})}}(n,e))}}})(D),P=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).addTodoList=function(t){n.props.addTodolist(t)},n.render=function(){var t=n.props.todolists.map(function(t){return a.a.createElement(I,{key:t.id,id:t.id,title:t.title,tasks:t.tasks})});return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(g,{addItem:n.addTodoList})),a.a.createElement("div",{className:"App"},t))},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.setTodolists()}}]),e}(a.a.Component),F=Object(E.b)(function(t){return{todolists:t.todolists}},function(t){return{setTodolists:function(){t(function(t){O.getTodolists().then(function(e){t({type:"TodoList/Reducer/SET_TODOLISTS",todolists:e.data})})})},addTodolist:function(e){var n;t((n=e,function(t){O.createTodoList(n).then(function(e){t({type:"TodoList/Reducer/ADD-TODOLIST",newTodolist:e.data.data.item})})}))}}})(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(10),R=n(29),N=Object(M.c)(A,Object(M.a)(R.a));window.store=N;var K=N;i.a.render(a.a.createElement(E.a,{store:K},a.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},7:function(t,e,n){}},[[30,1,2]]]);
//# sourceMappingURL=main.0bbb9cc8.chunk.js.map