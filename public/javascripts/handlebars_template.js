this["JST"] = this["JST"] || {};

this["JST"]["form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"modal\" id=\"modal-background\"></div><div class=\"modal\" id=\"modal-form\"><form action=\"new\" method=\"post\"><fieldset><ul><li><label for=\"title\">Title</label><input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Item 1\"></li><li><label>Due date</label><div class=\"date\"><select id=\"day\" name=\"day\"><option value=\"\">Day</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">5</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option><option value=\"13\">13</option><option value=\"14\">14</option><option value=\"15\">15</option><option value=\"16\">16</option><option value=\"17\">17</option><option value=\"18\">18</option><option value=\"19\">19</option><option value=\"20\">20</option><option value=\"21\">21</option><option value=\"22\">22</option><option value=\"23\">23</option><option value=\"24\">24</option><option value=\"25\">25</option><option value=\"26\">26</option><option value=\"27\">27</option><option value=\"28\">28</option><option value=\"29\">29</option><option value=\"30\">30</option><option value=\"31\">31</option></select><span>/</span><select name=\"month\" id=\"month\"><option value=\"\">Month</option><option value=\"1\">January</option><option value=\"2\">February</option><option value=\"3\">March</option><option value=\"4\">April</option><option value=\"5\">May</option><option value=\"6\">June</option><option value=\"7\">July</option><option value=\"8\">August</option><option value=\"9\">September</option><option value=\"10\">October</option><option value=\"11\">November</option><option value=\"12\">December</option></select><span>/</span><select name=\"year\" id=\"year\"><option value=\"\">Year</option><option value=\"2017\">2017</option><option value=\"2018\">2018</option><option value=\"2019\">2019</option><option value=\"2020\">2020</option><option value=\"2021\">2021</option><option value=\"2022\">2022</option><option value=\"2023\">2023</option><option value=\"2024\">2024</option><option value=\"2025\">2025</option></select></div><li><label for=\"description\">Description</label><textarea name=\"description\" id=\"description\" cols=\"50\" rows=\"7\" placeholder=\"Description\"></textarea></li><input type=\"submit\" value=\"Save\"><button class=\"mark-complete\" name=\"mark-complete\">Mark As Complete</button></fieldset></form></div>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav></nav><main><label for=\"toggle\" id=\"toggle-menu\"></label><input name=\"toggle\" id=\"toggle\"><header><dl><dt>All Todos</dt><dd>0</dd></dl></header><a href=\"#\"id=\"add-todo\">Add new todo</a><div id=\"items\"><table></table></div><div id=\"todo-form\"></div></main>";
},"useData":true});

this["JST"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<dl data-title=\""
    + alias4(((helper = (helper = helpers.due || (depth0 != null ? depth0.due : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due","hash":{},"data":data}) : helper)))
    + "\" data-total=\""
    + alias4(((helper = (helper = helpers.dueCount || (depth0 != null ? depth0.dueCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dueCount","hash":{},"data":data}) : helper)))
    + "\"><dt>"
    + alias4(((helper = (helper = helpers.due || (depth0 != null ? depth0.due : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due","hash":{},"data":data}) : helper)))
    + "</dt><dd>"
    + alias4(((helper = (helper = helpers.dueCount || (depth0 != null ? depth0.dueCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dueCount","hash":{},"data":data}) : helper)))
    + "</dd></dl>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"all\"><div id=\"all-todos\"><header data-title=\"All Todos\" data-total=\""
    + alias4(((helper = (helper = helpers.allCount || (depth0 != null ? depth0.allCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"allCount","hash":{},"data":data}) : helper)))
    + "\"><dl><dt>All Todos</dt><dd>"
    + alias4(((helper = (helper = helpers.allCount || (depth0 != null ? depth0.allCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"allCount","hash":{},"data":data}) : helper)))
    + "</dd></dl></header></div><article id=\"all-lists\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.allTodos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</article></div><div id=\"completed-items\"><div id=\"completed-todos\"><header data-title=\"Completed\" data-total=\""
    + alias4(((helper = (helper = helpers.completedCount || (depth0 != null ? depth0.completedCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completedCount","hash":{},"data":data}) : helper)))
    + "\"><dl><dt>Completed</dt><dd>"
    + alias4(((helper = (helper = helpers.completedCount || (depth0 != null ? depth0.completedCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completedCount","hash":{},"data":data}) : helper)))
    + "</dd></dl></header></div><article id=\"completed-lists\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.completedTodos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</article></div>";
},"useData":true});

this["JST"]["todo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input type=\"checkbox\" name=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" checked>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input type=\"checkbox\" name=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class=\"list-item\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<label for=\"item_"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.dueDate || (depth0 != null ? depth0.dueDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dueDate","hash":{},"data":data}) : helper)))
    + "</label></td><td class=\"delete-item\"><img src=\"/images/icon-trash.png\"></td>";
},"useData":true});

this["JST"]["todos"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});