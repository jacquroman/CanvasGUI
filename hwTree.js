function tree(root_id){
  create_root(root_id, document.body);
  rectangle("rectangle_one", parent_id=root_id,
  200, 300, "#FFCC66", "WHITE");
  rectangle("rectangle_two", "window_one",
  150, 300, "#90FF81", "WHITE");
  circle("circle_one", root_id, "#12DAB0", "##2196F3", 75, 150, 75);
  line("line_one", root_id, "line_one", 0, 0, 300, 350);
  triangle("triangle_one", root_id, "#F67FEA", "#DA1258", 0, 150, 150, 0, 300, 300);
};

function create_root(id, parent) {
  root = document.createElement('div');
  root.id = id;
  parent.appendChild(root);
};

function line(id, parent_id,x1,y1, x2, y2){
  var c = document.createElement('canvas');
  var context = c.getContext('2d');
  c.id = id;
  context.beginPath();
  context.moveTo(x1,y1);
  context.lineTo(x2, y2);
  context.lineWidth = 10;
 	context.strokeStyle = "#000000";
  context.stroke();
  var parent = document.getElementById(parent_id);
  parent.appendChild(c);
  c.onclick= function() {
   document.getElementById("message").innerHTML =
id+" is selected";
   event.stopPropagation();
  }
};

function triangle(id, parent_id,color,line_color,x1,y1,x2,y2,x3,y3){
  var c = document.createElement('canvas');
  c.id = id;
  var context = c.getContext('2d');
  context.strokeStyle = line_color;
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.lineTo(x3, y3);
  context.fill();
  context.stroke();

  var parent = document.getElementById(parent_id);
  parent.appendChild(c);
  c.onclick= function() {
   document.getElementById("message").innerHTML =
id+" is selected";
event.stopPropagation();
}
};

function circle(id, parent_id,color,line_color, radius, center_x,center_y){
  var c = document.createElement('canvas');
  c.id = id;
  var context = c.getContext('2d');
  context.beginPath();
  context.arc(center_x, center_y, radius, 0,(Math.PI/180) *360,false);
  context.fillStyle = color;
  context.fill();
  context.strokeStyle = line_color;
  context.stroke();

  var parent = document.getElementById(parent_id);
  parent.appendChild(c);
    c.onclick= function() {
   document.getElementById("message").innerHTML =
id+" is selected";
event.stopPropagation();
}
};

function rectangle(id, parent, width, height, color, text_color){
  var rectangle = document.createElement('canvas');
  rectangle.id = id;
  rectangle.style="width:"+width+";"+"height:"+height+";"+"background:"+color+";"+"color:"+text_color+";"+"border: 2px solid #000000;";
  var element = document.getElementById(parent_id);
  element.appendChild(rectangle);
  rectangle.onclick= function() {
    document.getElementById("message").innerHTML =
      id+" is selected";
    event.stopPropagation();
}
};

function remove_node(id) {
   var node=document.getElementById(id);
   var parent = node.parentNode;
   parent.removeChild(node);
};

function search_node(id, root){
  var children = root.childNodes;
  for (var i=0; i < children.length; i++){
    if (children[i].id == id){
      return children[i];
    }
    out = search_node(id, children[i]);
    if (out != children[i])
      return out;
  }
  return root;
};

function add_node(id, parent_id){
  var node = document.createElement('canvas');
  node.id = id;
  var element = document.getElementById(parent_id);
  element.appendChild(node);
  node.onclick= function() {
    document.getElementById("message").innerHTML =
      id+" is selected";
    event.stopPropagation();
  }
};
