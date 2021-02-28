$(document).ready(function () {
    var modal = document.getElementById('myModal');

    var player1Name = prompt("Please enter player 1 name: ");
    if (player1Name === null || player1Name === "") {
        player1Name = "Dhruv Savaj"
    }

    var player2Name = prompt("Please enter player 2 name:");
    if (player2Name === null || player2Name === "") {
        player2Name = "Mihir Akoliya";
    }

    var grid = new Array(3);
    grid[0] = new Array(3);
    grid[1] = new Array(3);
    grid[2] = new Array(3);
    var nextTurn = 1;
    var gameWon = 0;

    $("#square_one").click(function () {
        makeMove(parseInt($(this).data("row")), parseInt($(this).data("col")), "one");
    });

    $("#square_two").click(function () {
        makeMove(parseInt($(this).data("row")), parseInt($(this).data("col")), "two");
    });

    $("#square_three").click(function () {
        makeMove(parseInt($(this).data("row")), parseInt($(this).data("col")), "three");
    });

    $("#square_four").click(function () {
        makeMove(parseInt($(this).data("row")), parseInt($(this).data("col")), "four");
    });

    $("#square_five").click(function () {
        makeMove(parseInt($(this).data("row")), parseInt($(this).data("col")), "five");
    });

    $("#square_six").click(function () {
        makeMove(parseInt($(this).data("row")), parseInt($(this).data("col")), "six");
    });

    $("#square_seven").click(function () {
        makeMove(parseInt($(this).data("row")), parseInt($(this).data("col")), "seven");
    });

    $("#square_eight").click(function () {
        makeMove(parseInt($(this).data("row")), parseInt($(this).data("col")), "eight");
    });

    $("#square_nine").click(function () {
        makeMove(parseInt($(this).data("row")), parseInt($(this).data("col")), "nine");
    });

    function makeMove(row, column, idText) {
        if (checkLegalMove(row, column) === true) {
            if (nextTurn === 1) {
                $("#square_" + idText + "_text").html("X");
                grid[row][column] = 'X';
                if (checkWin(1) === true) {
                    endgame(1, player1Name);
                }
                nextTurn = 2;
            } else {
                $("#square_" + idText + "_text").html("O");
                grid[row][column] = 'O';
                if (checkWin(2) === true) {
                    endgame(2, player2Name);
                }
                nextTurn = 1;
            }
        }
    }

    function checkWin(playerNum) {
        //check horizontal
        for (i = 0; i < 3; i++) {
            if ((grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]) && grid[i][0] != undefined && grid[i][1] != undefined && grid[i][2] != undefined) {
                return true;
            }
        }

        //check vertical
        for (i = 0; i < 3; i++) {
            if ((grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i]) && grid[0][i] != undefined && grid[1][i] != undefined && grid[2][i] != undefined) {
                return true;
            }
        }

        //check diagonal
        if (((grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) || (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0])) && grid[1][1] != undefined) {
            return true;
        }

        var tieGame = true;
        for (var i = 0; i < 3; i++) {
            for (var x = 0; x < 3; x++) {
                if (grid[i][x] == null && grid[i][x] == undefined) {
                    tieGame = false;
                }
            }
        }

        if (tieGame === true) {
            endgame(0);
        }

        return false;
    }

    function checkLegalMove(row, column) {
        if (grid[row][column] !== undefined && grid[row][column] !== null) {
            return false;
        } else {
            return true;
        }
    }

    function endgame(num, playerName) {
        if (num === 0) {
            $(".modal_text").html("Tie game!");
            $("#myModal").css("display", "block");
        }
        if (num === 1) {
            $(".modal_text").html(playerName + " Wins!");
            $("#myModal").css("display", "block");
        }
        if (num === 2) {
            $(".modal_text").html(playerName + " Wins!");
            $("#myModal").css("display", "block");
        }
    }

    $("#restartBtn").click(function () {
        grid = new Array(3);
        grid[0] = new Array(3);
        grid[1] = new Array(3);
        grid[2] = new Array(3);
        nextTurn = 1;
        gameWon = 0;
        $("#square_one_text").html("");
        $("#square_two_text").html("");
        $("#square_three_text").html("");
        $("#square_four_text").html("");
        $("#square_five_text").html("");
        $("#square_six_text").html("");
        $("#square_seven_text").html("");
        $("#square_eight_text").html("");
        $("#square_nine_text").html("");
        modal.style.display = "none";
    });
});