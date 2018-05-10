var index = (function () {
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

        $(".square").unbind("click");
        $(".square").click(function () {
            if ($(this).hasClass("z-index-top")) {
                $(this).remove();
                return;
            }

            $(".z-index-top").removeClass("z-index-top");
            $(this).addClass("z-index-top");
        });

        $(".square-area").append(squareObj.wrap("<div></div>").parent().html());
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