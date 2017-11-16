var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');

c.canvas.width = window.innerWidth;
c.canvas.height = window.innerHeight;

window.onload=function(){

  create_window(50, 50, 250, 200, 'My_Window');
  create_textbox(170, 300, 200, 50, 'My_text_box');
  create_textbox(425, 325, 225, 90, 'My_text_box_2');
  create_button(200, 475, 200, 75, 'My_Button');
  create_button(550, 150, 250, 150, 'My_Button_2');

  var list = ["item_1", "item_2", "item_3"];
  create_menu(700, 425, 200, 50, 'My Menu', list, list.length);
 };

   function create_window(position_x, position_y, width, height, title){
     c.fillStyle = "008ae6";
     c.fillRect(position_x, position_y, width, height);
     c.rect(position_x, position_y, width, height);
     c.stroke();

     c.beginPath();
     c.moveTo(position_x, position_y+height *.25);
     c.lineTo(position_x+width, position_y+ height*.25);
     c.closePath();
     c.stroke();

     c.fillStyle = 'white';
     c.font = '24px arial';
     c.fillText(title, position_x + width *.3, position_y + height *.2);

     c.beginPath();
     c.moveTo(position_x + width - 50, position_y + height - 40);
     c.lineTo(position_x - 5 + width, position_y + height - 40);
     c.lineTo(position_x - 5 + width, position_y + height - 10);
     c.lineTo(position_x + width - 50, position_y + height - 10);
     c.lineTo(position_x + width - 50, position_y + height - 40);
     c.moveTo(position_x + width - 27, position_y + height - 40);
     c.lineTo(position_x + width - 27, position_y + height - 10);
     c.closePath();
     c.stroke();

     c.fillStyle = 'white';
     c.font = '24px arial';
     c.fillText('x  -', position_x+width - 45, position_y + height - 20);
   }


   function create_textbox(position_x, position_y, width, height, title, font, font_size){
     c.fillStyle = "008ae6";
     c.fillRect(position_x, position_y, width, height);
     c.rect(position_x, position_y, width, height);
     c.stroke();
     c.fillStyle = 'white';
     c.font = '24px arial';
     c.fillText(title, position_x + (width/6), position_y + (height*.6));
   }

   function create_button(position_x, position_y, width, height, title, font, font_size){
     c.fillStyle = "008ae6";
     c.fillRect(position_x, position_y, width, height);
     var radius = 20;
     if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
     }
     c.beginPath();
     c.moveTo(position_x + radius.tl, position_y);
     c.lineTo(position_x + width - radius.tr, position_y);
     c.quadraticCurveTo(position_x + width, position_y, position_x + width, position_y + radius.tr);
     c.lineTo(position_x + width, position_y + height - radius.br);
     c.quadraticCurveTo(position_x + width, position_y + height, position_x + width - radius.br, position_y + height);
     c.lineTo(position_x + radius.bl, position_y + height);
     c.quadraticCurveTo(position_x, position_y + height, position_x, position_y + height - radius.bl);
     c.lineTo(position_x, position_y + radius.tl);
     c.quadraticCurveTo(position_x, position_y, position_x + radius.tl, position_y);
     c.closePath();
     c.lineWidth = 15;
     c.strokeStyle = 'white';
     c.stroke();

     c.beginPath();
     var x = position_x+ 7 ;
     var y = position_y + 7;
     c.moveTo(x + radius.tl, y);
     c.lineTo(x + width - 14 - radius.tr, y);
     c.quadraticCurveTo(x + width - 14 , y, x + width-14, y + radius.tr);
     c.lineTo(x + width -14, y + height-14 - radius.br);
     c.quadraticCurveTo(x + width-14, y + height - 14, x + width-14 - radius.br, y + height- 14);
     c.lineTo(x + radius.bl, y + height-14);
     c.quadraticCurveTo(x, y + height - 14, x, y + height - 14 - radius.bl);
     c.lineTo(x, y + radius.tl);
     c.quadraticCurveTo(x, y, x + radius.tl, y);
     c.closePath();
     c.lineWidth = 2;
     c.strokeStyle = 'black';
     c.stroke();

     c.fillStyle = 'white';
     c.font = '24px arial';
     c.fillText(title, position_x + width*.25, position_y + height*.6);
   }

   function create_menu(position_x, position_y, width, height, menu_title, menu_items, size){
     c.fillStyle = "008ae6";
     c.fillRect(position_x, position_y, width, height);
     c.rect(position_x, position_y, width, height);
     c.stroke();
     c.fillStyle = 'white';
     c.font = '24px arial';
     c.fillText(menu_title, position_x + width/4, position_y + height*.6);

     var i = 0;
     while(i < size){
       create_item(position_x + 15, position_y + height*(i+1), width, height, menu_items[i]);
       i++;
     }
   }

   function create_item(position_x, position_y, width, height, title){
     c.fillStyle = "008ae6";
     c.fillRect(position_x, position_y, width, height);
     c.rect(position_x, position_y, width, height);
     c.stroke();
     c.fillStyle = 'white';
     c.font = '24px arial';
     c.fillText(title, position_x + width/4, position_y + height*.6);
   }
