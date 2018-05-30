var index = (function () {
    var isClicked = false;
    var isMoved = false;
    var posX = 0;
    var posY = 0;

    var addSquare = function () {
        var xPos = Math.floor(Math.random() * 984);
        var yPos = Math.floor(Math.random() * 600);
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        var squareObj = $("<div class='square'></div>");

        squareObj.css("top", yPos);
        squareObj.css("left", xPos);
        squareObj.css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");

        $(".square-area").append(squareObj.wrap("<div></div>").parent().html());

        $(".square").unbind("click");
        $(".square").unbind("mousedown");

        $(".square").click(function () {
            if (isMoved == true) {
                isMoved = false;
                $(this).removeClass("z-index-top");
                return;
            }

            if ($(this).hasClass("z-index-top")) {
                $(this).remove();
                return;
            }

            $(".z-index-top").removeClass("z-index-top");
            $(this).addClass("z-index-top");
        });

        $(".square").mousedown(function (event) {
            isClicked = true;

            posX = event.pageX - parseInt($(this).css("left"));
            posY = event.pageY - parseInt($(this).css("top"));

            $(this).mousemove(function (event) {
                if (isClicked == false)
                    return;

                isMoved = true;
                $(this).addClass("z-index-top");

                $(this).css("left", event.pageX - posX);
                $(this).css("top", event.pageY - posY);
            });

            $(this).mouseup(function () {
                isClicked = false;
                $(this).unbind("mousemove");
                $(this).unbind("mouseup");
            });
        });
    };

    var changeColors = function () {
        $(".square").each(function () {
            var red = Math.floor(Math.random() * 256);
            var green = Math.floor(Math.random() * 256);
            var blue = Math.floor(Math.random() * 256);

            $(this).css("background-color", "rgb(" + red + ", " + green + ", " + blue + ")");
        });
    };

    var obj = {
        addSquare: addSquare,
        changeColors: changeColors
    };

    return obj;
})();

$(document).ready(function () {
    $("#btnAddSquare").click(index.addSquare);
    $("#btnChangeColors").click(index.changeColors);
});