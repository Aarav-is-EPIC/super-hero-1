
var canvas = new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
block_image_object = "";
player_image_object = "";
function player_object(){
    fabric.Image.fromURL("supererb.jpeg",function(Img){
       player_image_object = Img;
       player_image_object.scaleToWidth(150);
       player_image_object.scaleToHeight(140); 
    }) 
}