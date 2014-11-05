//Drawing Class
var Graph = (function() {
    // "private" variables 
    var context;

    // constructor
    function Graph(_context){
    	context = _context;

    };

    //DRAW EDGE
    Graph.prototype.drawEdge = function(a,b) {
        context.beginPath();
      	context.moveTo(a.x, a.y);
      	context.lineTo(b.x, b.y);
      	context.stroke();
    };
    Graph.prototype.drawEdge = function(a,b, width) {
        context.beginPath();
      	context.moveTo(a.x, a.y);
      	context.lineTo(b.x, b.y);
      	context.lineWidth = width;
      	context.stroke();
    };
    Graph.prototype.drawEdge = function(a,b, width, color) {
        context.beginPath();
      	context.moveTo(a.x, a.y);
      	context.lineTo(b.x, b.y);
      	context.lineWidth = width;
      	context.strokeStyle = color;
      	context.stroke();
    };
    
    return Graph;
})();