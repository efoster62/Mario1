
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {

    for (var row = 0; row < height; row++) {
      var numBricks = row + 2;
      var numSpaces = height - row - 1;

      var rowStr = "";
      for (var i = 0; i < numSpaces; i++) {
        rowStr += ".";
      }
       for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

    console.log(rowStr)
    // TODO
    // print that pyramid!
}
}