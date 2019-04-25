var PI = Math.PI

var time_call = 0;



module.exports.circle = function (radius) {
    time_call = time_call + 1;    
    return radius * radius * PI;
};

module.exports.time_call = function(){
    return time_call;
};
