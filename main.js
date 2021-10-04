var canvas = new fabric.Canvas('myCanvas');
var player_object = "";

function player_update() {
    fabric.Image.fromURL("download.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(250);
        player_object.scaleToHeight(300);
        player_object.set({ top: 40, left: 40 });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img)
    {
block_image_object=Img;
block_image_object.scaleToWidth(80);
block_image_object.scaleToHeight(80);
block_image_object.set({
    top:100,

    left:100
});
canvas.add(block_image_object);

    });
}

player_update();

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == 70){
	new_image('spiderman_face.png');
	console.log("Spiderman Face");
}
if(keyPressed == 66){
	new_image('ironman_body.png');
	console.log("Iron Man Body");
}
if(keyPressed == 76){
	new_image('ironman_legs.png');
	console.log("Hulk Legs");
}
if(keyPressed == 82){
	new_image('captain_america_left_hand.png');
	console.log("Captain America Right Hand");
}
if(keyPressed == 72){
	new_image('thor_right_hand.png');
	console.log("Iron Man Body");
}
}
