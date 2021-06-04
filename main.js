var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

accesories_width = 30;
accesories_height = 30;

var player_object = "";
var accesories_object = "";

function player_update() {
    fabric.ImagefromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);

    });

}

function new_image(get_image) {
    fabric.ImagefromURL(get_image, function (Img) {
        accesories_object = Img;

        accesories_object.scaleToWidth(accesories_width);
        accesories_object.scaleToHeight(accesories_height);
        accesories_object.set({
        top: player_y,
        left: player_x
        });
        canvas.add(accesories_object);
    });

}